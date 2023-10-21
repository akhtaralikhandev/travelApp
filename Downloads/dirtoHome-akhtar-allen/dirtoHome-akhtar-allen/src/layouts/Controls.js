import React from "react"
import Typography from "@material-ui/core/Typography"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import NavigateNext from "@material-ui/icons/NavigateNext"

const Control = (props) =>{
    const Gstate = useSelector(s=> s.entities.acudata)
    const Thisstate = useSelector(s=> s.entities.acupoint)
    
    const Style = {display:"flex",minWidth: "4em", alignItems: "center"}
    
    const Prev = Thisstate.activeid != null ? 
        Gstate.list.filter((item)=> item.id == Thisstate.activeid - 1 )

        .map((items)=> 
            <Link to={items.name}>        
                <div style={Style}>

                    <NavigateNext 
                        style={{transform:"rotateY(180deg)"}} 
                        className="mynavcon"/>

                    <Typography variant="h6" style={{marginLeft: "2vw"}}>
                        {items.name}
                    </Typography>

                </div>        
            </Link> )
        : null

    const Next = Thisstate.activeid != null ? 
        Gstate.list.filter((item)=> item.id == Thisstate.activeid + 1 )

        .map((items)=> 
            <Link to={items.name}> 
                
                <div style={Style}>


                    <Typography 
                        variant="h6" 
                        style={{
                            marginLeft: "2vw",
                            marginRight:"2vw"
                        }}>
                        {items.name}
                    </Typography>

                    <NavigateNext 
                        className="mynavcon"/>
                </div>

            </Link> )

        : null
    
    return(
        <div style={{
            display:"flex", 
            flexFlow:"row wrap",
            textAlign:"center",
            justifyContent:"space-evenly"
        }}>
            <div>
                    {Prev}
            </div> 
            <div>
                    {Next}
            </div>
        </div>
    )
}

export default Control;