import React, { useState } from 'react';
import { create } from '../../services/plantsService'
import { Col, Row, Button, Form, FormGroup, Label, Input, Card, CardBody } from 'reactstrap';


const PlantView = ({ plantsData, setPlantsData, toggleGardenView, setToggleGardenView }) => {
    const [name, setName] = useState('')
    const [scientificName, setScientificName] = useState('')
    const [description, setDescription] = useState('')
    const [plantingDate, setPlantingDate] = useState('')
    const [sunlight, setSunlight] = useState('Shade')
    const [soilType, setSoilType] = useState('Clay')
    const [watering, setWatering] = useState('Twice a day')
    const [growingZone, setGrowingZone] = useState('Zone 1')
    const [idealTemp, setIdealTemp] = useState("Not Defined")
    const [seedDepth, setSeedDepth] = useState('')
    const [spacing, setSpacing] = useState('')
    const [timeToHarvest, setTimeToHarvest] = useState('N/A')
    const [sproutsIn, setSproutsIn] = useState('')
    const [imageURL, setImageURL] = useState('')
    const [grownFromSeed, setGrownFromSeed] = useState('Yes')
    const [heirloom, setHeirloom] = useState('Yes')

    const handleAddPlant = (e) => {
        e.preventDefault()

        const newPlant = {
            name,
            scientificName,
            description,
            grownFromSeed,
            plantingDate,
            sunlight,
            soilType,
            watering,
            imageURL,
            heirloom,
            growingZone,
            idealTemp,
            seedDepth,
            spacing,
            timeToHarvest,
            sproutsIn
        }

        create(newPlant)
            .then((returnedPlant) => {
                setPlantsData(plantsData.concat(returnedPlant))
            })
            .catch(err => console.log('There was an error submitting a plant', err))

        setToggleGardenView(!toggleGardenView)
    }

    return (
        <Card body className="px-3 pt-4 pb-2" style={{ borderRadius: "0", backgroundColor: "#f8f8f4" }}>
            <Col className="mx-auto" lg="11">
                <CardBody>
                    <Form onSubmit={handleAddPlant}>
                        <FormGroup className="mb-4" row>
                            <Label for="plantName"><h6>Plant Name:</h6></Label>
                            <Input type="text" name="plantName" required onChange={(e) => setName(e.target.value)} id="plantName" placeholder="Enter plant name" />
                        </FormGroup>
                        <FormGroup className="my-4" row>
                            <Label for="scientificName"><h6>Scientific Name:</h6></Label>
                            <Input type="text" name="scientificName" required onChange={(e) => setScientificName(e.target.value)} id="scientificName" placeholder="Enter scientific name" />
                        </FormGroup>
                        <FormGroup className="my-4" row>
                            <Label for="description"><h6>Description:</h6></Label>
                            <Input type="textarea" name="description" required onChange={(e) => setDescription(e.target.value)} id="description" placeholder="Write a brief description" />
                        </FormGroup>
                        <FormGroup className="my-4" row>
                            <Label for="image"><h6>Image URL:</h6></Label>
                            <Input type="text" name="imageURL" required onChange={(e) => setImageURL(e.target.value)} id="imageURL" placeholder="Enter a URL" />
                            <p className="text-muted mt-2 mb-0 font-italic">Enter a complete URL linking to your plant's image. We suggest using <a className="text-muted font-weight-bold" href="https://www.google.com/photos/about/">Google Photos</a></p>
                        </FormGroup>
                        <Row>
                            <Col className="mr-2">
                                <FormGroup className="mb-4" row>
                                    <Label for="soil"><h6>Optimal Soil:</h6></Label>
                                    <Input required onChange={(e) => setSoilType(e.target.value)} type="select" name="soil" id="soil">
                                        <option>Clay</option>
                                        <option>Sandy</option>
                                        <option>Silty</option>
                                        <option>Peaty</option>
                                        <option>Chalky</option>
                                        <option>Loamy</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup className="my-4" row>
                                    <Label for="growingZone"><h6>Growing Zone:</h6></Label>
                                    <Input required onChange={(e) => setGrowingZone(e.target.value)} type="select" name="soil" id="soil">
                                        <option>Zone 1</option>
                                        <option>Zone 2</option>
                                        <option>Zone 3</option>
                                        <option>Zone 4</option>
                                        <option>Zone 5</option>
                                        <option>Zone 6</option>
                                        <option>Zone 7</option>
                                        <option>Zone 8</option>
                                        <option>Zone 9</option>
                                        <option>Zone 10</option>
                                        <option>Zone 11</option>
                                        <option>Zone 12</option>
                                        <option>Zone 13</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup className="my-4" row>
                                    <Label for="watering"><h6>Optimal Watering:</h6></Label>
                                    <Input required onChange={(e) => setWatering(e.target.value)} type="select" name="watering" id="watering">
                                        <option>2x Daily</option>
                                        <option>Daily</option>
                                        <option>Every Other Day</option>
                                        <option>Weekly</option>
                                        <option>Monthly</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup className="my-4" row>
                                    <Label for="seedDepth"><h6>Seed Depth:</h6></Label>
                                    <Input type="text" name="seedDepth" required onChange={e => setSeedDepth(e.target.value)} id="seedDepth" placeholder="Depth (Inches)" />
                                </FormGroup>
                                <FormGroup className="my-4" row>
                                    <Label for="seedSpacing"><h6>Seed Spacing:</h6></Label>
                                    <Input type="text" name="seedSpacing" required onChange={e => setSpacing(e.target.value)} id="seedSpacing" placeholder="Distance (Inches)" />
                                </FormGroup>
                                <FormGroup className="mt-4" row>
                                    <Label for="idealTemp"><h6>Ideal Temp:</h6></Label>
                                    <Input type="text" name="idealTemp" required onChange={(e) => setIdealTemp(e.target.value)} id="idealTemp" placeholder="Temp in F" />
                                </FormGroup>
                            </Col>
                            <Col className="ml-4">
                                <FormGroup className="mb-4" row>
                                    <Label for="plantingDate"><h6>Planted On:</h6></Label>
                                    <Input type="date" name="plantingDate" required onChange={(e) => setPlantingDate(e.target.value)} id="plantingDate" />
                                </FormGroup>
                                <FormGroup className="my-4" row>
                                    <Label for="sunlight"><h6>Sunlight:</h6></Label>
                                    <Input type="select" required name="sunlight" onChange={(e) => setSunlight(e.target.value)} id="sunlight">
                                        <option>Shade</option>
                                        <option>Moderate</option>
                                        <option>Full Sun</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup className="my-4" row>
                                    <Label for="seed"><h6>Grown from seed:</h6></Label>
                                    <Input type="select" name="seed" required onChange={e => setGrownFromSeed(e.target.value)} id="seed">
                                        <option>Yes</option>
                                        <option>No</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup className="my-4" row>
                                    <Label for="timeToHarvest"><h6>Time To Harvest:</h6></Label>
                                    <Input type="text" name="timeToHarvest" onChange={(e) => setTimeToHarvest(e.target.value)} id="timeToHarvest" placeholder="Time to Harvest (Optional)" />
                                </FormGroup>
                                <FormGroup className="my-4" row>
                                    <Label for="timeTillSprouting"><h6>Sprouting Time:</h6></Label>
                                    <Input type="text" name="timeTillSprouting" required onChange={(e) => setSproutsIn(e.target.value)} id="timeTillSprouting" placeholder="Days to sprout" />
                                </FormGroup>
                                <FormGroup className="mt-4" row>
                                    <Label for="seed"><h6>Heirloom:</h6></Label>
                                    <Input type="select" name="seed" required onChange={e => setHeirloom(e.target.value)} id="seed">
                                        <option>Yes</option>
                                        <option>No</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="8" className="mx-auto">
                                <Button type="submit" className="mt-3" block color="success">Submit</Button>
                            </Col>
                        </Row>
                    </Form>
                </CardBody>
            </Col>
        </Card>
    )
}

export default PlantView