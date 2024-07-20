import { Container } from "./styles";

export function NewDocInput({ title }) {
  return (
    <Container>
      <div>
        <input type="radio" id="inputRadio"/>
        <label htmlFor="inputRadio">
          <div className="radio"></div>
          {title}
        </label>
        
      </div>
    </Container>
  );
};