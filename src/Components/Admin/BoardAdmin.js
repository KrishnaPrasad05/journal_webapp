import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Image, Row, Table, Modal, Form ,Breadcrumb} from 'react-bootstrap';
import view from '../../Assets/Images/view.png';
import AppContext from '../AppContext';
import AdminHeader from '../Admin/Adminheader';
import FooterAdmin from './FooterAdmin';
import { Link } from 'react-router-dom';
function BoardAdmin() {
    const { variableValue, setVariableValue } = useContext(AppContext);
    const [reviewers, setReviewers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedReviewerIndex, setSelectedReviewerIndex] = useState(null);
    const [formData, setFormData] = useState({
        reviewerName: '',
        reviewerDesignation: '',
        reviewerCollege: '',
        reviewerCountry: '',
        reviewerUserName: '',
        reviewerPassword: ''
    });

    useEffect(() => {
        fetch(`${variableValue}/joinReviewer`)
            .then(response => response.json())
            .then(data => setReviewers(data))
            .catch(error => console.error('Error fetching reviewers:', error));
    }, []);

    const handleRemoveReviewer = async (index) => {
        const reviewerId = reviewers[index].id;

        try {
            const response = await fetch(`${variableValue}/joinReviewer/${reviewerId}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                const updatedReviewers = reviewers.filter((_, i) => i !== index);
                setReviewers(updatedReviewers);
            } else {
                console.error('Failed to remove reviewer');
            }
        } catch (error) {
            console.error('Error removing reviewer:', error);
        }
    };

    const handleOpenModal = (index) => {
        setSelectedReviewerIndex(index);
        const reviewer = reviewers[index];
        setFormData({
            reviewerName: reviewer.reviewerName,
            reviewerDesignation: reviewer.reviewerDesignation,
            reviewerCollege: reviewer.reviewerCollege,
            reviewerCountry: reviewer.reviewerCountry,
            reviewerPic: reviewer.reviewerPic,
            reviewerResume: reviewer.reviewerResume,
            reviewerUserName: reviewer.reviewerUserName,
            reviewerPassword: reviewer.reviewerPassword
        });
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedReviewerIndex(null);
        setFormData({
            reviewerName: '',
            reviewerDesignation: '',
            reviewerCollege: '',
            reviewerCountry: '',
            reviewerPic: '',
            reviewerResume: '',
            reviewerUserName: '',
            reviewerPassword: ''
        });
    };

    const handleUpdateReviewer = async () => {
        const reviewerId = reviewers[selectedReviewerIndex].id;

        try {
            const response = await fetch(`${variableValue}/joinReviewer/${reviewerId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const updatedReviewers = [...reviewers];
                updatedReviewers[selectedReviewerIndex] = { ...formData, id: reviewerId };
                setReviewers(updatedReviewers);
                handleCloseModal();
            } else {
                console.error('Failed to update reviewer');
            }
        } catch (error) {
            console.error('Error updating reviewer:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div>
            <AdminHeader/>
            <Breadcrumb style={{backgroundColor:' #E8E7E7'}}>
<Breadcrumb.Item style={{marginLeft:'20px'}}><Link to="/admin-home">Home</Link></Breadcrumb.Item>
<Breadcrumb.Item active>Board</Breadcrumb.Item>
</Breadcrumb>
            <Container className='mt-3'>
                <Row>
                    <Table striped responsive bordered hover style={{ borderColor: 'black' }}>
                        <thead>
                            <tr>
                                <th style={{ backgroundColor: '#A01E1E', color: 'white', fontWeight: 600, textAlign: 'center', borderColor: 'grey' }}>S.No</th>
                                <th style={{ backgroundColor: '#A01E1E', color: 'white', fontWeight: 600, textAlign: 'center', borderColor: 'grey' }}>Name</th>
                                <th style={{ backgroundColor: '#A01E1E', color: 'white', fontWeight: 600, textAlign: 'center', borderColor: 'grey' }}>Designation</th>
                                <th style={{ backgroundColor: '#A01E1E', color: 'white', fontWeight: 600, textAlign: 'center', borderColor: 'grey' }}>College Name</th>
                                <th style={{ backgroundColor: '#A01E1E', color: 'white', fontWeight: 600, textAlign: 'center', borderColor: 'grey' }}>Country</th>
                                <th style={{ backgroundColor: '#A01E1E', color: 'white', fontWeight: 600, textAlign: 'center', borderColor: 'grey' }}>Profile Picture</th>
                                <th style={{ backgroundColor: '#A01E1E', color: 'white', fontWeight: 600, textAlign: 'center', borderColor: 'grey' }}>Resume</th>
                                <th style={{ backgroundColor: '#A01E1E', color: 'white', fontWeight: 600, textAlign: 'center', borderColor: 'grey' }}>Username</th>
                                <th style={{ backgroundColor: '#A01E1E', color: 'white', fontWeight: 600, textAlign: 'center', borderColor: 'grey' }}>Password</th>
                                <th style={{ backgroundColor: '#A01E1E', color: 'white', fontWeight: 600, textAlign: 'center', borderColor: 'grey' }}>Update</th>
                                <th style={{ backgroundColor: '#A01E1E', color: 'white', fontWeight: 600, textAlign: 'center', borderColor: 'grey' }}>Remove</th>
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
                                    <td><a href={reviewer.reviewerResume} target='blank'><Image src={view} style={{ width: '40px', height: '40px' }} /></a></td>
                                    <td>{reviewer.reviewerUserName}</td>
                                    <td>{reviewer.reviewerPassword}</td>
                                    <td><Button onClick={() => handleOpenModal(index)}>Update</Button></td>
                                    <td><Button onClick={() => handleRemoveReviewer(index)}>Remove</Button></td>
                                </tr>))}
                        </tbody>
                    </Table>
                </Row>
            </Container>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Reviewer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="reviewerName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="reviewerName" value={formData.reviewerName} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="reviewerDesignation">
                            <Form.Label>Designation</Form.Label>
                            <Form.Control type="text" name="reviewerDesignation" value={formData.reviewerDesignation} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="reviewerCollege">
                            <Form.Label>College Name</Form.Label>
                            <Form.Control type="text" name="reviewerCollege" value={formData.reviewerCollege} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="reviewerCountry">
                            <Form.Label>Country</Form.Label>
                            <Form.Control type="text" name="reviewerCountry" value={formData.reviewerCountry} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="reviewerPic">
                            <Form.Label>Profile Pic</Form.Label>
                            <Form.Control type="text" name="reviewerPic" value={formData.reviewerPic} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="reviewerResume">
                            <Form.Label>Resume</Form.Label>
                            <Form.Control type="text" name="reviewerResume" value={formData.reviewerResume} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="reviewerUserName">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" name="reviewerUserName" value={formData.reviewerUserName} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="reviewerPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="text" name="reviewerPassword" value={formData.reviewerPassword} onChange={handleChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                    <Button variant="primary" onClick={handleUpdateReviewer}>Update</Button>
                </Modal.Footer>
            </Modal>
            <FooterAdmin/>
        </div>
    );
}

export default BoardAdmin;
