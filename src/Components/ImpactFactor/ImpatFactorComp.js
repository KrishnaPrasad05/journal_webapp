import React from 'react'
import { Breadcrumb, Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import {  Link } from 'react-router-dom';
function ImpactfactorComp() {
  return (
    <div>
    <Breadcrumb style={{backgroundColor:' #E8E7E7'}}>
 <Breadcrumb.Item style={{marginLeft:'20px'}}><Link to="/">Home</Link></Breadcrumb.Item>
 <Breadcrumb.Item active>Impact factor</Breadcrumb.Item>
</Breadcrumb>
<Container fluid>
   <Row>
       <Col xl={8} lg={8} sm={12} className='mt-4'>
       <Container>
       <section>
      
      <Container style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <Row>
          <Col>
            <h1 style={{ color: '#A01E1E', textAlign: 'center', marginBottom: '1.5rem' }}>Impact Factor and Achievements of IJRMA</h1>
            <p>
              Welcome to the Impact Factor page of the International Journal for Research in Management and Applications (IJRMA). As a premier academic journal, we are dedicated to publishing high-quality research that significantly contributes to the fields of management and applications. Below, we provide an overview of our journal's features, impact factor, and key achievements.
            </p>
            <h2 style={{ color: '#302CD4', fontWeight: 600 }}>Features of IJRMA</h2>
            <ul>
              <li><strong>Rigorous Peer Review Process:</strong> At IJRMA, we maintain a stringent peer review process to ensure the integrity and quality of the research we publish. Each submission undergoes a thorough evaluation by experts in the field, guaranteeing that only the most impactful and innovative studies are accepted.</li>
              <li><strong>Wide Range of Topics:</strong> Our journal covers a diverse array of topics within management and applications, including but not limited to organizational behavior, strategic management, human resource management, marketing, finance, operations management, and technological applications in business. This breadth ensures that we cater to a wide academic audience.</li>
              <li><strong>Open Access:</strong> IJRMA is committed to the open-access model, providing unrestricted access to our published articles. This ensures that researchers, practitioners, and students around the world can access and benefit from the latest research findings without any barriers.</li>
              <li><strong>International Editorial Board:</strong> Our editorial board comprises distinguished scholars from around the globe. Their expertise and international perspective contribute to the journal's reputation and the high standard of published research.</li>
              <li><strong>Fast-Track Publication:</strong> Understanding the time-sensitive nature of research dissemination, IJRMA offers a fast-track publication option for studies of exceptional significance. This allows groundbreaking research to reach the academic community and industry practitioners swiftly.</li>
            </ul>
            <h2 style={{ color: '#302CD4', fontWeight: 600 }}>Impact Factor of IJRMA</h2>
            <p>
              The impact factor of IJRMA is a testament to the quality and influence of the research we publish. The impact factor, calculated based on the number of citations received by articles published in our journal, reflects the relevance and importance of our content in the academic community. A high impact factor signifies that our publications are frequently cited by other researchers, indicating their contribution to advancing knowledge in the field of management and applications.
            </p>
            <h2 style={{ color: '#302CD4', fontWeight: 600 }}>Achievements</h2>
            <ul>
              <li><strong>High Citation Rate:</strong> IJRMA has consistently achieved a high citation rate, demonstrating the journal's influence and the recognition of our articles as valuable contributions to the field.</li>
              <li><strong>International Recognition:</strong> Our journal is indexed in numerous prestigious databases and recognized by leading academic institutions worldwide. This recognition underscores the global reach and impact of the research we publish.</li>
              <li><strong>Award-Winning Research:</strong> Several articles published in IJRMA have received awards and accolades from academic conferences and professional organizations. These awards highlight the excellence and significance of the research featured in our journal.</li>
              <li><strong>Collaborations with Leading Institutions:</strong> IJRMA has established collaborations with renowned universities and research institutions, fostering a network of excellence and promoting interdisciplinary research.</li>
              <li><strong>Innovative Special Issues:</strong> We regularly publish special issues on emerging topics and trends in management and applications. These special issues are curated by guest editors who are experts in the respective fields, bringing fresh perspectives and cutting-edge research to our readers.</li>
            </ul>
            <p>
              At IJRMA, we are committed to advancing the frontiers of knowledge in management and applications. Our high impact factor and numerous achievements reflect our dedication to publishing research that makes a meaningful impact on academia and industry. We invite you to explore our latest publications and join us in contributing to the global academic discourse.
            </p>
          </Col>
        </Row>
      </Container>
     
    </section>
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
           
           <div style={{marginTop:'5rem'}}>
           <Card style={{width:'18rem',borderColor:'black' }}>
 <Card.Header style={{ backgroundColor:'#A01E1E',color:'white',fontWeight:600,textAlign:'center'}}>For Reviewers</Card.Header>
 <ListGroup variant="flush">
 <ListGroup.Item style={{backgroundColor:'#E8E7E7',padding:'15px'}}><Link to="/board" style={{color:'#302CD4',fontWeight:600,textDecoration:'none'}}>Editorial Desk</Link></ListGroup.Item>
   <ListGroup.Item style={{backgroundColor:'#E8E7E7',padding:'15px'}}><Link to="/join-reviewer" style={{color:'#302CD4',fontWeight:600,textDecoration:'none'}}>Join As Reviewer</Link></ListGroup.Item>

   
 </ListGroup>
</Card>
           </div>

           <div style={{marginTop:'5rem'}}>
           <Card style={{width:'18rem',borderColor:'black' }}>
 <Card.Header style={{ backgroundColor:'#A01E1E',color:'white',fontWeight:600,textAlign:'center'}}>Downloads</Card.Header>
 <ListGroup variant="flush">
   <ListGroup.Item style={{backgroundColor:'#E8E7E7',padding:'15px'}}><a href="https://docs.google.com/document/d/1YRDSswqcdkBk2Gg4pqF9K1hBU4IsCVPb/edit?usp=sharing&ouid=107465506683606608466&rtpof=true&sd=true" target='blank' style={{color:'#302CD4',fontWeight:600,textDecoration:'none'}}>Paper Format</a></ListGroup.Item>
   <ListGroup.Item style={{backgroundColor:'#E8E7E7',padding:'15px'}}><a href="https://drive.google.com/file/d/11QoiKTU6Ztp2IVgNpFO7UI48BL-6BLPJ/view?usp=sharing" target='blank' style={{color:'#302CD4',fontWeight:600,textDecoration:'none'}}>Copy Right Form</a></ListGroup.Item>

   
 </ListGroup>
</Card>
           </div>


           <div style={{marginTop:'5rem'}}>
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

export default ImpactfactorComp