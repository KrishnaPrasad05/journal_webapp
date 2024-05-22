import React, { useContext, useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col, Modal ,Breadcrumb} from 'react-bootstrap';

import AppContext from '../AppContext';

import { Link } from 'react-router-dom';
import HeaderReviewer from './HeaderReviewer';
import FooterReviewer from './FooterReviewer';

const AnnouncementsReviewer = () => {
    const { variableValue, setVariableValue } = useContext(AppContext);
    const [contactContents, setContactContents] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [deleteIndex, setDeleteIndex] = useState(null);

    useEffect(() => {
        fetch(`${variableValue}/announcements?announceTo=Reviewer`)
            .then(response => response.json())
            .then(data => {
                
                const filteredData = data.filter(item => (
                    item.announcementTitle && item.announcementContent && item.announceTo
                ));
                setContactContents(filteredData);
            })
            .catch(error => console.error('Error fetching reported contents:', error));
    }, []);

   

    return (
        <section>
            <HeaderReviewer/>
            <Breadcrumb style={{backgroundColor:' #E8E7E7'}}>
<Breadcrumb.Item style={{marginLeft:'20px'}}><Link to="/reviewer-home">Home</Link></Breadcrumb.Item>
<Breadcrumb.Item active>Announcements</Breadcrumb.Item>
</Breadcrumb>
            <Container style={{marginTop:'2rem'}}>
                <h1 style={{
                    textAlign:'center',color:'#A01E1E',fontWeight:600,marginBottom:'1.5rem'
                }}>Announcements</h1>
           
            {contactContents.map((content, index) => (
                <Row md={12} key={index} className="mb-4">
                    <Card style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',borderLeft:'7px solid #A01E1E' }}>
                        <Card.Header style={{backgroundColor:'#E8E7E7',color:'#302CD4',fontWeight:600,fontSize:'1.2rem'}}>
                            {content.announcementTitle}
                        </Card.Header>
                        <Card.Body>
                        {content.announcementContent}
                           
                        </Card.Body>
                    </Card>
                </Row>
            ))}
           

            
        </Container>
          <FooterReviewer/>
        </section>
    
    );
};

export default AnnouncementsReviewer;
