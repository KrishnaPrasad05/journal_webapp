import React from 'react'
import { Breadcrumb, Card, Col, Container, ListGroup, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function IndFee() {
  return (
    <div>
        <Header/>
        <Breadcrumb style={{backgroundColor:' #E8E7E7'}}>
 <Breadcrumb.Item style={{marginLeft:'20px'}}><Link to="/">Home</Link></Breadcrumb.Item>
 <Breadcrumb.Item active>Indian author fee</Breadcrumb.Item>
</Breadcrumb>

        <Container fluid>
            <Row>
                <Col xl={8} lg={8} sm={12} className='mt-2'>
                <h1 style={{color:'#A01E1E',textAlign:'center',marginBottom:'2rem'}}>Processing Charges (Indian author)</h1>
                <Container>
            <p style={{fontSize:'18px'}}>Publishing a manuscript in IJARASEM requires Article Processing Charges (APC) to be paid by the submitting author upon acceptance of the manuscript prior to publication.</p>
            <p style={{fontSize:'18px'}}>As well as permanent, immediate, and worldwide access to the full article text the APC covers:</p>
            <p style={{fontSize:'18px'}}><span style={{fontWeight:700}}>Editorial work:</span> Peer review process, administrative support and journal development.</p>
            <p style={{fontSize:'18px'}}><span style={{fontWeight:700}}>Technical infrastructure and innovation:</span> Development, maintenance and operation of online journal system and websites.</p>
            <p style={{fontSize:'18px'}}>< span style={{fontWeight:700}}>Processing of articles:</span> Formatting and mark-up of articles and inclusion in indexing services.</p>
            <p style={{fontSize:'18px'}}><span  style={{fontWeight:700}}>Promotion of journal and content:</span> Making sure readers and authors know about the work published in the title.</p>
            <p style={{fontSize:'18px'}}><span  style={{fontWeight:700}}>Customer service:</span> Responding to authors and readers.</p>
            <Row className='p-2'>
            <Table striped bordered style={{borderColor:'black'}} >
      <thead>
        <tr>
          
          <th style={{textAlign:'center',backgroundColor:'#A01E1E',fontWeight:600,color:'white',fontSize:'20px'}}>Indian Authors</th>
          
         
        </tr>
      </thead>
      <tbody>
        <tr>
          
          <td style={{textAlign:'center',color:'green'}}><p style={{textAlign:'center',color:'#302CD4',fontWeight:600}}>Rs.850</p>
[if online publication only + E-Certificate for each author]</td>
          
        
        </tr>
       
      </tbody>
    </Table>

            </Row>
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
        <Footer/>
    </div>
  )
}

export default IndFee