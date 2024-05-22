import React from 'react'
import { Accordion, Breadcrumb, Card, Col, Container,ListGroup,Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function SplIssueComp() {
  return (
    <div>
        <Breadcrumb style={{backgroundColor:' #E8E7E7'}}>
 <Breadcrumb.Item style={{marginLeft:'20px'}}><Link to="/">Home</Link></Breadcrumb.Item>
 <Breadcrumb.Item active>Special Issue Note</Breadcrumb.Item>
</Breadcrumb>
        <Container fluid>
            <Row>
                <Col xl={8} lg={8} sm={12} className='mt-2'>
                <h1 style={{color:'#A01E1E',textAlign:'center',marginBottom:'2rem'}}>Special Issue Note</h1>
                <Container className='p-1'>
            <Row>
            <p style={{textAlign:'justify',fontSize:'18px',padding:'10px'}}>As an international journal, IJRMA heartily welcomes conference organizers of diverse academic interests to publish their proceedings with IJRMA. We provide a low-cost quality service to promote research, awareness and compatibility. We aspire to take the somber charge of publishing all the papers, presented or discussed in your conference. It will be a mutually beneficial approach to magnetize more contributors to your conference, sharing and utilizing the worldwide reputation of our esteemed journal. For further query, please mail us at <span style={{backgroundColor:'#FBF3CB',padding:'3px'}}>ijrma@gmail.com</span></p>
            </Row>
            <Container className='mt-3 mb-3'>
       <h2 style={{color:'#A01E1E',marginBottom:'1rem'}}>FAQ</h2>
       <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>1.How Can We Publish Our Conference Special Issue With IJRMA?</Accordion.Header>
        <Accordion.Body>
        The Conference Shall Be Evaluated By IJRMA Authority. Once Approval Is Granted By The Authority, The Conference Organizers Shall Be Asked To Submit The Conference Papers To IJRMA. The Special Issue Shall Be Published Online Either On The Day Of Conference Or After 10 Days From The Day Of Conference..
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          2.Are You Providing Only Online Publication Of The Special Issue?
      </Accordion.Header>
        <Accordion.Body>
        Along With The Online Publication, We Can Provide Well Packaged CD / Hard Copy Of Special Issue / Hard Copy Of Certificates To Distribute Delegates In Your Conference..
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>3.How Much Time Needed For Approval?</Accordion.Header>
        <Accordion.Body>
        If All The Information Is Furnished Duly, The Notifications Shall Be Informed Within 3-4 Working Days.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>4.How Much Time Is Needed To Publish The Special Issue?</Accordion.Header>
        <Accordion.Body>
        IJRMA Typesetting Teams Shall Require A Minimum Of 15 Days (From The Date Of Submission Of The Papers) To Complete The Publication Process In Both Print And Online Formats.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>5.Is There Any Particular Paper Format?</Accordion.Header>
        <Accordion.Body>
        IJRMA Recommends The Conference Organizers To Accept The Final Papers According To The IJRMA Guideline. The Set Of Papers Should Be Submitted To IJRMA Single Column MS Word Format Only.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
       </Container>
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
  )
}

export default SplIssueComp