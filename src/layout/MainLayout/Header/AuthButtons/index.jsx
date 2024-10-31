import React from 'react';
import { useSelector } from 'react-redux';

import { useTheme } from '@mui/material/styles';
import { Button } from '@mui/material';
import { Box } from '@mui/system';

import AnimateButton from 'ui-component/extended/AnimateButton';

const AuthButtons = () => {
    const theme = useTheme();
    const customization = useSelector((state) => state.customization);

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
                >
                    Login
                </Button>
            </AnimateButton>
        </Box>
    );
};

export default AuthButtons;
