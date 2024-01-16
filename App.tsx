import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
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

`;

const NumberButtonsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const Button = styled.TouchableOpacity`
  width: 24%;
  height: 80px;
  align-items: center;
  justify-content: center;
  background-color: #333333;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 60px;
 margin-top:10px;
 margin-left:3px;
`;

const ButtonText = styled.Text`
  font-size: 24px;
  color: #fffdcc;
  align-items: center;
`;
const ButtonTextC = styled.Text`
  font-size: 24px;
  color:#060606;
  align-items: center;
`;
const LogoContainer = styled.View`
  position: absolute;
  top: 10px; /* Đặt ở trên cùng của màn hình */
  left: 10px; /* Đặt ở góc trái của màn hình */
`;
const LogoText = styled.Text`
  font-size: 18px;
  color: #fff;
`;
// ... (phần còn lại của mã)

const App = () => {
  const [result, setResult] = useState('');

  const handlePress = value => {
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
    if (result.length > 0 && result[0] === '-') {
      setResult(result.slice(1));
    } else {
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
  const YellowButtonX = styled(TouchableOpacity)`
  width: 24%;
  height: 80px;
  align-items: center;
  justify-content: center;
  background-color: #ff9f08;
  border-width: 1px;
  border-color: #000;
  border-radius: 60px;
  margin-top: 10px;
  margin-left:3px;
`;
const GrayButtonX = styled(TouchableOpacity)`
width: 24%;
height: 80px;
  align-items: center;
  justify-content: center;
  background-color: #a5a5a5;
  border-width: 1px;
  border-color: #000;
  border-radius: 60px;
  margin-top: 10px;
  margin-left:3px;
`;
const ZeroButton = styled(TouchableOpacity)`
  width: 49%; /* Điều chỉnh kích thước cho số 0 */
  height: 80px;
  align-items: center;
  justify-content: center;
  background-color: #333333;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 60px;
  margin-top: 10px;
  padding-right: 80px;
  margin-left:3px;
`;
  return (
    <Container>
      <LogoContainer>
        <LogoText>Phạm Việt Anh-PH37030</LogoText>
      </LogoContainer>
      <ResultText>{result}</ResultText>

      <ButtonsContainer>
        <GrayButtonX onPress={handleClear}>
          <ButtonTextC>C</ButtonTextC>
        </GrayButtonX>
        {/* <GrayButtonX onPress={handleToggleSign}>
          <ButtonTextC>+/-</ButtonTextC>
        </GrayButtonX> */}
        <GrayButtonX onPress={handleClear}>
          <ButtonTextC>D</ButtonTextC>
        </GrayButtonX>
        <GrayButtonX onPress={handlePercentage}>
          <ButtonTextC>%</ButtonTextC>
        </GrayButtonX>
        {/* Thêm nút 'X' màu vàng */}
        <YellowButtonX onPress={() => handlePress('÷')}>
          <ButtonText>÷</ButtonText>
        </YellowButtonX>
        {[ '7', '8','9'].map(button => (
          <Button key={button} onPress={() => handlePress(button)}>
            <ButtonText>{button}</ButtonText>
          </Button>
        ))}
        {/* Thêm nút 'X' màu vàng */}
        <YellowButtonX onPress={() => handlePress('X')}>
          <ButtonText>X</ButtonText>
        </YellowButtonX>
        {['4', '5','6'].map(button => (
          <Button key={button} onPress={() => handlePress(button)}>
            <ButtonText>{button}</ButtonText>
          </Button>
        ))}
         {/* Thêm nút '-' màu vàng */}
         <YellowButtonX onPress={() => handlePress('-')}>
          <ButtonText>-</ButtonText>
        </YellowButtonX>
        {[ '1', '2','3',].map(button => (
          <Button key={button} onPress={() => handlePress(button)}>
            <ButtonText>{button}</ButtonText>
          </Button>
        ))}
        {/* Thêm nút '-' màu vàng */}
        <YellowButtonX onPress={() => handlePress('+')}>
          <ButtonText>+</ButtonText>
        </YellowButtonX>
         {/* Thêm nút 0 màu vàng */}
         <ZeroButton onPress={() => handlePress('0')}>
          <ButtonText>0</ButtonText>
        </ZeroButton>
        {[ '.', '='].map(button => (
          <Button
            key={button}
            onPress={() =>
              button === '=' ? handleCalculate() : handlePress(button)
            }>
            <ButtonText>{button}</ButtonText>
          </Button>
        ))}
      </ButtonsContainer>
    </Container>
  );
};

export default App;

