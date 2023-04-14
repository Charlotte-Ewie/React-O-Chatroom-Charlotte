import "./styles.scss";

const Settings = () => {

  return (
    <form className="settingsForm">
      <input type='text' className="settingsForm-input" placeholder="Saisissez votre email"
      />
      <input type='text' className="settingsForm-input" placeholder="Saisissez votre mot de passe"
      />
      <button type="submit" className="settingsForm-submit">
      </button>
    </form>
  )
}

export default Settings
