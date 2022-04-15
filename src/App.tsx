import './App.css';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className='App'>
      <main>
        <div className='content'>
          <section className='phoneSide'></section>
          <section className='userSide'></section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
