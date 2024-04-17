import React, { useState } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import PublicLayout from "../../layouts/PublicLayout.tsx";

interface FormState {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState<FormState>({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Submitting Form Data:', formData);
        // Add logic here to send data to your server or another function

        fetch('https://formspree.io/f/xbjnyajd', {
            method: 'post',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(formData)
        }).then(res => console.log(res.status))
    };

    return (
        <PublicLayout>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
            }}>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '30%',
                    }}
                >
                    <Typography variant="h1" gutterBottom>
                        Get in touch
                    </Typography>
                    <Typography variant="h4" gutterBottom textAlign={'center'} mb={4}>
                        With me as your developer, you will make a shit ton of money from your websites (if you pay me well).
                        Remain polite I have your email address.
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    value={formData.firstName}
                                    sx={{
                                        backgroundColor: 'background.paper',
                                        input: {
                                            color: 'white'
                                        }
                                    }}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    autoComplete="family-name"
                                    name="lastName"
                                    required
                                    fullWidth
                                    id="lastName"
                                    sx={{
                                        backgroundColor: 'background.paper',
                                        input: {
                                            color: 'white'
                                        }
                                    }}
                                    label="Last Name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    sx={{
                                        backgroundColor: 'background.paper',
                                        color: 'white'
                                    }}
                                    autoComplete="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="message"
                                    label="Message"
                                    name="message"
                                    multiline
                                    sx={{
                                        backgroundColor: 'background.paper',
                                        input: {
                                            color: 'white'
                                        }
                                    }}
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Send
                        </Button>
                    </form>
                </Box>
            </Box>
        </PublicLayout>
    );
};

export default ContactPage;
