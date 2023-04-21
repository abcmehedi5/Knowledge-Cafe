import React from 'react';

const BookmarkDetails = (props) => {
    const{title}=props.blog
    return (
        <div className='bookmark-items'>
           <p>{title}</p>
        </div>
    );
};

export default BookmarkDetails;