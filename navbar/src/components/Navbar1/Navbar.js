import React from 'react'
import LogoOP from '../img/OPLogo.jpg'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import styled from 'styled-components'
import Page1 from './Navbar1Pages/Page1'
import Page2 from './Navbar1Pages/Page2'
import Page3 from './Navbar1Pages/Page3'

const Nav = styled.nav`
    background-color: #e74c3c;
    padding: 18px;
    height: 20px;
`
const Home = styled.div`
    float: left;
    position: relative;
    top: -10px;
    &:hover{
        background-color:#6c7a89;
    }
`

const Navitems = styled.div`
    float: right;
`

const NavLinks = styled(Link)`
    text-decoration: none;
    padding: 8px;
    margin-left: 10px;
    color: #2e3131;
    font-family: 'Oswald', sans-serif; 
    &:hover{
        background-color: #6c7a89;
    }
`

const ImgHome = styled.img`
    height:40px;
    width:40px;
    box-shadow: 3px 3px 3px #000000;
    &:hover{
        box-shadow: 5px 5px 5px #6c7a89;
    }
`



const Navbar = () => {
    return (
        <>
            <Router>
                <Nav>
                    <Home>
                        <Link style={{ textDecoration: 'none', color: '#2e3131' }} to={"/"}><ImgHome src={LogoOP} alt="Nav"/></Link>
                    </Home>
                    <Navitems>
                        <NavLinks to={"/page2"}>Page2</NavLinks>
                        <NavLinks to={"/page3"}>Page3</NavLinks>
                    </Navitems>
                </Nav>
                <Switch>
                    <Route exact path="/" component={Page1}/>
                    <Route exact path="/page2" component={Page2}/>
                    <Route exact path="/page3" component={Page3}/>
                </Switch>
            </Router>  
        </>
    )
}

export default Navbar
