export const newMessage = (message) => ({        // On peut lire cette fonction comme suit
  type: "NEW_MESSAGE",                      // "Une fonction qui ne possède pas d'argument, nous renvoie un object"
  message,
})
export const addMessage = () => ({
  type: "ADD_MESSAGE"
})
export const toggleSettings = () => ({
  type: "TOGGLE_SETTINGS"
});
export const updateSettingsField = (newValue, identifier) => ({
  type: "UPDATE_SETTINGS_FIELD",
  newValue,
  identifier,
});

export const submitLogin = () => ({
  type: "SUBMIT_LOGIN"
});

export const saveSuccessfulAuth = (pseudo) => ({
  type: "SAVE_SUCCESSFUL_AUTH",
  pseudo
});
