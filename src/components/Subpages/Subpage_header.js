import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap";
import React, { Component } from 'react';


class Subpage_header extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);

        this.state = {
            isOpen: false
        }
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (


            <header className='flex sub_header navbar navbar-dark navbar_color d-block text-center'>


                <Navbar light expand="md">
                    <img src="images/Logo-2.png"
                         className="d-inline-block align-bottom logo_header m-0 p-0"
                         alt='przedszkole krakowiaczek'/>
                    <NavbarBrand href="/">Krakowiaczek </NavbarBrand>

                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Strona Główna</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/extended_offer">Oferta</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/enrollment">Zapisy</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/our_philosophy">Nasza filozofia</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/about_us">Kadra</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>

            </header>

        )
    }
}

export default Subpage_header;