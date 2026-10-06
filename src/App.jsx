import Counterclass from "./components/Counterclass";
 export default function App()
  {  
    return <Counterclass />;
   }

import { useState } from "react"; 
export default function App() {
    const [count, setCount] = useState(0);  
    return ( 
         <div>      <h2>Count: {count}</h2>      <button onClick={() => setCount(count + 1)}>Increase</button>    </div> 
         );
         }

// import { useState } from "react"; 
// export default function App()
//  {  const [message, setMessage] = useState("Waiting..."); 
//    function handleClick() {
//         setMessage("Button clicked successfully!");  
//       }
//         return (   
//            <div>      <button onClick={handleClick}>Click Me</button>      <p>{message}</p>    </div> 
//            );
//            }



// import { useState } from "react";
//  export default function App() {  const [loggedIn, setLoggedIn] = useState(false);
//     return ( 
//          <div>    
//             <h2>{loggedIn ? "Welcome, User!" : "Please log in."}</h2>     
//              <button onClick={() => setLoggedIn(!loggedIn)}>        {loggedIn ? "Log out" : "Log in"}      </button>    </div>  
//   ); }

// export default function App()
//  { 
//    const name = "Student"; 
//     const course = "Full Stack Development-II";  
//     const message = `Hello ${name}, welcome to ${course}!`; 
//      return <h2>{message}</h2>;
//      }

// import FetchApi from"./components/FetchApi"
// function Apppp(){
//     return (
//         <>
//         <FetchApi></FetchApi>
//         <h1>hello</h1>
//         <p>welcome</p></>
//     )example
// }export default Apppp
// experiment-3

// 3a)import { useState } from "react";
//  export default function App() 
//  {  const [count, setCount] = useState(0);
//       const increase = () => setCount(prev => prev + 1);  
//       return (   
//          <div>     
//              <h2>Counter: {count}</h2>  
//                  <button onClick={increase}>Increase</button>  
//                    </div> 
//                     ); 
//                 }

// 3c
//  import Student from "./components/Student";
//  export default function App()
//   {  return (  
//       <Student     
//      name="Anita"     
//       branch="Computer Science and Engineering" />
//       ); }

//  3d)import { useState } from "react";
//  export default function App() 
//  {  
//     const [form, setForm] = useState({ name: "", email: "" }); 
//      const [submitted, setSubmitted] = useState(false); 
//       function handleChange(e) { 
//            setForm({ ...form, [e.target.name]: e.target.value }); 
//          } 
//           function handleSubmit(e) {  
//               e.preventDefault();    setSubmitted(true);  }  
//               return ( 
//                    <div>   
//                        <form onSubmit={handleSubmit}>   
//                             <input name="name" value={form.name}  
//                                          onChange={handleChange} placeholder="Name" />     
//                                             <input name="email" value={form.email}
//                                             onChange={handleChange} placeholder="Email" />    
//                                                 <button type="submit">Submit</button>     
//                                                  </form>  
//                                                      {submitted && <p>{form.name} — {form.email}</p>} 
//                                                         </div> 
//                                                          ); }

//  