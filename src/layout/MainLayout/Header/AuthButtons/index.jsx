import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useTheme } from '@mui/material/styles';
import { Button } from '@mui/material';
import { Box } from '@mui/system';

import AnimateButton from 'ui-component/extended/AnimateButton';

const AuthButtons = () => {
    const theme = useTheme();
    const customization = useSelector((state) => state.customization);
    const navigate = useNavigate();

    const handleLoginButtonClick = () => {
        navigate('/login');
    };

    const handleSignUpButtonClick = () => {
        navigate('/register');
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 2 }}>
            <AnimateButton>
                <Button
                    variant="outlined"
                    sx={{
                        borderColor: `${theme.palette.secondary.dark} !important`,
                        color: `${theme.palette.secondary.dark}!important`,
                        fontWeight: 500,
                        borderRadius: `${customization.borderRadius}px`,
                        cursor: 'pointer'
                    }}
                    disableElevation
                    disableRipple
                    onClick={handleSignUpButtonClick}
                >
                    Sign Up
                </Button>
            </AnimateButton>
            <AnimateButton>
                <Button
                    variant="contained"
                    sx={{
                        borderColor: `${theme.palette.secondary.dark} !important`,
                        bgcolor: `${theme.palette.secondary.dark}!important`,
                        fontWeight: 500,
                        borderRadius: `${customization.borderRadius}px`,
                        cursor: 'pointer'
                    }}
                    disableElevation
                    disableRipple
                    onClick={handleLoginButtonClick}
                >
                    Login
                </Button>
            </AnimateButton>
        </Box>
    );
};

export default AuthButtons;
