import { GitHubAlt } from "../../components";
import { Content, Logo } from "./styles";

export function AppBar(props) {
  const { title } = props;
  return (
    <Content>
      <Logo><GitHubAlt /> {title}</Logo>
    </Content>
  );
}