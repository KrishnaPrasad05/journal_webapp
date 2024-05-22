import React from 'react'
import { Breadcrumb, Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';


function TopicsComp() {
  return (
    <div>
        <Breadcrumb style={{backgroundColor:' #E8E7E7'}}>
 <Breadcrumb.Item style={{marginLeft:'20px'}}><Link to="/">Home</Link></Breadcrumb.Item>
 <Breadcrumb.Item active>Topics</Breadcrumb.Item>
</Breadcrumb>
         <Container fluid>
            <Row className='mb-5'>
                <Col className='mt-4'>
                <h1 style={{color:'#A01E1E',textAlign:'center'}}>Topics</h1>
                <Container>
            <Row className='mt-3'>
            <Col className='m-1' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Card style={{width:'25rem',borderColor:'black',backgroundColor:'#E8E7E7' }}>
 <Card.Header style={{ backgroundColor:'#A01E1E',color:'white',fontWeight:600,textAlign:'center'}}>Engineering</Card.Header>
 
   
   <ul style={{backgroundColor:'#E8E7E7',color:'#302CD4',fontWeight:600,lineHeight:'35px'}}>
   <li>Aeronautical Engineering</li>
  <li>Aerospace Engineering</li>
  <li>Agricultural Engineering</li>
  <li>Applied Electronics</li>
  <li>Aquaculture Engineering</li>
  <li>Architecture & Planning</li>
  <li>Art and Architecture</li>
  <li>Artificial Intelligence</li>
  <li>Automotive Engineering</li>
  <li>Big Data Analytics</li>
  <li>Biogenetics Engineering</li>
  <li>Bioinformatics Engineering</li>
  <li>Biological & Bio system Engineering</li>
  <li>Biomedical Engineering</li>
  <li>Blockchain Technology</li>
  <li>Chemical Engineering</li>
  <li>Civil Engineering</li>
  <li>Computer Science and Engineering</li>
  <li>Computer Science and Business Systems</li>
  <li>Cyber Security</li>
  <li>Deep Learning</li>
  <li>Electrical Engineering</li>
  <li>Electronics and Instrumentation Engineering</li>
  <li>Electromechanical System Engineering</li>
  <li>Engineering Management</li>
  <li>Engineering Maths</li>
  <li>Engineering Physics</li>
  <li>Engineering Sciences</li>
  <li>Environmental Engineering</li>
  <li>Food Safety and Quality Management</li>
  <li>Geo Informatics Engineering</li>
  <li>Geo Technical Engineering</li>
  <li>Industrial Engineering</li>
  <li>Information Security and Cyber Forensics</li>
  <li>Information Technology</li>
  <li>Instrumentation and Control Engineering</li>
  <li>Integrated Engineering</li>
  <li>Internet of Things</li>
  <li>Manufacturing Engineering</li>
  <li>Machine Learning</li>
  <li>Materials Engineering</li>
  <li>Marine and Ocean Engineering</li>
  <li>Mechanical Engineering</li>
  <li>Metallurgical Engineering</li>
  <li>Mining Engineering</li>
  <li>Nuclear Engineering</li>
  <li>Petro-Chemical Engineering</li>
  <li>Petroleum Engineering</li>
  <li>Production Engineering</li>
  <li>Remote Sensing and GIS</li>
  <li>Robotics</li>
  <li>Software Engineering</li>
  <li>Structural Engineering</li>
  <li>System Engineering</li>
  <li>Telecommunication Engineering</li>
  <li>VLSI Design</li>

   </ul>
   </Card>
            </Col>
            <Col className='m-1' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Card style={{width:'25rem',borderColor:'black',backgroundColor:'#E8E7E7' }}>
 <Card.Header style={{ backgroundColor:'#A01E1E',color:'white',fontWeight:600,textAlign:'center'}}>Science</Card.Header>
 
   
   <ul style={{backgroundColor:'#E8E7E7',color:'#302CD4',fontWeight:600,lineHeight:'35px'}}>
   <li>Animal Science</li>
  <li>Applied Sciences</li>
  
  <li>Atmosphere</li>
  <li>Biochemistry</li>
  <li>Biological Sciences</li>
  <li>Business</li>
  <li>Botany</li>
  <li>Chemistry</li>
  <li>Commerce</li>
  <li>Commodity Science</li>
  <li>Computer Applications</li>
  <li>Computer Science</li>
  <li>Dental Science</li>
  <li>Earth Science</li>
  <li>Ecology</li>
  <li>Economics</li>
  <li>Entomology</li>
  <li>Environmental Science</li>
  <li>Fisheries</li>
  <li>Food Sciences</li>
  <li>Forensic Science</li>
  <li>Forestry</li>
  <li>Geography</li>
  <li>Geology</li>
  <li>Health Sciences and Management</li>
  <li>Hospital Administration</li>
  <li>Human Biology</li>
  
  <li>Life Science</li>
  <li>Management Science</li>
  <li>Marine Science</li>
  <li>Materials Sciences</li>
  <li>Mathematics</li>
  <li>Media Sciences</li>
  <li>Medical Sciences</li>
  <li>Meteorology</li>
  <li>Microbiology</li>
  <li>Natural Science</li>
  <li>Oceanography</li>
  <li>Pharmaceutical Science</li>
  <li>Pharmacology</li>
  <li>Pharmacodynamics</li>
  <li>Physics</li>
  <li>Plant Biology & Biotechnology</li>
  <li>Political Science</li>
  <li>Psychology</li>
  <li>Social Sciences</li>
  <li>Sociology</li>
  <li>Solar Physics</li>
  <li>Space Science</li>
  <li>Statistics</li>
  <li>Systems Science</li>
  <li>Terrestrial Physics</li>
  <li>Veterinary Science</li>
  <li>Veterinary Medicine</li>
  <li>Visual Communication</li>
  <li>Zoology</li>

   </ul>
   </Card>
            </Col>
            <Col  className='m-1' style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <Card style={{width:'100%',borderColor:'black',backgroundColor:'#E8E7E7' }}>
 <Card.Header style={{ backgroundColor:'#A01E1E',color:'white',fontWeight:600,textAlign:'center'}}>Technology</Card.Header>
 
   
   <ul style={{backgroundColor:'#E8E7E7',color:'#302CD4',fontWeight:600,lineHeight:'35px'}}>
   <li>Biotechnology</li>
  <li>Ceramic Technology</li>
  <li>Embedded System and Technology</li>
  <li>Fashion Technology</li>
  <li>Food and Nutrition</li>
  <li>Information Technology</li>
  <li>Multimedia Technology</li>
  <li>Nanotechnology</li>
  <li>Pharmaceutical Technology</li>
  <li>Plastic Technology</li>
  <li>Printing Technology</li>
  <li>Polymer Technology</li>
  <li>Rubber Technology</li>

   </ul>
   </Card>
            <Card className='mt-2' style={{width:'100%',borderColor:'black',backgroundColor:'#E8E7E7' }}>
 <Card.Header style={{ backgroundColor:'#A01E1E',color:'white',fontWeight:600,textAlign:'center'}}>Management</Card.Header>
 
   
   <ul style={{backgroundColor:'#E8E7E7',color:'#302CD4',fontWeight:600,lineHeight:'35px'}}>
   <li>Business Administration</li>
  <li>Public Administration</li>
  <li>Enterprises Resource Management</li>
  <li>Business Ethics</li>
  <li>Managerial Communication</li>
  <li>Managerial Economics</li>
  <li>Marketing Management</li>
  <li>Operations Management</li>
  <li>Organizational Behavior</li>
  <li>Alternative Management</li>
  <li>Business Law and Corporate Governance</li>
  <li>Business to Business</li>
  <li>Corporate Social Responsibility</li>
  <li>Corporate Strategy</li>
  <li>Entrepreneurship</li>
  <li>Microeconomics of Competitiveness</li>
  <li>Strategic Agribusiness Management</li>
  <li>Advertising and Promotions Management</li>
  <li>Brand Management</li>
  <li>Channel & Sales Force Management</li>
  <li>Consumer Behavior & Marketing Research</li>
  <li>International Marketing</li>

   </ul>
   </Card>
            <Card className='mt-2' style={{width:'100%',borderColor:'black',backgroundColor:'#E8E7E7' }}>
 <Card.Header style={{ backgroundColor:'#A01E1E',color:'white',fontWeight:600,textAlign:'center'}}>Arts</Card.Header>
 
   
   <ul style={{backgroundColor:'#E8E7E7',color:'#302CD4',fontWeight:600,lineHeight:'35px'}}>
   <li>History</li>
  <li>Economics</li>
  <li>Geography</li>
  <li>Political Science</li>
  <li>English</li>
  <li>Psychology</li>
  <li>Sociology</li>
  <li>Philosophy</li>
  <li>Music</li>
  
  <li>Fine Arts</li>
  <li>Mass Media Studies</li>
  <li>Legal Studies</li>
  <li>Linguistics</li>
  <li>Fine Arts</li>
  <li>Tamil</li>
  <li>English</li>
  <li>Labor Management</li>

   </ul>
   </Card>
            </Col>
        </Row>
     
            </Container>
                </Col>
               
            </Row>
           
       
       </Container>
    </div>
  )
}

export default TopicsComp