import React from 'react'
import {
    Box, Container, Divider, Grid, Typography
} from '@mui/material'
import { DetailData } from '../Data/DummyData'
import { motion } from "framer-motion";

const Detail = () => {
    return (
        <Box sx={{ mt: { xs: 4, md: 2 } }}>
            <Container>
                <Divider
                    variant="fullWidth"
                    orientation="horizontal"
                    color="#ffffff"
                />
                <Box my={2}>
                    <Grid container spacing={4}>
                        {
                            DetailData.map((data) => {
                                return (
                                    <Grid item xs={12} sm={4} md={4} textAlign='center'>
                                        <motion.div
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true, amount: 0.5 }}
                                            transition={{ duration: 1 }}
                                            variants={{
                                                hidden: { opacity: 0, y: 150 },
                                                visible: { opacity: 1, y: 0 }
                                            }}
                                        >
                                            <Box color='#ffffff'>
                                                <Typography variant="h6" fontWeight={600}>{data.name}</Typography>
                                                <Typography variant="h6">{data.desc}</Typography>
                                            </Box>
                                        </motion.div>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Box>
                <Divider
                    variant="fullWidth"
                    orientation="horizontal"
                    color="#ffffff"
                />
            </Container>
        </Box>
    )
}

export default Detail