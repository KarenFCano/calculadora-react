import { Container, Content, Row } from "./styles";
import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [calculator, setCalculator] = useState("");
  const [operation, setOperation] = useState("");

  const handleAddNumber = (num) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${num}`);
  };

  const handleClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
    setCalculator("");
  };

  const handleEqual = () => {
    if (operation === "+") {
      setCurrentNumber((prev) => `${Number(firstNumber) + Number(prev)}`);
    } else if (operation === "-") {
      setCurrentNumber((prev) => `${Number(firstNumber) - Number(prev)}`);
    } else if (operation === "X") {
      setCurrentNumber((prev) => `${Number(firstNumber) * Number(prev)}`);
    } else if (operation === "÷") {
      setCurrentNumber((prev) => `${Number(firstNumber) / Number(prev)}`);
    } else if (operation === "%") {
      setCurrentNumber(
        (prev) => `${(Number(firstNumber) * Number(prev)) / 100}`
      );
    }
    setCalculator("");
  };

  const handleOperation = (op) => {
    setFirstNumber(currentNumber);
    setCalculator(`${currentNumber} ${op}`);
    setOperation(op);
    setCurrentNumber("0");
  };

  return (
    <div className="App">
      <Container>
        <Content>
          <Input value={calculator}/>
          <Input value={currentNumber}/>
          <Row>
            <Button label="AC" onClick={() => handleClear()} />
            <Button label="C" onClick={() => handleClear()} />
            <Button label="%" onClick={() => handleOperation("%")} />
            <Button label="÷" onClick={() => handleOperation("÷")} />
          </Row>
          <Row>
            <Button label="7" onClick={() => handleAddNumber("7")} />
            <Button label="8" onClick={() => handleAddNumber("8")} />
            <Button label="9" onClick={() => handleAddNumber("9")} />
            <Button label="X" onClick={() => handleOperation("X")} />
          </Row>
          <Row>
            <Button label="4" onClick={() => handleAddNumber("4")} />
            <Button label="5" onClick={() => handleAddNumber("5")} />
            <Button label="6" onClick={() => handleAddNumber("6")} />
            <Button label="-" onClick={() => handleOperation("-")} />
          </Row>
          <Row>
            <Button label="1" onClick={() => handleAddNumber("1")} />
            <Button label="2" onClick={() => handleAddNumber("2")} />
            <Button label="3" onClick={() => handleAddNumber("3")} />
            <Button label="+" onClick={() => handleOperation("+")} />
          </Row>
          <Row>
            <Button label="0" onClick={() => handleAddNumber("0")} />
            <Button label="." onClick={() => handleAddNumber(".")} />
            <Button label="," onClick={() => handleAddNumber(",")} />
            <Button 
              label="="
              onClick={() => handleEqual()}
              style={{ backgroundColor: "#00AAF0" }}
            />
          </Row>
        </Content>
      </Container>
    </div>
  );
};

export default App;
