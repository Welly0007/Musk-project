import { Route, Routes} from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Ourteam from "./components/pages/Ourteam"
import Programs from "./components/pages/Programs"
import Courses from "./components/pages/Courses"
import Blog from "./components/pages/Blog"
import Home from "./components/pages/Home"
import Underconstruction from "./components/pages/Underconstruction"
const App = () => {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/Musk-project/" element={<Home/>}></Route>
        <Route path="/programs" element={<Underconstruction />} />
        <Route path="/blog" element={<Underconstruction />} />
        <Route path="/courses" element={<Underconstruction />} />
        <Route path="/ourteam" element={<Ourteam />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
