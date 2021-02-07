import React from "react"
import { faPlaystation } from "@fortawesome/free-brands-svg-icons"

import Spacer from "../Spacer"
import Sparkles from "../Sparkles"

import {
  StyledDescription,
  StyledHighlightLink,
  StyledIcon,
  StyledUsername,
} from "./description.styled"

const Description = () => {
  return (
    <StyledDescription>
      <a href="https://instagram.com/codingbrah">
        <img src="images/logo.svg" width={200} />
      </a>

      <h1>
        Welcome to{" "}
        <StyledHighlightLink href="https://instagram.com/codingbrah">
          <Sparkles>@codingbrah</Sparkles>
        </StyledHighlightLink>{" "}
        bio page!
      </h1>
      <Spacer axis="vertical" size={16} />
      <p>Below you can find all of the important links 🥸</p>
      <p>Also, if you want to play some games together feel free to add me:</p>
      <StyledUsername>
        <StyledIcon icon={faPlaystation} />
        <Spacer axis="horizontal" size={5} />
        codingbrah
      </StyledUsername>
    </StyledDescription>
  )
}

export default Description
