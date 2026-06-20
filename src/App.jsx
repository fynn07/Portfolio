import { Toaster } from "react-hot-toast"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import { RefContext } from "./context/Context"
import { useReferences } from "./hooks/useReferences"
import MobileNavBar from "./components/MobileNavBar"

function App() {
  const refs = useReferences();

  return (
    <RefContext.Provider value={refs}>
      <div className="flex min-h-screen flex-col bg-transparent sm:flex-row">
          <Toaster/>
          <Navbar/>
          <MobileNavBar/>
          <div className="flex flex-1 flex-col">
            <Home/>
            <Footer/>
          </div>
      </div>
    </RefContext.Provider>
  )
}

export default App
