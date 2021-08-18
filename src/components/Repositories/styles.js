import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

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
  }
`;

export const GTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
`;

export const GTabList = styled(TabList)`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  margin: 0;
`;
GTabList.tabsRole = "TabList";

export const GTab = styled(Tab)`
  width: 50%;
  border-radius: 0.2em 0.2em 0 0;
  border: 1px solid #ccc;
  padding: 16px;
  user-select: none;
  cursor: pointer;
  z-index: 99999;
  background-color: "#fff";

  &:focus {
    outline: none;
  }

  &.is-selected {
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
  }
`;
GTab.tabsRole = "Tab";

export const GTabPanel = styled(TabPanel)`
  padding: 16px;
  border: 1px solid "#ccc";
  display: none;
  margin-top: -5px;

  &.is-selected {
    display: block;
  }
`;
GTabPanel.tabsRole = "TabPanel";

export const GList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;