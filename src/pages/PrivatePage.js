import React, {useEffect} from 'react'
import {Redirect} from "react-router-dom";

const PrivatePage = props => {


    return (
        <div>
            {props.loggedIn ? (props.children) : (<Redirect to="/"/>)}
    </div>

    )
}

export default PrivatePage

