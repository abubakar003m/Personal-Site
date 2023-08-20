import React from "react";
// import './App.css';
import './Components/Styles.css'
import Footer from "./Components/Footer";
import { Stack } from '@mui/system'
// import Detail from "./components/Detail";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
// import Experience from "./components/Experience";
import Detail from "./Components/Detail";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Project from "./Components/Project";
function App() {
  return (
    <div className="App">
<Stack direction='column' sx={{gap:{xs:0,md:'150px'}}}>
  <Navbar/>
  <Header/>
    <Detail/>
    <About/>
    <Services/>
    <Project/>
    {/* <Experience/> */}
    <Contact/>
     <Footer/>
</Stack>
 </div>
  );
}

export default App;
