import "../../global.css"
import { Header } from "../../components/Header"
import imgCrew from "../../assets/image-crew.png"
import { BsFillCircleFill } from "react-icons/bs"
import { Container } from "./styles.js"
export function Crew() {
  return (
    <>
      <Header page="03" title="meet your crew" />
      <Container className="crew">
        <main>
          <div className="wrapperImg">
            <img src={imgCrew} />
          </div>
          <div className="info">
            <div className="wrapperCircle">
              <BsFillCircleFill size={10} />
              <BsFillCircleFill size={10} />
              <BsFillCircleFill size={10} />
              <BsFillCircleFill size={10} />
            </div>
            <h3>PILOT</h3>
            <h1>Victor Glover</h1>
            <p>Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. </p>
          </div>
        </main>
      </Container>
    </>
  )
}