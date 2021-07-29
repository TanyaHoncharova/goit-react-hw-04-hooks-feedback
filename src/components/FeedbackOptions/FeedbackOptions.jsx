import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({onHandleGoodBtn, onHandleNeutralBtn, onHandleBadBtn}) => {
    return (
            <div className="BtnContainer">
                    <button type="button" onClick={onHandleGoodBtn} className="statBtn"> Good</button>
                <button type="button" onClick={onHandleNeutralBtn} className="statBtn"> Neutral</button>
                <button type="button" onClick={onHandleBadBtn} className="statBtn"> Bad </button>
            </div>
    )
};


FeedbackOptions.propTypes = {
    onHandleGoodBtn: PropTypes.func.isRequired,
    onHandleNeutralBtn: PropTypes.func.isRequired,
    onHandleBadBtn: PropTypes.func.isRequired,
};

export default FeedbackOptions;