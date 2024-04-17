// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React,{useState} from 'react';
import {LayoutProps} from './types.ts';
import {
    Box,
    Typography,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Divider,
    ListItemButton,
    ListItemIcon,Link
} from "@mui/material";
import {routes} from "../router/Router.tsx";
import {useLocation,useNavigate} from "react-router-dom";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import LocationOnIcon from '@mui/icons-material/LocationOn'; // Similar to fa-location-dot
import PhoneIcon from '@mui/icons-material/Phone'; // Similar to fa-phone
import EmailIcon from '@mui/icons-material/Email';
import {useTheme} from "@mui/material/styles";

function PublicLayout({ children }: LayoutProps) {
    const navigate = useNavigate();
    const { pathname: location } = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const theme = useTheme();

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return <Box sx={{
        width: '100dvw',
        height: '100dvh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
    }}>
        <Box sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: 4,
            pb: 2,
            background: 'linear-gradient(180deg, rgba(2,10,25,1) 68%, rgba(16,24,40,1) 100%)',
        }}>
            <Typography variant={'h2'}>Arthur de Rugy</Typography>
            <Box sx={{
                display: 'flex',
                py: 3,
                gap: 3,
            }}>
                {
                    routes.map((route, index) => {
                        return <Box key={index} sx={{ cursor: 'pointer' }} onClick={() => navigate(route.path)}>
                            {
                                location === route.path
                                    ? <Typography variant={'h4'} sx={{
                                        color: 'white',
                                        fontWeight: 'bold',
                                        textDecoration: 'underline 2px',
                                        textUnderlineOffset: '4px',
                                    }}>
                                        { route.display?.name }
                                    </Typography>
                                    : <Typography variant={'h4'}>
                                        { route.display?.name }
                                    </Typography>
                            }

                        </Box>
                    })
                }
            </Box>
        </Box>
        <Box flex={1} overflow={'hidden'}>
            { children }
        </Box>
        <Box sx={{
            width: '100%',
            py: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Button
                onClick={toggleDrawer}
                endIcon={isOpen ? <ExpandMoreIcon /> : <ExpandLessIcon />}
            >
                More info
            </Button>
            <Drawer
                anchor="bottom"
                open={isOpen}
                onClose={toggleDrawer}
            >
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    paddingTop: '16px'
                }}>
                    <Button
                        onClick={toggleDrawer}
                        endIcon={isOpen ? <ExpandMoreIcon /> : <ExpandLessIcon />}
                    >
                        Hide
                    </Button>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        gap: '5%',
                        px: '5%',
                        py: 5,
                    }}>

                        <Box maxWidth={'35%'}>
                            <Typography variant={'h2'}>ArthurLaVoiture</Typography>
                            <Typography variant={'h4'}>I AM THE BEST FREELANCE HIRE ME NOW THAT'S NOT A QUESTION.</Typography>
                        </Box>

                        <Box>
                            <Typography variant={'h2'}>Useless Links</Typography>
                            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                <ListItem disablePadding>
                                    <ListItemButton
                                        component="a"
                                        href="https://fr.wikipedia.org/wiki/Camembert_(fromage)"
                                        sx={{
                                            color: theme.palette.info.main, // Text color
                                            textDecoration: 'none', // Remove default underline
                                            '&:hover, &:focus': {
                                                textDecoration: 'underline', // Add underline on hover/focus
                                                textDecorationColor: theme.palette.info.main, // Underline color
                                            }
                                        }}
                                    >
                                        <ListItemText primary="Camembert" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton
                                        component="a"
                                        href="https://bing.com"
                                        sx={{
                                            color: theme.palette.info.main,
                                            textDecoration: 'none',
                                            '&:hover, &:focus': {
                                                textDecoration: 'underline',
                                                textDecorationColor: theme.palette.info.main,
                                            }
                                        }}
                                    >
                                        <ListItemText primary="Best web browser" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton
                                        component="a"
                                        href="https://www.revenue.ie/en/starting-a-business/paying-your-tax/index.aspx"
                                        sx={{
                                            color: theme.palette.info.main,
                                            textDecoration: 'none',
                                            '&:hover, &:focus': {
                                                textDecoration: 'underline',
                                                textDecorationColor: theme.palette.info.main,
                                            }
                                        }}
                                    >
                                        <ListItemText primary="Nightmare link" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton
                                        component="a"
                                        href="https://www.google.com/maps/place/Le+XV+-+Bar,+Planches+%26+Viandes/@48.8072556,2.1286931,17z/data=!3m1!4b1!4m6!3m5!1s0x47e67d11cf2eacdf:0xbc8754d2f15fc4f5!8m2!3d48.8072521!4d2.131268!16s%2Fg%2F11qqp71b26?entry=ttu"
                                        sx={{
                                            color: theme.palette.info.main,
                                            textDecoration: 'none',
                                            '&:hover, &:focus': {
                                                textDecoration: 'underline',
                                                textDecorationColor: theme.palette.info.main,
                                            }
                                        }}
                                    >
                                        <ListItemText primary="Good pub in Versailles" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Box>

                        <Box className="col-3">
                            <Typography variant={'h2'}>Contact</Typography>
                            <List className="footer-links">
                                <ListItem>
                                    <ListItemIcon>
                                        <LocationOnIcon  style={{color: theme.palette.info.main}} />
                                    </ListItemIcon>
                                    <ListItemText primary={<Typography variant="body2" component="address">
                                        108 Longboat Quay South,<br />Ireland. D02 VX27.
                                    </Typography>} />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <PhoneIcon  style={{color: theme.palette.info.main}} />
                                    </ListItemIcon>
                                    <ListItemText primary={<Link color={'#FFFFFF'} href="tel:+33768525840">+33 7 68 52 58 40</Link>} />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <EmailIcon style={{color: theme.palette.info.main}} />
                                    </ListItemIcon>
                                    <ListItemText primary={<Link color={'#FFFFFF'} href="mailto:derugy.arthur@gmail.com">derugy.arthur@gmail.com</Link>} />
                                </ListItem>
                            </List>
                        </Box>
                    </Box>
                    <Divider />
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        py: 3,
                        bgcolor: 'info.main',
                        width: '100%'
                    }}>
                        <Typography variant={'h3'}>Copyright © 2023 ArthurLaVoiture Limited. All rights reserved.</Typography>
                    </Box>
                </Box>
            </Drawer>
        </Box>
    </Box>;
}

export default PublicLayout;
