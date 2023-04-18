// Première étape, on créé notre initial state
// L'idée pour le créer est de s'inspirer de la maquette fournie
const initialState = {
  messages: [
    {
      id: 1,
      author: "Super Chat",
      content: "Salut ça va ?",
    },
    {
      id: 2,
      author: "Super Chat",
      content: "T'as pas des super-croquettes ?",
    },
    {
      id: 3,
      author: "Super Chat",
      content: "Stp",
    }

  ],
  inputValue: ''
}

const chatReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "NEW_MESSAGE":
      return {
        ...state,
        inputValue: action.message
      }
    case "ADD_MESSAGE":
      const addMessage = {
        id: state.messages.lenght + 1,
        author: "Super Chat",
        content: state.inputValue,
      }

      const newArray = [...state.messages, addMessage]
      return {
        ...state, messages: newArray, inputValue: ''
      };

    case "TOGGLE_SETTINGS":
      console.log("isSettingsOpen: " + !state.isSettingsOpen);
      return { ...state, isSettingsOpen: !state.isSettingsOpen }

    case "UPDATE_SETTINGS_FIELD":
      console.log({ [action.identifier]: action.newValue });
      return { ...state, [action.identifier]: action.newValue }

    case "SAVE_SUCCESSFUL_AUTH":
      return { ...state, pseudo: action.pseudo, email: "", password: "", isSettingsOpen: false }


    default:
      return state;
  }
}

export default chatReducer;



