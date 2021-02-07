import React from "react"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Spacer from "../Spacer"

import { ButtonProps } from "./button.types"

import { StyledButton } from "./button.styled"

const Button = ({ url, children, icon }: ButtonProps) => {
  return (
    <StyledButton href={url} target="_blank">
      <FontAwesomeIcon icon={faArrowRight} />
      <Spacer axis="horizontal" size={10} />
      {children}
      <Spacer axis="horizontal" size={10} />
      {icon ? <FontAwesomeIcon icon={icon} /> : null}
    </StyledButton>
  )
}

export default Button
