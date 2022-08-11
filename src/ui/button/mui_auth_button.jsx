import React from 'react';
import Button from '@material-ui/core/Button';

const MuiAuthButton = props => {
  const { label, onClick, icon, primaryColor, foregroundColor, ...rest } = props;

  const foregroundStyle = foregroundColor ? { color: foregroundColor } : {};
  const iconStyle = icon ? { backgroundImage: `url('${icon}')` } : {};

  return (
    <Button variant="contained" color="default" {...{ onClick, ...rest }}>
      {/* <div className="auth0-lock-social-button-text" style={foregroundStyle}> */}
      {label}
      {/* </div> */}
    </Button>
  );
};

export default MuiAuthButton;
