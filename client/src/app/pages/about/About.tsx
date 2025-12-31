import React from 'react';
import { Container, Row, Col, Button, Card, Badge } from 'react-bootstrap';
import { BiMapPin, BiRocket } from 'react-icons/bi';
import { BsShieldCheck } from 'react-icons/bs';
import { FaUserSecret } from 'react-icons/fa6';

function About() {
  return (
    <div className="about-page">
      {/* ... [Previous Hero & Stats Sections] ... */}

      {/* NEW: Core Values Section */}
      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="section-title">The Values We Live By</h2>
          </div>
          <Row>
            {[
              { icon: <BiRocket />, title: "Innovation", desc: "Solving India's traffic woes with tech-driven bike-taxi solutions." },
              { icon: <BsShieldCheck />, title: "Trust & Safety", desc: "Real-time tracking, SOS features, and insured rides for peace of mind." },
              { icon: <FaUserSecret />, title: "Community", desc: "Empowering 1 Million+ Captains to become micro-entrepreneurs." }
            ].map((value, i) => (
              <Col md={4} key={i} className="mb-4">
                <div className="p-4 h-100 bg-white shadow-sm rounded-4 border-top border-warning border-4">
                  <div className="value-icon">{value.icon}</div>
                  <h4>{value.title}</h4>
                  <p className="text-muted">{value.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* NEW: Journey Timeline */}
      <section className="py-5 bg-light">
        <Container>
          <Row>
            <Col md={5}>
              <h2 className="section-title">Our Journey</h2>
              <p className="lead text-muted">From a small garage in Bengaluru to becoming a household name across India.</p>
            </Col>
            <Col md={{ span: 6, offset: 1 }}>
              <div className="timeline-box">
                <div className="timeline-item">
                  <Badge bg="dark" className="mb-2">2015</Badge>
                  <h5>The Beginning</h5>
                  <p className="text-muted">Founded with a vision to make daily commute easy and affordable.</p>
                </div>
                <div className="timeline-item">
                  <Badge bg="dark" className="mb-2">2019</Badge>
                  <h5>10 Million Rides</h5>
                  <p className="text-muted">Expanded to 50+ cities and hit our first major milestone in user trust.</p>
                </div>
                <div className="timeline-item">
                  <Badge bg="dark" className="mb-2">2024</Badge>
                  <h5>Leading the Market</h5>
                  <p className="text-muted">Launching Auto and Cab services to become a multi-modal mobility platform.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* NEW: Dual Call to Action */}
      <section className="py-5">
        <Container>
          <div className="cta-banner shadow-lg">
            <Row className="align-items-center">
              <Col lg={8}>
                <h2 className="display-5 fw-bold mb-3">Ready to change how you move?</h2>
                <p className="opacity-75 mb-4">Join millions of Indians who save time and money every single day.</p>
                <div className="d-flex gap-3">
                  <Button variant="light" size="lg" className="fw-bold px-4">Download App</Button>
                  <Button variant="outline-light" size="lg" className="fw-bold px-4">Become a Captain</Button>
                </div>
              </Col>
              <Col lg={4} className="d-none d-lg-block text-end">
                 <BiMapPin size={120} className="text-warning opacity-25" />
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* Footer Branding */}
      <footer className="py-5 border-top">
        <Container className="text-center">
          <p className="text-muted">© 2024 Rapido Clone Inc. Built for the future of Indian roads.</p>
        </Container>
      </footer>
    </div>
  );
}

export default About;