import React from 'react';
import { Col, Button, Form, FormGroup, FormText, Label, Input, Card, CardBody, CardTitle } from 'reactstrap';


const PlantView = () => (
    <Card body className="mt-3 mb-5 p-5">
        <CardBody className="pt-0">
            <CardTitle className="text-center" tag="h3">Add Plant</CardTitle>
            <hr className="mb-5" />
            <Form>
                <FormGroup row>
                    <Label for="exampleEmail" sm={2}>Plant Name</Label>
                    <Col sm={10}>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="examplePassword" sm={2}>Scientific Name</Label>
                    <Col sm={10}>
                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="exampleText" sm={2}>Description</Label>
                    <Col sm={10}>
                        <Input type="textarea" name="text" id="exampleText" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleText" sm={2}>Optimal Soil</Label>
                    <Col sm={10}>
                        <Input type="text" name="text" id="exampleText" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleText" sm={2}>Optimal Watering</Label>
                    <Col sm={10}>
                        <Input type="text" name="text" id="exampleText" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleText" sm={2}>Month to Plant</Label>
                    <Col sm={10}>
                        <Input type="text" name="text" id="exampleText" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleText" sm={2}>Month Planted</Label>
                    <Col sm={10}>
                        <Input type="textarea" name="text" id="exampleText" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleText" sm={2}>Month to Harvest</Label>
                    <Col sm={10}>
                        <Input type="textarea" name="text" id="exampleText" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleSelect" sm={2}>Optimal Sunlight</Label>
                    <Col sm={10}>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleSelect" sm={2}>Grown from seed?</Label>
                    <Col sm={10}>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleFile" sm={2}>Image</Label>
                    <Col sm={10}>
                        <Input type="file" name="file" id="exampleFile" />
                        <FormText color="muted">
                            Please upload a plant image!
                            </FormText>
                    </Col>
                </FormGroup>
                <Button className="mt-5" block size="lg" color="success">Submit</Button>
            </Form>
        </CardBody>
    </Card>
)

export default PlantView