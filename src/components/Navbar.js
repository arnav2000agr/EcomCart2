import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import ecomlogo2 from '../ecomlogo2.png';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar nav-bar-expand-sm navbar-dark px-sm-5">
               <Link to='/'>
                  <img src={ecomlogo2} height={70}alt="store" className="navbar-brand" />
               </Link> 
               <ul className="navbar-nav align-items-center">
                 <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">
                        <h4><i> Our Products </i></h4>
                    </Link>
                 </li>
               </ul>
               <Link to="/cart" className="ml-auto">
                  <ButtonContainer>
                      <i className="but"><b> Cart </b></i>
                  </ButtonContainer>
               </Link>
            </NavWrapper>
        )
    }
}
const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3 rem;
    text-transform:capitalize;
}
`;
