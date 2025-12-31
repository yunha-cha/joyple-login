import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmailCheck from './pages/EmailCheck';
import Layout from './layouts/Layout';
import Login from './pages/Login';
import AccountNotFound from './pages/AccountNotFound';
import Signup from './pages/Signup';

const App = () => {

  // 임시 <라이트>/다크 모드
  const isDarkMode :boolean = false;

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/email-check' element={<EmailCheck isDarkMode={isDarkMode}/>}/>
          <Route path='/login' element={<Login isDarkMode={isDarkMode} />}/>
          <Route path='/no-account' element={<AccountNotFound />} />
          <Route path='/sign-up' element={<Signup isDarkMode={isDarkMode}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;