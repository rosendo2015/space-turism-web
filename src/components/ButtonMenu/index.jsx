import { GiHamburgerMenu } from "react-icons/gi"
import { MdOutlineClose } from "react-icons/md";
import { ContentMenu } from "../ContentMenu"
import { Container } from "./styles"
import { useState } from "react"
export function ButtonMenu() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <ContentMenu open={open} />
      <Container open={open} onClick={() => setOpen(!open)}>
        {open ? <MdOutlineClose size={48} /> : <GiHamburgerMenu size={48} />}
      </Container>
    </>
  )
}