import React from 'react'
import Grid from '@material-ui/core/Grid';

const Footer = ({color}) => {
    return (
        <div style={{backgroundColor: "red", position: "sticky",top:"0", 
    }}>
            <Grid container spacing={0}>
                <Grid item xs={false} sm={2} md={2} lg={2} style={{backgroundColor: color[1], color:"white", }}>
                </Grid>
                <Grid item xs={12} sm={8} md={8} lg={8} style={{backgroundColor: color[2], color:"white",borderTop: "4px solid white"}}>
                    xyaz_team
                </Grid>
                <Grid item xs={false} sm={2} md={2} lg={2} style={{backgroundColor: color[1],color:"white"}}>
                        
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer