import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

import Carouselfirst from "../../assets/images/homepage-banner-desktop-2x.png";
import CarouselSecond from "../../assets/images/fiber-upgrade-klook-promo-january-homepage-desktop-2x.png";
import CarouselThird from "../../assets/images/streamtv-desktop-2x.png";
import CarouselFourth from "../../assets/images/wifi-6-mesh-system-homepage-desktop@2x.png";
import CarouselFift from "../../assets/images/mwell-promo-september-home-desktop@2x.png";

export default function CarouselJs() {
    return (
        <MDBCarousel style={{ position: 'relative', marginTop: '3px' }}>
            <MDBCarouselItem itemId={1}>
                <img src={Carouselfirst} className='d-block' style={{ height: '60vh', width: '100%' }} alt='...' />
            </MDBCarouselItem>
            <MDBCarouselItem itemId={2}>
                <img src={CarouselSecond} className='d-block' style={{ height: '60vh', width: '100%' }} alt='...' />
            </MDBCarouselItem>
            <MDBCarouselItem itemId={3}>
                <img src={CarouselThird} className='d-block' style={{ height: '60vh', width: '100%' }} alt='...' />
            </MDBCarouselItem>
            <MDBCarouselItem itemId={4}>
                <img src={CarouselFourth} className='d-block' style={{ height: '60vh', width: '100%' }} alt='...' />
            </MDBCarouselItem>
            <MDBCarouselItem itemId={4}>
                <img src={CarouselFift} className='d-block' style={{ height: '60vh', width: '100%' }} alt='...' />
            </MDBCarouselItem>
        </MDBCarousel>
    );
}
