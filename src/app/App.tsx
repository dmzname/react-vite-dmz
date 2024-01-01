import {CanvasHero} from "shared/CanvasHero";
import {Header} from "../widgets/Header";

function App() {
  return (
      <>
          <Header/>
          <div className={'root-hero'}>
              <div className={'hero-title'}>
                  Coming Soon
              </div>
              <CanvasHero/>
          </div>
      </>
  )
}

export default App
