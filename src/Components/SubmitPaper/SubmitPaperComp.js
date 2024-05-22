import React, { useContext, useState } from 'react'
import { Breadcrumb, Button, Card, Col, Container, Form, ListGroup, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppContext from '../AppContext';

function SubmitPaperComp() {

    // State variables to store form data
  const [formData, setFormData] = useState({
    title:'',
    vol:'',
    name01: '',
    dept01: '',
    org01: '',
    ctry01: '',
    email01: '',
    phn01: '',
    name02: '',
    dept02: '',
    org02: '',
    ctry02: '',
    email02: '',
    phn02: '',
    name03: '',
    dept03: '',
    org03: '',
    ctry03: '',
    email03: '',
    phn03: '',
    name04: '',
    dept04: '',
    org04: '',
    ctry04: '',
    email04: '',
    phn04: '',
    name05: '',
    dept05: '',
    org05: '',
    ctry05: '',
    email05: '',
    phn05: '',
    pubPaper:'/current-isssue',
    cetificate:'/current-isssue',
    status:'In-review'
  });
  const { variableValue, setVariableValue } = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    
    try {
      const response = await fetch(`${variableValue}/papers`, {
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
        setFormData({ // Reset form data
            title:'',
            vol:'',
            paper:'',
          name01: '',
          dept01: '',
          org01: '',
          ctry01: '',
          email01: '',
          phn01: '',
          name02: '',
          dept02: '',
          org02: '',
          ctry02: '',
          email02: '',
          phn02: '',
          name03: '',
          dept03: '',
          org03: '',
          ctry03: '',
          email03: '',
          phn03: '',
          name04: '',
          dept04: '',
          org04: '',
          ctry04: '',
          email04: '',
          phn04: '',
          name05: '',
          dept05: '',
          org05: '',
          ctry05: '',
          email05: '',
          phn05: ''
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

  // Function to handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  function handleReset(){
    setFormData({ // Reset form data
        title:'',
        vol:'',
        paper:'',
      name01: '',
      dept01: '',
      org01: '',
      ctry01: '',
      email01: '',
      phn01: '',
      name02: '',
      dept02: '',
      org02: '',
      ctry02: '',
      email02: '',
      phn02: '',
      name03: '',
      dept03: '',
      org03: '',
      ctry03: '',
      email03: '',
      phn03: '',
      name04: '',
      dept04: '',
      org04: '',
      ctry04: '',
      email04: '',
      phn04: '',
      name05: '',
      dept05: '',
      org05: '',
      ctry05: '',
      email05: '',
      phn05: ''
    });
  }

  return (
    <div>
        <Breadcrumb style={{backgroundColor:' #E8E7E7'}}>
 <Breadcrumb.Item style={{marginLeft:'20px'}}><Link to="/">Home</Link></Breadcrumb.Item>
 <Breadcrumb.Item active>Submit Paper</Breadcrumb.Item>
</Breadcrumb>
        <Container fluid>
            <Row>
                <Col xl={8} lg={8} sm={12} className='mt-3'>
                <h1 style={{color:'#A01E1E',textAlign:'center'}}>Submit Paper</h1>
                <Container style={{border:'1px solid black',padding:'10px',marginTop:'2rem',marginBottom:'1rem',borderRadius:'10px'}}>
            <Container >
                <Row className='m-1'>
                <Form.Group className='mb-2' controlId="vol">
  <Form.Label style={{fontWeight:600}}>Upcoming Volume<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
  <Form.Control
    as="select"
    name="vol"
    value={formData.vol}
    onChange={handleInputChange}
    
  >
    <option value="">Choose your volume</option>
    <option value="mar2024">Volume 01, Issue 01, March 2024</option>
    
  </Form.Control>
  
</Form.Group>
                </Row>
                <Row className="m-1">
                <Form.Group className='mb-3'  controlId="title" >
        <Form.Label style={{fontWeight:600}}>Title of Paper<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control type="text" name='title' placeholder="Enter title of paper " value={formData.title} onChange={handleInputChange}/>
      </Form.Group>
                </Row>
                <Row className="m-1">
                <Form.Group className='mb-3'  controlId="paper" >
        <Form.Label style={{fontWeight:600}}>Submit Paper<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control type="text" name='paper' placeholder="Enter url of paper " value={formData.paper} onChange={handleInputChange}/>
      </Form.Group>
      <p style={{color:'grey'}}>Max. File Size : 2MB. Please Upload Word File (.docx, .doc) extension only.</p>
                </Row>
            <Row className=' p-2 m-2 rounded text-light' style={{backgroundColor:'#A01E1E',fontWeight:600}}>#Author 01</Row>
            <Row>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <Form.Group className="m-2" controlId="name01" >
        <Form.Label style={{fontWeight:600}}>Name<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control type="text" name='name01' placeholder="Enter name " value={formData.name01} onChange={handleInputChange}/>
      </Form.Group>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <Form.Group className="m-2" controlId="dept01">
        <Form.Label style={{fontWeight:600}}>Department<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control type="text" name='dept01' placeholder="Enter department" value={formData.dept01} onChange={handleInputChange}/>
      </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <Form.Group className="m-2" controlId="org01">
        <Form.Label style={{fontWeight:600}}>Organization Name<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control type="text" name='org01' placeholder="Enter organization name" value={formData.org01} onChange={handleInputChange}/>
      </Form.Group>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <Form.Group className="m-2" controlId="ctry01">
        <Form.Label style={{fontWeight:600}}>Country<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control type="text" name='ctry01' placeholder="Enter country" value={formData.ctry01} onChange={handleInputChange}/>
      </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <Form.Group className="m-2" controlId="email01">
        <Form.Label style={{fontWeight:600}}>Email address<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control type="text" name='email01' placeholder="Enter email address" value={formData.email01} onChange={handleInputChange}/>
      </Form.Group>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <Form.Group className="m-2" controlId="phn01">
        <Form.Label style={{fontWeight:600}}>Phone number<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control type="text" name='phn01' placeholder="Enter phone number" value={formData.phn01} onChange={handleInputChange}/>
      </Form.Group>
                </Col>
            </Row>
            </Container>
            <Container>
            <Row className=' p-2 m-2 rounded text-light' style={{backgroundColor:'#A01E1E',fontWeight:600}}>#Author 02</Row>
            <Row>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <Form.Group className="m-2" controlId="name02" >
        <Form.Label style={{fontWeight:600}}>Name</Form.Label>
        <Form.Control type="text" name='name02' placeholder="Enter name " value={formData.name02} onChange={handleInputChange}/>
      </Form.Group>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <Form.Group className="m-2" controlId="dept02">
        <Form.Label style={{fontWeight:600}}>Department</Form.Label>
        <Form.Control type="text" name='dept02' placeholder="Enter department" value={formData.dept02} onChange={handleInputChange}/>
      </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <Form.Group className="m-2" controlId="org02">
        <Form.Label style={{fontWeight:600}}>Organization Name</Form.Label>
        <Form.Control type="text" name='org02' placeholder="Enter organization name" value={formData.org02} onChange={handleInputChange}/>
      </Form.Group>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <Form.Group className="m-2" controlId="ctry02">
        <Form.Label style={{fontWeight:600}}>Country</Form.Label>
        <Form.Control type="text" name='ctry02' placeholder="Enter country" value={formData.ctry02} onChange={handleInputChange}/>
      </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <Form.Group className="m-2" controlId="email02">
        <Form.Label style={{fontWeight:600}}>Email address</Form.Label>
        <Form.Control type="text" name='email02' placeholder="Enter email address" value={formData.email02} onChange={handleInputChange}/>
      </Form.Group>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <Form.Group className="m-2" controlId="phn02">
        <Form.Label style={{fontWeight:600}}>Phone number</Form.Label>
        <Form.Control type="text" name='phn02' placeholder="Enter phone number" value={formData.phn02} onChange={handleInputChange}/>
      </Form.Group>
                </Col>
            </Row>
            </Container>
            <Container>
            <Row className=' p-2 m-2 rounded text-light' style={{backgroundColor:'#A01E1E',fontWeight:600}}>#Author 03</Row>
            <Row>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <Form.Group className="m-2" controlId="name03" >
        <Form.Label style={{fontWeight:600}}>Name</Form.Label>
        <Form.Control type="text" name='name03' placeholder="Enter name " value={formData.name03} onChange={handleInputChange}/>
      </Form.Group>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <Form.Group className="m-2" controlId="dept03">
        <Form.Label style={{fontWeight:600}}>Department</Form.Label>
        <Form.Control type="text" name='dept03' placeholder="Enter department" value={formData.dept03} onChange={handleInputChange}/>
      </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <Form.Group className="m-2" controlId="org03">
        <Form.Label style={{fontWeight:600}}>Organization Name</Form.Label>
        <Form.Control type="text" name='org03' placeholder="Enter organization name" value={formData.org03} onChange={handleInputChange}/>
      </Form.Group>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <Form.Group className="m-2" controlId="ctry03">
        <Form.Label style={{fontWeight:600}}>Country</Form.Label>
        <Form.Control type="text" name='ctry03' placeholder="Enter country" value={formData.ctry03} onChange={handleInputChange}/>
      </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <Form.Group className="m-2" controlId="email03">
        <Form.Label style={{fontWeight:600}}>Email address</Form.Label>
        <Form.Control type="text" name='email03' placeholder="Enter email address" value={formData.email03} onChange={handleInputChange}/>
      </Form.Group>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <Form.Group className="m-2" controlId="phn03">
        <Form.Label style={{fontWeight:600}}>Phone number</Form.Label>
        <Form.Control type="text" name='phn03' placeholder="Enter phone number" value={formData.phn03} onChange={handleInputChange}/>
      </Form.Group>
                </Col>
            </Row>
            </Container>
            <Container>
            <Row className=' p-2 m-2 rounded text-light' style={{backgroundColor:'#A01E1E',fontWeight:600}}>#Author 04</Row>
            <Row>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <Form.Group className="m-2" controlId="name04" >
        <Form.Label style={{fontWeight:600}}>Name</Form.Label>
        <Form.Control type="text" name='name04' placeholder="Enter name " value={formData.name04} onChange={handleInputChange}/>
      </Form.Group>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <Form.Group className="m-2" controlId="dept04">
        <Form.Label style={{fontWeight:600}}>Department</Form.Label>
        <Form.Control type="text" name='dept04' placeholder="Enter department" value={formData.dept04} onChange={handleInputChange}/>
      </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <Form.Group className="m-2" controlId="org04">
        <Form.Label style={{fontWeight:600}}>Organization Name</Form.Label>
        <Form.Control type="text" name='org04' placeholder="Enter organization name" value={formData.org04} onChange={handleInputChange}/>
      </Form.Group>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <Form.Group className="m-2" controlId="ctry04">
        <Form.Label style={{fontWeight:600}}>Country</Form.Label>
        <Form.Control type="text" name='ctry04' placeholder="Enter country" value={formData.ctry04} onChange={handleInputChange}/>
      </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <Form.Group className="m-2" controlId="email04">
        <Form.Label style={{fontWeight:600}}>Email address</Form.Label>
        <Form.Control type="text" name='email04' placeholder="Enter email address" value={formData.email04} onChange={handleInputChange}/>
      </Form.Group>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <Form.Group className="m-2" controlId="phn04">
        <Form.Label style={{fontWeight:600}}>Phone number</Form.Label>
        <Form.Control type="text" name='phn04' placeholder="Enter phone number" value={formData.phn04} onChange={handleInputChange}/>
      </Form.Group>
                </Col>
            </Row>
            </Container>
            <Container>
            <Row className=' p-2 m-2 rounded text-light' style={{backgroundColor:'#A01E1E',fontWeight:600}}>#Author 05</Row>
            <Row>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <Form.Group className="m-2" controlId="name05" >
        <Form.Label style={{fontWeight:600}}>Name</Form.Label>
        <Form.Control type="text" name='name05' placeholder="Enter name " value={formData.name05} onChange={handleInputChange}/>
      </Form.Group>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <Form.Group className="m-2" controlId="dept05">
        <Form.Label style={{fontWeight:600}}>Department</Form.Label>
        <Form.Control type="text" name='dept05' placeholder="Enter department" value={formData.dept05} onChange={handleInputChange}/>
      </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <Form.Group className="m-2" controlId="org05">
        <Form.Label style={{fontWeight:600}}>Organization Name</Form.Label>
        <Form.Control type="text" name='org05' placeholder="Enter organization name" value={formData.org05} onChange={handleInputChange}/>
      </Form.Group>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <Form.Group className="m-2" controlId="ctry05">
        <Form.Label style={{fontWeight:600}}>Country</Form.Label>
        <Form.Control type="text" name='ctry05' placeholder="Enter country" value={formData.ctry05} onChange={handleInputChange}/>
      </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <Form.Group className="m-2" controlId="email05">
        <Form.Label style={{fontWeight:600}}>Email address</Form.Label>
        <Form.Control type="text" name='email05' placeholder="Enter email address" value={formData.email05} onChange={handleInputChange}/>
      </Form.Group>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <Form.Group className="m-2" controlId="phn05">
        <Form.Label style={{fontWeight:600}}>Phone number</Form.Label>
        <Form.Control type="text" name='phn05' placeholder="Enter phone number" value={formData.phn05} onChange={handleInputChange}/>
      </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col className='m-2'>
                <Button type="button" className="btn btn-primary" style={{backgroundColor:'#A01E1E',border:0}} onClick={handleSubmit}>Submit</Button>
                </Col>
                <Col className='m-2'>
                <Button type="button" className="btn btn-primary" style={{backgroundColor:'#E8E7E7',border:0,color:'black'}} onClick={handleReset}>Reset</Button>
                </Col>
            </Row>
            </Container>
            
        </Container>
                </Col>
                <Col xl={4} lg={4}  sm={12}>
                <div style={{marginTop:'5rem',display:'flex',alignItems:'center',justifyContent:'center'}}>
           <Card style={{width:'18rem',borderColor:'black' }}>
 <Card.Header style={{ backgroundColor:'#A01E1E',color:'white',fontWeight:600,textAlign:'center'}}>Paper</Card.Header>
 <ListGroup variant="flush">
 <ListGroup.Item style={{backgroundColor:'#E8E7E7',padding:'15px'}}><Link to="/submit-paper" style={{color:'#302CD4',fontWeight:600,textDecoration:'none'}}>Submit your paper</Link></ListGroup.Item>
   <ListGroup.Item style={{backgroundColor:'#E8E7E7',padding:'15px'}}><Link to="/check-status" style={{color:'#302CD4',fontWeight:600,textDecoration:'none'}}>Check paper status</Link></ListGroup.Item>

   
 </ListGroup>
</Card>
           </div>
           
          

       

           <div style={{marginTop:'5rem',display:'flex',alignItems:'center',justifyContent:'center'}}>
           <Card style={{width:'18rem',borderColor:'black' }}>
 <Card.Header style={{ backgroundColor:'#A01E1E',color:'white',fontWeight:600,textAlign:'center'}}>Issue</Card.Header>
 <ListGroup variant="flush">
 <ListGroup.Item style={{backgroundColor:'#E8E7E7',padding:'15px'}}><Link to="/current-issue-2024" style={{color:'#302CD4',fontWeight:600,textDecoration:'none'}}>Current Issue</Link></ListGroup.Item>
   <ListGroup.Item style={{backgroundColor:'#E8E7E7',padding:'15px'}}><Link to="/past-issue" style={{color:'#302CD4',fontWeight:600,textDecoration:'none'}}>Past Issue</Link></ListGroup.Item>
   <ListGroup.Item style={{backgroundColor:'#E8E7E7',padding:'15px'}}><Link to="/special-issue" style={{color:'#302CD4',fontWeight:600,textDecoration:'none'}}>Special Issue</Link></ListGroup.Item>

   
 </ListGroup>
</Card>
           </div>
                </Col>
            </Row>
        </Container>
       
         

           {/* Success Modal */}
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

export default SubmitPaperComp