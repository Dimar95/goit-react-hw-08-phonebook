import Login from 'page/Login/Login';
import LogOut from 'page/CreateUser/CreateUser';
import NotFound from 'page/NotFound/NotFound';
import { Routes, Route } from 'react-router-dom';
import Contacts from './Contacts/Contacts';
import SiteNav from './SiteNav/SiteNav';
import StartPage from './StartPage/StartPage';
import { useSelector } from 'react-redux';
import { userEmailSelector } from 'redux/selector/selector';

const App = () => {
  const userEmail = useSelector(userEmailSelector);

  return (
    <Routes>
      <Route path="/" element={<SiteNav />}>
        <Route index element={userEmail ? <Contacts /> : <StartPage />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<LogOut />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
