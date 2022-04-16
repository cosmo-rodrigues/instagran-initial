import './App.css';
import { Footer } from './components/Footer';
import { Logon } from './components/Logon';

function App() {
  return (
    <div className='App'>
      <main>
        <div className='content'>
          <Logon />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
