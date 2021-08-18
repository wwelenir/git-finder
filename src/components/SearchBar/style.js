import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem;
  background-color: #093364;

  @media(max-width: 800px) {
    padding: 1rem;
  }
`;

export const Search = styled.input`
  width: 100vw;
  padding: 1em;
  font-size: 1em;
  border: none;
  border-radius: 0.2em;
  :focus {
    outline: none;
  }	
`;