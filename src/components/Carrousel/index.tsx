import { useEffect, useState } from 'react';
import { CellphoneImage, Container, SlideImage, FigureContainer } from './styles';

export function Carrousel() {
  const [activeImage, setActiveImage] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      if (activeImage === 4) {
        return setActiveImage(1);
      }
      setActiveImage(activeImage + 1);
    }, 4000);
  }, [activeImage]);

  return (
    <FigureContainer>
      <Container>
        <CellphoneImage height={480} src='./images/phones.png' alt='Cellphone' />
        <SlideImage src={`./images/slide_0${activeImage}.png`} alt='Cellphone' />
      </Container>
    </FigureContainer>
  );
}
