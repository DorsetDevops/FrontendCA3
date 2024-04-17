// @ts-ignore
import React from 'react';
import PublicLayout from "../../layouts/PublicLayout.tsx";
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';

import cryptoWalletImg from './assets/img/project-crypto-wallet.jpg';
import smoothieImg from './assets/img/project-smoothie.jpg';
import fashionImg from './assets/img/project-fashion.jpg';
import heroImg from './assets/img/project-hero.png';
import multiColImg from './assets/img/project-multi-col.png';
import storeImg from './assets/img/project-store.png';

function PortfolioPage() {
    const handleProjectClick = (url: string) => {
        window.location.href = url;
    };

    const projects = [
        {
            name: 'BTB (Better than Binance)',
            description: 'Leave Binance and Coinbase and get my own wallet, so I can tax all your transactions.',
            img: cryptoWalletImg,
            link: './projects/betterthanbinance/index.html'
        },
        {
            name: 'Smooth Smoothies',
            description: 'Smooth website to provide the smoothiest experience about smooth smoothies.',
            img: smoothieImg,
            link: './projects/smoothies/index.html'
        },
        {
            name: 'Snazzy Fashion',
            description: 'We will sell you a trash bag for 200 euros because it\'s fashion. Even this website was overpriced.',
            img: fashionImg,
            link: './projects/fashion/index.html'
        },
        {
            name: 'Hero blocks',
            description: 'I really needed that website because I can\'t use MUI to create a responsive grid yet.',
            img: heroImg,
            link: './projects/project-hero/index-1.html'
        },
        {
            name: 'Lots of columns.',
            description: 'Who doesn\'t like columns? Even Romans put some everywhere.',
            img: multiColImg,
            link: './projects/project-multi-column/index.html'
        },
        {
            name: 'Buy nice books about Web!',
            description: 'So you can create your own books marketplace and contribute to my Ponzi scheme.',
            img: storeImg,
            link: './projects/store/index.html'
        },
    ];


    return (
        <PublicLayout>
            <Box sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
            }}>
                <Box sx={{
                    width: '70%',
                    paddingBottom: 2,
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}>
                    <Box sx={{
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        py: 3,
                        width: '70%'
                    }}>
                        <Typography variant="h1">My AWESOME projects</Typography>
                        <Typography variant="h4">Leverage agile frameworks, like Bootstrap, Angular and Microsoft Edge to provide a robust synopsis for high level overviews to foster collaborative thinking.</Typography>
                    </Box>
                    <Grid container spacing={2}>
                        {projects.map((project, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card sx={{ maxWidth: 445 }} onClick={() => handleProjectClick(project.link)}>
                                    <img
                                        src={project.img}
                                        alt="Placeholder image"
                                        style={{ width: '100%', height: 200, objectFit: 'cover' }}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5">
                                            {project.name}
                                        </Typography>
                                        <Typography variant="body2">
                                            {project.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </PublicLayout>
    );
}

export default PortfolioPage;
