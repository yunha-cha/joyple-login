// import './css/style.min.css';
import {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmailCheck from './pages/EmailCheck';
import Layout from './layouts/Layout';
import Test from './pages/Test';
import type { Cafe } from './types/cafe';
import Login from './pages/Login';
import AccountNotFound from './pages/AccountNotFound';
import Signup from './pages/Signup';

let data :Cafe = {
  name: '디저트 가게',
  category: ['dessert', 'food'],
  menu: [
      {name: 'tiramisu', price: 6500, category: 'CAKE'},
      {name: 'strawberry', price: 7500, category: 'CAKE'},
  ]
}


const App = () => {

  // useState가 어떤 타입인지
  const [myCafe, setMyCafe] = useState<Cafe>(data);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/email-check' element={<EmailCheck />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/no-account' element={<AccountNotFound />} />
          <Route path='/sign-up' element={<Signup />}/>
          

          {/* 원하는 카페 데이터 하나만 넘겨준다(props) */}
          <Route path='/test' element={<Test myCafe={myCafe}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;