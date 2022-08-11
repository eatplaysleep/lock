/* eslint-disable react/prop-types */
import React from 'react';
import TextField from '@material-ui/core/TextField';

const MuiEmailInput = props => {
  const { lockId, invalidHint, isValid, autoComplete, onChange, ...rest } = props;

  return (
    <TextField
      id={`${lockId}-email`}
      type="email"
      name="email"
      label="Email"
      autoComplete={autoComplete ? 'on' : 'off'}
      autoCapitalize="off"
      arai-label="Email"
      fullWidth
      style={{ paddingBottom: '16px' }}
      {...{ onChange, ...rest }}
    />
  );
};

export default MuiEmailInput;
