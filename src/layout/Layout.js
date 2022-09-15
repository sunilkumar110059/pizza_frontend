import React from 'react';
import HeaderIndex from './header/HeaderIndex';
import FooterIndex from './footer/FooterIndex';

function Layout({ children }) {
    return (
        <>
            <div className="headerpart">   <HeaderIndex /></div>
            <div className="bodypart"> {children} </div>
            <div className="footerpart"> <FooterIndex /></div>
        </>

    )
}

export default Layout;