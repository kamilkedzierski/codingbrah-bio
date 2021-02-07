/*
  Used for Sparkles component.
  https://www.joshwcomeau.com/snippets/react-hooks/use-random-interval/
*/

import React from "react"
import { random } from "../../shared/utils"
// Utility helper for random number generation

export const useRandomInterval = (
  callback: () => void,
  minDelay: number,
  maxDelay: number
) => {
  const timeoutId = React.useRef(null)
  const savedCallback = React.useRef(callback)
  React.useEffect(() => {
    savedCallback.current = callback
  })
  React.useEffect(() => {
    let isEnabled = typeof minDelay === "number" && typeof maxDelay === "number"
    if (isEnabled) {
      const handleTick = () => {
        const nextTickAt = random(minDelay, maxDelay)
        //@ts-ignore
        timeoutId.current = window.setTimeout(() => {
          savedCallback.current()
          handleTick()
        }, nextTickAt)
      }
      handleTick()
    }
    //@ts-ignore
    return () => window.clearTimeout(timeoutId.current)
  }, [minDelay, maxDelay])
  const cancel = React.useCallback(function () {
    //@ts-ignore
    window.clearTimeout(timeoutId.current)
  }, [])
  return cancel
}
