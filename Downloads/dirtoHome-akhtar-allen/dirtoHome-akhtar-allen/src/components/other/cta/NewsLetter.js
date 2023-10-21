import React,{useRef} from 'react';
import SectionsHeading from "../../common/SectionsHeading";
import { FaRegEnvelope } from 'react-icons/fa'
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField"
// import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

import { motion } from "framer-motion"


function NewsLetter({newsLetterContent}) {
    const constraintsRef = useRef(null)
    return (
        <>
        <div className="container">
        <motion.div ref={constraintsRef}>
            <motion.div  
                    drag
                    dragConstraints={constraintsRef} 
                    style={{}} className="mynewsletter">
                 <div className="row" style={{alignItems:"center"}}>
                    <div className="col-lg-9">
                        <TextField id="standard-basic" label="Subscribe" style={{width:"100%"}}/>
                    </div>
                    <div className="col-lg-3" style={{textAlign:"center"}}>
                        {/* <Button style={{border:"2px solid white", background:"black",
                            marginLeft:"-20px",marginTop:"1em",
                            color:"white", borderRadius:"30px", padding:"0.6em 1em",
                            boxShadow:"2px 2px 5px rgb(100,100,100)"}}>Subscribe</Button> */}
                            <button className="theme-btn border-0" type="submit" value="submit">
                                <i className="la la-paper-plane"></i> Subscribe
                            </button>
                    </div>
                </div>
                <br />
                <div style={{ color:"white" ,
                letterSpacing: "3px", textShadow: " 1px 1px 3px black"}}>
                    <Typography variant="h5" style={{letterSpacing: "2px"}}>Subscribe to Newsletter! </Typography>
                    <Typography variant="h6" style={{letterSpacing: "2px", fontSize:"15px"}}>Subscribe to get latest updates and information.</Typography>
                </div> 
             </motion.div>
        </motion.div>
        </div>
        </>
    );
}


export default NewsLetter;
