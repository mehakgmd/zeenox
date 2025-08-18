import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Subscription from './pages/Subscription';
import Dashboard from './pages/Dashboard';
import Signup from './pages/SignUp'
import SignIn from './pages/SignIn';
import DepositFunds from './pages/Deposit';
import UserProfile from './pages/UserProfile';
import Mission from './pages/Content-Pages/Mission';
import ForgotPassword from './pages/Forget-Password';
import EquityParticipation from './pages/Content-Pages/Equity-Participation';
import WhyChooseUs from './pages/Content-Pages/Why-Choose-Us';
import WhatWeOffer from './pages/Content-Pages/What-We-Offer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path="forgot-password" element={<ForgotPassword />} />

        {/* All pages that should include the sidebar go under this layout */}

        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="subscriptions" element={<Subscription />} />
          <Route path="deposit" element={<DepositFunds />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="mission" element={<Mission />} />
          <Route path="equity-participation" element={<EquityParticipation />} />
          <Route path="why-choose-us" element={<WhyChooseUs />} />
          <Route path="what-we-offer" element={<WhatWeOffer />} />


        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
