import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';


import PldtLogo from "../../assets/images/pldt-logo-size-optimized.png";
import SpinningRuby from "../../assets/images/PLDTRewardsIcon.png";

export default function NavbarJs() {
    const [openBasic, setOpenBasic] = useState(false);

    return (
        <MDBNavbar expand='lg' light bgColor='light' >
            <MDBContainer fluid>
                <MDBNavbarBrand href='#'>
                    <img
                        src={PldtLogo}
                        height='50'
                        alt=''
                        loading='lazy'
                        className='ms-5'
                    />
                </MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setOpenBasic(!openBasic)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar open={openBasic}>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                        <MDBNavbarItem>
                            <MDBDropdown>
                                <MDBDropdownToggle tag='a' className='nav-link' role='button' style={{ color: 'black' }}>
                                    INTERNET<br />
                                    ʰᵒᵐᵉ ﹠ ʰᵒᵐᵉᵇⁱᶻ
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem link>Action</MDBDropdownItem>
                                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBDropdown>
                                <MDBDropdownToggle tag='a' className='nav-link' role='button' style={{ color: 'black' }}>
                                    SMART HOME<br />
                                    ᶜᵒⁿⁿᵉᶜᵗᵉᵈ ˡⁱᶠᵉˢᵗʸˡᵉ
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem link>Action</MDBDropdownItem>
                                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBDropdown>
                                <MDBDropdownToggle tag='a' className='nav-link' role='button' style={{ color: 'black' }}>
                                    ENTERTAINMENT<br />
                                    ᵗᵛ,ᵐᵒᵛⁱᵉˢ,ˢᵖᵒʳᵗˢ
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem link>Action</MDBDropdownItem>
                                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBDropdown>
                                <MDBDropdownToggle tag='a' className='nav-link' role='button' style={{ color: 'black' }}>
                                    LANDLINE<br />
                                    ᵛᵒⁱᶜᵉ ᶜᵃˡˡˢ
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem link>Action</MDBDropdownItem>
                                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBDropdown>
                                <MDBDropdownToggle tag='a' className='nav-link' role='button' style={{ color: 'black' }}>
                                    PROMOS<br />
                                    ᵇᵉˢᵗ ᵈᵉᵃˡˢ
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem link>Action</MDBDropdownItem>
                                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBDropdown>
                                <MDBDropdownToggle tag='a' className='nav-link' role='button' style={{ color: 'black' }}>
                                    SUPPORT<br />
                                    ᵍᵘⁱᵈᵉˡⁱⁿᵉ ﹠ ʰᵉˡᵖˡⁱⁿᵉ
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem link>Action</MDBDropdownItem>
                                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavbarItem>

                    </MDBNavbarNav>
                    <img
                        src={SpinningRuby}
                        alt='...'
                        className='d-flex input-group w-auto'
                    />
                    <div className='d-flex input-group w-auto'>
                        Rewards
                        ᴸᵒʸᵃˡᵗʸ ᴾʳᵒᵍʳᵃᵐ
                    </div>
                    <form className='d-flex input-group w-auto me-5'>
                        <MDBBtn rounded className='mx-2' style={{ width: '24vh', height: "40px" }} color='danger'>
                            <strong style={{ fontSize: '12px' }}><MDBIcon fas icon="user" style={{ fontSize: '20px' }} />Account lOGIN</strong>
                        </MDBBtn>
                    </form>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}
