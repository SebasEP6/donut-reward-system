import { StyledButton } from "./styles";

const Button = (props) => {
  const {
    children,
    onclick
  } = props;

  return (
    <StyledButton onClick={onclick}>
      {children}
    </StyledButton>
  );
}

export default Button;