import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Register/Register";
import ContactComponent from "./ContactComponent/ContactComponent";
import HomePage from "./HomePage/HomePage";


const App = () => {  
  return (
    <>
      <HomePage/>
    <Routes>
      {/* <Route path="/" element={}/> */}
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/contacts" element={<ContactComponent/>} />
    </Routes>
    </>
  );
};
 
export default App;