import React from 'react';
import Comment from './Comment';

function Post(props) {
  return (
    <div id="post_container">
      <div id="avatar_container">
        <img id="avatar" src={props.data.author.avatar} />
        <div>
          <h3 id="post_author">{props.data.author.name}</h3>
          <p id="post_date">{props.data.date}</p>
        </div>
      </div>
      <p id="post_content">{props.data.content}</p>
      {
        props.data.comments.length !== 0 && 
        <>
          <hr/>
          <div>
            {props.data.comments.map(comment => <Comment key={comment.id} data={comment} />)}
          </div>
        </>
      }
    </div>
  );
}


export default Post;