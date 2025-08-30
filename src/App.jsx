import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Subscription from './pages/Subscription';
import Dashboard from './pages/Dashboard';
import Signup from './pages/SignUp'
import SignIn from './pages/SignIn';
import DepositFunds from './pages/Deposit';
import UserProfile from './pages/UserProfile';
import Mission from './pages/Mission';
import ForgotPassword from './pages/Forget-Password';
import EquityParticipation from './pages/Equity-Participation';
import WhyChooseUs from './pages/Why-Choose-Us';
import WhatWeOffer from './pages/What-We-Offer';
import IdeaFundingPartnership from './pages/Idea-Funding';
import BusinessStrategicAgreements from './pages/Business-Strategic-Agreements';

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
          <Route path="idea-funding-partnership" element={<IdeaFundingPartnership />} />
          <Route path="business-strategic-agreements" element={<BusinessStrategicAgreements />} />


        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
