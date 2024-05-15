import { Container } from "./styles";

import avatar from "../../assets/avatar.jpeg";

export function Header({ children }) {
  return (
    <Container>
      { children }

      <div className="user">
        <div>
          <p>Milena Arendt</p>
          <span>admin</span>
        </div>

          <img src={avatar} alt="Profile picture" /> 
      </div>
    </Container>
  )
}