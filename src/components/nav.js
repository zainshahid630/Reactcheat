import React from "react";
import Custombtn from "./custombtn";
import logo from '../s1.svg'
import logoM from '../logoMobile.svg'
import{Toolbar,Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    logo: {
        width: "12%", 
        ['@media (max-width:780px)']: { 
           display: "none"
           }
    },
    logoMobile:{
        width: "100%", 
        display: "none", 
        ['@media (max-width:780px)']: { 
            display: "inline-block"
            }
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    }
})

function Nav()
{
    const classes = styles();
 return( <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
 <img src={logo} className={classes.logo}/> 
 <img src={logoM} className={classes.logoMobile}/> 
 <Typography variant="h6" className={classes.menuItem}>
    About
 </Typography>
 <Typography variant="h6" className={classes.menuItem}>
     Blog
 </Typography>
 <Typography variant="h6" className={classes.menuItem}>
     Careers
 </Typography>
 <Typography variant="h6" className={classes.menuItem}>
     Demos 
 </Typography>
 <Typography variant="h6" className={classes.menuItem}>
     Contact Us 
 </Typography>
 <Custombtn txt="Trial Our Product"/>
</Toolbar>);

}
export default Nav;
