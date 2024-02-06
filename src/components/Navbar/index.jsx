import { ContainerMenu } from "./styles"
import { Logo } from "../Logo"
import { ButtonMenu } from "../ButtonMenu"
export function Navbar() {
  return (
    <ContainerMenu>
      <Logo />
      <ButtonMenu open={open} />
    </ContainerMenu>
  )
}