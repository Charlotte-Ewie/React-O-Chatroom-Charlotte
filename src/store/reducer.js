const initialState = {  // On créé notre state initial dans notre reducer
  firstMessage: 'Salut ça va ?',
  secondMessage: "T'as pas des super-croquettes ?",
  thirdMessage: 'Stp',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "CREER_UN_PREMIER_MESSAGE":
      return {
        ...state,

      }

    default:
      return state;
  }
}

export default reducer;



