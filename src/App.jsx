import './App.css'
import Home from './components/Home'
import Form from './components/form'
import Navbar from './components/Navbar'
import About from './components/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Subtraction, { Addition as Add, multiplication as Mul } from './components/Calculate'
import StudDetails from './components/StudDetails'


function App() {

  return (
    <>
      <Router>
        <Navbar home="Home" about="About Us" dropdown='dropdown Link' />
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
          <Route path="/StudDetails" element={<StudDetails
            name="Rahul"
            id="101"
            age="24"
            grade="A+" />
          }
          />

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
