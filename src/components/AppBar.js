import React from 'react'
import Grid from '@material-ui/core/Grid';
import {fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import Paper from '@material-ui/core/Paper';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
const useStyles = makeStyles({
    root: (props) => ( {
        backgroundColor: props[1],
        position: "sticky",
        top:"0px",
        Height: "100px",
    }),
    trang_chu_btn: (props) => ( {
        backgroundColor: props[2],
        borderRadius: "12px 0 0 0 ",    
        padding: "15px 32px",
        color: "white",
        fontSize: "12px",
        cursor: "pointer",
        position:"static",
        width: "100%",
        border: "none",
        textDecoration: "none",
        outline: "none",
        '&:hover': {
            backgroundColor: fade(props[3], 0.45),
        
        },
        '&:active': {
            backgroundColor: props[4],
            
        }

    }),
    bai_giang_btn:  (props) => ({
        backgroundColor: props[2],
        padding: "15px 32px",
        color: "white",
        fontSize: "12px",
        cursor: "pointer",
        position:"static",
        width: "100%",
        height:"100%",
        border: "none",
        textDecoration: "none",
        outline: "none",
        '&:hover': {
            backgroundColor: fade(props[3], 0.45),
        
        },
        '&:active': {
            backgroundColor: props[4],
            
        },
    }),
    tai_lieu_btn: (props) => ( {
        backgroundColor: props[2],
        padding: "15px 32px",
        color: "white",
        fontSize: "12px",
        cursor: "pointer",
        position:"static",
        width: "100%",
        height:"100%",
        border: "none",
        textDecoration: "none",
        outline: "none",
        '&:hover': {
            backgroundColor: fade(props[3], 0.45),
        
        },
        '&:active': {
            backgroundColor: props[4],
            }
    }),
    tinh_diem_btn: (props) => ( {
        backgroundColor: props[2],
        borderRadius: "0 12px 0 0 ",
        padding: "15px 32px",
        color: "white",
        fontSize: "12px",
        cursor: "pointer",
        position:"static",
        width: "100%",
        height:"100%",
        border: "none",
        textDecoration: "none",
        outline: "none",
        '&:hover': {
            backgroundColor: fade(props[3], 0.45),
        
        },
        '&:active': {
            backgroundColor: props[4],
            
        }
    }),
    InputLabel: {
        width: "100%",
        height:"100%",
        display: "inline-block",
        borderRadius: "0 0px 50px 0",
        boxSizing: "border-box",
        border: "none",
    },
    
    SearchBtn: (props) => ({
        borderRadius: "0px 0px 0px 10px",
        backgroundColor: props[2],
        color: "white",
        fontSize: "12px",
        cursor: "pointer",
        position:"static",
        width: "100%",
        height:"100%",
        border: "none",
        textDecoration: "none",
        outline: "none",
        '&:hover': {
            backgroundColor: fade(props[3], 0.45),
        
        },
        '&:active': {
            backgroundColor: props[4],
            }

    }),
    CaculatorBtn: (props) => ({
        borderRadius: "0px 0px 0px 0px",
        backgroundColor: props[2],
        color: "white",
        fontSize: "12px",
        cursor: "pointer",
        position:"static",
        width: "100%",
        height:"100%",
        border: "none",
        textDecoration: "none",
        outline: "none",
        '&:hover': {
            backgroundColor: fade(props[3], 0.45),
        
        },
        '&:active': {
            backgroundColor: props[4],
            }

    }),
    moreMenu:(props) => ({
        borderRadius: "0px 0px 0px 0px",
        backgroundColor: props[2],
        color: "white",
        fontSize: "12px",
        cursor: "pointer",
        position:"static",
        width: "100%",
        height:"100%",
        border: "none",
        textDecoration: "none",
        outline: "none",
        '&:hover': {
            backgroundColor: fade(props[3], 0.45),
        
        },
        '&:active': {
            backgroundColor: props[4],
            }
    }),
    menuList: {
        backgroundColor: "#ffddb7",
        borderBottom: "1px solid gray",
        color:"#045400",
        paddingLeft:"10px",
        paddingTop:"5px",
        '&:hover': {
            backgroundColor: fade("#eebb6b", 0.45),
            color:"#0dff00"

        
        },
        '&:active': {
            backgroundColor: "#673c00",
            }
    }

  })


const AppBar = ({id, onClick, onClickSearchBar, IdSearch, color, menuCheck, onClickMenuBar}) => {
    const classes = useStyles(color);
    const onClickMenu = () => {
        onClickMenuBar()
    }
    const MenuList = () => {
        return(
            <Grid container>
                <Grid item xs={12} sm={12} md ={12} lg={12} className={classes.menuList} onClick={()=>onClick(5)}>OPTION 1</Grid>

                <Grid item xs={12} sm={12} md ={12} lg={12} className={classes.menuList} onClick={()=>onClick(6)}>OPTION 2</Grid>

                <Grid item xs={12} sm={12} md ={12} lg={12} className={classes.menuList} onClick={()=>onClick(7)}>OPTION 3</Grid>
            </Grid>
        )

    }
    const caculator = () => {
        if (IdSearch === false){
            return (
            <Grid container style={{backgroundColor: color[1]}}>
                <Grid item xs={2} sm={2} md={2} lg={2} style={{backgroundColor: color[1]}}></Grid>

                <Grid item xs={9} sm={9} md={9} lg={9} style={{backgroundColor: color[1]}}>
                    <Paper square style={{backgroundColor:"lightgray", border:"2px solid red", minHeight:"200px"}}>
                        Máy tính chỗ này...
                        <button onClick={() =>onClickSearchBar(true)}>Off</button>
                    </Paper>
                </Grid>
                <Grid item xs={1} sm={1} md={1} lg={1} style={{backgroundColor: color[1]}}></Grid>

            </Grid>
            )

        }
    }
    return (
        <div className = {classes.root}>

            <Grid container spacing={0} >
                <Grid item xs={false} sm={2} md={2} lg={2} style={{backgroundColor: color[1]}}></Grid>
                <Grid  item container  xs={12} sm={8} md={8} lg={8} elevation={5} style={{backgroundColor: color[1],  borderRadius: "0px 0px 0px 0px",}}>
                    <Grid item xs={1} style={{backgroundColor:color[2], borderRadius: "0px 0px 0px 10px", textAlign:"center",borderRight:"2px solid white"}}>

                        <button className={classes.SearchBtn} onClick={() => onClickSearchBar(true)}
                            style={{backgroundColor: IdSearch===true?color[5]:(classes.SearchBtn.backgroundColor)}}
                         >
                            <SearchIcon style={{color:"lightcyan", marginTop:"5px"}} ></SearchIcon>
                        </button>

                    </Grid>
                    
                    <Grid item xs={1} style={{backgroundColor:color[2], borderRadius: "0px 0px 0px 0px", textAlign:"center", }}>

                        <button className={classes.CaculatorBtn} onClick={() => onClickSearchBar(false)}
                        style={{backgroundColor: IdSearch===false?color[5]:(classes.SearchBtn.backgroundColor)}}
                        >
                            <AppsIcon style={{color:"lightcyan", marginTop:"5px"}} ></AppsIcon>

                        </button>

                    </Grid>

                    <Grid item xs={10} style={{borderTop: "4px solid " + color[2]}}>

                        <input type="text" placeholder={IdSearch===true?"Tìm kiếm...":"Nhập phép toán..."} className={classes.InputLabel}/>

                    </Grid>

                    <Grid item xs={12} style={{backgroundColor:color[1], minHeight:"10px"}}>
                        {caculator()}
                    </Grid>

                </Grid>

                <Grid item xs={false} sm={2} md={2} lg={2} style={{backgroundColor: color[1]}}></Grid>


                <Grid  item xs={false} sm={2} md={2} lg={2} style={{backgroundColor:color[1],}}></Grid>

                <Grid item container xs={12} sm={8} md={8} lg={8} style={{backgroundColor:"red",borderRadius: "16px 16px 0px 0px"}}>
                    <Grid item xs={3} style={{}} >
                        <button className={classes.trang_chu_btn} style={{backgroundColor: id===1 && menuCheck===false?color[5]:(classes.trang_chu_btn.backgroundColor)}} onClick={()=>onClick(1)}>THÔNG BÁO</button>    
                    </Grid>
                    <Grid item xs={3}>
                        <button className={classes.bai_giang_btn} style={{backgroundColor: id===2 && menuCheck===false?color[5]:(classes.bai_giang_btn.backgroundColor)}} onClick={()=>onClick(2)}>BÀI GIẢNG</button>    
                    </Grid>
                
                    <Grid item xs={3}>
                        <button className={classes.tai_lieu_btn} style={{backgroundColor: id===3 && menuCheck===false?color[5]:(classes.tai_lieu_btn.backgroundColor)}} onClick={()=>onClick(3)}>TÀI LIỆU</button>     
                    </Grid>
                    <Grid item xs={3}>
                        <button className={classes.tinh_diem_btn} style={{backgroundColor: id===4 && menuCheck===false?color[5]:(classes.tinh_diem_btn.backgroundColor)}} onClick={()=>onClick(4)}>TÍNH ĐIỂM</button>     
                    </Grid>
                </Grid>
        
            <Grid item xs={false} sm={2} md ={2} lg={2} style={{backgroundColor:color[1]}}></Grid>

            <Grid item xs={false} sm={2} md ={2} lg={2} style={{backgroundColor:color[1]}}></Grid>
            <Grid item xs={12} sm={8} md ={8} lg={8} style={{backgroundColor:"#2b2928"}}>
                {menuCheck?MenuList():""}
            </Grid>
            <Grid item xs={false} sm={2} md ={2} lg={2} style={{backgroundColor:color[1]}}></Grid>

            <Grid item xs={false} sm={2} md={2} lg={2} style={{backgroundColor: color[1], color:"white", }}>
                </Grid>
            <Grid item container xs={12} sm={8} md={8} lg={8} className={classes.moreMenu} onClick={() => onClickMenu() }
                style={{backgroundColor: menuCheck||id>4?color[5]:(classes.moreMenu.backgroundColor), color:"white", borderTop: menuCheck?"none":"2px solid white"}}> 
                <Grid item xs={2} sm={2} md={2} lg={2}>{menuCheck?<ArrowDropUpIcon />:<ArrowDropDownIcon />}</Grid>
                <Grid  item xs={8} sm={8} md={8} lg={8} 
                     style={{fontSize:"15px", textAlign:"center", marginTop:"5px"}}>{id>4?"OPTION "+String(id-4):""}</Grid>
            </Grid>

            <Grid item xs={false} sm={2} md={2} lg={2} style={{backgroundColor: color[1],color:"white"}}></Grid>
            </Grid>
        </div>
    )  
}

export default AppBar
