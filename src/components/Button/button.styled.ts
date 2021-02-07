import styled from "styled-components"
import { OutboundLink } from "gatsby-plugin-google-gtag"

export const StyledButton = styled(OutboundLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--color-white);
  width: 100%;
  padding: 1rem;
  border-radius: 15px;
  font-weight: 600;
  border: 2px solid var(--color-white);
  background: var(--color-primary);
  &:hover {
    color: var(--color-primary);
    background: var(--color-secondary);
    border: 2px solid var(--color-secondary);
  }
`
