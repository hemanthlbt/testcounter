import {useState} from 'react'
import Navbar from  './navbar.jsx'
import Button from './buttons.jsx'
import Button1 from './button1.jsx'
import Reset from './reset.jsx'
import './App.css'
import Images from './images.jsx'

function App() {
  const[count,setCount] =useState(0);

  return(
    <>
    <h1> era kojja </h1>
    <Images/>
    <h1>  Items Added :{count} </h1>
       <h1> E commerce project! </h1>
        <Navbar/>
        <Button  count={count} setCount={setCount}/>
        <Button1 count={count} setCount={setCount}/>
        <Reset  setCount={setCount}/>




    </>
  ) 

}






export default App