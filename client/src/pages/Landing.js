import React, { Component } from "react";
import Container from "../components/Container/index";
import Canvas from "../components/Canvas/index";
import Col from "../components/Col/index";
import Row from "../components/Row/index";
import PtsHelper from "../helpers/PtsHelper";
import Slider from "../components/Slider/index";
import Footer from "../components/Footer/index";
import "./styles/Landing.css";

class Landing extends Component {
    state = {
        canvasLoaded: false
    }
    componentDidMount = () => {
        const Animater = new PtsHelper();

        setTimeout(() => {
            Animater.initializeCanvas("line");
        }, 2000)
        if (!this.state.canvasLoaded) {
            this.setState({ canvasLoaded: true });
        } else {
            return;
        }

    }
    render = () => {
        return (
            <div>
                <Slider />
                <Container>
                    <Row>
                        <Col size="md-6">
                            <Canvas>
                                <div className="center">
                                    <p>Hello, I'm <span className="name">George Rincon</span>.</p>
                                    <p>I'm a full-stack developer.</p>
                                </div>
                            </Canvas>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>

        )

    }
}

export default Landing;