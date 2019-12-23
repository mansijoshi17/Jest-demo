import React from 'react';
import { connect } from 'react-redux';

class CommentList extends React.Component {
    render() {
        return <div>
            <h4>Comment List</h4>
            <ul>
                {this.props.Comments.map(comment => {
                    return <li key={comment}>{comment}</li>
                })}
            </ul>
        </div>

    }
}


function mapStateToProps(state) {
    return { Comments: state.comments }
}

export default connect(mapStateToProps)(CommentList);