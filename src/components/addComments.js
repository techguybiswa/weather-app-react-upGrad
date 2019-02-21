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
        this.setState({
            userComment: null,
        })
        console.log('postComment fired');
        this.state.comments.push(this.state.userComment);
    alert("Comment Added");
    }
  render() {
    const listOfComments = this.state.comments.map(eachComment => (
        <p 
        style={{ textAlign: 'left',  }}
        
        >
        >> {eachComment}
        </p>
    ))
    return (
      <div>
          <div 
          style={{ textAlign: 'left', marginLeft: '200px', marginRight: '200px', border: '2px solid white', padding: '10px', marginBottom: '20px' , background: ''}}
          >
          <h4>Comments: </h4> 
            {listOfComments}
          </div>
          <textarea
          placeholder="Enter Your comment..."
          value={this.state.userComment}
          style={{ fontSize: '24px' , width: '70%'}}
          onChange={e => this.updateUserComment(e)}>

          </textarea> 
                       
<br/>
    <button 
       onClick={this.postComment}
       style={{ fontSize: '24px', textAlign: 'center', color: 'white' , background: 'blue' ,marginTop: '30px'}}
        >Comment</button>
      </div>
    );
  }
}
export default AddComment;
