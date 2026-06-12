import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import LoginForm from './pages/Login/LoginForm'
import LoginSuccess from './pages/Login/LoginSuccess'
import Register from './pages/Register/Register'
import Intrucciones from './pages/Intruciones/Intrucciones'
import CreateAccount from './pages/CreateAccount/CreateAccount'
import RegisterFormStep2 from './pages/CreateAccount/RegisterFormStep2'
import VerifyEmail from './pages/CreateAccount/VerifyEmail'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import ForgotPasswordCode from './pages/ForgotPassword/ForgotPasswordCode'
import ResetPassword from './pages/ForgotPassword/ResetPassword'
import Home from './pages/Home/Home'
import Mapa from './pages/Components/Map/Mapa'
import Detail from './pages/Components/Detail/Detail'
import Booking from './pages/Components/Booking/Booking'
import Payment from './pages/Components/Payment/Payment'
import ConfirmedTReservation from './pages/Components/ConfirmedTReservation/ConfirmedTReservation'
import DetailsHistory from './pages/Components/DetailsHistory/DetailsHistory'
import Bill from './pages/Components/Bill/Bill'
import Services from './pages/Components/Services/Services'
import Profile from './pages/Components/Profile/Profile'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login-form" element={<LoginForm />} />
      <Route path="/login-success" element={<LoginSuccess />} />
      <Route path="/register" element={<Register />} />
      <Route path="/register-form" element={<CreateAccount />} />
      <Route path="/register-form-details" element={<RegisterFormStep2 />} />
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/forgot-password-code" element={<ForgotPasswordCode />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/intrucciones" element={<Intrucciones />} />
      <Route path="/home" element={<Home />} />
      <Route path="/mapa" element={<Mapa />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/reservation" element={<ConfirmedTReservation />} />
      <Route path="/detailshostory" element={<DetailsHistory />} />
      <Route path="/bill" element={<Bill />} />
      <Route path="/services" element={<Services />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}

export default App