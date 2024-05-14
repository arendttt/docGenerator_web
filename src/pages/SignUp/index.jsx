import { Container, Form } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";

export function SignUp() {
  return (
    <Container>
      <div>
        <h1>GERADOR DE DOCUMENTOS</h1>
      </div>
      <Form>
        <h2>Faça login</h2>

        <Input 
          type="text"
          placeholder="E-mail"
          icon={HiOutlineMail}
        />

        <Input 
          type="password"
          placeholder="Senha"
          icon={HiOutlineLockClosed}
        />

        <Button 
          type="submit"
          title="Entrar"
        />

        <a href="">Criar uma conta</a>

      </Form>

    </Container>
  );
};