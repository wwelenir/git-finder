import { Item, ItemTitle, ItemFullName, ItemLink } from "./styles";

export function RepositoryItem({ name, linkToRepo, fullName }) {
  return (
    <Item>
      <ItemTitle>{name}</ItemTitle>
      <ItemFullName>full name:</ItemFullName>
      <ItemLink href={linkToRepo} target="_blank" rel="noreferrer">
        {fullName}
      </ItemLink>
    </Item>
  );
};