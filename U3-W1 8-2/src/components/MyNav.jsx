import { Nav, Navbar } from "react-bootstrap";

function MyNav() {
  return (
    <Navbar bg="dark" variant="dark" className="ps-5">
      <Nav className="me-auto">
        <Nav.Link href="#home">HOME</Nav.Link>
        <Nav.Link href="#features">ABOUT</Nav.Link>
        <Nav.Link href="#pricing">BROWSE</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default MyNav;
