import React from 'react';
import styled from 'styled-components/native';
import {landingBg} from '../../constants';
import {Button, TextInput} from 'react-native-paper';
import {View} from 'react-native';

export const AuthBackground = styled.ImageBackground.attrs({
  source: landingBg,
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AuthButton = styled(Button).attrs({
  color: 'white',
})`
  padding: 10px 20px;
  background-color: blue;
`;

export const AuthCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  justify-content: center;
  padding: 20px;
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
`;
