import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom"
import Signin from './components/Signin';
import Signup from './components/Signup';





function App() {


  const [login, setlogin] = useState(false);

  useEffect(() => {
    

  }, [])

  const logoutHandler = () => {
    
  }
  return (
    <div className='main'>
      {(login) ?
        <ul>
          <li>
            <Link to={`/`} >Home</Link>
          </li>
          <li>
            <button onClick={logoutHandler}>logout</button>
          </li>
        </ul> :
        <ul>
          <li>
            <Link to={`/`} >Signin</Link>
          </li>
          <li>
            <Link to={`/signup`} >Signup</Link>
          </li>
        </ul>
      }
      {(login) ?
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        :
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="Signup" element={<Signup />} />
        </Routes>
      }



    </div>




  );
}

export default App;