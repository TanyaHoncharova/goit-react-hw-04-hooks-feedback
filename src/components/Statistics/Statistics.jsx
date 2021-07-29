import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({Good, Neutral, Bad, Total, Positive})=>{
    return(
        <>
    <ul className="statistic">
        <li>Good: {Good} </li>
        <li> Neutral: {Neutral} </li>
                <li>Bad: {Bad} </li>
            </ul>
        {(Total !== 0) ? 
        <>
            <p><b>Total feedbacks: {Total}</b></p>
                    <p>Positive feedbacks: <b>{Positive()}%</b></p>
                    <h3>Thank you for yours feedback! </h3>
        </> : "No feedback given"}
    </>
)};

Statistics.propTypes = {
    Good: PropTypes.number.isRequired,
    Neutral:PropTypes.number.isRequired,
    Bad:PropTypes.number.isRequired,
    Total:PropTypes.number.isRequired,
    Positive: PropTypes.func.isRequired,
}

export default Statistics;