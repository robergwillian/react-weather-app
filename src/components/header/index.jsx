import { Container, Content, Search, TempSwitch } from "./styles";
import logoImg from "../../assets/logo.svg";
import { VscSearch } from "react-icons/vsc";

export function Header() {
  return (
    <Container>
      <Content>
        <a href="/">
          <img src={logoImg} alt="Logo da Weather-App" />
        </a>
        <Search>
          <input type="text" />
          <button>
            <VscSearch size="18" color="white" />
          </button>
        </Search>
        <TempSwitch>
          <div className="celsius active">°C</div> /{" "}
          <div className="fahrenheit">°F</div>
        </TempSwitch>
      </Content>
    </Container>
  );
}
