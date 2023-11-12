import { StyledButton } from "./styles";

const Button = (props) => {
  const {
    children,
    onClick
  } = props;

  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default Button;