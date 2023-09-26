import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/thank-you.css'
import { useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {

    const searchQuery = useSearchParams()[0]

    const referenceNum = searchQuery.get("reference")

    return (
        <section>
            <Container>
                <Row>
                    <Col lg='12' className='pt-5 text-center'>
                        <div className="thank__you">
                            <span><i class='ri-checkbox-circle-line'></i></span>
                            <h1 className='mb-3 fw-semibold'>Thank You</h1>
                            <h3 className='mb-4'>Your Reservation is done Successfully</h3>
                            <h4 className='mb-3'>Reference No.{referenceNum}</h4>

                            <Button className='btn primary__btn w-25'><Link to='/home'>Back To Home</Link></Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default PaymentSuccess