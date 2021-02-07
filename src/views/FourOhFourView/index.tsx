import React from "react"
import Spacer from "../../components/Spacer"
import { StyledFourOhFourView, StyledWrapper } from "./fourohfour.styled"

const FourOhFourView = () => {
  return (
    <StyledFourOhFourView>
      <StyledWrapper>
        <h1>404: Not Found</h1>
        <Spacer axis="vertical" size={28} />
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <p>
          PS. There are no other subpages on this domain, so don't try that
          again 🥸
        </p>
      </StyledWrapper>
    </StyledFourOhFourView>
  )
}
export default FourOhFourView
