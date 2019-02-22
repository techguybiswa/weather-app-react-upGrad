import React, { Component } from 'react';

class AddComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments : ['Weather is good.'],
            userComment:null,
            }
        this.postComment = this.postComment.bind(this);
      }
      updateUserComment(e) {
        this.setState({ userComment: e.target.value })
      }

      postComment() {
        if((this.state.userComment.length))
        {
          this.setState({
            userComment: "",
        })
        console.log('postComment fired');
        this.state.comments.push(this.state.userComment);
        }
        
    }
  render() {
    const listOfComments = this.state.comments.map(eachComment => (
        <p 
        style={{ textAlign: 'left', background: '#1d5070', padding: '10px',   }}
        
        >
        >> {eachComment}
        </p>
    ))
    return (
      <div>
          <div 
          style={{ textAlign: 'left', marginLeft: '20%', marginRight: '20%', border: '1px solid white', padding: '10px', marginBottom: '20px'}}
          >
          <h4>Comments: </h4> 
            {listOfComments}
          </div>
          <textarea
          placeholder="Enter Your comment..."
          value={this.state.userComment}
          style={{ fontSize: '24px' , width: '60%', background: '#f7f2ff'}}
          onChange={e => this.updateUserComment(e)}>

          </textarea> 
                       
<br/>
    <button 
       onClick={this.postComment}
       style={{ fontSize: '24px', textAlign: 'center', color: 'white' , background: '#1d073d' ,marginTop: '30px'}}
        >Comment</button>
      </div>
    );
  }
}
export default AddComment;
