import React, { useContext, useState } from 'react'

import { Button, Container, Form, Row, Breadcrumb, Modal, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AppContext from '../AppContext'

function UserContactUsComp() {
  const [formData, setFormData] = useState({
    contacterName: '',
    contacterEmail: '',
    contacterQuery: ''
  });

  const [errors, setErrors] = useState({
    contacterName: '',
    contacterEmail: '',
    contacterQuery: ''
  });

  const { variableValue } = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);

  const validateForm = () => {
    let formIsValid = true;
    const newErrors = { contacterName: '', contacterEmail: '', contacterQuery: '' };

    if (!formData.contacterName) {
      formIsValid = false;
      newErrors.contacterName = 'Name is required';
    }

    if (!formData.contacterEmail) {
      formIsValid = false;
      newErrors.contacterEmail = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.contacterEmail)) {
      formIsValid = false;
      newErrors.contacterEmail = 'Email is invalid';
    }

    if (!formData.contacterQuery) {
      formIsValid = false;
      newErrors.contacterQuery = 'Query is required';
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch(`${variableValue}/contactUs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Form data submitted successfully');
        setFormData({ contacterName: '', contacterEmail: '', contacterQuery: '' });
        setShowModal(true);
      } else {
        console.error('Failed to submit form data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'contacterEmail') {
      if (!/\S+@\S+\.\S+/.test(value)) {
        setErrors({ ...errors, contacterEmail: 'Email is invalid' });
      } else {
        setErrors({ ...errors, contacterEmail: '' });
      }
    } else {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleReset = () => {
    setFormData({ contacterName: '', contacterEmail: '', contacterQuery: '' });
    setErrors({ contacterName: '', contacterEmail: '', contacterQuery: '' });
  };

  return (
    <div>
      <Breadcrumb style={{ backgroundColor: ' #E8E7E7' }}>
        <Breadcrumb.Item style={{ marginLeft: '20px' }}><Link to="/reviewer-home">Home</Link></Breadcrumb.Item>
        <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
      </Breadcrumb>
      <Container className='p-3 mt-3 mb-5'>
        <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h2 style={{ color: '#A01E1E', textAlign: 'center' }}>Feel free to connect with us,</h2>
          <Form style={{ backgroundColor: '#FBF3CB', padding: '15px', width: '50rem', borderRadius: '10px' }} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="contacterName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name='contacterName' placeholder="Enter name" value={formData.contacterName} onChange={handleInputChange} />
              {errors.contacterName && <div style={{ color: 'red' }}>{errors.contacterName}</div>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="contacterEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name='contacterEmail' placeholder="Enter email" value={formData.contacterEmail} onChange={handleInputChange} />
              {errors.contacterEmail && <div style={{ color: 'red' }}>{errors.contacterEmail}</div>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="contacterQuery">
              <Form.Label>Enter your query</Form.Label>
              <Form.Control as="textarea" rows={3} type="text" name='contacterQuery' placeholder="Enter query" value={formData.contacterQuery} onChange={handleInputChange} />
              {errors.contacterQuery && <div style={{ color: 'red' }}>{errors.contacterQuery}</div>}
            </Form.Group>
            <Row>
              <Col className='m-2 d-flex justify-content-center'>
                <Button type="submit" className="btn btn-primary" style={{ backgroundColor: '#A01E1E', border: 0 }}>Submit</Button>
              </Col>
              <Col className='m-2 d-flex justify-content-center'>
                <Button type="button" className="btn btn-primary" style={{ backgroundColor: '#E8E7E7', border: '1px solid black', color: 'black' }} onClick={handleReset}>Reset</Button>
              </Col>
            </Row>
          </Form>
        </Row>
      </Container>
      
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your form has been submitted successfully.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default UserContactUsComp
