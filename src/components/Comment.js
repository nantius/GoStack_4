import React from 'react';

const Comment = (props) => {
  return (
    <div  id="comments_container">
      <img id="avatar" src={props.data.author.avatar} />
      <p><strong id="comment_author">{props.data.author.name}</strong> {props.data.content}</p>
    </div>
    
  );

}

export default Comment;