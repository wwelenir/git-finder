import { AppBar, Profile, Repositories, SearchBar } from "../../components";
import useGithub from "../../hooks/github-hooks";

export function Home() {
  const { githubState } = useGithub();

  return (
    <>
      <AppBar title="finder" />
      <SearchBar />
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <p>Loading</p>
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </>
      ) : (
        <>
        </>
      )}
    </>
  );
}