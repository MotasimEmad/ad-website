import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AdDetailsPage from './pages/AdDetailsPage';
import Footer from './components/Footer';
import UserProfile from './pages/UserProfile';
import CompanyProfile from './pages/CompanyProfile';
import CouponsPage from './pages/CouponsPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import CompanyCompleteRegister from './pages/CompanyCompleteRegister';
import OurApp from './pages/OurApp';
import ForgetPasswordPage from './pages/ForgetPasswordPage';
import NotificationPage from './pages/NotificationPage';

function App() {
  return (
    <div className="App font-ubuntu">
      <Router>
        <NavBar />

        <Routes>
          <Route path="/our-app" element={<OurApp />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/forget-password" element={<ForgetPasswordPage />} />
          <Route path="/complete-register" element={<CompanyCompleteRegister />} />

          <Route path="/" element={<HomePage />} />
          <Route path="/ad/:id" element={<AdDetailsPage />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/company-profile/:id" element={<CompanyProfile />} />
          <Route path="/coupons-page" element={<CouponsPage />} />

          <Route path="/notifications" element={<NotificationPage />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
