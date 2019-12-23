import React from 'react';
import { Route, Link } from 'react-router-dom';
import CommentBox from 'Component/CommentBox';
import CommentList from 'Component/CommentList';
import { connect } from 'react-redux';
import * as actions from 'Actions';

class App extends React.Component {
    renderButton() {
        if (this.props.auth) {
            return (
                <button onClick={() => this.props.changeAuth(false)}>
                    Sign Out
                </button>
            )
        }
        else {
            return (
                <button onClick={() => this.props.changeAuth(true)}>
                    Sign In
                </button>
            )
        }
    }

    renderHeader() {
        return (
            <div className="ui secondary pointing menu">
                <Link to="/" className="item">Home</Link>
                <Link to="/post" className="item">Post a Comment</Link>
                {this.renderButton()}
            </div >
        );
    }

    render() {

        return (
            <div>
                {this.renderHeader()}
                <Route path="/post" component={CommentBox} />
                <Route path="/" exact component={CommentList} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { auth: state.auth }
}

export default connect(mapStateToProps, actions)(App);
