
import React from 'react';
import Grid from '@material-ui/core/Grid';

const Header = ({bool, color}) => {
    
    return (
        <div >
            <Grid container spacing={0} elevation={5}  >

                <Grid item xs={false} sm={2} md={2} lg={2} style={{backgroundColor:color[1]}}></Grid>
                <Grid item xs={12} sm={8} md={8} lg={8} style={{backgroundColor: color[0], alignItems:"center", borderLeft: "10px solid"+color[2]
                    }}>
                    <h3 style={{color:"darkred", padding:"0", fontSize: "15px", marginLeft:"10px", }}>BKOW.XYaZ</h3>
                    <b style={ {marginLeft:"10px"}}>Be Better at Mechanics</b> 
                </Grid>
                
                <Grid item xs={false} sm={2} md={2} lg={2} style={{backgroundColor: color[1]}}></Grid>
                <Grid item xs={false} sm={2} md={2} lg={2}  style={{backgroundColor: color[1], minHeight:"10px"}}></Grid>
                <Grid item xs={12} sm={8} md={8} lg={8} style={{backgroundColor: color[0], minHeight:"10px",borderBottom: "2px solid white", borderLeft: "10px solid"+color[2],}}></Grid>
                <Grid item xs={false} sm={2} md={2} lg={2} style={{backgroundColor: color[1], minHeight:"10px"}}></Grid>
            </Grid>
        </div>
    )
}

export default Header
