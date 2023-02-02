import { Container, Nav, Navbar } from 'react-bootstrap';
import * as S from "./header-styles";

export const HeaderComponent = props => {
  return (
    <S.Header>
      <S.NavbarStyled variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">IR<strong>.</strong></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#works">Works</Nav.Link>
              <Nav.Link href="#aboutMe">About Me</Nav.Link>
              <Nav.Link href="#certificates">Certificates</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </S.NavbarStyled>
    </S.Header>
  );
}