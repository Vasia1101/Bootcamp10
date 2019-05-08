import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import * as selectors from '../redux/selectors';
import withRenderLog from './hoc/withRenderLog';

const UserSelector = ({ userIds, currentId, onChange }) => (
    <select
        className="TagFilter"
        value={currentId}
        onChange={e => onChange(Number(e.target.value))}
    >
        {userIds.map(id => (
            <option key={id} value={id}>
                {id}
            </option>
        ))}
    </select>
);

const mapState = state => ({
    currentUser: selectors.getSelectedUserId(state),
    userIds: selectors.getUserIds(state),
});

const mapDispatch = { onChange: actions.selectUser };

export default compose(
    connect(
        mapState,
        mapDispatch,
    ),
    withRenderLog,
)(UserSelector);
