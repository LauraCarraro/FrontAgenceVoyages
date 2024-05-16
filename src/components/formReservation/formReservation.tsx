import "./formReservation.css";
export default function FormReservation() {
  return (
    <>
      <form className="form">
        <p className="title">Réservation</p>
        <p className="message">Demande de renseignements</p>
        <div className="flex">
          <label>
            <input required placeholder="" type="text" className="input" />
            <span>Prénom</span>
          </label>

          <label>
            <input required placeholder="" type="text" className="input" />
            <span>Nom</span>
          </label>
        </div>

        <label>
          <input required placeholder="" type="email" className="input" />
          <span>Email</span>
        </label>

        <label>
          <input required placeholder="" type="tel" className="input" />
          <span>Téléphone</span>
        </label>
        <button className="submit">Envoyer</button>
    
      </form>
    </>
  );
}

