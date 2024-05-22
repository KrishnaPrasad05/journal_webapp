import React, { useEffect, useState } from 'react';
import { Button, Container, Modal, Row, Form, Table, Image } from 'react-bootstrap';
import view from '../../Assets/Images/view.png';
import FooterAdmin from './FooterAdmin';

function AddReviewer() {
    const [reviewers, setReviewers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [selectedReviewerIndex, setSelectedReviewerIndex] = useState(null); // Define selectedReviewerIndex

    useEffect(() => {
        fetch('https://ijrma-server.onrender.com/joinReviewer')
            .then(response => response.json())
            .then(data => setReviewers(data))
            .catch(error => console.error('Error fetching reviewers:', error));
    }, []);

    const handleAddReviewer = async () => {
        if (selectedReviewerIndex === null) return;

        try {
            const reviewerToAdd = reviewers[selectedReviewerIndex];
            if (!reviewerToAdd) {
                console.error('Reviewer to add is undefined or null.');
                return;
            }

            const payload = {
                reviewerUserName: username,
                reviewerPassword: password,
                reviewerName: reviewerToAdd.reviewerName,
                reviewerDesignation: reviewerToAdd.reviewerDesignation,
                reviewerCollege: reviewerToAdd.reviewerCollege,
                reviewerCountry: reviewerToAdd.reviewerCountry,
                reviewerPic: reviewerToAdd.reviewerPic,
                reviewerResume: reviewerToAdd.reviewerResume,
            };

            console.log('Payload being sent:', payload);

            const response = await fetch('https://ijrma-server.onrender.com/reviewers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                const response1 = await fetch(`https://ijrma-server.onrender.com/joinReviewer/${reviewerToAdd.id}`, {
                    method: 'DELETE',
                });

                if (response1.ok) {
                    const updatedReviewers = [...reviewers];
                    updatedReviewers.splice(selectedReviewerIndex, 1);
                    setReviewers(updatedReviewers);
                    handleCloseModal();
                } else {
                    console.error('Failed to remove reviewer from the joinReviewer list');
                }
            } else {
                const errorText = await response.text();
                console.error('Failed to add reviewer:', response.status, errorText);
            }
        } catch (error) {
            console.error('Error adding reviewer:', error);
        }
    };

    const handleRejectReviewer = async (index) => {
        try {
            const response = await fetch(`https://ijrma-server.onrender.com/joinReviewer/${reviewers[index].id}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                const updatedReviewers = [...reviewers];
                updatedReviewers.splice(index, 1);
                setReviewers(updatedReviewers);
            } else {
                console.error('Failed to reject reviewer');
            }
        } catch (error) {
            console.error('Error rejecting reviewer:', error);
        }
    };

    const handleCloseModal = () => {
        setUsername('');
        setPassword('');
        setShowModal(false);
        setSelectedReviewerIndex(null);
    };

    const openModal = (index) => {
        setSelectedReviewerIndex(index);
        setShowModal(true);
    };

    return (
        <div>
            <Container>
                <Row>
                    <Table striped bordered hover style={{ borderColor: 'black' }}>
                        <thead>
                            <tr>
                                <th style={{ backgroundColor: '#A01E1E', color: 'white', fontWeight: 600, textAlign: 'center', borderColor: 'grey' }}>S.No</th>
                                <th style={{ backgroundColor: '#A01E1E', color: 'white', fontWeight: 600, textAlign: 'center', borderColor: 'grey' }}>Name</th>
                                <th style={{ backgroundColor: '#A01E1E', color: 'white', fontWeight: 600, textAlign: 'center', borderColor: 'grey' }}>Designation</th>
                                <th style={{ backgroundColor: '#A01E1E', color: 'white', fontWeight: 600, textAlign: 'center', borderColor: 'grey' }}>College Name</th>
                                <th style={{ backgroundColor: '#A01E1E', color: 'white', fontWeight: 600, textAlign: 'center', borderColor: 'grey' }}>Country</th>
                                <th style={{ backgroundColor: '#A01E1E', color: 'white', fontWeight: 600, textAlign: 'center', borderColor: 'grey' }}>Profile Picture</th>
                                <th style={{ backgroundColor: '#A01E1E', color: 'white', fontWeight: 600, textAlign: 'center', borderColor: 'grey' }}>Resume</th>
                                <th style={{ backgroundColor: '#A01E1E', color: 'white', fontWeight: 600, textAlign: 'center', borderColor: 'grey' }}>Add</th>
                                <th style={{ backgroundColor: '#A01E1E', color: 'white', fontWeight: 600, textAlign: 'center', borderColor: 'grey' }}>Reject</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reviewers.map((reviewer, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{reviewer.reviewerName}</td>
                                    <td>{reviewer.reviewerDesignation}</td>
                                    <td>{reviewer.reviewerCollege}</td>
                                    <td>{reviewer.reviewerCountry}</td>
                                    <td><Image src={reviewer.reviewerPic} style={{ width: '100px', height: '100px' }} /></td>
                                    <td><a href={reviewer.reviewerResume} target='_blank' rel='noopener noreferrer'><Image src={view} style={{ width: '40px', height: '40px' }} /></a></td>
                                    <td><Button onClick={() => openModal(index)}>Add</Button></td>
                                    <td><Button onClick={() => handleRejectReviewer(index)}>Reject</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Row>
            </Container>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Reviewer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                    <Button variant="primary" onClick={handleAddReviewer}>Add</Button>
                </Modal.Footer>
            </Modal>
            <FooterAdmin/>
        </div>
    );
}

export default AddReviewer;
