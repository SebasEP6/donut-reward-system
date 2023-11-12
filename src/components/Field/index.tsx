import { StyledField, StyledInput, StyledLabel } from "./style";

const Field = (props) => {
  const {
    value,
    setValue,
    name,
    type = "text"
  } = props;

  const getCustomID = () => Math.floor(Math.random() * 100);

  const formatName = (): string => 
    name.trim().replace(/\s/g,"_").toLowerCase()
  ;

  const inputName = `${formatName()}_${getCustomID()}`

  return (
    <StyledField>
      <StyledLabel>{name}</StyledLabel>
      <StyledInput type={type} value={value} onChange={e => setValue(e.target.value.trim())} name={inputName} />
    </StyledField>
  );
};

export default Field;