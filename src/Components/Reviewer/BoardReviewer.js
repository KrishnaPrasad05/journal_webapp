import React, { useContext, useEffect, useState } from 'react'
import { Breadcrumb, Card, Col, Container, Image, ListGroup, Row } from 'react-bootstrap'
import {  Link } from 'react-router-dom';
import FooterReviewer from './FooterReviewer';
import HeaderReviewer from './HeaderReviewer';
import AppContext from '../AppContext';
function BoardReviewer() {
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
      <HeaderReviewer/>
    <Breadcrumb style={{backgroundColor:' #E8E7E7'}}>
 <Breadcrumb.Item style={{marginLeft:'20px'}}><Link to="/reviewer-home">Home</Link></Breadcrumb.Item>
 <Breadcrumb.Item active>Board</Breadcrumb.Item>
</Breadcrumb>
<Container>
   <Row className='mb-5'>
       <Col>
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

   </Row>
</Container>
<FooterReviewer/>
</div>
  )
}

export default BoardReviewer