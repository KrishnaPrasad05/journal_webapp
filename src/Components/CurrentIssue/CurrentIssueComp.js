import React, { useContext, useEffect, useState } from 'react'
import { Breadcrumb, Button, Card, Col, Container, Image, ListGroup, Row ,Table,Form } from 'react-bootstrap';
import pdf from '../../Assets/Images/pdf.png'
import { Link } from 'react-router-dom';
import AppContext from '../AppContext';
function CurrentIssueComp() {
  const { variableValue, setVariableValue } = useContext(AppContext);
    const [currentPaper, setCurrentPaper] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
        fetch(`${variableValue}/papers`)
            .then(response => response.json())
            .then(data => setCurrentPaper(data))
            .catch(error => console.error('Error fetching reported contents:', error));
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredPapers = currentPaper.filter(paper =>
        paper.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  return (
    <div>
      <Breadcrumb style={{backgroundColor:' #E8E7E7'}}>
      <Breadcrumb.Item style={{marginLeft:'20px'}}><Link to="/">Home</Link></Breadcrumb.Item>
 <Breadcrumb.Item active>Current Issue</Breadcrumb.Item>
</Breadcrumb>
      <Container fluid>
        <Row>
          <Col xl={8} lg={8} sm={12} className='mt-4'>
          <h1 style={{color:'#A01E1E',textAlign:'center',marginBottom:'2rem'}}>Current Issue</h1>
          <Container>
            <Container>
                <Row className='mt-3'>
                    <Col  xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <h4 style={{textAlign:'center',color:'#302CD4'}}>Search your paper using title : </h4>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                    <Form.Group controlId="search">
                    <Form.Control
                        type="text"
                        placeholder="Search by title..."
                        value={searchTerm}
                        onChange={handleSearch}
                        style={{borderColor:'black'}}
                    />
                </Form.Group>
                    </Col>
                </Row>
            </Container>
        
        <div className="table-responsive rounded mt-4">
      <Table striped bordered hover style={{borderColor:'black'}}>
        <thead>
          <tr>
            <th style={{backgroundColor:'#A01E1E',color:'white',fontWeight:600,textAlign:'center',borderColor:'grey'}}>S.No</th>
            <th style={{backgroundColor:'#A01E1E',color:'white',fontWeight:600,textAlign:'center',borderColor:'grey'}}>Title</th>
            <th style={{backgroundColor:'#A01E1E',color:'white',fontWeight:600,textAlign:'center',borderColor:'grey'}}>Authors</th>
            <th style={{backgroundColor:'#A01E1E',color:'white',fontWeight:600,textAlign:'center',borderColor:'grey'}}>Paper</th>
            <th style={{backgroundColor:'#A01E1E',color:'white',fontWeight:600,textAlign:'center',borderColor:'grey'}}>Certificate</th>
          </tr>
        </thead>
        <tbody>
          {filteredPapers.map((paper, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <div>
                    <h5 style={{color:'#302CD4'}}>{paper.title}</h5>
                    </div></td>
                    <td>
                        <div>
                            <p style={{color:'#008000',fontWeight:600}}>{paper.name01}</p>
                            <p style={{color:'#008000',fontWeight:600}}>{paper.name02}</p>
                            <p style={{color:'#008000',fontWeight:600}}>{paper.name03}</p>
                            <p style={{color:'#008000',fontWeight:600}}>{paper.name04}</p>
                            <p style={{color:'#008000',fontWeight:600}}>{paper.name05}</p>
                        </div>
                    </td>
              <td ><a href={paper.pubPaper} target='blank'><Image src={pdf} style={{width:'40px',height:'40px'}}/></a></td>
              <td><a href={paper.certificate} target='blank'><Image src={pdf} style={{width:'40px',height:'40px'}}/></a></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
        </Container>
          </Col>
          <Col xl={4} lg={4}  sm={12} style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
          <div style={{marginTop:'2rem'}}>
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


           <div style={{marginTop:'5rem',marginBottom:'1rem'}}>
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

export default CurrentIssueComp