export default function entityReducer(state = {}, action) {
  if (action.payload && action.payload.entities) {
    const newState = {
      ...state
    };
    Object.keys(action.payload.entities).forEach(entityKey => {
      newState[entityKey] = {
        ...state[entityKey],
        ...action.payload.entities[entityKey]
      };
    });
    return newState;
  }
  return state;
}
