import React from 'react';
import {Jumbotron,Container,Row,Col} from 'react-bootstrap';
import Layout from '../../component/Layout';
import './style.css';
const Home = (props) => {
    return (
        <Layout>
            <Container>
                <Row>
                    <Col md={2} className="sidebar">Side Bar</Col>
                    <Col md={10} style={{margin:'auto'}}>Container</Col>
                </Row>
            </Container>
        </Layout>
        
        /*<Layout>
            <Jumbotron style={ {margin:'5rem' ,background: '#fff'} } className="text-center">
                    <h1>Welcome to Admin Dashboard</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Jumbotron>
        </Layout>*/
    )
}

export default Home;
