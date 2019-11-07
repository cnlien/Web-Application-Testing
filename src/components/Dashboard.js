import React from 'react'

//Styling
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Button, Col, Row } from 'reactstrap';

import useCountStrikes from './hooks/useCountStrikes';

export const Dashboard =()=> {

    const [homeStrike, setHomeStrike] = useCountStrikes(0);

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Home Buttons</h1>
                    <Row>
                        <Button>Strike</Button>
                        <Button>Ball</Button>
                        <Button>Foul</Button>
                        <Button>Hit</Button>
                    </Row>
                </Col>

                <Col>
                    <h1>Away Buttons</h1>
                    <Row>
                        <Button>Strike</Button>
                        <Button>Ball</Button>
                        <Button>Foul</Button>
                        <Button>Hit</Button>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

