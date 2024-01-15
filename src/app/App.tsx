import {Header} from "../widgets/Header";
import {CanvasHero} from "shared/ui/CanvasHero";

function App() {
  return (
      <>
          <Header/>
          <div className={'root-hero'}>
              <div className={'hero-title'}>
                  Coming Soon
              </div>
              <CanvasHero />
          </div>
      </>
  )
}

export default App
