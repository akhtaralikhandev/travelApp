import React from "react"
import { useSelector } from "react-redux"
import FilterForm from "./FilterForm"
import { motion } from "framer-motion"
import Paper from "@material-ui/core/Paper"

const HeaderContent= (props) =>{ 
    const Gstate = useSelector(s=> s.entities.acudata)
    const acuDatA = Gstate.acudata

    const NONE = { display: "none" }
    const MBottom = { marginBottom : "0.8em" }

    const TextStyle =  acuDatA.description1 === null ? NONE : MBottom 

    const Description1 = acuDatA.description1.split(" ")
    return(
        <>
            <div style={{textAlign:"center"}}>

                 <p style={{
                        color:"red",
                        letterSpacing:"1px",
                        fontWeight: "bold",
                        fontSize:" 15px"
                     }}>
                            {acuDatA.top}
                    </p>

                <motion.h1
                    initial={{ opacity: 0.5 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 1, delay: 1 }}
                    >{acuDatA.heading}</motion.h1>

                <motion.div
                    className="headerborder" 
                    initial={{ backgroundColor: "rgb(0,0,0)"}}
                    animate={{ backgroundColor: "rgb(255,0,0)" }}

                    style={{
                        margin: "auto auto", 
                        marginTop: "1em"
                        }}>            
                </motion.div>
             </div>

            

            <section className="blog-grid padding-top-40px padding-bottom-50px">
                 <div className="container">
                     <div className="row" style={{paddingTop: "2em"}}>
                        
                         <div className="col-lg-6" style={{textAlign:"center", marginTop:"10px"}}>
                                <img 
                                    src={acuDatA.image} 
                                    className="imgstyle"
                                    />
                         </div>

                         <div 
                            className="col-lg-6"  
                            style={{ 
                                marginTop: "10px" , 
                                fontSize: "20px",
                                overflowWrap: "break-word"
                            }}>
                            
                            <motion.div 
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1, transition:{ duration: 1, delay: 0.4} }}
                                whileTap={{ scale: 0.98}}>
                                <Paper 
                                    elevation={3} 
                                    style={{padding: "1em"}}>
                                    <p style={TextStyle}>{Description1.map((item)=>{
                                        if(item == "Acupuncture"){
                                            return <span style={{ marginRight: "7px", color: "red"}}>{item} </span>
                                        }
                                        else{
                                            return <span style={{ marginRight: "7px"}}>{item}</span>
                                        }
                                    })}</p>
                                    <p style={TextStyle}>{acuDatA.description2}</p>
                                    <p style={TextStyle}>{acuDatA.description3}</p>
                                    <p style={TextStyle}>{acuDatA.description4}</p>
                                    <p style={TextStyle}>{acuDatA.description5}</p>
                                </Paper>
                            </motion.div>
                            <hr />

                            { Gstate.datalink == '/formulas' ?
                                '': <FilterForm filtername={acuDatA.filtername}/>}

                         </div>
                     </div>
                </div>
            </section>
        </>
    )
}

export default HeaderContent;