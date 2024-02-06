import LogoSpace from "../../assets/logo.svg"
import { ImgLogo } from "./styles"

export function Logo() {
  return (
    <ImgLogo>
      <a href="/">
        <img src={LogoSpace} />
      </a>
    </ImgLogo>
  )
}