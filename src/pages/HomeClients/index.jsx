import { Container, Section } from "./styles";

import { Header } from "../../components/Header";
import { NewDocInput } from "../../components/NewDocInput";

export function HomeClients() {
  return (
    <Container>
      <Header>
        <button>Meus documentos</button>
      </Header>

      <h1>NOVO DOCUMENTO</h1>

      <Section>
        <NewDocInput value="Contrato de honorários"/>

      </Section>

    </Container>
  );
};