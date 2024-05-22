import React from 'react'
import HeaderReviewer from './HeaderReviewer'
import FooterReviewer from './FooterReviewer'
import EditorDeskComp from '../EditorDesk/EditorDeskComp'
import { Breadcrumb, Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import {  Link } from 'react-router-dom';
function EditorDeskReviewer() {
  return (
    <div>
      <HeaderReviewer/>
    <Breadcrumb style={{backgroundColor:' #E8E7E7'}}>
  <Breadcrumb.Item style={{marginLeft:'20px'}}><Link to="/reviewer-home">Home</Link></Breadcrumb.Item>
  <Breadcrumb.Item active>Editor Desk</Breadcrumb.Item>
</Breadcrumb>
<Container className="mt-5 mb-3">
      <Row className="justify-content-md-center">
        <Col md="10">
          <Card>
            <Card.Body>
              <Card.Title as="h2" className="text-center">Editor's Desk</Card.Title>
              <Card.Text as="div">
                <h3>Message from the Editor-in-Chief</h3>
                <p><strong>Krishna Prasad S.</strong></p>
                <p><strong>Editor-in-Chief, International Journal for Research in Multidisciplinary Advancements (IJRMA)</strong></p>
                
                <p>
                  Welcome to the International Journal for Research in Multidisciplinary Advancements (IJRMA). As the Editor-in-Chief, I am delighted to introduce our journal, which is dedicated to fostering high-quality research and disseminating significant academic contributions across various fields of study.
                </p>
                
                <p>
                  At IJRMA, we believe in the power of knowledge and the importance of sharing innovative ideas. Our journal operates with a commitment to academic excellence, rigorous peer review, and ethical publication practices. Here’s an overview of how our journal works:
                </p>

                <h4>Our Mission</h4>
                <p>
                  Our mission is to provide a reputable platform for researchers, academics, and professionals to publish their work and share it with a global audience. We strive to promote interdisciplinary research and to bridge the gap between theory and practice.
                </p>

                <h4>Submission and Review Process</h4>
                <p>
                  The submission process at IJRMA is designed to be straightforward and author-friendly. Authors can submit their manuscripts through our online submission system, which ensures a smooth and efficient process. Each submission undergoes a double-blind peer review to maintain the highest standards of quality and impartiality.
                </p>

                <ol>
                  <li><strong>Submission</strong>: Authors submit their manuscripts via our online platform.</li>
                  <li><strong>Initial Screening</strong>: The editorial team conducts an initial screening to check the suitability and adherence to the journal's guidelines.</li>
                  <li><strong>Peer Review</strong>: Suitable manuscripts are sent to expert reviewers for a thorough double-blind review. This ensures that both the reviewer and author remain anonymous to each other, promoting unbiased feedback.</li>
                  <li><strong>Decision</strong>: Based on the reviewers' recommendations, the editorial team makes a decision to accept, revise, or reject the manuscript.</li>
                  <li><strong>Revision</strong>: If revisions are required, authors are given the opportunity to make the necessary changes and resubmit.</li>
                  <li><strong>Publication</strong>: Once accepted, the manuscript is copyedited, formatted, and published online.</li>
                </ol>

                <h4>Editorial Policies</h4>
                <p>
                  We uphold the principles of transparency, integrity, and fairness in all our operations. Our editorial policies are designed to ensure ethical publication practices and to prevent any form of misconduct. We adhere to the guidelines set by relevant ethical guidelines, such as those of the Committee on Publication Ethics (COPE).
                </p>

                <h4>Innovation and Impact</h4>
                <p>
                  At IJRMA, we are committed to publishing research that has a significant impact on its field. We encourage submissions that introduce new ideas, propose innovative methodologies, and provide practical solutions to contemporary issues.
                </p>

                <h4>Engagement and Community</h4>
                <p>
                  We aim to build a vibrant community of scholars and practitioners. Through our journal, we facilitate the exchange of knowledge and foster collaborative efforts. We also encourage readers and authors to engage with us through our social media platforms and events.
                </p>

                <h4>Acknowledgements</h4>
                <p>
                  I would like to extend my gratitude to our dedicated editorial team, our esteemed reviewers, and our authors for their contributions. Their hard work and commitment to excellence are the driving forces behind our journal's success.
                </p>

                <p>
                  Thank you for choosing IJRMA as your publishing partner. We look forward to receiving your submissions and to working together to advance knowledge and innovation in our respective fields.
                </p>

                <p>
                  Sincerely,
                  <br />
                  Krishna Prasad S.
                  <br />
                  Editor-in-Chief, International Journal for Research in Multidisciplinary Advancements (IJRMA)
                </p>

                <h4>Contact Information</h4>
                <p>
                  For any inquiries or further information, please contact us at:
                </p>
                <ol>
                <li><strong>General Inquiries</strong>: <a style={{textDecoration:'none'}} href="mailto:info.ijrma@gmail.com">info.ijrma@gmail.com</a></li>
                <li><strong>Submission Support</strong>: <a style={{textDecoration:'none'}} href="mailto:ijrmapublishers@gmail.com">ijrmapublishers@gmail.com</a></li>
                  
                </ol>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <FooterReviewer/>
    </div>
  )
}

export default EditorDeskReviewer