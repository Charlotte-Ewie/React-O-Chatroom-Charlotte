import "./styles.scss";

const Settings = () => {

  return (
    <form className="settingsForm">
      <input type='text' className="settingsForm-input" placeholder="Votre email"
      />
      <input type='text' className="settingsForm-input" placeholder="Votre mot de passe"
      />
      <button type="submit" className="settingsForm-submit"> Envoyer
      </button>
    </form>
  )
}

export default Settings
