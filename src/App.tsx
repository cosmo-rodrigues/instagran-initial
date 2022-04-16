import { Footer } from './components/Footer';
import { Logged } from './components/Logged';
import { AppContainer, Main } from './styles';

function App() {
  return (
    <AppContainer>
      <Main>
        <Logged />
      </Main>
      <Footer />
    </AppContainer>
  );
}

export default App;
