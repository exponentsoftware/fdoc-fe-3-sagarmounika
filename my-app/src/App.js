import "./App.css"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Albums from "./components/Albums"
import AddAlbum from "./components/AddAlbum.js"

function App() {
  return (
    <>
      <div class="body">
        <Router>
          <Navbar />

          <Route exact path="/albums" exact component={Albums} />
          {/* <Route path="/add" component={About} /> */}
        </Router>
      </div>
    </>
  )
}
export default App
