import { StyledField, StyledInput, StyledLabel } from "./style";

const Field = (props) => {
  const {
    value,
    setValue,
    name,
    type = "text"
  } = props;

  const formatName = (name: string): string => name.trim().replace(/\s/g,"_").toLowerCase();

  return (
    <StyledField>
      <StyledLabel>{name}</StyledLabel>
      <StyledInput type={type} value={value} onChange={e => setValue(e.target.value.trim())} name={formatName(name)} />
    </StyledField>
  );
};

export default Field;