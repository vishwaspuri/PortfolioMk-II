import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Box } from '@mui/system';

interface props {
    title: string | null,
    summary: string | null,
    link: string,
    image: string
}

export default function ProjectCard(props: props) {
    return (
        <div className='projectCard' style={{ padding: "10px" }}>
            <Card sx={{ maxWidth: 345, height:"100%" }} onClick={() => { window.location.href = props.link }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={props.image}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Box height="90px">
                            <Typography gutterBottom variant="h5" component="div">
                                {props.title}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body2" color="text.secondary">
                                {props.summary?.substring(0,150)}...
                            </Typography>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}