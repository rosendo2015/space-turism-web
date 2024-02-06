import "../../global.css"
import { Header } from "../../components/Header"
import imgAbout from "../../assets/image-about.png"
import { BsFillCircleFill } from "react-icons/bs"
import { Container } from "./styles"
export function About() {
  return (
    <>
      <Header page="01" title="About me" />
      <Container className="about">
        <main>
          <div className="wrapperImg">
            <img src={imgAbout} />
          </div>
          <div className="info">
            <div className="wrapperCircle">
              <BsFillCircleFill size={10} />
              <BsFillCircleFill size={10} />
              <BsFillCircleFill size={10} />
              <BsFillCircleFill size={10} />
            </div>
            <h3>DEVELOPER</h3>
            <h1>PROGRAMMER PRAD</h1>
            <p>My name is Pradeep (he/him). I'm a self-taught front-end developer who is passionate about learning new technologies & building things.
              I'm an art and design enthusiast, so I truly love bringing ideas to life in the form of beautiful and responsive websites.</p>
          </div>
        </main>
      </Container>
    </>
  )
}