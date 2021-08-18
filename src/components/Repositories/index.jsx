import { useEffect, useState } from "react";
import useGithub from "../../hooks/github-hooks";
import { RepositoryItem } from "../RepositoryItem";
import { Content, GTabs, GTabList, GTab, GTabPanel, GList } from "./styles";

export function Repositories() {
  const { githubState, getUserRepos, getUserStarred } = useGithub();
  const [hasUserForSearchrepos, setHasUserForSearchrepos] = useState(false);

  useEffect(() => {
    if (githubState.user.login) {
      getUserRepos(githubState.user.login);
      getUserStarred(githubState.user.login);
    }
    setHasUserForSearchrepos(githubState.repositories);
  }, [githubState.user.login]);

  return (
    <Content>
      {hasUserForSearchrepos ? (
        <GTabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
        >
          <GTabList>
            <GTab>Repositories</GTab>
            <GTab>Starred</GTab>
          </GTabList>
          <GTabPanel>
            <GList>
              {githubState.repositories.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.full_name}
                  fullName={item.full_name}
                />
              ))}
            </GList>
          </GTabPanel>
          <GTabPanel>
            <GList>
              {githubState.starred.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.full_name}
                  fullName={item.full_name}
                />
              ))}
            </GList>
          </GTabPanel>
        </GTabs>
      ) : (
        <>
        </>)
      }
    </Content >
  );
}