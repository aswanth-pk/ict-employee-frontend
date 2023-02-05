import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import EmployeeHome from './Components/EmployeeHome';
import EmployeeForm from './Components/EmployeeForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<EmployeeHome />} />
        <Route path='/employeeform' exact element={<EmployeeForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
