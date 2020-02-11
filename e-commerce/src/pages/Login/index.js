import React, { useState } from "react";
import { Container } from "./styles.js";
import InputWithIcon from "../../components/InputWithIcon";

export default function Login() {
  const [user, setUser] = useState("");
  return (
    <Container>
      <InputWithIcon
        value={user}
        placeholder="Digite seu usuário"
        onChangeText={setUser}
        nameIcon={"ios-person"}
      />
    </Container>
  );
}
