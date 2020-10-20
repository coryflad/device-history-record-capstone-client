import React from 'react'

export default function ValidationError(props) {
    if (props.message) {
        return (
            <div className="alert alert-info">
                <i className="fas fa-info"></i>
                <strong>Info</strong>
                {props.message}
            </div>
        );
    }
    return <></>

}