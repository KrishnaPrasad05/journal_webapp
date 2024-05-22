import React from 'react';
import { Breadcrumb, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const JoinUs = () => {
  const emailAddress = 'ijrmapublishers@gmail.com'; // Replace with your actual email address

  return (
    <div>
        <Header/>
        <Breadcrumb style={{backgroundColor:' #E8E7E7'}}>
 <Breadcrumb.Item style={{marginLeft:'20px'}}><Link to="/">Home</Link></Breadcrumb.Item>
 <Breadcrumb.Item active>Join as a reviewer</Breadcrumb.Item>
</Breadcrumb>
        <Container fluid>
            <Row>
<Col xl={8} lg={8} sm={12} className='mt-2'>
<Container>
<h1 style={{color:'#A01E1E'}}>Join Us as a Reviewer</h1>
      <p>Thank you for your interest in becoming a reviewer for our journal. Reviewers play a crucial role in maintaining the quality and integrity of the research published. If you are passionate about contributing to scholarly research and have expertise in relevant fields, we invite you to join our team.</p>
      <h3>How to Apply</h3>
      <ol style={{lineHeight:'35px'}}>
        <li><strong>Email Your Resume:</strong> Send your updated resume/CV to <a href={`mailto:${emailAddress}`}>{emailAddress}</a> with the subject line "Reviewer Application".</li>
        <li><strong>Application Review:</strong> Our editorial team will review your application and qualifications.</li>
        <li><strong>Selection Process:</strong> If selected, you will receive an email with further instructions and credentials to log in to our review platform.</li>
      </ol>
      <h3>What We Offer</h3>
      <ul style={{lineHeight:'35px'}}>
        <li><strong>Contribution to Scholarship:</strong> Opportunity to influence and contribute to cutting-edge research.</li>
        <li><strong>Recognition:</strong> Acknowledgment on our website and publications.</li>
        <li><strong>Professional Development:</strong> Stay updated with the latest research trends.</li>
      </ul>
      <p>We look forward to your application. For any queries or more information, please feel free to contact us at <a href={`mailto:${emailAddress}`}>{emailAddress}</a>.</p>
</Container>
</Col>
<Col xl={4} lg={4}  sm={12}>


                <div style={{marginTop:'1rem',display:'flex',alignItems:'center',justifyContent:'center'}} >
           <Card style={{width:'18rem',borderColor:'black' }}>
 <Card.Header style={{ backgroundColor:'#A01E1E',color:'white',fontWeight:600,textAlign:'center'}}>Authors</Card.Header>
 <ListGroup variant="flush">
 <ListGroup.Item style={{backgroundColor:'#E8E7E7',padding:'15px'}}><Link to="/guidelines" style={{color:'#302CD4',fontWeight:600,textDecoration:'none'}}>Guidelines</Link></ListGroup.Item>
   <ListGroup.Item style={{backgroundColor:'#E8E7E7',padding:'15px'}}><Link to="/processing-charges" style={{color:'#302CD4',fontWeight:600,textDecoration:'none'}}>Processing Charges</Link></ListGroup.Item>
   <ListGroup.Item style={{backgroundColor:'#E8E7E7',padding:'15px'}}><Link to="/citations" style={{color:'#302CD4',fontWeight:600,textDecoration:'none'}}>Citations</Link></ListGroup.Item>
   <ListGroup.Item style={{backgroundColor:'#E8E7E7',padding:'15px'}}><Link to="/impact-factor" style={{color:'#302CD4',fontWeight:600,textDecoration:'none'}}>Impact Factor</Link></ListGroup.Item>
   <ListGroup.Item style={{backgroundColor:'#E8E7E7',padding:'15px'}}><Link to="/special-issue-note" style={{color:'#302CD4',fontWeight:600,textDecoration:'none'}}>Special Issue</Link></ListGroup.Item>
   <ListGroup.Item style={{backgroundColor:'#E8E7E7',padding:'15px'}}><Link to="/doi" style={{color:'#302CD4',fontWeight:600,textDecoration:'none'}}>DOI</Link></ListGroup.Item>
 </ListGroup>
</Card>
           </div>


                
           
          

       

          
                </Col>
            </Row>
        </Container>
     <Footer/>
    </div>
  );
};

export default JoinUs;
