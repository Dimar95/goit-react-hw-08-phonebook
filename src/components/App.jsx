import Login from 'page/Login/Login';
import LogOut from 'page/CreateUser/CreateUser';
import NotFound from 'page/NotFound/NotFound';
import { Routes, Route } from 'react-router-dom';
import Contacts from './Contacts/Contacts';
import SiteNav from './SiteNav/SiteNav';
import StartPage from './StartPage/StartPage';
import { useSelector } from 'react-redux';
import { userEmailSelector } from 'redux/selector/selector';
import PrivateRoute from 'service/PrivatePoute';
import PublicPoute from 'service/PublicPoute';

const App = () => {
  const userEmail = useSelector(userEmailSelector);

  return (
    <Routes>
      <Route path="/" element={<SiteNav />}>
        <Route index element={userEmail ? <Contacts /> : <StartPage />} />

        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicPoute>
              <Login />
            </PublicPoute>
          }
        />
        <Route
          path="logout"
          element={
            <PublicPoute>
              <LogOut />
            </PublicPoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
