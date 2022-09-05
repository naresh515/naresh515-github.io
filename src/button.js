
import react from "react";
import css from "./App.css";
 
import React, { useState } from "react";
function App() {
 const [show, setShow] = useState(true);
 const [fieldValue, setFieldValue] = useState(true);
 
 const handleBlur = (e) => setFieldValue(e.target.value);
 
 return (
   <div className="App">
     {show ? <h1>Hello World !</h1> : null}
 
     <br />
     <br />
     <form>
       <input onBlur={handleBlur} type="number" placeholder="id" />
     </form>
   
     {fieldValue ?  <button onClick={() => setShow(!show)}>Submit</button> : null}
    
   
   </div>
 );
}
 
export default App;