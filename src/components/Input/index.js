import { InputContainer } from "./styles";

const Input = ({value}) => {
  return (
    <div>
      <InputContainer>
        <input value={value}/>
      </InputContainer>
    </div>
  );
};

export default Input;
