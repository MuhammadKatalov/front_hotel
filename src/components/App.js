import './App.css'
import { Routes, Route, Navigate } from "react-router-dom";
import AboutUs from './pages/AboutUs/AboutUs';
import AllNumbers from './pages/AllNumbers/AllNumbers';
import NumbersByCategory from './pages/NumbersByCategory/NumbersByCategory';
import Profile from './pages/Profile/Profile';
import Rend from './pages/Rend/Rend';
import SignIn from './pages/SignIn/Sign';
import SignUp from './pages/SignUp/SignUp';
import Welcome from './pages/WelcomePage/Welcome';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="allnumbers" element={<AllNumbers />} />
        <Route path="numbersCategory" element={<NumbersByCategory />} />
        <Route path='profile' element={<Profile />} />
        <Route path="rend" element={<Rend />} />
        <Route path='signIn' element={<SignIn />} />
        <Route path='signUp' element={<SignUp />} />
        <Route path='welcome' element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
