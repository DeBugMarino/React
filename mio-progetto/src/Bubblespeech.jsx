export default function Bubblespeech() {
  return (
    <>
      <div className="container">
        <div className="container-messaggi">
          <div className="messaggio-ricevuto">We, come va?</div>
          <div className="messaggio-inviato">Tutto bene, grazie!</div>
          <div className="messaggio-ricevuto">Ce l'hai ancora con me?</div>
          <div className="messaggio-inviato">
            🚫hai bloccato questo contatto
          </div>
          <form className="chat">
            <input type="text" placeholder="Scrivi un messaggio" />
            <button type="submit">Invia</button>
          </form>
        </div>
      </div>
    </>
  );
}
