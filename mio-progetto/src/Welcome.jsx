export default function Welcome({ name, age }) {
  return (
    <>
      <p className="welcome">
        Welcome, <b>{name}</b>!
      </p>
      <p className="welcome">
        Your age is <b>{age}</b>
      </p>
    </>
  );
}
