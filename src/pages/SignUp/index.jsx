import { Container, Form } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { HiOutlineMail, HiOutlineLockClosed, HiOutlineUser } from "react-icons/hi";


export function SignUp() {
  return (
    <Container>
      <div>
        <h1>GERADOR DE DOCUMENTOS</h1>
      </div>
      <Form>
        <h2>Crie sua conta</h2>

        <Input 
          type="text"
          placeholder="Seu nome"
          icon={HiOutlineUser}
        />

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
          title="Cadastrar"
        />

        <a href="">Ja tenho uma conta</a>

      </Form>

    </Container>
  );
};