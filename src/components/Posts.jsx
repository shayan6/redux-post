import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postAction';

import propTypes from 'prop-types'; 

class Posts extends Component {
  componentWillMount(){
    this.props.fetchPosts();
  }
  componentWillReceiveProps(nextProps){
    if (nextProps.newPost){
      this.props.posts.unshift( nextProps.newPost );
    }
  }

  render() {
    const postItems = this.props.posts.map( post => (
        <div key={post.id} >
            <h1> {post.title} </h1>
            <p> {post.body} </p>
        </div>
    ))
    return (
      <div>
        {postItems}
      </div>
    )
  }
}

Posts.propTypes = {
  fetchPosts: propTypes.func.isRequired,
  posts: propTypes.array.isRequired,
  newPost: propTypes.object.isRequired
} 

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});


export default connect( mapStateToProps, {fetchPosts} )(Posts);