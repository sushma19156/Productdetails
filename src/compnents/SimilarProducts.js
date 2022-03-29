import React from 'react'
import { Card } from 'react-bootstrap'

function SimilarProducts() {
    return (
        <div>
            <h4>Similar Products</h4>
            <div className='container-fluid '>
                <div className='row'>
                    <div className='col-lg-3'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="/assests/s1.png" width="150px" height="150px" />
                            <Card.Body>
                                <Card.Title>Lancome Miracle</Card.Title>
                                <Card.Text>
                                    89761236
                                </Card.Text>
                                <Card.Title>$269.00</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>



                    <div className='col-lg-3'>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="/assests/s2.png" width="150px" height="150px" />
                            <Card.Body>
                                <Card.Title>Lancome Miracle</Card.Title>
                                <Card.Text>
                                    89761236
                                </Card.Text>
                                <Card.Title>$269.00</Card.Title>
                            </Card.Body>
                        </Card>

                    </div>


                    <div className='col-lg-3'>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="/assests/s3.png" width="150px" height="150px" />
                            <Card.Body>
                                <Card.Title>Lancome Miracle</Card.Title>
                                <Card.Text>
                                    89761236
                                </Card.Text>
                                <Card.Title>$269.00</Card.Title>
                            </Card.Body>
                        </Card>

                    </div>

                    <div className='col-lg-3'>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="/assests/s4.png" width="150px" height="150px" />
                            <Card.Body>
                                <Card.Title>Lancome Miracle</Card.Title>
                                <Card.Text>
                                    89761236
                                </Card.Text>
                                <Card.Title>$269.00</Card.Title>
                            </Card.Body>
                        </Card>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default SimilarProducts