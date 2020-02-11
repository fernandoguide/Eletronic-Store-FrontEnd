import styled from "styled-components";
import Icon from "react-web-vector-icons";
import InputCustom from "../../components/InputCustom";
import { colors } from "../../styles";

export const InputWithoutBorder = styled(InputCustom)``;

export const CustomIcon = styled(Icon)`
  color: ${colors.primary};
`;

export const Container = styled.div`
  flex-direction: row;
  border-width: 3px;
  border-color: ${colors.primary};
  border-radius: 200px;
  padding-right: 20;
  padding-left: 20;
  align-items: center;
  justify-content: center;
  margin-bottom: 11px;
`;
