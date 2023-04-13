export const newFirstMessage = (newMessage) => ({        // On peut lire cette fonction comme suit
  type: "CREER_UN_MESSAGE",                      // "Une fonction qui ne possède pas d'argument, nous renvoie un object"
  message: newMessage
})
