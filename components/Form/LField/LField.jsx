import React, { forwardRef, useState } from 'react';
import styled from 'styled-components/native';
import { Text } from "react-native";

const FormFloating = styled.View`
  position: relative;
  margin-bottom: 1rem !important;
`;

const FormLabel = styled.Text`
  margin-bottom: 0.5rem;
`;

const FormControl = styled.TextInput`
  width: 100%;
  padding: 16px 12px;
  font-size: 14px; 
  font-weight: 400;
  line-height: 21px; 
  color: #343a40;
  background-color: #fff;
  border-width: 1px;
  border-color: #ced4da;
  border-radius: 4px; 
  elevation: 2;
`;


export const LField = forwardRef((props, ref) => {
    const [text, onChangeText] = useState('');

    const { errors, register, type, setValue, small, appClassName, ...rest } = props;

    return (
        <FormFloating>
            <FormControl
                onChangeText={(text) => setValue(rest.name, text)}
                keyboardType={type}
                {...register(rest.name)}
                {...rest}
            />
            {errors[rest.name] && <Text style={{ color: 'red' }}>{errors[rest.name].message}</Text>}
        </FormFloating>
    )
});