import React from "react"
import Button from "../../components/Button"
import Description from "../../components/Description"
import Spacer from "../../components/Spacer"
import { socialLinks } from "../../shared/constants/socialLinks"
import { StyledList } from "./homeview.styled"

const HomeView = () => {
  const renderSocialLinks = socialLinks.map((item, index) => {
    return (
      <div key={index}>
        <Button url={item.url} icon={item.icon}>
          {item.name}
        </Button>
        <Spacer axis="vertical" size={18} />
      </div>
    )
  })

  return (
    <div>
      <Description />
      <Spacer axis="vertical" size={16} />
      <StyledList>{renderSocialLinks}</StyledList>
    </div>
  )
}

export default HomeView
