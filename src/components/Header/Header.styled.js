
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
color: #000;
font-family: Poppins;
font-size: 21px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-transform: capitalize;
   &.active {
    color: #779341;
}
`;

const HeaderContainer = styled.div`
position: absolute;
top: 0;
padding-left:220px ;
width: 100%;
height: 84px;
background: inherit;
display: flex;
align-items: center;
gap: 32px;
`;

const HeaderNavLink = styled.div`

`;

export {StyledLink, HeaderContainer, HeaderNavLink}