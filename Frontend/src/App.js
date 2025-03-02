
import './App.css';
import SignInPage from './registration/SignInPage';
import Navbar from './components/navBar';
import { HomePage } from './components/HomePage';
function App() {
  return (
    <div className='h-screen overflow-hidden'>
      <Navbar/>
      <HomePage/>
    </div>
  );
}

export default App;
