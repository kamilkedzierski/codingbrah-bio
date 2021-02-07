import { IconDefinition } from "@fortawesome/fontawesome-common-types"

export interface ButtonProps {
  children: React.ReactNode
  url: string
  icon: IconDefinition | null
}
