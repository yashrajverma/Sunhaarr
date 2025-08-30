import React from 'react'
import { Store } from 'react-notifications-component'
const Notification = ({ type = 'default' }) => {
    const successType = {
        title: "Wonderful!",
        message: "teodosii@react-notifications-component",
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: 2000,
            onScreen: true
        }
    };

    const errorType = {
        title: "OOPs!",
        message: "teodosii@react-notifications-component",
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: 2000,
            onScreen: true
        }
    };

    const warningType = {
        title: "Info!",
        message: "teodosii@react-notifications-component",
        type: "info",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: 2000,
            onScreen: true
        }
    }

    const defaultType = {
        title: "Default!",
        message: "teodosii@react-notifications-component",
        type: "default",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: 2000,
            onScreen: true
        }
    }
    return (
        <>
            {type == 'default' && Store.addNotification(defaultType)}
            {type == 'warning' && Store.addNotification(warningType)}
            {type == 'danger' && Store.addNotification(errorType)}
            {type == 'success' && Store.addNotification(successType)}

        </>
    )
}

export default Notification