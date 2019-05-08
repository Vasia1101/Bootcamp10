import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import withRenderLog from './hoc/withRenderLog';
import * as selectors from '../redux/selectors';

const UserPostList = ({ id, posts }) => (
    <div>
        <b>UserID: {id}</b>
        <ul>
            {posts.map(p => (
                <li key={p.id}>{p.body}</li>
            ))}
        </ul>
    </div>
);

const mapStateToProps = () => {
    const getPostsWithAuthor = selectors.makeGetPostsWithAuthor();

    return (state, ownProps) => ({
        posts: getPostsWithAuthor(state, ownProps),
    });
};

export default compose(
    connect(mapStateToProps),
    withRenderLog,
)(UserPostList);
