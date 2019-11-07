import React from 'react'

//Styling
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Card } from 'reactstrap';

export const Scoreboard = (props) => {
    return (
        
        <Container>
            <Card>
                <Row>
                    <Card>Ball:</Card>
                    <Card>Strike:</Card>
                    <Card>Out:</Card>
                </Row>
                <Row>
                    <Card>Guest</Card>
                </Row>
                <Row>
                    <Card>Home</Card>
                </Row>
            </Card>
        </Container>
    )
}

