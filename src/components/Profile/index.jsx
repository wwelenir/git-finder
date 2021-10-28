import useGithub from "../../hooks/github-hooks";
import { Content, ProfileImage, ProfileInfo, ProfileInfoRow, ProfileCount, ProfileCountCell } from "./styles";

export function Profile() {
  const { githubState } = useGithub();
  return (
    <Content>
      <ProfileImage src={githubState.user.avatar} alt="Avatar of user" />
      <ProfileInfo>
        <>
          <h1>{githubState.user.name}</h1>
          <ProfileInfoRow>
            <h3>Username:</h3>
            <a
              href={githubState.user.html_url}
              target="_blank"
              rel="noreferrer"
            >
              {githubState.user.login}
            </a>
          </ProfileInfoRow>
          <ProfileInfoRow>
            <h3>Company:</h3>
            <span>{githubState.user.company}</span>
          </ProfileInfoRow>
          <ProfileInfoRow>
            <h3>Location:</h3>
            <span>{githubState.user.location}</span>
          </ProfileInfoRow>
          <ProfileInfoRow>
            <h3>Blog:</h3>
            <a href={githubState.user.blog} target="_blank" rel="noreferrer">
              {githubState.user.blog}
            </a>
          </ProfileInfoRow>
        </>
        <ProfileCount>
          <ProfileCountCell>
            <span>{githubState.user.followers} followers</span>
          </ProfileCountCell>
          <ProfileCountCell>
            <span>{githubState.user.following} followings</span>
          </ProfileCountCell>
          <ProfileCountCell>
            <span>{githubState.user.public_gists} gists</span>
          </ProfileCountCell>
          <ProfileCountCell>
            <span>{githubState.user.public_repos} repos</span>
          </ProfileCountCell>
        </ProfileCount>
      </ProfileInfo>
    </Content>
  );
}