import React from 'react'
import { Breadcrumb, Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import {  Link } from 'react-router-dom';
function AboutUsComp() {
  return (
    <div>
         <Breadcrumb style={{backgroundColor:' #E8E7E7'}}>
      <Breadcrumb.Item style={{marginLeft:'20px'}}><Link to="/">Home</Link></Breadcrumb.Item>
      <Breadcrumb.Item active>About Us</Breadcrumb.Item>
    </Breadcrumb>
    <Container fluid>
        <Row>
            <Col xl={8} lg={8} sm={12}>
            <div style={{marginTop:'2rem'}}>
            <h1 style={{color:'#A01E1E'}}>About Us</h1>
            <section>
                <p><strong style={{color:'green'}}>Welcome to the International Journal for Research in Multidisciplinary Advancements (IJRMA)</strong></p>
                <p>The International Journal of Research in Multidisciplinary Advancements (IJRMA) is a peer-reviewed, open-access journal dedicated to the advancement of knowledge across various academic disciplines. Our mission is to provide a platform for researchers, academicians, and practitioners to disseminate original, high-quality research that contributes to the development of a wide range of fields.</p>
            </section>
            <section>
                <h4 style={{color:'#302CD4'}}>Our Vision</h4>
                <p>At IJRMA, we envision a world where scholarly research transcends boundaries and fosters innovation across disciplines. We aim to bridge the gap between diverse areas of study, encouraging interdisciplinary collaboration and holistic approaches to solving complex global challenges.</p>
            </section>
            <section>
                <h4 style={{color:'#302CD4'}}>Our Mission</h4>
                <ul>
                    <li><strong style={{color:'green'}}>Promote Excellence in Research:</strong> We are committed to publishing cutting-edge research that meets the highest standards of academic rigor and integrity.</li>
                    <li><strong style={{color:'green'}}>Facilitate Knowledge Sharing:</strong> By providing an open-access platform, we ensure that valuable research is accessible to a global audience, promoting widespread dissemination and utilization of knowledge.</li>
                    <li><strong style={{color:'green'}}>Encourage Interdisciplinary Dialogue:</strong> We support the exchange of ideas and collaboration among researchers from different fields, fostering a rich and diverse academic community.</li>
                    <li><strong style={{color:'green'}}>Support Emerging Scholars:</strong> We are dedicated to nurturing the next generation of researchers by providing opportunities for publication and professional development.</li>
                </ul>
            </section>
            <section>
                <h4 style={{color:'#302CD4'}}>Areas of Focus</h4>
                <p>IJRMA publishes original research articles, review papers, case studies, and technical notes across a wide spectrum of disciplines, including but not limited to:</p>
                <ul>
                    <li>Science and Technology</li>
                    <li>Engineering and Applied Sciences</li>
                    <li>Social Sciences and Humanities</li>
                    <li>Business and Economics</li>
                    <li>Health and Medical Sciences</li>
                    <li>Environmental and Agricultural Sciences</li>
                </ul>
            </section>
            <section>
                <h4 style={{color:'#302CD4'}}>Peer Review Process</h4>
                <p>Our rigorous double-blind peer review process ensures the quality and credibility of the research we publish. Each submission undergoes a thorough evaluation by experts in the relevant field, ensuring that only the most significant and impactful research is featured in our journal.</p>
            </section>
            <section>
                <h4 style={{color:'#302CD4'}}>Open Access Policy</h4>
                <p>As an open-access journal, IJRMA provides unrestricted online access to our research publications, allowing readers worldwide to benefit from the latest advancements without financial barriers. We believe that open access accelerates the dissemination of knowledge and promotes greater equity in academic research.</p>
            </section>
            <section>
                <h4 style={{color:'#302CD4'}}>Join Our Community</h4>
                <p>We invite researchers, academicians, and professionals to contribute to IJRMA and be part of a dynamic and diverse scholarly community. Whether you are submitting your latest research, volunteering as a peer reviewer, or participating in our conferences and workshops, your involvement helps us achieve our mission of fostering interdisciplinary research and innovation.</p>
            </section>
            <section>
                <h4 style={{color:'#302CD4'}}>Contact Us</h4>
                <p>For more information, submission guidelines, or inquiries, please visit our <a href="/contact-us">Contact Us</a> page. We are here to support you in your academic journey and look forward to your contributions to IJRMA.</p>
                <p>Thank you for visiting IJRMA. Together, we can advance knowledge and make a positive impact on the world.</p>
            </section>
            </div>
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
                <div style={{marginTop:'5rem'}}>
                <Card style={{width:'18rem',borderColor:'black' }}>
      <Card.Header style={{ backgroundColor:'#A01E1E',color:'white',fontWeight:600,textAlign:'center'}}>For Reviewers</Card.Header>
      <ListGroup variant="flush">
      <ListGroup.Item style={{backgroundColor:'#E8E7E7',padding:'15px'}}><Link to="/board" style={{color:'#302CD4',fontWeight:600,textDecoration:'none'}}>Editorial Desk</Link></ListGroup.Item>
   <ListGroup.Item style={{backgroundColor:'#E8E7E7',padding:'15px'}}><Link to="/join-reviewer" style={{color:'#302CD4',fontWeight:600,textDecoration:'none'}}>Join As Reviewer</Link></ListGroup.Item>

   
 </ListGroup>
    </Card>
                </div>

                <div style={{marginTop:'5rem',marginBottom:'1rem'}}>
           <Card style={{width:'18rem',borderColor:'black' }}>
 <Card.Header style={{ backgroundColor:'#A01E1E',color:'white',fontWeight:600,textAlign:'center'}}>For Authors</Card.Header>
 <ListGroup variant="flush">
   <ListGroup.Item style={{backgroundColor:'#E8E7E7',padding:'15px'}}><Link to="/guidelines" style={{color:'#302CD4',fontWeight:600,textDecoration:'none'}}>Guidelines</Link></ListGroup.Item>
   <ListGroup.Item style={{backgroundColor:'#E8E7E7',padding:'15px'}}><Link to="/processing-charges" style={{color:'#302CD4',fontWeight:600,textDecoration:'none'}}>Processing Charges</Link></ListGroup.Item>

   
 </ListGroup>
</Card>
           </div>
            
            </Col>
        </Row>
    </Container>
    </div>
    
    
  )
}

export default AboutUsComp