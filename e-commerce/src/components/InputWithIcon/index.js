import React from "react";
import { InputWithoutBorder, Container, CustomIcon } from "./styles";
import { colors } from "../../styles";

const InputWithIcon = props => {
  const { value, nameIcon, placeholder, onChangeText } = props;
  return (
    <Container>
      <CustomIcon name={nameIcon} size={27} color={colors.primary} />
      <InputWithoutBorder
        value={value}
        autoCapitalize={"none"}
        autoCompleteType={"off"}
        autoCorrect={false}
        placeholder={placeholder}
        onChangeText={text => onChangeText(text)}
      />
    </Container>
  );
};

export default InputWithIcon;
