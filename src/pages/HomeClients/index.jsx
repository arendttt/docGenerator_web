import { Container, Section } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { NewDocInput } from "../../components/NewDocInput";

export function HomeClients() {
  return (
    <Container>
      <Header>
        <button>Meus documentos</button>
      </Header>

      <h1>NOVO DOCUMENTO</h1>

      <Section>
        <NewDocInput title="Contrato de honorários"/>

        <NewDocInput title="Procuração"/>

        <NewDocInput title="Contrato de experiência"/>

        <NewDocInput title="Declaração de hipossuficiência"/>

        <Button title="Iniciar"/>
      </Section>



    </Container>
  );
};