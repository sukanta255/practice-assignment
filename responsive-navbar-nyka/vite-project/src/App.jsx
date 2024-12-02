import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // For icons, if needed

// import './App.css'
import Navbar from './Navbar'
// import MyDatePicker from './MyDatePicker';
// import CustomDatePicker from './CustomDatePicker';
import Signup from './Signup';
import SignupSecond from './Signupsecond';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      {/* <MyDatePicker/> */}
      {/* <CustomDatePicker/> */}
      <Signup/>

      <SignupSecond/>
    </>
  )
}

export default App
