import React from 'react';
import {
    MDBCard,
    MDBCardImage,
    MDBCardGroup
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
                </div>
            </MDBCard>

            <MDBCard>
                <div className='bg-image hover-zoom'>
                    <MDBCardImage src={SecondPic} alt='...' position='top' />
                </div>
            </MDBCard>

            <MDBCard>
                <div className='bg-image hover-zoom'>
                    <MDBCardImage src={ThirdPic} alt='...' position='top' />
                </div>
            </MDBCard>
            <MDBCard>
                <div className='bg-image hover-zoom'>
                    <MDBCardImage src={FourthPic} alt='...' position='top' />
                </div>
            </MDBCard>
        </MDBCardGroup>
    );
}
