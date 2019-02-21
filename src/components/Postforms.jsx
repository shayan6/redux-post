import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createPost } from '../actions/postAction';

import propTypes from 'prop-types'; 

class Postform extends Component {
  constructor(){
    super();
    this.state =  {
        title: '',
        body: ''
    }
    this.onChange = this.onChange.bind(this);      
    this.onSubmit = this.onSubmit.bind(this);      
  }

  onChange(e){
    this.setState({[e.target.name] : e.target.value });
  }
  
  onSubmit(e){
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body,
    }

    //call action
    this.props.createPost(post);
  }

  render() {
    return (
      <div>
        <h1> Postform </h1>
        <form onSubmit={this.onSubmit} >  
            <div>
                <label>Tittle: </label><br/>
                <input type="text" name="title" onChange={this.onChange} />
            </div>
            <br/>
            <div>
                <label>Body</label><br/>
                <textarea name="body" onChange={this.onChange}/>
            </div>
            <br/>
            <button type="submit" name="submit" >Submit</button>
        </form>
      </div>
    )
  }
}

Postform.propTypes = {
  createPost: propTypes.func.isRequired
} 

export default connect( null, {createPost} )(Postform);