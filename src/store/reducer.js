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

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "CREER_UN_MESSAGE":
      return {
        ...state,
        messages: action.message

      }

    default:
      return state;
  }
}

export default reducer;



