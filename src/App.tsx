import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmailCheck from './pages/EmailCheck';
import Layout from './layouts/Layout';
import Login from './pages/Login';
import AccountNotFound from './pages/AccountNotFound';
import Signup from './pages/Signup';
import { ModeContext } from './contexts/ModeContext';


const App = () => {
  // 임시 <라이트>/다크 모드
  const isDarkMode :boolean = false;

  return (
    <ModeContext.Provider value={isDarkMode}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/email-check' element={<EmailCheck />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/no-account' element={<AccountNotFound />} />
            <Route path='/sign-up' element={<Signup />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </ModeContext.Provider>
  );
}

export default App;