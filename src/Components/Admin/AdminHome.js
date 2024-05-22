import React from 'react'
import { Accordion, Breadcrumb, Button, Card, Col, Container, Image, ListGroup, Row } from 'react-bootstrap'
import {  Link } from 'react-router-dom';
import NumberScroller from '../NumberScroller';
import yahoo from '../../Assets/Images/index/yahoo.jpg'
import drji from '../../Assets/Images/index/drji.jpg'
import rs from '../../Assets/Images/index/rs.jpg'
import issuu from '../../Assets/Images/index/issuu.jpg'
import asr from '../../Assets/Images/index/asr.jpg'
import pl from '../../Assets/Images/index/pl.jpg'
import google from '../../Assets/Images/index/google.jpg'
import r from '../../Assets/Images/index/r.jpg'
import csd from '../../Assets/Images/index/csd.jpg'
import au from '../../Assets/Images/index/au.jpg'
import ac from '../../Assets/Images/index/ac.jpg'
import ic from '../../Assets/Images/index/ic.jpg'
import fs from '../../Assets/Images/index/fs.jpg'
import sc from '../../Assets/Images/index/sc.jpg'
import sct from '../../Assets/Images/index/sct.jpg'
import gif from '../../Assets/Images/index/gif.jpg'
import is from '../../Assets/Images/index/is.jpg'
import ins from '../../Assets/Images/index/ins.jpg'
import geif from '../../Assets/Images/index/geif.jpg'
import jour from '../../Assets/Images/index/jour.jpg'
import wzb from '../../Assets/Images/index/wzb.jpg'
import ejl from '../../Assets/Images/index/ejl.jpg'
import iijs from '../../Assets/Images/index/iijs.jpg'
import be from '../../Assets/Images/index/be.jpg'
import cobi from '../../Assets/Images/index/cobi.jpg'
import sji from '../../Assets/Images/index/sji.jpg'
import HeaderAdmin from '../Admin/Adminheader';
import FooterAdmin from './FooterAdmin';

