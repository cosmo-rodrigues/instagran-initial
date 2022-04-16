import {
  ContinueButton,
  ChangeAccountButton,
  LogoFigure,
  AvatarFigure,
  Image,
  InfoContainer,
  SectionContainer,
} from './styles';

export function Logged() {
  return (
    <SectionContainer className='container'>
      <LogoFigure>
        <Image src='./images/instagram_logo.png' alt='Instagram' />
      </LogoFigure>
      <AvatarFigure>
        <Image src='./images/user.jpg' />
      </AvatarFigure>
      <ContinueButton>Continuar como cosmo.rsilva</ContinueButton>
      <InfoContainer>
        <p>Não é cosmo.rsilva?</p>
        <ChangeAccountButton>Trocar de conta</ChangeAccountButton>
      </InfoContainer>
    </SectionContainer>
  );
}
