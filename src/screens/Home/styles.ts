import styled from "styled-components";
import { sizes } from "../../contants/devices";

export const HomeScreen = styled.div`
  background-color: #282c34;
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 40px;
  @media (max-width: ${sizes.MOBILE_MAX}) {
    padding: 20px;
  }
`;
