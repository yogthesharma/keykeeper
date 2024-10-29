// material-ui
import { Grid, ListItemIcon } from '@mui/material';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { FiberManualRecordOutlined } from '@mui/icons-material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { Box } from '@mui/system';

// ==============================|| SAMPLE PAGE ||============================== //

const HomePage = () => (
    <Grid>
        <MainCard title="KeyKeeper">
            <Grid container gap={4}>
                <Grid xs={12} item>
                    <Typography sx={{ fontWeight: 'bold' }}>Overview</Typography>
                    <Typography>
                        KeyKeeper is a state-of-the-art user authentication and authorization service designed to provide robust security
                        while being easy to integrate with your applications.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Key Features</Typography>
                    <List sx={{ width: '100%' }}>
                        <ListItem>
                            <Typography component="p" variant="body2">
                                User Registration and Login 🔐
                            </Typography>
                        </ListItem>
                        <Box>
                            <List component="div">
                                <ListItem>
                                    <ListItemIcon>
                                        <FiberManualRecordOutlined fontSize="2" />
                                    </ListItemIcon>
                                    <Typography>Secure Registration: Allows users to sign up with a secure, encrypted process.</Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <FiberManualRecordOutlined fontSize="2" />
                                    </ListItemIcon>
                                    <Typography>Login Mechanism: Provides a secure and seamless login experience for users.</Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <FiberManualRecordOutlined fontSize="2" />
                                    </ListItemIcon>
                                    <Typography>
                                        Password Management: Ensures safe handling and storage of user passwords using advanced encryption
                                        techniques.
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <FiberManualRecordOutlined fontSize="2" />
                                    </ListItemIcon>
                                    <Typography>
                                        Multi-Factor Authentication (MFA): Adds an extra layer of security by requiring multiple
                                        verification methods.
                                    </Typography>
                                </ListItem>
                            </List>
                        </Box>
                        <ListItem>
                            <Typography variant="body2">API Key Management 🔑</Typography>
                        </ListItem>
                        <Box>
                            <List component="div">
                                <ListItem>
                                    <ListItemIcon>
                                        <FiberManualRecordOutlined fontSize="2" />
                                    </ListItemIcon>
                                    <Typography>
                                        Generate API Keys: Easily generate and manage API keys for accessing various services.
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <FiberManualRecordOutlined fontSize="2" />
                                    </ListItemIcon>
                                    <Typography>Key Rotation: Securely rotate API keys to minimize the risk of key exposure.</Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <FiberManualRecordOutlined fontSize="2" />
                                    </ListItemIcon>
                                    <Typography>
                                        Permission Control: Assign different permissions to API keys based on the required access levels.
                                    </Typography>
                                </ListItem>
                            </List>
                        </Box>
                        <ListItem>
                            <Typography variant="body2">Token Validation 📜</Typography>{' '}
                        </ListItem>
                        <Box>
                            <List component="div">
                                <ListItem>
                                    <ListItemIcon>
                                        <FiberManualRecordOutlined fontSize="2" />
                                    </ListItemIcon>
                                    <Typography>
                                        JWT Integration: Uses JSON Web Tokens for secure and scalable token-based authentication.
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <FiberManualRecordOutlined fontSize="2" />
                                    </ListItemIcon>
                                    <Typography>
                                        Token Expiry Management: Automatically manages token expirations and renewals for continuous
                                        protection.
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <FiberManualRecordOutlined fontSize="2" />
                                    </ListItemIcon>
                                    <Typography>
                                        Revocation Mechanism: Easily revoke tokens when they are no longer needed or compromised.
                                    </Typography>
                                </ListItem>
                            </List>
                        </Box>
                    </List>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Benefits</Typography>
                    <List sx={{ width: '100%' }}>
                        <ListItem>
                            <Typography component="p" variant="body2">
                                Enhanced Security 🛡️
                            </Typography>
                        </ListItem>
                        <Box>
                            <List component="div">
                                <ListItem>
                                    <ListItemIcon>
                                        <FiberManualRecordOutlined fontSize="2" />
                                    </ListItemIcon>
                                    <Typography>Encryption: All sensitive data is encrypted both at rest and in transit.</Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <FiberManualRecordOutlined fontSize="2" />
                                    </ListItemIcon>
                                    <Typography>
                                        Compliance: Adheres to industry standards and regulations to ensure the highest level of security.
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <FiberManualRecordOutlined fontSize="2" />
                                    </ListItemIcon>
                                    <Typography>
                                        Secure Access Control: Provides fine-grained access control to secure your resources effectively.
                                    </Typography>
                                </ListItem>
                            </List>
                        </Box>
                        <ListItem>
                            <Typography variant="body2">Ease of Integration 🔧</Typography>
                        </ListItem>
                        <Box>
                            <List component="div">
                                <ListItem>
                                    <ListItemIcon>
                                        <FiberManualRecordOutlined fontSize="2" />
                                    </ListItemIcon>
                                    <Typography>
                                        Developer-Friendly APIs: Simple and well-documented APIs for easy integration into your
                                        applications.
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <FiberManualRecordOutlined fontSize="2" />
                                    </ListItemIcon>
                                    <Typography>
                                        SDKs and Libraries: Provides SDKs and libraries for various programming languages to speed up
                                        development.
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <FiberManualRecordOutlined fontSize="2" />
                                    </ListItemIcon>
                                    <Typography>
                                        Extensive Documentation: Detailed documentation and guides to help you get started quickly.
                                    </Typography>
                                </ListItem>
                            </List>
                        </Box>
                        <ListItem>
                            <Typography variant="body2">User Management 💼</Typography>
                        </ListItem>
                        <Box>
                            <List component="div">
                                <ListItem>
                                    <ListItemIcon>
                                        <FiberManualRecordOutlined fontSize="2" />
                                    </ListItemIcon>
                                    <Typography>User Profiles: Manage user profiles and preferences efficiently.</Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <FiberManualRecordOutlined fontSize="2" />
                                    </ListItemIcon>
                                    <Typography>
                                        Role-Based Access Control (RBAC): Assign roles to users to control their access to different
                                        resources.
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <FiberManualRecordOutlined fontSize="2" />
                                    </ListItemIcon>
                                    <Typography>
                                        Audit Logs: Maintain detailed logs of all user activities for monitoring and compliance.
                                    </Typography>
                                </ListItem>
                            </List>
                        </Box>
                    </List>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Use Cases</Typography>
                    <List sx={{ width: '100%' }}>
                        <ListItem>
                            <Typography component="p" variant="body2">
                                Web Applications 🌐
                            </Typography>
                        </ListItem>
                        <Box>
                            <List component="div">
                                <ListItem>
                                    <ListItemIcon>
                                        <FiberManualRecordOutlined fontSize="2" />
                                    </ListItemIcon>
                                    <Typography>
                                        Integrate with websites to provide secure login and session management for users.
                                    </Typography>
                                </ListItem>
                            </List>
                        </Box>
                        <ListItem>
                            <Typography variant="body2">APIs 📡</Typography>
                        </ListItem>
                        <Box>
                            <List component="div">
                                <ListItem>
                                    <ListItemIcon>
                                        <FiberManualRecordOutlined fontSize="2" />
                                    </ListItemIcon>
                                    <Typography>Secure API endpoints using JWT tokens to ensure only authorized access.</Typography>
                                </ListItem>
                            </List>
                        </Box>
                        <ListItem>
                            <Typography variant="body2">Mobile Apps 📱</Typography>
                        </ListItem>
                        <Box>
                            <List component="div">
                                <ListItem>
                                    <ListItemIcon>
                                        <FiberManualRecordOutlined fontSize="2" />
                                    </ListItemIcon>
                                    <Typography>
                                        Provide secure authentication for mobile applications, ensuring user data remains protected.
                                    </Typography>
                                </ListItem>
                            </List>
                        </Box>
                    </List>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ fontWeight: 'bold' }}>Target Audience</Typography>
                    <List sx={{ width: '100%' }}>
                        <ListItem>
                            <Typography component="p" variant="body2">
                                Developers 👨‍💻
                            </Typography>
                        </ListItem>
                        <Box>
                            <List component="div">
                                <ListItem>
                                    <ListItemIcon>
                                        <FiberManualRecordOutlined fontSize="2" />
                                    </ListItemIcon>
                                    <Typography>
                                        Looking for an easy-to-integrate authentication solution that provides robust security.
                                    </Typography>
                                </ListItem>
                            </List>
                        </Box>
                        <ListItem>
                            <Typography variant="body2">Businesses 🏢</Typography>
                        </ListItem>
                        <Box>
                            <List component="div">
                                <ListItem>
                                    <ListItemIcon>
                                        <FiberManualRecordOutlined fontSize="2" />
                                    </ListItemIcon>
                                    <Typography>Needing secure access control to protect their applications and user data.</Typography>
                                </ListItem>
                            </List>
                        </Box>
                        <ListItem>
                            <Typography variant="body2">Startups 🚀</Typography>
                        </ListItem>
                        <Box>
                            <List component="div">
                                <ListItem>
                                    <ListItemIcon>
                                        <FiberManualRecordOutlined fontSize="2" />
                                    </ListItemIcon>
                                    <Typography>
                                        Wanting to add robust authentication features without the overhead of building from scratch.
                                    </Typography>
                                </ListItem>
                            </List>
                        </Box>
                    </List>
                </Grid>
            </Grid>
        </MainCard>
    </Grid>
);

export default HomePage;
