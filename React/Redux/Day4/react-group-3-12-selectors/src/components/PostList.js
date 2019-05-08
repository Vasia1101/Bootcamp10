import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import withRenderLog from './hoc/withRenderLog';
import * as selectors from '../redux/selectors';

const styles = {
    list: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    listItem: {
        overflow: 'hidden',
        boxShadow:
            '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
        marginBottom: 8,
        padding: 8,
    },
    para: {
        marginTop: 0,
        marginBottom: 0,
    },
};

const PostList = ({ posts }) =>
    posts.length > 0 ? (
        <ul style={styles.list}>
            {posts.map(post => (
                <li key={post.id} style={styles.listItem}>
                    <b>Author ID: {post.userId}</b>
                    <p style={styles.para}>{post.body}</p>
                </li>
            ))}
        </ul>
    ) : null;

const mapStateToProps = state => ({
    posts: selectors.getPostsWithSelectedAuthor(state),
});

export default compose(
    connect(mapStateToProps),
    withRenderLog,
)(PostList);
