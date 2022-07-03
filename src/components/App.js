import './App.css'
import { Routes, Route } from "react-router-dom";
import AboutUs from './pages/AboutUs/AboutUs';
import Profile from './pages/Profile/Profile';
import Rend from './pages/Rend/Rend';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Welcome from './pages/WelcomePage/Welcome';
import Header from '../components/Header/index';
import Footer from '../components/Footer/index';
import Room from './pages/Room';
import RendCalendar from './RendCalendar/RendCalendar';

function App() {
  return (
    <div className='app'>
      <RendCalendar />
      {/* <Header />
      <Footer /> */}
      <Routes>
        <Route path="aboutus" element={<AboutUs />} />
        <Route path='profile' element={<Profile />} />
        <Route path='room' element={<Room />} />
        <Route path="rend" element={<Rend />} />
        <Route path='signIn' element={<SignIn />} />
        <Route path='signUp' element={<SignUp />} />
        <Route path='welcome' element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
