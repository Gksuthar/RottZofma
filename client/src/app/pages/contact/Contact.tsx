import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { BiMapPin, BiMessageSquare, BiPhone } from 'react-icons/bi';
import { BsMailbox } from 'react-icons/bs';
import { CgLock } from 'react-icons/cg';

function Contact() {
  const handleSubmit = (e:any) => {
    e.preventDefault();
    alert("Message sent! Our team will get back to you shortly.");
  };

  return (
    <div className="contact-page bg-light pb-5">
      {/* Dark Header */}
      <section className="contact-header">
        <Container>
          <h1 className="display-4 fw-bold">Get In <span className="yellow-text">Touch</span></h1>
          <p className="text-secondary">Have questions? We're here to help you move smoother.</p>
        </Container>
      </section>

      <Container>
        <Card className="contact-card p-4 p-md-5">
          <Row className="g-5">
            {/* Contact Form */}
            <Col lg={7}>
              <h3 className="fw-bold mb-4">Send us a Message</h3>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Label className="small fw-bold">Full Name</Form.Label>
                    <Form.Control type="text" placeholder="John Doe" required />
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Label className="small fw-bold">Email Address</Form.Label>
                    <Form.Control type="email" placeholder="john@example.com" required />
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label className="small fw-bold">Subject</Form.Label>
                  <Form.Select>
                    <option>Ride Support</option>
                    <option>Become a Captain</option>
                    <option>Business Partnerships</option>
                    <option>Report an Issue</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label className="small fw-bold">Message</Form.Label>
                  <Form.Control as="textarea" rows={5} placeholder="How can we help you?" />
                </Form.Group>
                <Button className="btn-rapido w-100 py-3 shadow-sm" type="submit">
                  Send Message
                </Button>
              </Form>
            </Col>

            {/* Contact Details */}
            <Col lg={5}>
              <div className="ps-lg-4">
                <h3 className="fw-bold mb-4">Contact Information</h3>
                
                <div className="contact-info-box mb-3">
                  <div className="icon-circle"><BiMapPin size={20} /></div>
                  <h6 className="fw-bold">Headquarters</h6>
                  <p className="text-muted small mb-0">HSR Layout, Sector 7, Bengaluru, Karnataka 560102</p>
                </div>

                <div className="contact-info-box mb-3">
                  <div className="icon-circle"><BsMailbox size={20} /></div>
                  <h6 className="fw-bold">Email Us</h6>
                  <p className="text-muted small mb-0">support@rapido-clone.com</p>
                  <p className="text-muted small mb-0">business@rapido-clone.com</p>
                </div>

                <div className="contact-info-box mb-3">
                  <div className="icon-circle"><CgLock size={20} /></div>
                  <h6 className="fw-bold">Support Hours</h6>
                  <p className="text-muted small mb-0">24/7 Support for Active Rides</p>
                  <p className="text-muted small mb-0">General: 9 AM - 8 PM</p>
                </div>
              </div>
            </Col>
          </Row>
        </Card>

        {/* Support Options Section */}
        <Row className="mt-5 text-center g-4">
           <Col md={4}>
             <Card className="border-0 shadow-sm p-4 rounded-4">
               <BiMessageSquare className="mx-auto mb-3 text-warning" size={32} />
               <h5>Chat Support</h5>
               <p className="small text-muted">Instant help via our mobile app chat bot.</p>
               <Button variant="link" className="text-dark fw-bold text-decoration-none">Start Chat →</Button>
             </Card>
           </Col>
           <Col md={4}>
             <Card className="border-0 shadow-sm p-4 rounded-4">
               <BiPhone className="mx-auto mb-3 text-warning" size={32} />
               <h5>Call Us</h5>
               <p className="small text-muted">Dedicated helpline for emergency safety concerns.</p>
               <Button variant="link" className="text-dark fw-bold text-decoration-none">View Numbers →</Button>
             </Card>
           </Col>
           <Col md={4}>
             <Card className="border-0 shadow-sm p-4 rounded-4">
               <ShieldCheck className="mx-auto mb-3 text-warning" size={32} />
               <h5>Safety Center</h5>
               <p className="small text-muted">Learn about our insurance and safety protocols.</p>
               <Button variant="link" className="text-dark fw-bold text-decoration-none">Learn More →</Button>
             </Card>
           </Col>
        </Row>
      </Container>
    </div>
  );
}

// Dummy Icon for Safety center if lucide-react isn't used
const ShieldCheck = ({className}:any) => <div className={className}>🛡️</div>;

export default Contact;