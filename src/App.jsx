import { Toaster } from "react-hot-toast"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import { RefContext } from "./context/Context"
import { useReferences } from "./hooks/useReferences"

function App() {
  const refs = useReferences();

  return (
    <RefContext.Provider value={refs}>
      <div className="flex bg-background">
          <Toaster/>
          <Navbar/>
          <div className="flex flex-col">
            <Home/>
            <Footer/>
          </div>
      </div>
    </RefContext.Provider>
  )
}

export default App
