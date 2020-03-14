import React, { Component } from 'react';

import Post from './Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "https://images.unsplash.com/photo-1558981420-c532902e58b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1477&q=80"
        },
        date: "04 Jun 2019",
        content: "Quisque aliquet faucibus leo. Donec hendrerit justo quam, ac eleifend orci dictum id. Aenean eu nisl nisl. Nunc a placerat justo.",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://images.unsplash.com/photo-1582046570870-5180805c7238?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            },
            content: "Mauris posuere euismod mattis. Mauris fermentum nisi ut nunc euismod blandit. Donec tempor neque arcu, quis dictum tortor molestie ut. Aliquam in sapien in risus feugiat lobortis. Phasellus in pellentesque sapien. Aenean egestas magna ut nulla mollis, et scelerisque libero sollicitudin. Quisque eget fringilla enim, sit amet viverra augue. Suspendisse ut dignissim erat, et rhoncus sapien. Maecenas euismod eros sed ultrices pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae commodo sapien. Ut eget libero ac felis mattis fringilla in sed nunc. Suspendisse neque ante, rutrum ut nisl eget, interdum faucibus ligula. Phasellus at tristique felis, et euismod dolor. Etiam sed porta diam. Etiam bibendum erat ac sagittis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin posuere vehicula tortor, in molestie dui tristique sit amet. Nullam lobortis viverra fermentum. Nullam ligula purus, auctor vel enim tempor, lacinia iaculis nulla."
          },
          {
            id: 2,
            author: {
              name: "Joana Maria",
              avatar: "https://images.unsplash.com/photo-1582049816921-64b2b2e63ede?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum nunc in mattis mattis. Curabitur leo eros, suscipit eget quam eu, luctus cursus sapien. In ac risus sed odio pharetra accumsan nec a nisi. Vivamus vel bibendum purus. Sed placerat malesuada eros nec egestas. Ut eget lorem est. Cras cursus aliquet tellus vel mollis. Pellentesque lobortis convallis ligula vel cursus. Proin accumsan placerat lectus, nec luctus odio. Maecenas luctus consectetur massa, vitae vestibulum nisl pharetra nec. Suspendisse cursus velit ut diam cursus ultricies. Ut accumsan at mi sit amet accumsan."
          },
        ]
      },
      {
        id: 2,
        author: {
          name: "Ronaldo Mastiff",
          avatar: "https://images.unsplash.com/photo-1555438426-3422ef31b04f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        },
        date: "04 Jun 2019",
        content: "Suspendisse imperdiet sed erat sed maximus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque efficitur sed ex id pellentesque. Morbi justo arcu, vestibulum condimentum lacus at, aliquet pellentesque leo. Nulla metus sem, laoreet nec efficitur quis, aliquet sit amet enim. Morbi egestas urna sed justo blandit, eget fermentum ipsum hendrerit. Duis et lectus luctus tortor commodo vehicula. Fusce nec risus sed neque faucibus pellentesque.",
        comments: []
      },
    ]
  }


  render() {

    return (

      <div id="postlist">
      {
        this.state.posts.map(post => <div><Post key={post.id} data={post} /></div>)
      }
    </div>

    );
  }
}


export default PostList;