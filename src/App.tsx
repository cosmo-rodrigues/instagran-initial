import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Logged } from './components/Logged';
import { useWindowSize } from './hooks/useWindowSize';
import { AppContainer, Main } from './styles';

function App() {
  const { width } = useWindowSize();
  const [showCellphoneImage, setShowCellphoneImage] = useState(false);

  useEffect(() => {
    if (width >= 850) {
      return setShowCellphoneImage(true);
    }
    setShowCellphoneImage(false);
  }, [width]);

  return (
    <AppContainer>
      <Main>
        {showCellphoneImage && (
          <figure>
            <img height={580} src='./images/phones.png' alt='Cellphone' />
          </figure>
        )}
        <Logged />
      </Main>
      <Footer />
    </AppContainer>
  );
}

export default App;
