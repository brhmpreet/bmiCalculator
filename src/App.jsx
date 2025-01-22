import { useEffect, useState } from 'react'
import './App.css'

function App() {
 const [weight,setWeight] = useState(80);
 const [height, setHeight] = useState(150);
 const [bmi, setBMI] = useState(0);
 useEffect(()=>{
  setBMI(Number((weight)/((height*height)/10000)).toFixed(2));
 },[weight,height]);
  return (
    <div>
      <div><h1>BMI CALCULATOR</h1></div>
      <div style={{padding:'30px'}}>
        <div style={{display:'flex',flexDirection:'column', margin:'10px'}}>
          <span style={{textAlign:'start'}}>Weight: {weight} kgs</span>
          <input onChange={(e)=>setWeight(e.target.value)} type='range' min='1' max='150' value={weight} ></input>
        </div>
        <div style={{display:'flex',flexDirection:'column', margin:'10px'}}>
          <span style={{textAlign:'start'}}>Height: {height} cms</span>
          <input onChange={(e)=>setHeight(e.target.value)} type='range' min='1' max='250' value={height} ></input>
        </div>
        <div  style={{margin:'10px'}}>
          <div style={{margin:'10px'}}>Your BMI is</div>
          <div style={{backgroundColor:'grey', borderRadius:'40%',marginLeft:'40%',marginRight:'40%',padding:'10px 5px'}}>{bmi}</div>
        </div>
      </div>
    </div>
  )
}

export default App
