import './App.css'
import Home from './components/Home'
import Form from './components/form'
import Navbar from './components/Navbar'
import About from './components/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Subtraction, { Addition as Add, multiplication as Mul } from './components/Calculate'


function App() {

  return (
    <>
      <Router>
        <Navbar home="Home" about="About Us"/>
        <Routes>
          <Route path="/" element={
            <><Home
              name="Rahul"
              age="24"
              bool={true}
              arr={[1, 2, 3, 4]}
              obj={{ id: 101, name: "Rahul" }} />
              <Form />
            </>
          }
          />
          <Route path="/about" element={<About />} />

        </Routes>
      </Router>
      <div className="container">
        <Add a={10} b={5} />
        <Mul a={10} b={5} />
        <Subtraction a={10} b={5} />
      </div>
    </>
  )
}

export default App
