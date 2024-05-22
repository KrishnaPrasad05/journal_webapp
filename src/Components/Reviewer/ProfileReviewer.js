// src/ReviewerProfile.js
import React, { useContext, useEffect, useState } from 'react';
import { Card, Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import AppContext from '../AppContext';
import HeaderReviewer from './HeaderReviewer';
import FooterReviewer from './FooterReviewer';

const ReviewerProfile = () => {
  const { variableValue } = useContext(AppContext);
  const [profile, setProfile] = useState(null);
  const [loggedInId, setLoggedInId] = useState(null);
  const [show, setShow] = useState(false);
  const [updatedProfile, setUpdatedProfile] = useState({});

  useEffect(() => {
    const loggedInUserIdFromLocalStorage = localStorage.getItem('loggedInID');
    if (loggedInUserIdFromLocalStorage) {
      setLoggedInId(loggedInUserIdFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    if (loggedInId) {
      fetch(`${variableValue}/joinReviewer/${loggedInId}`)
        .then(response => response.json())
        .then(data => {
          setProfile(data);
          setUpdatedProfile(data);
        })
        .catch(error => {
          console.error('There was an error fetching the profile data!', error);
        });
    }
  }, [loggedInId, variableValue]);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProfile({ ...updatedProfile, [name]: value });
  };

  const handleSave = () => {
    fetch(`${variableValue}/joinReviewer/${loggedInId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProfile),
    })
      .then(response => response.json())
      .then(data => {
        setProfile(data);
        handleClose();
      })
      .catch(error => {
        console.error('There was an error updating the profile!', error);
      });
  };

  if (!profile) {
    return <p>Loading...</p>;
  }

  return (
    <div>   
        <HeaderReviewer/> 
        <Container className="mt-2 p-3">
      <Row className="justify-content-md-center">
       
          <Card style={{width:'50rem',boxShadow:'10px 10px 10px grey'}}>
            <Container>
                <Row>
                    <Col xs={12} md={6} lg={6} xl={6} sm={12} xxl={6} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <Card.Img variant="top" src={profile.reviewerPic} style={{width:'300px',height:'300px',padding:'20px'}}/>
                    </Col>
                    <Col xs={12} md={6} lg={6} xl={6} sm={12} xxl={6} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                      
            <Card.Body>
              <Card.Title style={{color:'#302CD4'}}>{profile.reviewerName}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{profile.reviewerDesignation}</Card.Subtitle>
              <Card.Text>
                <strong style={{color:'black'}}>College:</strong> {profile.reviewerCollege}<br />
                <strong style={{color:'black'}}>Country:</strong> {profile.reviewerCountry}<br/>
                <strong style={{color:'black'}}>Username:</strong> {profile.reviewerUserName}<br />
                <strong style={{color:'black'}}>Password:</strong> {profile.reviewerPassword}
              </Card.Text>
              <Button variant="primary" style={{backgroundColor:'#A01E1E',border:0}} onClick={handleShow}>
                Edit Profile
              </Button>
            </Card.Body>
                    </Col>
                </Row>
            </Container>
         
          </Card>
       
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formReviewerName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="reviewerName"
                value={updatedProfile.reviewerName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formReviewerDesignation">
              <Form.Label>Designation</Form.Label>
              <Form.Control
                type="text"
                name="reviewerDesignation"
                value={updatedProfile.reviewerDesignation}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formReviewerCollege">
              <Form.Label>College</Form.Label>
              <Form.Control
                type="text"
                name="reviewerCollege"
                value={updatedProfile.reviewerCollege}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formReviewerCountry">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                name="reviewerCountry"
                value={updatedProfile.reviewerCountry}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formReviewerPic">
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control
                type="text"
                name="reviewerPic"
                value={updatedProfile.reviewerPic}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formReviewerUserName">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                name="reviewerUserName"
                value={updatedProfile.reviewerUserName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formReviewerPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                name="reviewerPassword"
                value={updatedProfile.reviewerPassword}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
    <FooterReviewer/>
    </div>

  );
};

export default ReviewerProfile;
