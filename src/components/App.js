import "./App.css";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs";
import TheArea from "./pages/TheArea/TheArea";
import Profile from "./pages/Profile/Profile";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Welcome from "./pages/WelcomePage/Welcome";
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";
import Room from "./pages/Room";
import RendCalendar from "./RendCalendar/RendCalendar";
import Chat from "./Chat";
import PaymentPage from "./pages/Payment/Payment";

function App() {
  return (
    <div className="app">
      <RendCalendar />
      {/* <Header />
      <Footer /> */}

      <Routes>
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="profile" element={<Profile />} />
        <Route path="room" element={<Room />} />
        <Route path="rend" element={<RendCalendar />} />
        <Route path="signIn" element={<SignIn />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="thearea" element={<TheArea />} />
        <Route path="dialog" element={<Chat />} />
        <Route path="payment" element={<PaymentPage />} />
      </Routes>
    </div>
  );
}

export default App;
