import React from 'react';

const Review = (props) => {
    const { name, ratings, reviewText, userImg } = props.item
    return (
        <div>
            <h3>{name}</h3>
            <p>{reviewText}</p>
            <p>Ratings: <strong>{ratings}</strong></p>
        </div>
    );
};

export default Review;