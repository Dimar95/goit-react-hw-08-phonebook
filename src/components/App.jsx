import Login from 'page/Login/Login';
import LogOut from 'page/CreateUser/CreateUser';
import NotFound from 'page/NotFound/NotFound';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import SiteNav from './SiteNav/SiteNav';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SiteNav />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<LogOut />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
