import React from 'react';
import { Container, Card, CardBody, CardTitle, CardText, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const UserLogin = (props) => {
    return (
        <Container style={{ height: "80vh" }} className="d-flex justify-content-center align-items-center">
            <Card style={{ width: "310px" }}>
                <CardBody>
                    <CardTitle className="text-center" tag="h3">User Login</CardTitle>
                    <hr />
                    <CardText className="text-muted font-italic mb-4">Don't have an account? <a className="text-muted font-weight-bold" href="/">Sign Up</a> </CardText>
                    <Form>
                        <FormGroup>
                            <Label for="userName">User Name:</Label>
                            <Input type="text" name="userName" id="userName" placeholder="Enter your user name" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password:</Label>
                            <Input type="password" name="password" id="password" placeholder="Enter your password" />
                        </FormGroup>
                        <Button className="mt-4" block color="success">Sign In</Button>
                    </Form>
                </CardBody>
            </Card>
        </Container>
    );
}

export default UserLogin;