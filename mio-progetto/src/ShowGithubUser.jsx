import { useParams } from "react-router-dom";
import GithubUsers from "./GithubUsers";

export default function ShowGithubUser() {
  const { username } = useParams();
  const { data, error, onFetchUser } = GithubUsers(username);

  if (error) return <p>Errore nel loading</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h2>{data.login}</h2>
      <img src={data.avatar_url} width={100} />
      <p>{data.bio}</p>
      <button onClick={onFetchUser}>Aggiorna</button>
    </div>
  );
}
