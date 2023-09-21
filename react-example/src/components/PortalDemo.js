import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo(){
    return ReactDOM.createPortal(
        createDOMCompo(), 
        document.getElementById('portal-root')
    )
}

function createDOMCompo(){
    return(
        <h1>
            Portals Demo
        </h1>
    )
}

export default PortalDemo