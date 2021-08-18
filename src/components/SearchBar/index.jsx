import { useState } from "react";
import { Content, Search } from "./style";
import useGithub from "../../hooks/github-hooks";

export function SearchBar() {
  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState();

  const submitGetUser = (event) => {
    if (event.key === 'Enter') {
      if (!usernameForSearch) return;
      return getUser(usernameForSearch);
    }
  };

  return (
    <Content>
      <Search
        type="search"
        placeholder="Digite o username para pesquisar..."
        onChange={(event) => setUsernameForSearch(event.target.value)}
        onKeyPress={submitGetUser}
      >
      </Search>
    </Content>
  );
};