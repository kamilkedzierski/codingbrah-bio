import React from "react"
import { faHeart } from "@fortawesome/free-solid-svg-icons"

import Spacer from "../Spacer"

import {
  StyledFooter,
  StyledIcon,
  StyledImage,
  StyledLink,
} from "./footer.styled"

const Footer = () => {
  return (
    <StyledFooter>
      © {new Date().getFullYear()} <Spacer axis="horizontal" size={5} />
      Made with <Spacer axis="horizontal" size={5} />
      <StyledIcon icon={faHeart} />
      <Spacer axis="horizontal" size={5} /> by
      <Spacer axis="horizontal" size={5} />
      <StyledLink href="https://instagram.com/codingbrah">
        <StyledImage src="images/logo.svg" width={65} />
      </StyledLink>
    </StyledFooter>
  )
}
export default Footer
