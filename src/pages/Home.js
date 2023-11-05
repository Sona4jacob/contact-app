import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Contact from '../components/Contact';
function Home(props) {
  const [contacts, setContact] = useState([]);
  const fetchData = async () => {
    const result = await axios.get("/db.json");
    setContact(result.data.contacts);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(contacts);

  return (
    <div>        <Row>
    <h1 className="mt-5 text-center mb-5">Streamline Your Contacts with Your Choice</h1>
       <Col lg={6}>
        <p className="text-start p-5">Your all-in-one solution for managing and connecting with your contacts. Simplify your life with our intuitive contact management tools, group organization features, and seamless communication options. Say goodbye to the chaos of scattered contacts and hello to effortless connectivity. Get started today and streamline your contacts like never before!
        </p>

      </Col>    
      <Col lg={6}>
         <Container>
          <img className="img-fluid" src="https://www.medicaldevice-network.com/wp-content/uploads/sites/23/2020/10/shutterstock_1710910387.jpg" alt="" />

         </Container>
      </Col>    
</Row>
<Row>
<h1 className="mt-5 text-center mb-5">BEST OPTIONS</h1>
{contacts.map((i) => (
  <Col className="ps-3 mt-3 p-2" lg={3} md={4} sm={6}>
    <Contact item={i}></Contact>
  </Col>
))}
</Row>
</div>
  )
}

export default Home