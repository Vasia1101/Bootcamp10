const All_CHANNELS = "ALL-CHANNELS";
const UPDATE_CHANNELS = "UPDATE_CHANELS";
const ADD_CURRENT_CHANNEL = "ADD_CURRENT_CHANNEL";

let initialState = {
  channels: [
    {
      id: 1,
      channelName: "General",
      createdBy: "Andrii",
      details: "This dialog for all users",
      path: "/channel/"
    }
  ],
  userName: [
    { id: 1, name: "Andrii", path: "/dialogs/" },
    { id: 2, name: "Alexandr", path: "/dialogs/" },
    { id: 3, name: "Nikita", path: "/dialogs/" },
    { id: 4, name: "Maxim", path: "/dialogs/" },
    { id: 5, name: "Nastya", path: "/dialogs/" },
    { id: 6, name: "Alisa", path: "/dialogs/" },
    { id: 7, name: "Lina", path: "/dialogs/" }
  ],
  newChannelName: "",
  newCreaterText: "",
  newDetailsText: "",
  currentChannel: {}
};

const channelReducer = (state = initialState, action) => {
  switch (action.type) {
    case All_CHANNELS:
      // let newChannel = state.newChannelName;
      // let newCreater = state.newCreaterText;
      // let newDetails = state.newDetailsText;
      return {
        ...state,
        channels: action.channels
      };

    case UPDATE_CHANNELS:
      return {
        ...state,
        newChannelName: action.newChannelName,
        newCreaterText: action.newCreaterText,
        newDetailsText: action.newDetailsText
      };

    case ADD_CURRENT_CHANNEL:
      return {
        ...state,
        currentChannel: action.currentChannel
      };

    default:
      return state;
  }
};

export const allChannelActionCreator = loadedChannels => ({
  type: All_CHANNELS,
  channels: loadedChannels
});
// export const updateChannelsActionCreator = (name, creater, details) => ({
//   type: UPDATE_CHANNELS,
//   newChannelName: name,
//   newCreaterText: creater,
//   newDetailsText: details
// });
export const addCurrentChannelActionCreator = activeChannel => ({
  type: ADD_CURRENT_CHANNEL,
  currentChannel: activeChannel
});

export default channelReducer;
