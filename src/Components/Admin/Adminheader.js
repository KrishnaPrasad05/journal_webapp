import React from 'react';
import { Breadcrumb, Col, Container, Image, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';
import logo from '../../Assets/Images/Logo.png';
import call from '../../Assets/Images/telephone-call.png';
import cal from '../../Assets/Images/calendar.png';
import wp from '../../Assets/Images/whatsapp.png';
import mail from '../../Assets/Images/email (1).png';
import '../../styles.css'
import { Link } from 'react-router-dom';
function AdminReviewer() {
  
  const handleClick = () => {
    window.location.href = 'tel:+919000112345';
  };

  const handleClick1 = () => {
    const whatsappUrl = 'https://wa.me/9000112345';
    window.location.href = whatsappUrl;
  };

  const handleClick2 = () => {
    const mailtoUrl = 'mailto:ijrmapublishers@gmail.com';
    window.location.href = mailtoUrl;
  };


  const currentDate = new Date();
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const monthsOfYear = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const dayOfMonth = currentDate.getDate();
  const month = monthsOfYear[currentDate.getMonth()];
  const year = currentDate.getFullYear();
  return (
    <div>

    
    {/* <Container fluid style={{backgroundColor:'#A01E1E',padding:'10px'}}>
      <Row>
       <Col xs={12} sm={6}  style={{color:'#FAFF00'}} >
       Issn Number
       </Col>
       <Col xs={12} sm={6}  style={{color:'#FAFF00'}}>
       Email adresss
       </Col>
       <Col xs={12} sm={6}  style={{color:'#FAFF00'}}>
       Phone number
       </Col>
       <Col xs={12} sm={6}  style={{color:'#FAFF00'}}>
       Whatsapp number
       </Col>
      </Row>
    </Container> */}
    <div id="topPlate" style={{backgroundColor:'#A01E1E',paddingTop:'10px',color:'yellow'}}>
    <p style={{cursor:'pointer'}} onClick={handleClick}><span><Image src={call} style={{width:'25px',height:'25px',margin:'2px'}}/></span>+91 90001 12345</p>
      <p style={{cursor:'pointer'}} onClick={handleClick1}><span><Image src={wp} style={{width:'35px',height:'35px',padding:'5px'}}/></span>90001 12345</p>
      <p style={{cursor:'pointer'}} onClick={handleClick2}><span><Image src={mail} style={{width:'35px',height:'35px',padding:'5px'}}/></span>ijrmapublishers@gmail.com</p>
      <p ><span><Image src={cal} style={{width:'25px',height:'25px',margin:'2px'}}/></span>{`${dayOfWeek}`}, {`${dayOfMonth}`}, {`${month}`}, {`${year}`}</p>
    </div>
    <Container className='mt-3' fluid>
        <Row>
            <Col sm={12} lg={4}  xl={4}>
            <Image src={logo} className='img-fluid' />
            </Col>
            <Col sm={12} lg={8} xl={8}>
                <Container>
                    <Row>
                    <h1 className="responsive-font" style={{fontFamily:'Irish Grover, sans-serif',color:'#A01E1E'}}>INTERNATIONAL JOURNAL FOR RESEARCH IN MULTI-DISCIPLINARY ADVANCEMENTS</h1>
                    </Row>
                    <Row>
                        <Col xs={12} sm={6} xl={6} lg={6} xxl={6} md={6}>
                        <i className="responsive-font2" style={{fontWeight:600,color:'#302CD4'}}>ISSN: 2555-8990</i>
                        </Col>
                        <Col xs={12} xl={6} sm={6} lg={6} xxl={6} md={6}>
                        <i className="responsive-font2" style={{fontWeight:600,color:'#302CD4'}}>IMPACT FACTOR: 7.5</i>
                        </Col>
                    </Row>
                    <Row>
                    <p className="responsive-font3" style={{wordSpacing:'5px',letterSpacing:'2px'}}>(A High Impact Factor, Bimonthly, Peer Reviewed & Referred Journal)</p>
                    </Row>
                </Container>
            </Col>
        </Row>
    </Container>
    <Navbar expand="lg"  style={{backgroundColor:'#A01E1E',color:'white'}}>
      <Container fluid >
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto bg-light" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ justifyContent: 'space-between', width: '100%' }}>
            <Nav.Link as={Link} to="/admin-home" className='text-light' style={{fontSize:'18px'}}>Home</Nav.Link>
            <Nav.Link as={Link} to="/admin-board" className='text-light' style={{fontSize:'18px'}}>Board</Nav.Link>
            
            
            <Nav.Link as={Link} to="/admin-add-reviewer" className='text-light' style={{fontSize:'18px'}}>Add reviewer</Nav.Link>
            
            
            <Nav.Link as={Link} to="/admin-contact-us" className='text-light' style={{fontSize:'18px'}}>Contact queries</Nav.Link>
            <Nav.Link as={Link} to="/admin-announcements" className='text-light' style={{fontSize:'18px'}}>Announcements</Nav.Link>
            
            <Nav.Link as={Link} to="/" className='text-light' style={{fontSize:'18px'}}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  
    </div>
  );
}

export default AdminReviewer;
