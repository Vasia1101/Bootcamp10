import { actionTypes } from './actions';

export default function counterReducer(state = 0, { type, payload }) {
    switch (type) {
        case actionTypes.INCREMENT_COUNTER:
            return state + 1;

        default:
            return state;
    }
}
