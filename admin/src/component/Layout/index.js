import React from 'react'
import Header from '../Header/index';
import {Container} from 'react-bootstrap';
const Layout = (props) => {
    return (
        <>
            <Header/>
                {props.children}
        </>
    )
}

export default Layout
