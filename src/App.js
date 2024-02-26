
import './App.css';
import Login from './login/dashBoard/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashBoard from './login/dashBoard/dashboard';
import Form from './login/dashBoard/form';
import SignUp from './signUp/signUp';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/form' element={<Form/>}/>
      <Route path='/dashboard' element={<DashBoard/>}/>
      <Route path='/signUp' element={<SignUp/>}/>
    </Routes>
    </BrowserRouter>
  
  );
}

export default App;
