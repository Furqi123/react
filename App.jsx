import logo from './logo.svg';
import './App.css';
import BootstrapNavbar from './Components/BootstrapNav.jsx';
import BasicForm from './Components/BootstrapForm.jsx';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Counter from './Components/Counter.jsx';
import { Row,Col,Card,Input } from 'antd';
import CustomInput from './Components/CustomInput.jsx';


// function App() {
//   const [type,setType] = useState("login")
//   return (
//     <div className='container'>
//       <div className="row justify-content-center">
//         { type === "login"
//         ?
//         <div className="col-6 p-5">
//           <h2>Login</h2>
//         <BasicForm></BasicForm>

//         <Button onClick={()=>setType("register")} variant="link">Register Now</Button>
//         </div>
//         :
//         <div className="col-6 p-5">
//         <h2>Register</h2>
//       <BasicForm></BasicForm>

//       <Button onClick={()=>setType('login')} variant="link">Login Now</Button>
//       </div>

// }
//       </div>
    
//     </div>
//   );
// }



// function App(){
 
//   const [counter,setCounter]= useState(0)
//   const [name,setName] = useState("Furqan")


//   useEffect(()=>{
//     console.log("testing 1")
//     },[])

//     useEffect(()=>{
//       console.log("testing 2")
//       })

//       useEffect(()=>{
//         console.log("testing 3")
//         },[name])
      
    
//   return(
//     <div>
//       <h1>{name}</h1>
//       <button onClick={()=> setName("Azeem")}>update Name</button>

//        {counter < 10 && <Counter count={counter} />}

//       <button onClick={()=>setCounter(counter + 1)}>+</button>
//       <button onClick={()=>setCounter(counter - 1)}>-</button>

//     </div>
//   )
// }



// function App(){
//   return(
//   <Row>
//     <Col  xl={12} lg={12} md={16} sm={24} xs={24} style={{border: "1px solid "}}>
//     <Row>
//     <Col span={12}>
//       <Card>
//         <Input></Input>
//       </Card>

//       </Col>

//       <Col span={12}>
//       <Card>
//         <Input></Input>
//       </Card>

//       </Col>
//     </Row>
    

//     </Col>

//     <Col  xl={12} lg={12} md={8} sm={24} xs={24} style={{border: "1px solid orange"}}>
//     <Card>
//         <Input></Input>
//       </Card>

//     </Col>
//   </Row>
//   )
// }


// function App(){
//   function onHandle(e){
//     console.log(e.target.value)
//   }
//   return(
//     <Row justify={'center'} align={'middle'}>
//       <Col span={24} style={{border: "1px solid "}}>
//       <CustomInput onChange={onHandle} placeholder={"Email"}  />

//       </Col>
//       <Col span={24} style={{border: "1px solid orange"}}>
//       <CustomInput placeholder={"Password"} />
//       </Col>
//     </Row>
//   )
// }


import AppRouter from './router/index.js';

function App(){
  return(
    
    <AppRouter></AppRouter>
    
  )
}

export default App;
