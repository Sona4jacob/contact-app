import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, Col, Container, Row } from "react-bootstrap";

function SingleView() {
  const { mobile } = useParams();
  //   console.log(id);
    const [contacts, setContact] = useState([]);
    const fetchAllData = async () => {
      const result = await axios.get("/db.json");
      setContact(result.data.contacts);
    };
    useEffect(() => {
      fetchAllData();
    }, []);
  //   console.log(restaurants);
  const singleData=contacts.find(i=>i.mobile == mobile)
  console.log(singleData);
  
  return (
    <div>        { singleData &&
      <Container>
                      <Row>
                      <Col lg={6}>
                        <img style={{height:'400px',width:'80%',border:'2px solid transparent' , borderRadius:'14px'}} src={singleData.profile} alt="" />
  
                              </Col>
             <Col lg={6} className="text-center mt-5 mb-5">
                          <h1 >{singleData.name}</h1>
                          <h3><b>EMAIL:</b>{singleData.email} </h3>
                          <h3><b>CONTACT:</b>{singleData.mobile} </h3>

                          <h3><strong>Address:</strong>{singleData.location}</h3>
                  </Col>
                  </Row>
          
      </Container>        }
          </div>
  )
}

export default SingleView