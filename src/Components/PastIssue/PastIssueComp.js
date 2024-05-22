import React from 'react'
import { Breadcrumb, Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';


function PastIssueComp() {
  return (
    <div>
        <Breadcrumb style={{backgroundColor:' #E8E7E7'}}>
 <Breadcrumb.Item style={{marginLeft:'20px'}}><Link to="/">Home</Link></Breadcrumb.Item>
 <Breadcrumb.Item active>Past Issue</Breadcrumb.Item>
</Breadcrumb>
         <Container fluid>
         
            <Row>
                <Col xl={8} lg={8} sm={12} className='mt-4'>
                <h1 style={{color:'#A01E1E',textAlign:'center'}}>Past Issue</h1>
                <Container>
            <Row className='mt-3'>
            <Col className='m-1' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Card style={{width:'25rem',borderColor:'black',backgroundColor:'#E8E7E7' }}>
 <Card.Header style={{ backgroundColor:'#A01E1E',color:'white',fontWeight:600,textAlign:'center'}}>2023</Card.Header>
 
   
   <ul style={{backgroundColor:'#E8E7E7',color:'#302CD4',fontWeight:600,lineHeight:'35px'}}>
    <li><a href='#' style={{textDecoration:'none',color:'#302CD4'}}>Issue 01, Volume 01, March 2023</a></li>
    <li><a href='#' style={{textDecoration:'none',color:'#302CD4'}}>Issue 01, Volume 02, June 2023</a></li>
    <li><a href='#' style={{textDecoration:'none',color:'#302CD4'}}>Issue 02, Volume 01, October 2023</a></li>
    <li><a href='#' style={{textDecoration:'none',color:'#302CD4'}}>Issue 02, Volume 02, December 2023</a></li>

   </ul>
   </Card>
            </Col>
            <Col className='m-1' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Card style={{width:'25rem',borderColor:'black',backgroundColor:'#E8E7E7' }}>
 <Card.Header style={{ backgroundColor:'#A01E1E',color:'white',fontWeight:600,textAlign:'center'}}>2022</Card.Header>
 
   
   <ul style={{backgroundColor:'#E8E7E7',color:'#302CD4',fontWeight:600,lineHeight:'35px'}}>
    <li><a href='#' style={{textDecoration:'none',color:'#302CD4'}}>Issue 01, Volume 01, March 2022</a></li>
    <li><a href='#' style={{textDecoration:'none',color:'#302CD4'}}>Issue 01, Volume 02, June 2022</a></li>
    <li><a href='#' style={{textDecoration:'none',color:'#302CD4'}}>Issue 02, Volume 01, October 2022</a></li>
    <li><a href='#' style={{textDecoration:'none',color:'#302CD4'}}>Issue 02, Volume 02, December 2022</a></li>

   </ul>
   </Card>
            </Col>
        </Row>
       <Row className='mt-5 mb-5'>
            <Col className='m-1' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Card style={{width:'25rem',borderColor:'black',backgroundColor:'#E8E7E7' }}>
 <Card.Header style={{ backgroundColor:'#A01E1E',color:'white',fontWeight:600,textAlign:'center'}}>2021</Card.Header>
 
   
   <ul style={{backgroundColor:'#E8E7E7',color:'#302CD4',fontWeight:600,lineHeight:'35px'}}>
    <li><a href='#' style={{textDecoration:'none',color:'#302CD4'}}>Issue 01, Volume 01, March 2021</a></li>
    <li><a href='#' style={{textDecoration:'none',color:'#302CD4'}}>Issue 01, Volume 02, June 2021</a></li>
    <li><a href='#' style={{textDecoration:'none',color:'#302CD4'}}>Issue 02, Volume 01, October 2021</a></li>
    <li><a href='#' style={{textDecoration:'none',color:'#302CD4'}}>Issue 02, Volume 02, December 2021</a></li>

   </ul>
   </Card>
            </Col>
            <Col className='m-1' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Card style={{width:'25rem',borderColor:'black',backgroundColor:'#E8E7E7' }}>
 <Card.Header style={{ backgroundColor:'#A01E1E',color:'white',fontWeight:600,textAlign:'center'}}>2020</Card.Header>
 
   
   <ul style={{backgroundColor:'#E8E7E7',color:'#302CD4',fontWeight:600,lineHeight:'35px'}}>
    <li><a href='#' style={{textDecoration:'none',color:'#302CD4'}}>Issue 01, Volume 01, March 2020</a></li>
    <li><a href='#' style={{textDecoration:'none',color:'#302CD4'}}>Issue 01, Volume 02, June 2020</a></li>
    <li><a href='#' style={{textDecoration:'none',color:'#302CD4'}}>Issue 02, Volume 01, October 2020</a></li>
    <li><a href='#' style={{textDecoration:'none',color:'#302CD4'}}>Issue 02, Volume 02, December 2020</a></li>

   </ul>
   </Card>
            </Col>
        </Row>
            </Container>
                </Col>
                <Col xl={4} lg={4}  sm={12}>
                <div style={{marginTop:'5rem'}}>
           <Card style={{width:'18rem',borderColor:'black' }}>
 <Card.Header style={{ backgroundColor:'#A01E1E',color:'white',fontWeight:600,textAlign:'center'}}>Paper</Card.Header>
 <ListGroup variant="flush">
 <ListGroup.Item style={{backgroundColor:'#E8E7E7',padding:'15px'}}><Link to="/submit-paper" style={{color:'#302CD4',fontWeight:600,textDecoration:'none'}}>Submit your paper</Link></ListGroup.Item>
   <ListGroup.Item style={{backgroundColor:'#E8E7E7',padding:'15px'}}><Link to="/check-status" style={{color:'#302CD4',fontWeight:600,textDecoration:'none'}}>Check paper status</Link></ListGroup.Item>

   
 </ListGroup>
</Card>
           </div>
           
          

       

           <div style={{marginTop:'5rem'}}>
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
    </div>
  )
}

export default PastIssueComp