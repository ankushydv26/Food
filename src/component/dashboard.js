import React, { useState } from "react"
import { Card, Button, Alert,NavDropdown,Nav, Navbar, FormControl,Form} from "react-bootstrap"
import { useAuth } from "../context/authContext"
import { Link, useHistory } from "react-router-dom"
import Palak from "../image/palak.jpg";
import Butterroti from "../image/Butter-Naan-Recipe1.jpg";
import Panner  from "../image/paaner.jpg";
import Partha from "../image/paneer-paratha.jpg";
import VegBriyani from "../image/veg-biryani.jpg"





export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
                <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <div className="w-100 text-center mt-2">
                        <Button variant="link" onClick={handleLogout}>
                        Log Out
                        </Button>
                    </div>
                    </Navbar.Collapse>
                </Navbar>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Foody Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          {/* <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link> */}
        </Card.Body>
        
      </Card>
      <Card >
        <Card.Img variant="top" src={Palak} />
        <Card.Body>
            <Card.Title>Palak Panner</Card.Title>
            <Card.Title>300 rupees</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Button variant="primary">Order now</Button>
        </Card.Body>
        </Card>
       
       
        <Card >
        <Card.Img variant="top" src={VegBriyani} />
        <Card.Body>
            <Card.Title>Veg Briyani</Card.Title>
            <Card.Title>300 rupees</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Button variant="primary">Order now</Button>
        </Card.Body>
        </Card>
        <Card >
        <Card.Img variant="top" src={Partha} />
        <Card.Body>
            <Card.Title>Partha</Card.Title>
            <Card.Title>300 rupees</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Button variant="primary">Order Now</Button>
        </Card.Body>
        </Card>
        <Card >
        <Card.Img variant="top" src={Panner} />
        <Card.Body>
            <Card.Title>Panner</Card.Title>
            <Card.Title>300 rupees</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Button variant="primary">Order Now</Button>
        </Card.Body>
        </Card>
        <Card >
        <Card.Img variant="top" src={Butterroti} />
        <Card.Body>
            <Card.Title>Butter Roti</Card.Title>
            <Card.Title>300 rupees</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Button variant="primary">Order Now</Button>
        </Card.Body>
        </Card>
        
     
      
    </>
  )
}