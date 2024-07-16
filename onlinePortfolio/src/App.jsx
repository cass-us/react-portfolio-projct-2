import BackgroundComponent from "./BackgroundComponent"
import MiddleSection from "./MiddleSection"
import Footer from "./Footer"
function App() {
  return(
    <div className="App">
    <BackgroundComponent />
    {<>
      <MiddleSection/>
     
      <Footer/>
    </>
    }
  </div>
);

}

export default App
