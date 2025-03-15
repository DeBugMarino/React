export default function MouseClicker() {
  function handleButtonClick(event) {
    console.log(event.target, event.currentTarget);
  }
  return (
    <>
      <button name="one" onClick={handleButtonClick}>
        Mi stai cliccando?
      </button>
      <button name="two" onClick={handleButtonClick}>
        <img
          width={24}
          height={22}
          src="https://upload.wikimedia.org/wikipedia/it/0/02/Stewie_Griffin.png"
        ></img>
      </button>
    </>
  );
}
