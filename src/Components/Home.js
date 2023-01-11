import React from "react";
import { Button, Container,Table,Row,Col } from "react-bootstrap";

const Home=()=>{
    

    return(
        <Container className="justify-content-md-center">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h1>Tours</h1>
        <Table>
            <tbody>
                <tr>
                    <th>JUL16</th>
                    <th>DETROIT, MI</th>
                    <th>DTE ENERGY MUSIC THEATRE</th>
                    <th><Button variant="primary">BUY TICKETS</Button></th>
                </tr>
                <tr>
                    <th>JUL16</th>
                    <th>DETROIT, MI</th>
                    <th>DTE ENERGY MUSIC THEATRE</th>
                    <th><Button variant="primary">BUY TICKETS</Button></th>
                </tr>
                <tr>
                    <th>JUL16</th>
                    <th>DETROIT, MI</th>
                    <th>DTE ENERGY MUSIC THEATRE</th>
                    <th><Button variant="primary">BUY TICKETS</Button></th>
                </tr>
                <tr>
                    <th>JUL16</th>
                    <th>DETROIT, MI</th>
                    <th>DTE ENERGY MUSIC THEATRE</th>
                    <th><Button variant="primary">BUY TICKETS</Button></th>
                </tr>
                <tr>
                    <th>JUL16</th>
                    <th>DETROIT, MI</th>
                    <th>DTE ENERGY MUSIC THEATRE</th>
                    <th><Button variant="primary">BUY TICKETS</Button></th>
                </tr>
                <tr>
                    <th>JUL16</th>
                    <th>DETROIT, MI</th>
                    <th>DTE ENERGY MUSIC THEATRE</th>
                    <th><Button variant="primary">BUY TICKETS</Button></th>
                </tr>
            </tbody>
        </Table>
        </Col>
        </Row>
        </Container>
    )
};

export default Home;