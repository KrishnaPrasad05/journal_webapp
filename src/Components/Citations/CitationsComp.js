import React from 'react';
import BarGraph from '../BarGraph'; // Path to your BarGraph component
import { Link } from 'react-router-dom';
import { Breadcrumb, Card, ListGroup,Container,Col,Row } from 'react-bootstrap';

const CitationComp = () => {
 

  return (
    <div>
        <Breadcrumb style={{backgroundColor:' #E8E7E7'}}>
 <Breadcrumb.Item style={{marginLeft:'20px'}}><Link to="/">Home</Link></Breadcrumb.Item>
 <Breadcrumb.Item active>Citations</Breadcrumb.Item>
</Breadcrumb>
        <Container fluid>
            <Row>
                <Col xl={8} lg={8} sm={12} className='mt-2'>
                <h1 style={{color:'#A01E1E',textAlign:'center',marginBottom:'2rem'}}>Citations</h1>
               <Container>
                <BarGraph/>
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


                <div style={{marginTop:'5rem',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'1rem'}}>
           <Card style={{width:'18rem',borderColor:'black' }}>
 <Card.Header style={{ backgroundColor:'#A01E1E',color:'white',fontWeight:600,textAlign:'center'}}>Paper</Card.Header>
 <ListGroup variant="flush">
 <ListGroup.Item style={{backgroundColor:'#E8E7E7',padding:'15px'}}><Link to="/submit-paper" style={{color:'#302CD4',fontWeight:600,textDecoration:'none'}}>Submit your paper</Link></ListGroup.Item>
   <ListGroup.Item style={{backgroundColor:'#E8E7E7',padding:'15px'}}><Link to="/check-status" style={{color:'#302CD4',fontWeight:600,textDecoration:'none'}}>Check paper status</Link></ListGroup.Item>

   
 </ListGroup>
</Card>
           </div>
           
          

       

          
                </Col>
            </Row>
        </Container>
        
    </div>
  );
};

export default CitationComp;
