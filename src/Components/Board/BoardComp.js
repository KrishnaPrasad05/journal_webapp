import React, { useContext, useEffect, useState } from 'react'
import { Breadcrumb, Card, Col, Container, Image, ListGroup, Row } from 'react-bootstrap'
import {  Link } from 'react-router-dom';
import AppContext from '../AppContext';
function BoardComp() {
  const { variableValue, setVariableValue } = useContext(AppContext);
    const [reviewer, setReviewer] = useState([]);
    useEffect(() => {
        fetch(`${variableValue}/joinReviewer`)
            .then(response => response.json())
            .then(data => setReviewer(data))
            .catch(error => console.error('Error fetching reported contents:', error));
    }, []);
  return (
    <div>
    <Breadcrumb style={{backgroundColor:' #E8E7E7'}}>
 <Breadcrumb.Item style={{marginLeft:'20px'}}><Link to="/">Home</Link></Breadcrumb.Item>
 <Breadcrumb.Item active>Board</Breadcrumb.Item>
</Breadcrumb>
<Container fluid>
   <Row>
       <Col xl={8} lg={8} sm={12} className='mt-4'>
       <Container fluid>
        <Row className='mt-3'>
        {reviewer.map((man, index) => (
            <Col className='p-1' md={6} lg={6} xxl={6} xl={6} >
            <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',flexDirection:'row',border:'1px solid black',borderRadius:'10px',padding:'10px'}}>
            <div style={{borderRadius:'20px',padding:'10px'}}>
                    <Image src={man.reviewerPic} style={{width:'100px',height:'100px',borderRadius:'5px'}}/>
                </div>
                <div style={{lineHeight:'15px'}}>
                    <p style={{color:'#A01E1E',fontWeight:600}}>{man.reviewerName},{man.reviewerDesignation}</p>
                    
                    <p style={{color:'#302CD4'}}>{man.reviewerCollege}</p>
                </div>
            </div>
               
            
            </Col>))}
         </Row>
       </Container>
       </Col>
       <Col xl={4} lg={4}  sm={12} style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
           <div style={{marginTop:'3rem'}}>
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
           
           <div style={{marginTop:'5rem',marginBottom:'1rem'}}>
           <Card style={{width:'18rem',borderColor:'black' }}>
 <Card.Header style={{ backgroundColor:'#A01E1E',color:'white',fontWeight:600,textAlign:'center'}}>For Reviewers</Card.Header>
 <ListGroup variant="flush">
 <ListGroup.Item style={{backgroundColor:'#E8E7E7',padding:'15px'}}><Link to="/board" style={{color:'#302CD4',fontWeight:600,textDecoration:'none'}}>Editorial Desk</Link></ListGroup.Item>
   <ListGroup.Item style={{backgroundColor:'#E8E7E7',padding:'15px'}}><Link to="/join-reviewer" style={{color:'#302CD4',fontWeight:600,textDecoration:'none'}}>Join As Reviewer</Link></ListGroup.Item>

   
 </ListGroup>
</Card>
           </div>
       
       </Col>
   </Row>
</Container>
</div>
  )
}

export default BoardComp