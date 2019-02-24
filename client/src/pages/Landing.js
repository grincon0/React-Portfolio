import React, { Component } from "react";
import AnimatedText from "../components/AnimatedText/index";
import Container from "../components/Container/index";
import Canvas from "../components/Canvas/index";
import Clickable from "../components/Clickable/index";
import Col from "../components/Col/index";
import FlexContainer from "../components/FlexContainer/index";
import NavBar from "../components/NavBar/index";
import OverlayBlock from "../components/OverlayBlock/index";
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
                    <section id="HOME">
                        <Row>
                            <Col size="md-6">
                                <Canvas>
                                    <div className="center">
                                        <p className="center-reg-text">Hello, I'm <span className="name">George Rincon</span>.</p>
                                        <p className="center-reg-text">I'm a full-stack developer.</p>
                                        <Clickable />
                                    </div>
                                </Canvas>
                            </Col>
                        </Row>
                    </section>
                </Container>

                <NavBar />


                <FlexContainer style={{ backgroundColor: "#fff" }}>
                    <section id="ABOUT">
                        <Row>
                            <Col size="md">
                                <AnimatedText
                                    anim="slide-right"
                                    text="About" />
                            </Col>
                            <Col size="md">
                                <AnimatedText
                                    anim="slide-right"
                                    text="Meeeeee"
                                    delay={1000}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col size="lg">
                                <OverlayBlock />
                            </Col>
                        </Row>

                    </section>
                </FlexContainer>

                <Footer />
            </div>

        )

    }
}

export default Landing;