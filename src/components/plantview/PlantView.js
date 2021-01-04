import React, { useState } from 'react';
import { create } from '../../services/plantsService'
import { Col, Button, Form, FormGroup, FormText, Label, Input, Card, CardBody } from 'reactstrap';


const PlantView = ({ plantsData, setPlantsData, toggleGardenView, setToggleGardenView }) => {
    const [name, setName] = useState('')
    const [scientificName, setScientificName] = useState('')
    const [description, setDescription] = useState('')
    //const [grownFromSeed, setGrownFromSeed] = useState(false)
    //const [plantingMonth, setPlantingMonth] = useState('')
    //const [monthToHarvest, setMonthToHaverst] = useState('')
    //const [sunlight, setSunlight] = useState('')
    //const [soilType, setSoilType] = useState('')
    //const [watering, setWatering] = useState('')

    //const [heirloom, setHeirloom] = useState(false)
    //const [growingZone, setGrowingZone] = useState('')
    //const [idealTemp, setIdealTemp] = useState(0)
    //const [seedDepth, setSeedDepth] = useState(0)
    //const [spacing, setSpacing] = useState(0)
    //const [daysToMature, setDaysToMature] = useState(0)
    //const [sproutsIn, setSproutsIn] = useState(0)
    const [imageURL, setImageURL] = useState('')

    const handleAddPlant = (e) => {
        e.preventDefault()

        const newPlant = {
            name,
            scientificName,
            description,
            // grownFromSeed,
            // plantingMonth,
            // monthToHarvest,
            // sunlight,
            // soilType,
            // watering,
            imageURL,
            //heirloom,
            //growingZone,
            //idealTemp,
            //seedDepth,
            //spacing,
            //daysToMature,
            //sproutsIn
        }

        create(newPlant)
            .then((returnedPlant) => {
                setPlantsData(plantsData.concat(returnedPlant))
            })
            .catch(err => console.log('There was an error submitting a plant', err))

        setToggleGardenView(!toggleGardenView)
    }

    return (
        <Card body className="px-4 pt-5 pb-2" style={{ borderRadius: "0", backgroundColor: "#f8f8f4" }}>
            <CardBody className="pt-0">
                <Form onSubmit={handleAddPlant}>
                    <FormGroup row>
                        <Label className="h5" for="plantName" sm={2}>Plant Name</Label>
                        <Col sm={10}>
                            <Input type="text" name="plantName" required onChange={(e) => setName(e.target.value)} id="plantName" placeholder="Enter plant name" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label className="h5" for="scientificName" sm={2}>Scientific Name</Label>
                        <Col sm={10}>
                            <Input type="text" name="scientificName" required onChange={(e) => setScientificName(e.target.value)} id="scientificName" placeholder="Enter scientific name" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label className="h5" for="description" sm={2}>Description</Label>
                        <Col sm={10}>
                            <Input type="textarea" name="description" required onChange={(e) => setDescription(e.target.value)} id="description" placeholder="Write a brief description" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label className="h5" for="image" sm={2}>Image URL</Label>
                        <Col sm={10}>
                            <Input type="text" name="imageURL" required onChange={(e) => setImageURL(e.target.value)} id="imageURL" placeholder="Enter a URL" />
                            <p className="text-muted mt-2 font-italic">Enter a complete URL linking to your plant's image. We suggest using <a className="text-muted font-weight-bold" href="https://www.google.com/photos/about/">Google Photos</a></p>
                        </Col>
                    </FormGroup>
                    {/* <FormGroup row>
                        <Label for="soil" sm={2}>Optimal Soil</Label>
                        <Col sm={10}>
                            <Input required onChange={(e) => setSoilType(e.target.value)} type="select" name="soil" id="soil">
                                <option>Clay</option>
                                <option>Sandy</option>
                                <option>Silty</option>
                                <option>Peaty</option>
                                <option>Chalky</option>
                                <option>Loamy</option>
                            </Input>
                        </Col>
                    </FormGroup> */}
                    {/* <FormGroup row>
                        <Label for="watering" sm={2}>Optimal Watering</Label>
                        <Col sm={10}>
                            <Input type="text" name="watering" onChange={(e) => setWatering(e.target.value)} id="watering" />
                        </Col>
                    </FormGroup> */}
                    {/* <FormGroup row>
                        <Label for="plantingMonth" sm={2}>Month to Plant</Label>
                        <Col sm={10}>
                            <Input type="date" name="plantingMonth" required onChange={(e) => setPlantingMonth(e.target.value)} id="plantingMonth" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="harvest" sm={2}>Month to Harvest</Label>
                        <Col sm={10}>
                            <Input type="date" name="harvest" onChange={(e) => setMonthToHaverst(e.target.value)} id="harvest" />
                        </Col>
                    </FormGroup> */}
                    {/* <FormGroup row>
                        <Label for="sunlight" sm={2}>Optimal Sunlight</Label>
                        <Col sm={10}>
                            <Input type="select" required name="sunlight" onChange={(e) => setSunlight(e.target.value)} id="sunlight">
                                <option>Shade</option>
                                <option>Moderate</option>
                                <option>Full Sun</option>
                            </Input>
                        </Col>
                    </FormGroup> */}
                    {/* <FormGroup row>
                        <Label for="seed" sm={2}>Grown from seed?</Label>
                        <Col sm={10}>
                            <Input type="select" name="seed" required onChange={(e) => setGrownFromSeed(e.target.value)} id="seed">
                                <option>Yes</option>
                                <option>No</option>
                            </Input>
                        </Col>
                    </FormGroup> */}

                    <Button type="submit" className="mt-5" block size="lg" color="success">Submit</Button>
                </Form>
            </CardBody>
        </Card>
    )
}

export default PlantView