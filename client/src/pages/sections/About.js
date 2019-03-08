import React, { Component } from 'react';
import AnimatedText from "../../components/AnimatedText/index";
import Flexbox from "../../components/Flexbox/index";
import FlexContainer from "../../components/FlexContainer/index";
/* import OverlayBlock from "../../components/OverlayBlock/index"; */
import Menu from "../../components/Menu/index";
import NavIcon from "../../components/NavIcon/index";
/* import Slider from "../../components/Slider/index";
import SVGIcon from "../../components/SVGIcon/index"; */
import "./section-styles/About.css";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: true,
            collapseMenu: false
        }
    }
    toggleMenu = () => {
        if(!this.state.collapseMenu){
            let newState = {...this.state};
            newState.collapseMenu = true;
            this.setState(newState);
        }else{
            let newState = {...this.state};
            newState.collapseMenu = false;
            this.setState(newState);
        }
    }
    render = () => {
        return (
            <section id="ABOUT">
                <div className="overflow-fix box-size">
                    <Menu collapseMenu={this.state.collapseMenu}/>
                    <FlexContainer
                        classes="nav-height-fix"
                        direction="row"
                        justify="end"
                    >
                        <NavIcon toggleMenu={this.toggleMenu} />
                    </FlexContainer>
                    <FlexContainer
                     
                        direction="column"
                        justify="center"
                    >
                        <Flexbox>
                            <AnimatedText
                                text="Testing New Div"
                                anim="slide-right-quick"
                            />
                        </Flexbox>
                        <Flexbox>
                            <AnimatedText
                                text="Testing 2nd Div"
                                anim="slide-left-quick"
                            />

                        </Flexbox>
                    </FlexContainer>
                </div>
            </section>
        );
    }
}

export default About;
