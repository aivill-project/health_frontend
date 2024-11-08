import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BackButtonContainer } from './Header.styles';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <BackButtonContainer onClick={handleBack}>
      <ArrowBackIosNewIcon sx={{ fontSize: 18 }} />
    </BackButtonContainer>
  );
};

export default BackButton; 