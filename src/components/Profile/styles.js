import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2rem;
  padding-left: 6rem;
  padding-right: 6rem;
  background-color: #F6F8FA;
  @media(max-width: 800px) {
    padding: 1rem;
    align-items: center;
    flex-direction: column;
  }
`;

export const ProfileImage = styled.img`
  width: 180px;
  border-radius: 0.2em;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 8px;
  height: 180px;

  h1 {
    font-size: 32px;
    font-weight: bold;
  }

  h3 {
    font-size: 14px;
    font-weight: bold;
  }

  h4 {
    font-size: 12px;
    font-weight: bold;
  }

  @media(max-width: 800px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const ProfileInfoRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;

  h3 {
    margin-right: 8px;
  }

  a{
    font-size: 14px;
    font-weight: 600;
  }

  span {
    font-size: 14px;
    font-weight: 600;
  }
  
`;

export const ProfileCount = styled.div`
  display: flex;
  align-items: center;
  div {
    margin-right: 8px;
    margin-top: 10px;
    text-align: center;
  }
`;

export const ProfileCountCell = styled.div`
  border: 1px solid #24292f;
  border-radius: 0.2em;
  padding: 0.3em;
`;