import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import data from '../data.json';
import Counter from './Counter';
import UserSelector from './UserSelector';
import PostList from './PostList';
import UserPostList from './UserPostList';

const styles = {
    section: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 8,
    },
    title: {
        textAlign: 'center',
    },
    profilesSection: {
        display: 'flex',
        justifyContent: 'center',
        padding: 8,
    },
    horizontal: {
        display: 'flex',
        width: 800,
    },
};

class App extends Component {
    componentDidMount() {
        this.props.fetchData(data);
    }

    render() {
        return (
            <>
                <Counter />
                <section style={styles.section}>
                    <UserSelector />
                    <PostList />
                </section>

                <section style={{ ...styles.section, ...styles.horizontal }}>
                    <UserPostList id={1} />
                    <UserPostList id={2} />
                </section>
            </>
        );
    }
}

const mapDispatchToProps = { fetchData: actions.fetchData };

export default connect(
    null,
    mapDispatchToProps,
)(App);
