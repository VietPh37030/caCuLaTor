import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: #000;
`;

const ResultText = styled.Text`
  font-size: 40px;
  color: #fff;
  margin: 10px;
  text-align: right;
`;

const ButtonsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px; /* Thêm padding để tạo khoảng cách giữa nút C và các nút khác */
`;

const NumberButtonsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const Button = styled.TouchableOpacity`
  width: 25%;
  height: 80px;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
  border-width: 1px;
  border-color: #ccc;
`;

const ButtonText = styled.Text`
  font-size: 24px;
  color: #333;
`;

const App = () => {
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    setResult(result + value);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const handleClear = () => {
    setResult('');
  };
  const handleToggleSign = () => {
    // Kiểm tra xem kí tự đầu tiên có phải là dấu trừ không
    if (result.length > 0 && result[0] === '-') {
      // Nếu có, loại bỏ dấu trừ để chuyển thành số dương
      setResult(result.slice(1));
    } else {
      // Nếu không, thêm dấu trừ để chuyển thành số âm
      setResult('-' + result);
    }
  };
  const handlePercentage = () => {
    if (result !== '') {
      const numericResult = parseFloat(result);
      const percentageResult = (numericResult / 100).toString();
      setResult(percentageResult);
    }
  };
  
  return (
    <Container>
      <ResultText>{result}</ResultText>
    
      <ButtonsContainer>
        <Button onPress={handleClear}>
          <ButtonText>C</ButtonText>
        </Button>
        <Button onPress={handleToggleSign}>
          <ButtonText>+/-</ButtonText>
        </Button>
        <Button onPress={handlePercentage}>
          <ButtonText>%</ButtonText>
        </Button>
        {[  '÷ ', '7', '8'].map((button) => (
          <Button key={button} onPress={() => handlePress(button)}>
            <ButtonText>{button}</ButtonText>
          </Button>
        ))}
        {['9', 'X', '4', '5'].map((button) => (
          <Button key={button} onPress={() => handlePress(button)}>
            <ButtonText>{button}</ButtonText>
          </Button>
        ))}
        {['6', '-', '1', '2'].map((button) => (
          <Button key={button} onPress={() => handlePress(button)}>
            <ButtonText>{button}</ButtonText>
          </Button>
        ))}
        {['3', '+', '0', '.','='].map((button) => (
          <Button key={button} onPress={() => (button === '=' ? handleCalculate() : handlePress(button))}>
            <ButtonText>{button}</ButtonText>
          </Button>
        ))}
      </ButtonsContainer>
    </Container>
  );
};

export default App;
