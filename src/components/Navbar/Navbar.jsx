import { 
    StyledNav,
    StyledLi,
    DivWrap,
    StyledUl,
    StyledBranding,
    Avatar
} from './styles'

import {Link} from 'react-router-dom';

import './Navbar.css'
import branding from '../../assets/img/Anilist-logo.png';
import avatar from '../../assets/img/avatar.png';

// RENDER THIS NAVBAR IF LOGGED IN
const LoggedInNav = () => (
    <StyledNav>
        <DivWrap>
            <StyledBranding src={branding} />
            <StyledUl>
                <StyledLi>
                    <Link className="nav-link" to="/home">Home</Link>
                </StyledLi>
                <StyledLi>
                    <Link className="nav-link" to="/callback">Profile</Link>
                </StyledLi>
                <StyledLi>
                    <Link className="nav-link" to="/home">Anime List</Link>
                </StyledLi>
                <StyledLi>
                    <Link className="nav-link" to="/home">Manga List</Link>
                </StyledLi>
                <StyledLi>
                    <Link className="nav-link" to="/home">Browse</Link>
                </StyledLi>
                <StyledLi>
                    <Link className="nav-link" to="/home">Home</Link>
                </StyledLi>
            </StyledUl>
            <Avatar src={avatar} />
        </DivWrap>
    </StyledNav>
)

const LoggedOutNav = () => (
    <StyledNav>
        <DivWrap>
            <StyledBranding src={branding} />
            <StyledUl>
                <StyledLi>
                    <Link className="nav-link" to="/home">Browse</Link>
                </StyledLi>
                <StyledLi>
                    <Link className="nav-link" to="/home">Home</Link>
                </StyledLi>
            </StyledUl>
            <Avatar style={{ background: "#0b1622"}}/>
        </DivWrap>
    </StyledNav>
)
const loggedIn = true;
const Navbar = () => {
        const Nav = loggedIn? <LoggedInNav /> : <LoggedOutNav />
        return Nav;
}

export default Navbar