function HomeAdmin() {
  return (
    <div>
        <HeaderAdmin/>
    <Breadcrumb style={{backgroundColor:' #E8E7E7'}}>
 
 <Breadcrumb.Item active style={{marginLeft:'20px'}}>Home</Breadcrumb.Item>
</Breadcrumb>
<Container fluid>
   <Row>
       <Col >
        <div>
       
       <Container className='mt-3'>
        <h1 style={{color:'#A01E1E',textAlign:'center'}}>About IJRMA</h1>
        <p style={{textAlign:'justify'}}>Welcome to the International Journal for Research in Multidisciplinary Advancements (IJRMA). Established with a commitment to excellence in academic publishing, IJRMA is dedicated to advancing knowledge across diverse fields including Science and Technology, Engineering, Social Sciences, Humanities, Business, Health Sciences, and Environmental Studies. As a peer-reviewed, open-access journal, we provide a robust platform for researchers, scholars, and professionals worldwide to publish and access cutting-edge research. Our mission is to foster a culture of innovation by promoting rigorous research methodologies and encouraging interdisciplinary collaborations.At IJRMA, we strive to uphold the highest standards of scholarly integrity and transparency through our double-blind peer review process. This ensures that only quality research that contributes significantly to the respective fields is published. By embracing an open-access policy, we aim to democratize access to knowledge, making scholarly findings freely accessible to researchers, students, and the public globally.Our vision is to bridge the gap between theory and practice by facilitating knowledge exchange and dialogue among researchers from diverse backgrounds. We believe that interdisciplinary research is crucial for addressing complex societal challenges and advancing scientific understanding. Through our publications and scholarly activities, we seek to empower researchers at all career stages, providing opportunities for professional growth and development.Join us in our mission to promote research excellence, foster innovation, and contribute to positive societal impact through collaborative and transformative research. Explore our journal to discover the latest advancements and contribute your insights to the global academic community.</p>
       </Container>
       <Container>
       <Row className='mt-5'>
            <Col className='m-1' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Card style={{width:'25rem',borderColor:'black',backgroundColor:'#E8E7E7' }}>
 <Card.Header style={{ backgroundColor:'#A01E1E',color:'white',fontWeight:600,textAlign:'center'}}>Why IJRMA?</Card.Header>
 
   
   <ul style={{backgroundColor:'#E8E7E7',color:'#302CD4',fontWeight:600,lineHeight:'35px'}}>
    <li>Best Multidisciplinary Journal</li>
<li>Peer Reviewed & Referred Journal</li>
<li>High Impact Factor</li>
<li>Strict Policy against Plagiarism</li>
<li>Easy and Quick processing and publication</li>
<li>Low processing charges</li>
<li>Indexed in reputed databases</li>
<li>Digitally Signed E-Certificates</li>
<li>Whatsapp Support@ +91- 9000112345</li>
<li>Telephonic Guidance to Enhance the Quality of Research</li>
   </ul>
   </Card>
            </Col>
            <Col className='m-1' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Card style={{width:'25rem',borderColor:'black',backgroundColor:'#E8E7E7'  }}>
 <Card.Header style={{ backgroundColor:'#A01E1E',color:'white',fontWeight:600,textAlign:'center'}}>Achievements</Card.Header>
 <ul style={{backgroundColor:'#E8E7E7',color:'#302CD4',fontWeight:600,lineHeight:'35px'}}>
 <li>High Impact Factor : 7.5</li>
<li>10+ Years of existence</li>
<li>7200+ Articles published</li>
<li>5000+ Citations</li>
<li>DOI for each Article</li>
<li>High Quality & High Reputation</li>
<li>An ISO 3297: 2007 Certified Organization</li>
<li>Referred by Universities to UGC Approved List</li>
<li>Best Peer Reviewed Journal for Paper Publication</li>
<li style={{paddingBottom:'30px'}}>High h-index: 27</li>
 </ul>
   </Card>
            </Col>
        </Row>
       </Container>
       <Container  style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      
        <Row className='mt-5'> 
            <Col className='m-1' >
            <Card style={{width:'18rem'}}>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',backgroundColor:'#A01E1E',padding:'15px',borderRadius:'7px'}}>
                <h3 className='text-light'>Papers Published</h3>
                <NumberScroller initialValue={0} finalValue={7200} duration={5} />
            </div>
            </Card>
            </Col>
            <Col className='m-1'>
            <Card style={{width:'18rem'}}>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',backgroundColor:'#A01E1E',padding:'15px',borderRadius:'7px'}}>
                <h3 className='text-light'>Authors</h3>
                <NumberScroller initialValue={0} finalValue={2000} duration={5} />
            </div>
            </Card>
            </Col>
            <Col className='m-1'>
            <Card style={{width:'18rem'}}>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',backgroundColor:'#A01E1E',padding:'15px',borderRadius:'7px'}}>
                <h3 className='text-light'>Countries</h3>
                <NumberScroller initialValue={0} finalValue={30} duration={5} />
            </div>
            </Card>
            </Col>
            
        </Row>
       </Container>
       <Container className='mt-5'>
       <h1 style={{color:'#A01E1E',textAlign:'center'}}>Indexing Partners</h1>
        <Row className='mt-3'>
            <Col className='m-1'>
            <Image src={yahoo} />
            </Col>
            <Col className='m-1'>
            <Image src={wzb} />
            </Col>
            <Col className='m-1'>
            <Image src={rs} />
            </Col>
            <Col className='m-1'>
            <Image src={issuu} />
            </Col>
           
        </Row>
        <Row className='mt-3'>
            <Col className='m-1'>
            <Image src={asr} />
            </Col>
            <Col className='m-1'>
            <Image src={pl} />
            </Col>
            <Col className='m-1'>
            <Image src={google} />
            </Col>
            <Col className='m-1'>
            <Image src={r} />
            </Col>
           
        </Row>
        <Row className='mt-3'>
            <Col className='m-1'>
            <Image src={csd} />
            </Col>
            <Col className='m-1'>
            <Image src={au} />
            </Col>
            <Col className='m-1'>
            <Image src={ac} />
            </Col>
            <Col className='m-1'>
            <Image src={ic} />
            </Col>
           
        </Row>
        <Row className='mt-3'>
            <Col className='m-1'>
            <Image src={fs} />
            </Col>
            <Col className='m-1'>
            <Image src={sc} />
            </Col>
            <Col className='m-1'>
            <Image src={sct} />
            </Col>
            <Col className='m-1'>
            <Image src={gif} />
            </Col>
           
        </Row>
        <Row className='mt-3'>
            <Col className='m-1'>
            <Image src={is} />
            </Col>
            <Col className='m-1'>
            <Image src={ejl} />
            </Col>
            <Col className='m-1'>
            <Image src={be} />
            </Col>
            <Col className='m-1'>
            <Image src={cobi} />
            </Col>
           
        </Row>
       </Container>

       
       </div>
       </Col>
       
   </Row>
</Container>
<FooterAdmin/>
</div>
  )
}

export default HomeAdmin