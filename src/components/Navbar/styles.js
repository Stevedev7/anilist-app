import style from 'styled-components'

const fontSize = '14px';

export const backgroundColor = '#152232';
export const navLinkColor = '#9badc0';

export const StyledNav = style.nav`
    background: ${backgroundColor};
    color: ${navLinkColor};
    font-size: ${fontSize};
    height: 68px;
    display: flex;
    justify-content: center;
    font-weight: 500;
    align-items: center;
`

export const StyledLi = style.li`
    text-decoration: none;
    list-style-type: none;
    font-weight: 500;
`
export const DivWrap = style.div`
    height: 100%;
    width: 1050px;
    margin: 0 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const StyledUl = style.ul`
    display: flex;
    justify-content: center;
    font-weight: 500;
    align-items: center;
`

export const StyledBranding = style.img`
    height: 50px;
    width: 50px;
`

export const Avatar = style.img`
    height: 50px;
    width: auto;
`
