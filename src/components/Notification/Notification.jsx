import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({message}) => {
    return (
        <div className="Notification">
            <h2>{message}</h2>
        </div>
    )
};


Notification.defaultProps = {
    message: "Ooops...."
}

Notification.propTypes = {
    message: PropTypes.string,
}

export default Notification;