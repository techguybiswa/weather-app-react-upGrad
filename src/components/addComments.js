import React, { Component } from 'react';

class AddComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments : [],
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
        style={{   textAlign: 'left' }}
        >
        <i class="fa fa-user" aria-hidden="true"></i> {eachComment}
        </p>
    ))
    return (
      <div style={{paddingLeft: '30%', paddingRight: '30%'}}>
          <div 
          >
          <div 
                    style={{border: '1px solid white', padding: '10px', fontFamily: ' Roboto,sans-serif'}}
                    >
            <textarea
          placeholder="Enter Your comment..."
          value={this.state.userComment}
          style={{ fontSize: '24px' , background: '#f7f2ff', width: '100%'}}
          onChange={e => this.updateUserComment(e)}>

          </textarea> 
                       
<br/>
    <button 
       onClick={this.postComment}
       style={{ fontSize: '24px', background: '#fff' , cursor: 'pointer', float: 'left'}}
        >Comment</button>
        <br/>
                    <p style={{textAlign: 'left', display: 'block'}}><b>Comments ({listOfComments.length})</b> </p> 

            {listOfComments}

            </div>
          </div>
      
      </div>
    );
  }
}
export default AddComment;
