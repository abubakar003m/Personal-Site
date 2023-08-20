import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Box, Card, Stack, Typography, Container } from '@mui/material';
import './Styles.css'
import { ExperienceDate } from '../Data/DummyData.js'
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <Box color="#ffffff" sx={{ mt: { xs: 10, md: 10 } }} id="experience">
            <Container>
                <Box className="sectionTitle">
                    <Typography variant="h4" className='title name' fontWeight={600}>Experience</Typography>
                </Box>
                <Box mt={6}>
                    <Timeline position="alternate">
                        {
                            ExperienceDate.map((data) => {
                                return (
                                    <TimelineItem>
                                        <TimelineSeparator >
                                            <TimelineDot color='secondary' variant='outlined' />
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <motion.div
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true, amount: 0.5 }}
                                                transition={{ duration: data.d }}
                                                variants={{
                                                    hidden: { opacity: 0, x: data.x },
                                                    visible: { opacity: 1, x: 0 }
                                                }}
                                            >
                                                <Stack direction='column'>
                                                    <Typography variant="h5" fontWeight={600} sx={{ fontSize: { xs: '17px' } }}>{data.title}</Typography>
                                                    <Typography variant="body2" >{data.duration}</Typography>
                                                    <Typography variant="body1" mt={2} sx={{ fontSize: { xs: '13px' } }}>{data.desc}</Typography>
                                                </Stack>
                                            </motion.div>
                                        </TimelineContent>
                                    </TimelineItem>
                                )
                            })
                        }
                    </Timeline>
                </Box>
            </Container>
        </Box>
    )
}

export default Experience