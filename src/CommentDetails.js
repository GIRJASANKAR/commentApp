import React from 'react';

const CommentDetails=props=>{
    
    return(

        <div  className="comment">
        <a href="/" className="avatar">
            <img alt="avatar" src={props.source} />
        </a>
        <div className="content">
            <a href="/" className="author">
               {props.author}
            </a>
            <div className="metadata">
                <span className="date">{props.timeago}</span>
            </div>
            <div className="text">{props.text}</div>
            
        </div>
      </div>
    );
};


export default CommentDetails;