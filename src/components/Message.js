import "./styles.scss";


/** Ici, on souhaite afficher un message
 * 1- On veut afficher une div qui contiendra notre message
 * 2- On veut afficher l'auteur du message
 * 3- On veut afficher le contenu du message
 */

const Message = ({ author, content }) => {
  return (
    <div className="message">
      <div className="message-author">{author}</div>
      <div className="message-content">{content}</div>
    </div>
  )
}

export default Message; 
