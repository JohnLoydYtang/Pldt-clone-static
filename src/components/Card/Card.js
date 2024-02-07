import React from 'react';
import {
    MDBCard,
    MDBCardImage,
    MDBCardGroup,
    MDBCardTitle,
    MDBCardOverlay,
    MDBCardText,
} from 'mdb-react-ui-kit';

import FirstPic from "../../assets/images/internet@2x.png";
import SecondPic from "../../assets/images/smarthome@2x.png";
import ThirdPic from "../../assets/images/promos@2x.png";
import FourthPic from "../../assets/images/support-image@2x.png";

export default function CardJs() {
    return (
        <MDBCardGroup>
            <MDBCard>
                <div className='bg-image hover-zoom'>
                    <MDBCardImage src={FirstPic} alt='...' position='top' />
                    <MDBCardOverlay style={{ color: "white" }}>
                        <MDBCardTitle style={{ position: "relative", top: "11vh", right: "13vh" }}><strong>Internet</strong></MDBCardTitle>
                        <MDBCardText style={{ position: "relative", top: "11vh", right: "0.1vh" }}>
                            Experience the possibilities with the country's fastest broadband
                        </MDBCardText>
                    </MDBCardOverlay>
                </div>
            </MDBCard>

            <MDBCard>
                <div className='bg-image hover-zoom'>
                    <MDBCardImage src={SecondPic} alt='...' position='top' />
                    <MDBCardOverlay style={{ color: "white" }}>
                        <MDBCardTitle style={{ position: "relative", top: "11vh", right: "13vh" }}><strong>Smart Home</strong></MDBCardTitle>
                        <MDBCardText style={{ position: "relative", top: "11vh", right: "0.1vh" }}>
                            Upgrade your home with smart devices and solutions
                        </MDBCardText>
                    </MDBCardOverlay>
                </div>
            </MDBCard>

            <MDBCard>
                <div className='bg-image hover-zoom'>
                    <MDBCardImage src={ThirdPic} alt='...' position='top' />
                    <MDBCardOverlay style={{ color: "white" }}>
                        <MDBCardTitle style={{ position: "relative", top: "11vh", right: "13vh" }}><strong>Promos</strong></MDBCardTitle>
                        <MDBCardText style={{ position: "relative", top: "11vh", right: "0.1vh" }}>
                            Checkout exclusive deals on PLDT Home products
                        </MDBCardText>
                    </MDBCardOverlay>
                </div>
            </MDBCard>
            <MDBCard>
                <div className='bg-image hover-zoom'>
                    <MDBCardImage src={FourthPic} alt='...' position='top' />
                    <MDBCardOverlay style={{ color: "white" }}>
                        <MDBCardTitle style={{ position: "relative", top: "11vh", right: "13vh" }}><strong>Support</strong></MDBCardTitle>
                        <MDBCardText style={{ position: "relative", top: "11vh", right: "0.1vh" }}>
                            Visit our self-help portal for FAQs and troubleshooting
                        </MDBCardText>
                    </MDBCardOverlay>
                </div>
            </MDBCard>
        </MDBCardGroup>
    );
}
