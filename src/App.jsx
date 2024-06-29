import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"

function App() {
  return (
    <div className="flex bg-background">
        <Navbar/>
        <div className="flex flex-col">
          <Home/>
          <Footer/>
        </div>
    </div>
  )
}

export default App
