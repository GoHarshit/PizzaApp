import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

const Contact = () => {
  return (
    <>
        <Container style={{marginTop:"50px"}}>
            <Row>
                <Col md={12}>
                    <h1 style={{textAlign:"center"}}>Pizza4U FAQs & Help</h1><br/>
                    <h3>What is Contactless Delivery?</h3>
                    <p>
                    Contactless Delivery means that there will be no direct contact between customer and delivery rider. Meal will be placed in a pre-agreed location and avoid touching or close face to face contact.
                    </p><br/>
                    <h3>How to do I avail contactless delivery?</h3>
                    <p>
                    Please opt for ‘Contactless delivery’ while placing your order online (web/m-site/app). Sometimes, our rider will also get in touch with you to understand where the pizza needs to be placed.
                    </p><br/>
                    <h3>Can I do Cash-on-delivery for contactless delivery?</h3>
                    <p>
                    No, you cannot opt for cash-on-delivery. Since we are trying to make this entire process contactless, cash-on-delivery in this case will not be possible.
                    </p><br/>
                    <h3>Do I have to pay extra to avail the contactless delivery service?</h3>
                    <p>No, you don’t have to pay extra to avail the contactless delivery service.</p><br/>
                    <h3>How do I know where my pizzas will be kept?</h3>
                    <p>This will be specified by you while placing order. In case, the rider calls you up for help & you are not reachable, the order will be placed on a clean surface at the door.</p><br/>
                    <h3>What is the minimum order amount for delivery?</h3>
                    <p>
                         Minimum order amount for delivery is Rs 200 (inclusive of taxes).
                    </p><br/>
                    <h5>For any further queries, please call at 1000-000-0000 or write to us here: <a href = "mailto: harshitgoel565@gmail.com">harshitgoel565@gmail.com</a></h5><br/><br/><br/>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Contact