import React, {Component} from "react";
import Container from "../components/Container/index";
import Col from "../components/Col/index";
import Row from "../components/Row/index";
import Footer from "../components/Footer/index";

class Landing extends Component {
    state = {
        text: "testing"
    }

    render = () => {
        return(
            <div>
                <Container>
                    <Row>
                        <Col>
                        
                        </Col>
                    </Row>

                </Container>
            </div>

        )

    }
}

export default Landing;