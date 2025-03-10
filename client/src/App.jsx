import { BrowserRouter as Router,Routes, Route  } from "react-router-dom"
import Home from "./Routes/About"
import Projects from "./Routes/Projects"
import Contact from "./Routes/Contact"

const App = ()=>{
  return(
    <>
       <Router>
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/projects" Component={Projects}/>
          <Route path="/contact" Component={Contact}/>
        </Routes>
       </Router>

    </>
  )
}

export default App