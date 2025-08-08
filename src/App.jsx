import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Subscription from './pages/Subscription';
import Dashboard from './pages/Dashboard';
import Signup from './pages/SignUp'
import SignIn from './pages/SignIn';
import DepositFunds from './pages/Deposit';
// import other pages...

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup />}/>
         <Route path='/sign-in' element={<SignIn />}/>
        {/* All pages that should include the sidebar go under this layout */}
        
        <Route path="/" element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="subscriptions" element={<Subscription />} />
        <Route path="deposit" element={<DepositFunds />} />
          {/* add more pages here */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
