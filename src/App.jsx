
import axios from './util/axios.custiomize'
import { useEffect } from 'react'
import Header from './components/layout/header.jsx';
import { Outlet } from 'react-router-dom';


function App() {
  useEffect(() => {
    
    const fetchHello = async() => {
      const res = await axios.get(`/v1/api/`);
      console.log("check res: ", res)
    }
    fetchHello()
  }, [])  // [] -> chay 1 lan

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
} 

export default App
