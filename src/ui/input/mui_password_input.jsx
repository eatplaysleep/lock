/* eslint-disable react/prop-types */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import * as l from '../../core/index';

const MuiPasswordInput = props => {
  const { autoComplete, onChange, value, showPassword, lock, ...rest } = props;

  return (
    <TextField
      id={`${l.id(lock)}-password`}
      name="password"
      type={showPassword ? 'text' : 'password'}
      autoComplete={autoComplete ? 'current-password' : 'off'}
      autoCapitalize="off"
      fullWidth
      {...{ onChange, value, ...rest }}
    />
  );
};

export default MuiPasswordInput;
