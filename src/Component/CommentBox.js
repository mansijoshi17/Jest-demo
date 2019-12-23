import React from 'react';
import * as action from 'Actions';
import { connect } from 'react-redux';
import requireAuth from 'Component/requireAuth';


class CommentBox extends React.Component {

    state = { Comment: '' };

    HandelChange = (event) => {
        this.setState({ Comment: event.target.value })
    }

    HandelSubmit = (event) => {
        event.preventDefault();
        this.props.saveComment(this.state.Comment);
        this.setState({ Comment: '' });
    }

    render() {
        return (
            <form onSubmit={this.HandelSubmit} style={{ margin: '10px' }}>
                <h4 style={{ margin: '10px' }}>ADD COMMENT</h4>
                <div className="ui input" style={{ margin: '10px' }}>
                    <input type="text" value={this.state.Comment} onChange={this.HandelChange} placeholder="Add Comment" />
                </div>
                <div style={{ margin: '10px' }}>
                    <button className="positive ui button">SUBMIT</button>
                </div>
            </form>

        )
    }
}


export default connect(null, action)(requireAuth(CommentBox));