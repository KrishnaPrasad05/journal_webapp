import React from 'react'
import { Breadcrumb, Card, CardBody, CardHeader, Col, Container, Image, ListGroup, Row } from 'react-bootstrap'
import paper from '../../Assets/Images/submit.png'
import review from '../../Assets/Images/documents.png'
import pay from '../../Assets/Images/mobile-payment.png'
import publish from '../../Assets/Images/publishing.png'
import { Link } from 'react-router-dom'
function PublishProcessComp() {
  return (
    <div>
         <Breadcrumb style={{backgroundColor:' #E8E7E7'}}>
 <Breadcrumb.Item style={{marginLeft:'20px'}}><Link to="/">Home</Link></Breadcrumb.Item>
 <Breadcrumb.Item active>Publication Process</Breadcrumb.Item>
</Breadcrumb>
        <Container fluid>
            <Row>
                <Col xl={8} lg={8} sm={12} className='mt-2'>
                <h1 style={{color:'#A01E1E',textAlign:'center'}}>Publication Process</h1>
                <Container >
            <Row >
<Col className='p-1' xs={12} sm={6} md={6} lg={6} xl={3} xxl={3}>
<Card style={{width:'16rem'}}>
    <CardHeader style={{backgroundColor:'#A01E1E',color:'white',fontWeight:600}}>Step 01</CardHeader>
    <CardBody style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <p>Submit your paper according to our paper format.</p>
        <Image src={paper} className='img-fluid' style={{width:'200px',height:'200px'}}/>
    </CardBody>
</Card>
</Col>
<Col className='p-1' xs={12} sm={6} md={6} lg={6} xl={3} xxl={3}>
<Card style={{width:'16rem'}}>
    <CardHeader style={{backgroundColor:'#A01E1E',color:'white',fontWeight:600}}>Step 02</CardHeader>
    <CardBody style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <p>Paper will be reviewed and you will receive acceptance mail.</p>
        <Image src={review} className='img-fluid' style={{width:'200px',height:'200px'}}/>
    </CardBody>
</Card>
</Col>
           
<Col className='p-1' xs={12} sm={6} md={6} lg={6} xl={3} xxl={3}>
<Card style={{width:'16rem'}}>
    <CardHeader style={{backgroundColor:'#A01E1E',color:'white',fontWeight:600}}>Step 03</CardHeader>
    <CardBody style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <p>Complete the payment process to proceed further.</p>
        <Image src={pay} className='img-fluid' style={{width:'200px',height:'200px'}}/>
    </CardBody>
</Card>
</Col>
<Col className='p-1' xs={12} sm={6} md={6} lg={6} xl={3} xxl={3}>
<Card style={{width:'16rem'}}>
    <CardHeader style={{backgroundColor:'#A01E1E',color:'white',fontWeight:600}}>Step 04</CardHeader>
    <CardBody style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <p>Paper will be published in our journal.</p>
        <Image src={publish} className='img-fluid' style={{width:'200px',height:'200px'}}/>
    </CardBody>
</Card>
</Col>
            </Row>
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
           
          

       

           <div style={{marginTop:'5rem',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'1rem'}}>
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

export default PublishProcessComp