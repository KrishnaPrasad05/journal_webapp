import React, { useContext, useEffect, useState } from 'react'

import { Button, Container, Form, Row,Breadcrumb, Modal, Col, Card, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AppContext from '../AppContext'
import AdminHeader from '../Admin/Adminheader'
import FooterAdmin from './FooterAdmin'

function AnnouncementsAdmin() {
    const [contactContents, setContactContents] = useState([]);
const [showModal1, setShowModal1] = useState(false);
const [deleteIndex, setDeleteIndex] = useState(null);
  const [formData, setFormData] = useState({
    announcementTitle:'',
    announceTo:'',
    announcementContent: ''
    
});

const { variableValue, setVariableValue } = useContext(AppContext);

const [showModal, setShowModal] = useState(false);

const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log(formData)
    try {
      const response = await fetch(`${variableValue}/announcements`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        // Handle success response, maybe show a success message
        console.log('Form data submitted successfully');
       // Show modal on successful submission
        setFormData({ 
            announcementTitle:'',
    announceTo:'',
    announcementContent: '',
    });
    setShowModal(true); 
  } else {
    // Handle error response
    console.error('Failed to submit form data');
  }
} catch (error) {
  // Handle fetch error
  console.error('Error:', error);
}
};

const handleInputChange = (e) => {
const { name, value } = e.target;
setFormData({ ...formData, [name]: value });
};

function handleReset(){
setFormData({ 
    announcementTitle:'',
announceTo:'',
announcementContent: ''});
}




useEffect(() => {
    fetch(`${variableValue}/announcements`)
        .then(response => response.json())
        .then(data => {
            
            const filteredData = data.filter(item => (
                item.announcementTitle && item.announceTo && item.announcementContent
            ));
            setContactContents(filteredData);
        })
        .catch(error => console.error('Error fetching reported contents:', error));
}, []);

const handleDelete = (index) => {
    // Sending delete request to the server
    fetch(`${variableValue}/announcements/${contactContents[index].id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(() => {
        // Removing the item from the local state
        const updatedContents = [...contactContents];
        updatedContents.splice(index, 1);
        setContactContents(updatedContents);
    })
    .catch(error => console.error('Error deleting reported content:', error));
};
  return (
    <div>
        <AdminHeader/>
        <Breadcrumb style={{backgroundColor:' #E8E7E7'}}>
<Breadcrumb.Item style={{marginLeft:'20px'}}><Link to="/admin-home">Home</Link></Breadcrumb.Item>
<Breadcrumb.Item active>Announcement</Breadcrumb.Item>
</Breadcrumb>
        <Container  className='p-3 mt-5 mb-3'>
            <Row style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Form style={{backgroundColor:'#FBF3CB',padding:'15px',width:'50rem',borderRadius:'10px'}}>
      <Form.Group className="mb-3" controlId="announcementTitle">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name='announcementTitle' placeholder="Enter name " value={formData.announcementTitle} onChange={handleInputChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="announceTo">
        <Form.Label>Email address</Form.Label>
        <Form.Select name="announceTo" aria-label="announceTo" value={formData.announceTo} onChange={handleInputChange}>
                      <option value="">Select category</option>
                      <option value="User">User</option>
                      <option value="Reviewer">Reviewer</option>
                    </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="announcementContent">
        <Form.Label>Enter your query</Form.Label>
        <Form.Control as="textarea" rows={3} type="text" name='announcementContent' placeholder="Enter query " value={formData.announcementContent} onChange={handleInputChange}/>
      </Form.Group>
      <Row>
                <Col className='m-2 d-flex justify-content-center'>
                <Button type="button" className="btn btn-primary" style={{backgroundColor:'#A01E1E',border:0}} onClick={handleSubmit}>Submit</Button>
                </Col>
                <Col className='m-2 d-flex justify-content-center'>
                <Button type="button" className="btn btn-primary" style={{backgroundColor:'#E8E7E7',border:'1px solid black',color:'black'}} onClick={handleReset}>Reset</Button>
                </Col>
            </Row>
    </Form>
   
    
            </Row>
        </Container>

        <section>
            
            <Container style={{marginTop:'2rem'}}>
                <h1 style={{
                    textAlign:'center',color:'#A01E1E',fontWeight:600,marginBottom:'2rem'
                }}>Announcements</h1>
            <Row>
            {contactContents.map((content, index) => (
                <Col md={6} key={index} className="mb-3">
                    <Table >
                        <tr style={{border:'1px solid black',padding:'5px',backgroundColor:'#dddddd'}}>
                            <th style={{border:'1px solid black',padding:'5px',width:'10rem'}} >Title</th>
                            <td style={{paddingLeft:'10px'}}>{content.announcementTitle}</td>
                        </tr>
                        <tr style={{border:'1px solid black',padding:'5px'}}>
                            <th style={{border:'1px solid black',padding:'5px'}}>To</th>
                            <td style={{paddingLeft:'10px'}}>{content.announceTo}</td>
                        </tr>
                        <tr style={{border:'1px solid black',padding:'5px',backgroundColor:'#dddddd'}}>
                            <th style={{border:'1px solid black',padding:'5px'}}>Content</th>
                            <td style={{paddingLeft:'10px'}}>{content.announcementContent}</td>
                        </tr>
                        <tr style={{border:'1px solid black',padding:'5px'}}><Button variant="danger" className="btn-sm m-2" onClick={() => {
                                setDeleteIndex(index);
                                setShowModal1(true);
                            }}>Delete</Button></tr>
                    </Table>
                    
                    
                </Col>
            ))}
            </Row>

            <Modal show={showModal1} onHide={() => setShowModal1(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this content?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal1(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={() => {
                        handleDelete(deleteIndex);
                        setShowModal1(false);
                    }}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
           
        </section>
       

        <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your form has been submitted successfully.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
      <FooterAdmin/>
    </div>
  )
}

export default AnnouncementsAdmin