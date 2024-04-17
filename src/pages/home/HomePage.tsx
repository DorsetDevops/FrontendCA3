// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React,{useEffect,useMemo,useRef,useState} from 'react';
import {Box,Button,Divider,Typography} from '@mui/material';
import PublicLayout from "../../layouts/PublicLayout.tsx";
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {useNavigate} from "react-router-dom";
import mock from "./mock.ts";

function HomePage() {
    const navigate = useNavigate();

    const [index, setIndex] = useState(0);
    const [carret, setCarret] = useState(0);

    const codeString = useMemo(() => mock[index], [index]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCarret(prevCarret => {
                if (prevCarret >= codeString.content.length) {
                    setIndex(prevIndex => (prevIndex + 1) % mock.length);
                    return 0;
                } else {
                    return prevCarret + 1;
                }
            });
        }, 10);

        return () => clearInterval(intervalId);
    }, [codeString]);

    return (
        <PublicLayout>
            <Box sx={{
                width: '100%',
                height: '100%',

                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Box sx={{
                    width: '60%',
                    height: '70%',

                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'start',
                    gap: 5
                }}>
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        gap={5}
                        maxWidth={'45%'}
                        maxHeight={'100%'}
                        py={4}
                        overflow={'hidden'}
                    >
                        <Box
                            display={'flex'}
                            flexDirection={'column'}
                            gap={3}
                        >
                            <Typography variant={'h1'}>Hi, I'm Arthur,<br/>Freelance Full-Stack developer.</Typography>
                            <Typography variant={'h4'} lineHeight={1.5}>I leverage my experience working with Web & Cloud to make my client's projects shine at an affordable price.</Typography>
                        </Box>
                        <Box display={'flex'} width='100%' gap={2}>
                            <Button
                                onClick={() => navigate('/portfolio')}
                                sx={{
                                    bgcolor: 'background.paper',
                                    color: 'white',
                                    flex: 1,
                                    fontWeight: 'bold',
                                }}
                            >
                                My work
                            </Button>
                            <Button
                                onClick={() => navigate('/contact')}
                                sx={{
                                    bgcolor: 'background.paper',
                                    color: 'white',
                                    flex: 1,
                                    fontWeight: 'bold',
                                }}
                            >
                                Get in touch
                            </Button>
                        </Box>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                        bgcolor: 'background.paper',
                        borderRadius: 3,
                        py: 2,
                        px: 1,
                        height: '100%',
                        maxHeight: '100%',
                        width: '50%',
                        overflowX: 'hidden',
                    }}>
                        <Typography variant={'h6'}>{ codeString.name }</Typography>
                        <Divider />
                        <SyntaxHighlighter
                            language="typescript"
                            style={darcula}
                            wrapLines
                            customStyle={{
                                backgroundColor: 'transparent',
                                overflow: 'hidden',
                                maxHeight: '100%',
                                display: 'flex',
                                flexDirection: 'column-reverse',
                            }}
                            showLineNumbers
                        >
                            {codeString.content.slice(0, carret + 1)}
                        </SyntaxHighlighter>
                    </Box>
                </Box>
            </Box>
        </PublicLayout>
    );
}

export default HomePage;
