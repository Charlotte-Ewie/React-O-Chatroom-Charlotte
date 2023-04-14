export const newMessage = (message) => ({        // On peut lire cette fonction comme suit
  type: "NEW_MESSAGE",                      // "Une fonction qui ne possède pas d'argument, nous renvoie un object"
  message,
})
export const addMessage = () => ({
  type: "ADD_MESSAGE"
})
export const toggleSettingsDisplay = () => ({
  type: "TOGGLE_DISPLAY_SETTINGS"
})
