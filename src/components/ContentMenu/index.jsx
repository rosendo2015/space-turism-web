import { Ul } from "./styles"

export function ContentMenu({ open }) {
  return (
    <Ul open={open}>
      <li>
        <a href="/">
          <strong>00</strong>
          <p>HOME</p>
        </a>
      </li>
      <li>
        <a href="/about">
          <strong>01</strong>
          <p>DESTINATION</p>
        </a>
      </li>
      <li>
        <a href="/crew">
          <strong>02</strong>
          <p>CREW</p>
        </a>
      </li>
      <li>
        <a href="/projects">
          <strong>03</strong>
          <p>TECNOLOGY</p>
        </a>
      </li>
    </Ul>
  )
}