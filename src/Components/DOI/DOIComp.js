import React from 'react'
import { Breadcrumb, Card, Col, Container, Image, ListGroup, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import doi from '../../Assets/Images/doi.jpg'
function DOIComp() {
  return (
    <div>
        <div>
        <Breadcrumb style={{backgroundColor:' #E8E7E7'}}>
 <Breadcrumb.Item style={{marginLeft:'20px'}}><Link to="/">Home</Link></Breadcrumb.Item>
 <Breadcrumb.Item active>DOI</Breadcrumb.Item>
</Breadcrumb>
        <Container fluid>
            <Row>
                <Col xl={8} lg={8} sm={12} className='mt-2'>
                <h1 style={{color:'#A01E1E',textAlign:'center',marginBottom:'2rem'}}>Digital Object Identifier (DOI)</h1>
                <Container>
                    <ol>
                        <li><strong>Digital Object Identifier (DOI)</strong>of IJRMA is 9.15680 which is assigned by CrossRef.</li>
                        <li>A <strong>DOI</strong> is a type of persistent identifier used to uniquely identify objects. The DOI system is particularly used for electronic documents such as journal articles. The DOI system began in 2000 and is managed by the International DOI Foundation.</li>
                        <li>DOI means "digital identifier of an object" rather than "identifier of a digital object".</li>
                        <li>Metadata about the object is stored in association with the DOI name. It may include a location, such as a URL , where the object can be found. The DOI for a document remains fixed over the lifetime of the document, whereas its location and other metadata may change. Referring to an online document by its DOI provides more stable linking than simply referring to it by its URL, because if its URL changes, the publisher only needs to update the metadata for the DOI to link to the new URL.</li>
                        <li>A DOI name differs from standard identifier registries such as the Journal Research Paper. The purpose of an identifier registry is to manage a given collection of identifiers, whereas the primary purpose of the DOI system is to make a collection of identifiers actionable and interoperable.</li>
                        <li>Organizations that meet the contractual obligations of the DOI system and are willing to pay to become a member of the system can assign DOIs. The DOI system is implemented through a federation of registration agencies coordinated by the International DOI Foundation, which developed and controls the system.</li>
                    </ol>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <Image src={doi}/>
                    </div>
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
    </div>
  )
}

export default DOIComp