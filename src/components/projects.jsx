import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Projects = () => (
    <Container id="projects" className="my-5">
        <h2>My Projects</h2>
        <Row>
            <Col md={4}>
                <Card className="mb-4 project-card">
                    <Card.Img variant="top" src="https://via.placeholder.com/150" />
                    <Card.Body>
                        <Card.Title>Project 1</Card.Title>
                        <Card.Text>
                            A brief description of my amazing project.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="mb-4 project-card">
                    <Card.Img variant="top" src="https://via.placeholder.com/150" />
                    <Card.Body>
                        <Card.Title>Project 2</Card.Title>
                        <Card.Text>
                            A brief description of my second project.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="mb-4 project-card">
                    <Card.Img variant="top" src="https://via.placeholder.com/150" />
                    <Card.Body>
                        <Card.Title>Project 3</Card.Title>
                        <Card.Text>
                            A brief description of my third project.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
);

export default Projects;
