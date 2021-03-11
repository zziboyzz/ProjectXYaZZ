
import './App.css';
import { useState } from 'react';
import React from 'react';
import Content from "./components/Content";
import AppBar from "./components/AppBar";
import SideBar from "./components/SideBar";
import TemporaryDrawer from "./components/TemporaryDrawer";
import Footer from "./components/Footer";
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { BrowserRouter as Router } from "react-router-dom";

const useStyles = makeStyles({
    Homee: {
        minHeight:"50px",
        position:"fixed",
        borderRadius: "4px",
        backgroundColor: "#006363",
        border: "3px solid white",
        color: "#FFFFFF",
        textAlign: "center",
        verticalAlign:"center",
        width: "50px",
        cursor: "pointer",
        '&:Hover': {
            backgroundColor: "#ebc99f",
        }
    },
    
    AdjustIcon: {
        marginTop:"13px"
    }
  })
const App = () => {
    const classes = useStyles();
    const [state, setState] = useState({
        left: false,})
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
    
        setState({ ...state, [anchor]: open });
        };

    const [id, setId] = useState(1);
    const [menuCheck, setMenuCheck] = useState(false);
    const [checkHome, setCheckHome] = useState(false);
    const [color,] = useState(["#ffecdc", "#279a97", "#d75d00", "#b65252", "#b65252", "#ff5905", "white"]);
    const [IdSearch, setIdSearch] = useState(true);
    const [client_X_Y, setclient_X_Y] = useState([100,100]);
    const onClickSearchBar = (IdSearch) =>{
        setIdSearch(IdSearch)
    }
    const onClick = (idx) =>{
        setId(idx)
        setMenuCheck(false)
        if (idx === 4){
            window.scrollTo(0, 50)}
        else
            window.scrollTo(0, 0)
    }
        
    const onClickMenuBar = () =>{
        menuCheck === false?setMenuCheck(true):setMenuCheck(false) 
    }
    const dragfun = (e) => {
        var x = e.clientX;
        var y = e.clientY;
        console.log(x+"+"+y)
        // const newclient_X_Y =[...client_X_Y];
        setclient_X_Y([y-25,x-25])
       
    }
    const menuClick = () =>{
            if (!checkHome){
                setCheckHome(true)
            }  
            else setCheckHome(false)
    
          }
    return (

        <div style={{backgroundColor:color[1], width: "100%", position: "absolute"}} >
            <Router>
            <TemporaryDrawer state={state} setState={setState}  toggleDrawer={toggleDrawer}/>
            <Hidden smDown >
                <div style={{position: "fixed", top: "150px", left: "25px", width: "28%"}}>
                   
                    <Paper style={{minHeight:"430px", width:"100%", borderRadius: "4px" }}>
                        <Grid container style={{backgroundColor: color[1]}}>
                            <Grid item  xs={6} style={{backgroundColor: color[2], textAlign: "center",
                                 borderRadius: "4px 0px 0 0", color: "white", borderRight: "2px solid white" }}>
                                Kênh Chat
                            </Grid>
                            <Grid item xs={6} style={{backgroundColor: color[2], textAlign: "center", borderRadius: "0px 4px 0 0", color: "white"}}>
                                Đăng nhập
                            </Grid>  
                        </Grid>
                        <Grid container>
                            
                        </Grid>
                    </Paper>
                   
                </div>
            </Hidden>
            <Grid container >
                <Grid item container xs={12} style={{minHeight: "20px", borderBottom: "1px solid white"}}>
                <Grid item container xs={7} sm={9} md={9} lg={9} >
                    <SideBar toggleDrawer={toggleDrawer} state={state} setState={setState} />
                </Grid>
                <Grid item xs={5} sm={3} md={2} lg={2} style={{textAlign: "right"}}>
                    Chưa đăng nhập
                    <AccountBoxIcon style={{color: "darkred", position:"static", verticalAlign:"bottom", }}/>
                </Grid>
                <Grid item xs={false} sm={false} md={1} lg={1} ></Grid>

                </Grid>
                <Grid item xs={12} style={{minHeight: "20px"}}></Grid>
                <Grid item container xs={false} sm={false} md={4} lg={4} style={{backgroundColor: color[1] }}>
                    <Grid item xs={12} sm={12} md={12} lg={12 } style={{fontSize: "20px", color: "white", fontFamily: "Stick", marginLeft: "20px"}} >
                        Bkow.XYaZ<br/>Be better at mechanics
                    </Grid>
                    <Grid item style={{minHeight: "10px"}} >
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={7}>
                {/* <Header color={color} /> */}
                    <AppBar onClick={onClick} id = {id} menuCheck={menuCheck} onClickMenuBar={onClickMenuBar} 
                        onClickSearchBar = {onClickSearchBar} IdSearch={IdSearch} color={color}/>
                    <Content id = {id} onClick={onClick} color={color} />   
                    <Footer color={color} />
                    <Hidden >
                        <div className={classes.Homee} onDragEnd={(e)=>dragfun(e)} draggable="true" 
                            style={{ top:client_X_Y[0], left:client_X_Y[1]}} onClick={()=>menuClick()} >
                            <AccountBalanceIcon className={classes.AdjustIcon} />
                        </div>
                    
                    </Hidden>
                </Grid>
                <Grid item xs={1}></Grid>                    
            </Grid>
            </Router>     
        </div> 
    
    )
}




export default App;
