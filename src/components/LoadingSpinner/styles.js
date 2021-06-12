import style from 'styled-components';

export const Spinner = style.div`
    height: 200px;
    width: 200px;
    position: absolute;
    top: calc(50% - 150px);
    left: calc(50% - 100px);;
    border-width: 5px;
    border-style: solid;
    border-color: #fefefe #0b1622 #02a9ff;
    border-radius: 50%;
`