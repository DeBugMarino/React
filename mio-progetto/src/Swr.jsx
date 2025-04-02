import { useSWR } from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function GithubUsers() {
  const { data, error, mutate } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );
  function fetchGithubUser() {
    mutate();
  }
  return { data, error, onFetchUser: fetchGithubUser };
}
