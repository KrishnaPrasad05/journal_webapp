import React, { useState, useEffect, useContext } from 'react';
import { Form, Button, Modal, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AppContext from '../AppContext';

const LogInReviewerComp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
    password: ''
  });

  const { variableValue } = useContext(AppContext);
  const [loggedInID, setloggedInID]=useState([]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailureModal, setShowFailureModal] = useState(false);
  const [showEmptyModal, setShowEmptyModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState([]);

  useEffect(() => {
    // Fetch credentials from JSON server
    fetch(`${variableValue}/joinReviewer`)
      .then(response => response.json())
      .then(data => setCredentials(data))
      .catch(error => console.error('Error fetching credentials:', error));
  }, [variableValue]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleCloseSuccessModal = () => setShowSuccessModal(false);
  const handleCloseFailureModal = () => setShowFailureModal(false);
  const handleCloseEmptyModal = () => setShowEmptyModal(false);

  const validateForm = () => {
    const errors = {};
    if (!formData.email) {
      errors.email = 'Username is required';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setShowEmptyModal(true);
      return;
    }

    const foundCredential = credentials.find(
      credential => credential.reviewerUserName === formData.email && credential.reviewerPassword === formData.password
    );

    if (foundCredential) {
      console.log(foundCredential.id)
      setloggedInID(foundCredential.id);
      localStorage.setItem('loggedInID', foundCredential.id);
      console.log(loggedInID);
      setShowSuccessModal(true);
      setFormData({
        email: '',
        password: ''
      });
    } else {
      setShowFailureModal(true);
    }
  };

  return (
    <section>
      <Header />
      <Container style={{ borderRadius: '15px', marginTop: '1.2rem', marginBottom: '1rem' }}>
        <Row>
          <h1 style={{ color: '#A01E1E', textAlign: 'center' }}>Hello reviewer,</h1>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Form onSubmit={handleSubmit} style={{ backgroundColor: '#FBF3CB', padding: '30px', borderRadius: '10px', width: '30rem' }}>
              <Form.Group controlId="email" className='mb-3'>
                <Form.Label style={{ color: '#302CD4', fontWeight: 600 }}>
                  Username<span style={{ color: 'red', fontSize: '18px' }}>*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter email address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!formErrors.email}
                />
                <Form.Control.Feedback type="invalid">{formErrors.email}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="password" className='mb-3'>
                <Form.Label style={{ color: '#302CD4', fontWeight: 600 }}>
                  Password<span style={{ color: 'red', fontSize: '18px' }}>*</span>
                </Form.Label>
                <div className="password-input-group">
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    isInvalid={!!formErrors.password}
                    className='mb-1'
                  />
                  <Form.Control.Feedback type="invalid">{formErrors.password}</Form.Control.Feedback>
                  <Form.Check
                    type="checkbox"
                    label="Show Password"
                    onChange={toggleShowPassword}
                    style={{ color: 'green', fontWeight: 600 }}
                  />
                </div>
              </Form.Group>

              <div className='mb-1' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button variant="primary" type="submit" style={{ backgroundColor: '#A01E1E', border: 'none' }}>Login</Button>
              </div>
            </Form>
          </div>
        </Row>
      </Container>
      <Modal show={showSuccessModal} onHide={handleCloseSuccessModal} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: 'green', fontWeight: 600 }}>Login Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>You have successfully logged in.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" as={Link} to="/reviewer-home">
            Proceed
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showFailureModal} onHide={handleCloseFailureModal} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: '#fcd12a', fontWeight: 600 }}>Login Unsuccessful</Modal.Title>
        </Modal.Header>
        <Modal.Body>You have entered wrong password.</Modal.Body>
      </Modal>

      <Modal show={showEmptyModal} onHide={handleCloseEmptyModal} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: 'maroon', fontWeight: 600 }}>Login Unsuccessful</Modal.Title>
        </Modal.Header>
        <Modal.Body>Values should not be empty.</Modal.Body>
      </Modal>

      <Footer />
    </section>
  );
};

export default LogInReviewerComp;
