import {Navbar , Nav , Container , Carousel , Card , Button, Form} from "react-bootstrap";
import itachiImg from "./layouts/itachi.jpg"
import './App.css';

function App() {
  return (
    <div>
            <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Uchiha</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link >Home</Nav.Link>
            <Nav.Link >Contact</Nav.Link>
            <Nav.Link >Details</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images3.alphacoders.com/644/644161.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images3.alphacoders.com/748/748025.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={itachiImg}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className="container">
    <div className="cards">
    <Card className="cardAnime" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images4.alphacoders.com/221/221968.jpg" />
      <Card.Body>
        <Card.Title>Kakashi Hatake</Card.Title>
        <Card.Text>
        Kakashi Hatake Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card className="cardAnime" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images7.alphacoders.com/303/303042.png" />
      <Card.Body>
        <Card.Title>NARUTO & KURAMA</Card.Title>
        <Card.Text>
        NARUTO & KURAMA Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card className="cardAnime" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images8.alphacoders.com/994/994023.png" />
      <Card.Body>
        <Card.Title>Utchiha Clan Mark </Card.Title>
        <Card.Text>
        Utchiha Clan Mark  Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    <Form style={{margin:"100px 30px" , padding:"10px 20px 100px 10px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{color:"white"}}>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted" style={{color:"white"}}>
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{color:"white"}}>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out"  style={{color:"white"}}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </div>
  );
}

export default App;
