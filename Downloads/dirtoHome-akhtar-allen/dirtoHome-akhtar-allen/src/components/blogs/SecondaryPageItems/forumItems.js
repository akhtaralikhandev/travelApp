import React,{ useEffect } from "react"
import Nav from "../../../layouts/Nav.js"

import { useDispatch , useSelector } from "react-redux"
import { activeNav, selectAcuPoint, activeId } from "../../../actionCreator"

import Typography from "@material-ui/core/Typography"
import CheckIcon from "@material-ui/icons/Check"

import QRCode from "react-qr-code"
import { Link } from "react-router-dom"

import BreadCrumb from "../../../layouts/BreadCrumb"
import ItemList from "../../../layouts/ItemList"
import NavForum from "../../../layouts/NavForum.js"



const Items = (incomingData) =>{
    const props = incomingData.newItem
    
    const Thisstate = useSelector(s=> s.entities.acupoint)
    const dispatch = useDispatch()
    // const  Gstate= useSelector(selectData)
    const page = Thisstate.acupagelink

    const activeNaV = Thisstate.nav

    useEffect(()=>{
        dispatch(activeId(props.id))
        dispatch(activeNav('Profile'))
        console.log(Thisstate.activeid)
    },[props])
    return(
        <div>
            <ul>
                <BreadCrumb name={page} parentname="Forum" /><br />
                
                <div className="">
                    <Typography variant="h4">{props.name}</Typography>
                    <div className="headerborder"></div>
                </div>

                <br />
                <br />


             
                <NavForum page="forumcategories" />
                <br />
                </ul>
             
                  
        </div>
    )
}

export default React.memo(Items)