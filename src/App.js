
import './App.css';
import { useState } from 'react'
import React from 'react'
import Header from './components/Header';
import Content from "./components/Content";
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
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
    const [id, setId] = useState(1);
    const [menuCheck, setMenuCheck] = useState(false);
    const [checkHome, setCheckHome] = useState(false);
    const [color,] = useState(["#ffddb7", "#898989", "#800000", "#b65252", "#b65252", "#d00000", "white"]);
    const [IdSearch, setIdSearch] = useState(true);
    const [client_X_Y, setclient_X_Y] = useState([100,100]);
    const onClickSearchBar = (IdSearch) =>{
        setIdSearch(IdSearch)
    }
    const onClick = (idx) =>{
        setId(idx)
        setMenuCheck(false)
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
        <div style={{backgroundColor:color[0], width: "100%",position:"absolute",}} >
            <div style={{minHeight:"5px", backgroundColor:color[1]}}></div>
            <div style={{ backgroundColor:color[1], width:"100%"}}>
                <Grid container spacing={0}>
                    <Grid item xs={false} sm={2} md={2} lg={2} style={{backgroundColor:color[1]}} ></Grid>
                    <Grid item container xs={12} sm={8} md={8} lg={8} style={{borderBottom: "2px solid white", borderRadius:"50px 0 0px 0px ", backgroundColor:color[2]}}>
                        <Grid item xs={8} sm={9} md={10} lg={10}></Grid>
                        <Grid item xs={4} sm={3} md={2} lg={2} style={{textAlign:"center"}}>
                            Tài khoản
                            <AccountBoxIcon style={{color: "white", position:"static", verticalAlign:"bottom", }}/></Grid>
                        </Grid>
                    <Grid item xs={false} sm={2} md={2} lg={2} style={{backgroundColor:color[1]}} >
                    </Grid>
                </Grid>
            </div>
            <Header color={color} />
            <AppBar onClick={onClick} id = {id} menuCheck={menuCheck} onClickMenuBar={onClickMenuBar} 
                onClickSearchBar = {onClickSearchBar} IdSearch={IdSearch} color={color}/>
            <Content id = {id} color={color}/>   
            <Footer color={color} />
            <Hidden >
                <div className={classes.Homee} onDragEnd={(e)=>dragfun(e)} draggable="true" 
                    style={{ top:client_X_Y[0], left:client_X_Y[1]}} onClick={()=>menuClick()} >
                    <AccountBalanceIcon className={classes.AdjustIcon} />
                </div>
                {/* <div className={classes.Homee} style={{position:"fixed", top:checkHome?client_X_Y[0]-60:"",left:checkHome?client_X_Y[1]-60:""}}>Option 1</div>
                <div className={classes.Homee} style={{position:"fixed", top:checkHome?client_X_Y[0]+60:"",left:checkHome?client_X_Y[1]-60:""}}>Option 2</div>
                <div className={classes.Homee} style={{position:"fixed", top:checkHome?client_X_Y[0]+60:"",left:checkHome?client_X_Y[1]+60:""}}>Option 3</div> */}
                {/* <div className={classes.Homee} style={{position:"fixed", top:checkHome?client_X_Y[0]-60:"",left:checkHome?client_X_Y[1]+60:""}}>Option 4</div> */}
            </Hidden>
        </div>      
        
    )
}

export default App;
