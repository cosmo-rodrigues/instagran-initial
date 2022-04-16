import { usePersistedState } from '../../hooks/usePersistedState';
import { languages } from './mock/languages';
import {
  Container,
  FooterContainer,
  FooterLister,
  ListItem,
  OptionItem,
  SelectContainer,
  SelectItem,
} from './styles';

export function Footer() {
  const [language, setLanguage] = usePersistedState('language', 'Português (Brasil)');

  function handleLanguage(language: string) {
    setLanguage(language);
  }

  return (
    <FooterContainer>
      <Container>
        <FooterLister>
          <ListItem>Meta</ListItem>
          <ListItem>Sobre</ListItem>
          <ListItem>Blog</ListItem>
          <ListItem>Carreiras</ListItem>
          <ListItem>Ajuda</ListItem>
          <ListItem>API</ListItem>
          <ListItem>Privacidade</ListItem>
          <ListItem>Termos</ListItem>
          <ListItem>Principais contas</ListItem>
          <ListItem>Hashtags</ListItem>
          <ListItem>Localizações</ListItem>
          <ListItem>Instagram Lite</ListItem>
          <ListItem>Dança</ListItem>
          <ListItem>Comida e bebida</ListItem>
          <ListItem>Casa e jardim</ListItem>
          <ListItem>Música</ListItem>
          <ListItem>Artes visuais</ListItem>
        </FooterLister>
        <SelectContainer>
          <SelectItem
            defaultValue={language}
            onChange={({ target }) => handleLanguage(target.value)}
            name='language'
            id='language'
          >
            {languages.map((country) => (
              <OptionItem id={`${country.name}`}>{country.name}</OptionItem>
            ))}
          </SelectItem>
          <p>&copy; {new Date().getFullYear()} Instagram from Meta</p>
        </SelectContainer>
      </Container>
    </FooterContainer>
  );
}
