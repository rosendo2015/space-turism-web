import "../../global.css"
import { Container } from "./styles.js"
import { Header } from "../../components/Header/index.jsx"

export function Home() {
  return (
    <Container className="bodyApp">
      <Header />
      <div className="app">
        <main className="main">
          <p>SO, YOU WANT TO TRAVEL TO</p>
          <h1>SPACE</h1>
          <div className="description">
            <span>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</span>
          </div>
        </main>
        <button className="button">EXPLORE</button>
      </div>
    </Container>
  )
}

