import React from 'react'
import { Breadcrumb, Card, Col, Container, Image, ListGroup, Row } from 'react-bootstrap'
import check from '../../Assets/Images/check.png'
import flow from '../../Assets/Images/flowchart.jpg'
import { Link } from 'react-router-dom'
function GuidelinesComp() {
  return (
    <div>
        <Breadcrumb style={{backgroundColor:' #E8E7E7'}}>
 <Breadcrumb.Item style={{marginLeft:'20px'}}><Link to="/">Home</Link></Breadcrumb.Item>
 <Breadcrumb.Item active>Guidelines</Breadcrumb.Item>
</Breadcrumb>
        <Container fluid>
            <Row>
           
                <Col xl={8} lg={8} sm={12} className='mt-4'>
                <h1 style={{color:'#A01E1E',textAlign:'center'}}>Guidelines</h1>
                <Container>
            <h4>A. Paper Submission</h4>
            <p>IJRMA welcomes author submission of articles concerning any branch of the Arts, Science, Engineering, Technology, Management and their applications in business, industry and other relevant areas as given below:
Authors are invited to submit their papers round the year through submission link. Submissions must be original and should not have been published previously or be under consideration for publication while being evaluated for this journal. Acceptance/Rejection Notifications will be sent to the corresponding author only. After the final acceptance of the paper, based upon the detailed review process, the paper will immediately be published online</p>

            <h4>B. Structure of an Article:</h4>
            <p>The structure of the article should be based on the following details:-</p>

            <Row style={{borderTop:'1px solid #cccccc',borderBottom:'1px solid #cccccc',padding:'10px'}}>
                <h6>Title</h6>
<h6>Author Name, Affiliation, Email ID & Mobile No</h6>
            </Row>
            <Row className='p-1 mt-2'>
                <h5>ABSTRACT & KEYWORDS</h5>
            </Row>
            <Row style={{border:'1px solid #cccccc',padding:'10px',borderBottom:0}}>I. INTRODUCTION</Row>
            <Row style={{border:'1px solid #cccccc',padding:'10px',borderBottom:0}}>II. LITERATURE SURVEY</Row>
            <Row style={{border:'1px solid #cccccc',padding:'10px',borderBottom:0}}>III. METHODOLOGY / APPROACH</Row>
            <Row style={{border:'1px solid #cccccc',padding:'10px',borderBottom:0}}>IV. RESULTS & DISCUSSION</Row>
            <Row style={{border:'1px solid #cccccc',padding:'10px'}}>V. CONCLUSION</Row>
            <Row className='mt-3'>
                <h4>REFERENCES :</h4>
            </Row>

            <Row className='mt-2'>
                <div style={{display:'flex'}}>
                    <Image src={check} style={{width:'25px',height:'25px',marginRight:'10px'}}/>
                    <h5 style={{color:'#302CD4'}}>TITLE (Maximum 120 Characters)</h5>
                </div>
                <p>Title must be informative and specific. It should be easily understandable by reader and should reflect motive of the research paper.</p>
            </Row>
            <Row className='mt-2'>
                <div style={{display:'flex'}}>
                    <Image src={check} style={{width:'25px',height:'25px',marginRight:'10px'}}/>
                    <h5 style={{color:'#302CD4'}}>AUTHOR NAME, AFFILIATION, EMAIL IDS & MOBILE NUMBERS</h5>
                </div>
                <p>Include Name, designation, department, Institute name, place, State, Country, Email of each author.</p>
            </Row>
            <Row className='mt-2'>
                <div style={{display:'flex'}}>
                    <Image src={check} style={{width:'25px',height:'25px',marginRight:'10px'}}/>
                    <h5 style={{color:'#302CD4'}}>ABSTRACT</h5>
                </div>
                <p>One paragraph containing at most 100 words. It is a summary of the report describing the question investigated, the methods used, the principle results and conclusions.</p>
            </Row>
            <Row className='mt-2'>
                <div style={{display:'flex'}}>
                    <Image src={check} style={{width:'25px',height:'25px',marginRight:'10px'}}/>
                    <h5 style={{color:'#302CD4'}}>KEYWORDS</h5>
                </div>
                <p>Five most important terms that describe your research domain and specific problem area investigated.</p>
            </Row>
            <Row className='mt-2'>
                <div style={{display:'flex'}}>
                    <Image src={check} style={{width:'25px',height:'25px',marginRight:'10px'}}/>
                    <h5 style={{color:'#302CD4'}}>INTRODUCTION</h5>
                </div>
                <p>It is a brief section usually not more than a page. It should be informing the reader of the relevance of your research.</p>
            </Row>
            <Row className='mt-2'>
                <div style={{display:'flex'}}>
                    <Image src={check} style={{width:'25px',height:'25px',marginRight:'10px'}}/>
                    <h5 style={{color:'#302CD4'}}>LITERATURE SURVEY</h5>
                </div>
                <p>This section includes a short history or relevant background of the research area done by other researchers in the past.</p>
            </Row>
            <Row className='mt-2'>
                <div style={{display:'flex'}}>
                    <Image src={check} style={{width:'25px',height:'25px',marginRight:'10px'}}/>
                    <h5 style={{color:'#302CD4'}}>METHODOLOGY / APPROACH</h5>
                </div>
                <p>This section should describe how you are supposed to rectify the problem, what approach or what methodology you are supposed to use in your paper.</p>
            </Row>
            <Row className='mt-2'>
                <div style={{display:'flex'}}>
                    <Image src={check} style={{width:'25px',height:'25px',marginRight:'10px'}}/>
                    <h5 style={{color:'#302CD4'}}>RESULTS & DISCUSSION</h5>
                </div>
                <p>This section describes the outputs generated in the methodology section. Elaborate and compare your results with previous research performed in the past with Tables/Graphs/ Figures etc whichever is applicable.</p>
            </Row>
            <Row className='mt-2'>
                <div style={{display:'flex'}}>
                    <Image src={check} style={{width:'25px',height:'25px',marginRight:'10px'}}/>
                    <h5 style={{color:'#302CD4'}}>CONCLUSION</h5>
                </div>
                <p>Final extract of your research performed. Concisely elaborate your final output here.</p>
            </Row>
            <Row className='mt-2'>
                <div style={{display:'flex'}}>
                    <Image src={check} style={{width:'25px',height:'25px',marginRight:'10px'}}/>
                    <h5 style={{color:'#302CD4'}}>REFERENCES</h5>
                </div>
                <p>If you reference an external source in your paper, you should cite where you found that source. Give credit to the actual contributor, they deserve this.</p>
            </Row>
            <Row className='mt-2'>
                <h6>Paper Format :</h6>
            </Row>
            <Row className='mt-4 p-3 mb-4' style={{border:'1px solid #cccccc'}}>
            <h4>Paper Publication Process</h4>
            <Image src={flow} className='img-fluid'/>
            </Row>
        </Container>
                </Col>
                <Col xl={4} lg={4}  sm={12} style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
           <div className='homeMarTop'>
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

           <div style={{marginTop:'5rem'}}>
           <Card style={{width:'18rem',borderColor:'black' }}>
 <Card.Header style={{ backgroundColor:'#A01E1E',color:'white',fontWeight:600,textAlign:'center'}}>For Authors</Card.Header>
 <ListGroup variant="flush">
   <ListGroup.Item style={{backgroundColor:'#E8E7E7',padding:'15px'}}><Link to="/guidelines" style={{color:'#302CD4',fontWeight:600,textDecoration:'none'}}>Guidelines</Link></ListGroup.Item>
   <ListGroup.Item style={{backgroundColor:'#E8E7E7',padding:'15px'}}><Link to="/processing-charges" style={{color:'#302CD4',fontWeight:600,textDecoration:'none'}}>Processing Charges</Link></ListGroup.Item>

   
 </ListGroup>
</Card>
           </div>
       

           <div style={{marginTop:'5rem'}}>
           <Card style={{width:'18rem',borderColor:'black' }}>
 <Card.Header style={{ backgroundColor:'#A01E1E',color:'white',fontWeight:600,textAlign:'center'}}>Issue</Card.Header>
 <ListGroup variant="flush">
   <ListGroup.Item style={{backgroundColor:'#E8E7E7',padding:'15px'}}><Link to="/current-issue-2024" style={{color:'#302CD4',fontWeight:600,textDecoration:'none'}}>Current Issue</Link></ListGroup.Item>
   <ListGroup.Item style={{backgroundColor:'#E8E7E7',padding:'15px'}}><Link to="/past-issue" style={{color:'#302CD4',fontWeight:600,textDecoration:'none'}}>Past Issue</Link></ListGroup.Item>
   <ListGroup.Item style={{backgroundColor:'#E8E7E7',padding:'15px'}}><Link to="/special-issue" style={{color:'#302CD4',fontWeight:600,textDecoration:'none'}}>Special Issue</Link></ListGroup.Item>

   
 </ListGroup>
</Card>
           </div>


           <div style={{marginTop:'5rem'}}>
           <Card style={{width:'18rem',borderColor:'black' }}>
 <Card.Header style={{ backgroundColor:'#A01E1E',color:'white',fontWeight:600,textAlign:'center'}}>Archives</Card.Header>
 <ListGroup variant="flush">
   <ListGroup.Item style={{backgroundColor:'#E8E7E7',padding:'15px'}}><Link to="/link" style={{color:'#302CD4',fontWeight:600,textDecoration:'none'}}>2024</Link></ListGroup.Item>
   <ListGroup.Item style={{backgroundColor:'#E8E7E7',padding:'15px'}}><Link to="/link" style={{color:'#302CD4',fontWeight:600,textDecoration:'none'}}>2023</Link></ListGroup.Item>
   <ListGroup.Item style={{backgroundColor:'#E8E7E7',padding:'15px'}}><Link to="/link" style={{color:'#302CD4',fontWeight:600,textDecoration:'none'}}>2022</Link></ListGroup.Item>
   <ListGroup.Item style={{backgroundColor:'#E8E7E7',padding:'15px'}}><Link to="/link" style={{color:'#302CD4',fontWeight:600,textDecoration:'none'}}>2021</Link></ListGroup.Item>

   
 </ListGroup>
</Card>
           </div>
       </Col>
            </Row>
        </Container>
        
    </div>
  )
}

export default GuidelinesComp