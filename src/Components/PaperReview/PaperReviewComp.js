import React, { useContext, useEffect, useState } from 'react';
import { Breadcrumb, Button, Card, Col, Container, Image, ListGroup, Row ,Table,Form, Modal } from 'react-bootstrap';
import pdf from '../../Assets/Images/pdf.png';
import { Link } from 'react-router-dom';
import HeaderReviewer from '../Reviewer/HeaderReviewer';
import FooterReviewer from '../Reviewer/FooterReviewer';
import AppContext from '../AppContext';

function PaperReviewComp() {
    const [currentPaper, setCurrentPaper] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedPaper, setSelectedPaper] = useState(null);
    const [updatedStatus, setUpdatedStatus] = useState('');
    const [updatedPubPaper, setUpdatedPubPaper] = useState('');
    const [updatedCertificate, setUpdatedCertificate] = useState('');

    const { variableValue, setVariableValue } = useContext(AppContext);

    useEffect(() => {
        fetch(`${variableValue}/papers?status=In-review`)
            .then(response => response.json())
            .then(data => setCurrentPaper(data))
            .catch(error => console.error('Error fetching reported contents:', error));
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleUpdateButtonClick = (paper) => {
        setSelectedPaper(paper);
        setUpdatedStatus(paper.status);
        setUpdatedPubPaper(paper.pubPaper);
        setUpdatedCertificate(paper.certificate);
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    const handleStatusChange = (event) => {
        setUpdatedStatus(event.target.value);
    };

    const handlePubPaperChange = (event) => {
        setUpdatedPubPaper(event.target.value);
    };

    const handleCertificateChange = (event) => {
        setUpdatedCertificate(event.target.value);
    };

    const handleUpdateSubmit = () => {
        const updatedData = {
            status: updatedStatus,
            pubPaper: updatedPubPaper,
            certificate: updatedCertificate
        };
    
        fetch(`${variableValue}/papers/${selectedPaper.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update paper');
            }
            // Assuming the update was successful, close the modal
            setShowModal(false);
        })
        .catch(error => {
            console.error('Error updating paper:', error);
            // Handle error as needed
        });
    };
    

    const filteredPapers = currentPaper.filter(paper =>
        paper.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <HeaderReviewer/>
            <Container>
                <Container>
                    <Row className='mt-3'>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <h4 style={{textAlign:'center',color:'#302CD4'}}>Search your paper using title : </h4>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                            <Form.Group controlId="search">
                                <Form.Control
                                    type="text"
                                    placeholder="Search by title..."
                                    value={searchTerm}
                                    onChange={handleSearch}
                                    style={{borderColor:'black'}}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Container>

                <div className="table-responsive rounded mt-4">
                    <Table striped bordered hover style={{borderColor:'black'}}>
                        <thead>
                            <tr>
                                <th style={{backgroundColor:'#A01E1E',color:'white',fontWeight:600,textAlign:'center',borderColor:'grey'}}>S.No</th>
                                <th style={{backgroundColor:'#A01E1E',color:'white',fontWeight:600,textAlign:'center',borderColor:'grey'}}>Title</th>
                                <th style={{backgroundColor:'#A01E1E',color:'white',fontWeight:600,textAlign:'center',borderColor:'grey'}}>Authors</th>
                                <th style={{backgroundColor:'#A01E1E',color:'white',fontWeight:600,textAlign:'center',borderColor:'grey'}}>Paper</th>
                                <th style={{backgroundColor:'#A01E1E',color:'white',fontWeight:600,textAlign:'center',borderColor:'grey'}}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredPapers.map((paper, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div>
                                            <h5 style={{color:'#302CD4'}}>{paper.title}</h5>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <p style={{color:'#008000',fontWeight:600}}>{paper.name01}</p>
                                            <p style={{color:'#008000',fontWeight:600}}>{paper.name02}</p>
                                            <p style={{color:'#008000',fontWeight:600}}>{paper.name03}</p>
                                            <p style={{color:'#008000',fontWeight:600}}>{paper.name04}</p>
                                            <p style={{color:'#008000',fontWeight:600}}>{paper.name05}</p>
                                        </div>
                                    </td>
                                    <td>{paper.paper}</td>
                                    <td><Button onClick={() => handleUpdateButtonClick(paper)}>Update</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Container>

            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Paper</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="status">
                        <Form.Label>Status</Form.Label>
                        <Form.Control as="select" value={updatedStatus} onChange={handleStatusChange}>
                            <option value="In-review">In Review</option>
                            <option value="Accepted">Accepted</option>
                            <option value="Published">Published</option>
                            <option value="Rejected">Rejected</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="pubPaper">
                        <Form.Label>Pub Paper</Form.Label>
                        <Form.Control type="text" value={updatedPubPaper} onChange={handlePubPaperChange} />
                    </Form.Group>
                    <Form.Group controlId="certificate">
                        <Form.Label>Certificate</Form.Label>
                        <Form.Control type="text" value={updatedCertificate} onChange={handleCertificateChange} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdateSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <FooterReviewer/>
        </div>
    );
}

export default PaperReviewComp;
