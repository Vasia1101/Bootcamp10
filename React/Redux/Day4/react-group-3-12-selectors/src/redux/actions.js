export const actionTypes = {
    FETCH_DATA: 'FETCH_DATA',
    SELECT_USER: 'SELECT_USER',
    INCREMENT_COUNTER: 'INCREMENT_COUNTER',
};

export const incrementCounter = () => ({
    type: actionTypes.INCREMENT_COUNTER,
});

export const fetchData = data => ({
    type: actionTypes.FETCH_DATA,
    payload: data,
});

export const selectUser = id => ({
    type: 'SELECT_USER',
    payload: id,
});
