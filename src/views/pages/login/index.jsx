// material-ui
import { Grid, TextField } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

const LoginPage = () => (
    <MainCard title="Login">
        <Grid container>
            <Grid item xs={12} md={6} lg={4} gap={2}>
                <TextField
                    sx={{ width: '100%' }}
                    id="email"
                    label="Email"
                    type="email"
                    slotProps={{
                        inputLabel: {
                            shrink: true
                        }
                    }}
                />
            </Grid>
            <Grid item xs={12} md={6} lg={4} gap={2}>
                <TextField
                    sx={{ width: '100%' }}
                    id="password"
                    label="Password"
                    type="password"
                    slotProps={{
                        inputLabel: {
                            shrink: true
                        }
                    }}
                />
            </Grid>
        </Grid>
    </MainCard>
);

export default LoginPage;
