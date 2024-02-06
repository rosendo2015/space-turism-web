import "../../global.css"
import { Header } from "../../components/Header"
import ImgProjects from "../../assets/image-project.png"
import { BsFillCircleFill } from "react-icons/bs"
import { Container } from "./styles"
export function Projects() {
  return (
    <>
      <Header />
      <Container className="projects">
        <main>
          <div className="wrapperImg">
            <img src={ImgProjects} />
          </div>
          <div className="info">
            <div className="wrapperCircle">
              <BsFillCircleFill size={10} />
              <BsFillCircleFill size={10} />
              <BsFillCircleFill size={10} />
              <BsFillCircleFill size={10} />
            </div>
            <h3>SOCIAL</h3>
            <h1>CRYPTO-BANKING-SYSTEM</h1>
            <p>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
          </div>
        </main>
      </Container>
    </>
  )
}