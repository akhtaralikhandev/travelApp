import React,{ useEffect } from "react"
import Nav from "../../../layouts/Nav.js"

import { useDispatch , useSelector } from "react-redux"
import { activeNav, addDataProfileSalonAndClinics } from "../../../actionCreator"

import Typography from "@material-ui/core/Typography"
import PhoneIcon from '@material-ui/icons/Phone';
import CheckIcon from "@material-ui/icons/Check"
import Button from "@material-ui/core/Button"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Paper from "@material-ui/core/Paper"
import ContactMailIcon from '@material-ui/icons/ContactMail';
import TextField from "@material-ui/core/TextField"
import { UncontrolledCarousel } from "reactstrap"
import ImagesList from "../../../store/ImageList"
import QRCode from "react-qr-code"
import { Link } from "react-router-dom"

import BreadCrumb from "../../../layouts/BreadCrumb"
import ItemList from "../../../layouts/ItemList"
import  { SalonProfileListItems } from "../../../store/SalonProfileListItems"
import GallaryCard from "../../../layouts/GallaryCard"
import { GallaryData } from "../../../store/Gallary"



const SalonItems = (incomingData) =>{
    const props = incomingData.newItem
    
    const Thisstate = useSelector(s=> s.entities.acupoint)
    const dispatch = useDispatch()
    const ClinicsState = useSelector(s=> s.entities.clinics.clinicprofilelist)
    const page = Thisstate.acupagelink

    const activeNaV = Thisstate.nav
    const WorkingTime = ClinicsState.workingtime.split(",")
    
    const ButtonStyle = {
        color: "#ff6b6b",
        marginTop: "1em",
        border: "2px solid #ff6b6b"
    }

    const HeaderStyle = { 
        background:"#ff6b6b",
        justifyContent: "space-between",
        color: "white",
        borderRadius: "4px"
    }

    const GallaryArray = GallaryData.map((item)=> 
        <div className="col-10 col-sm-6 col-md-4 custommargin mt-2">
            <GallaryCard 
                img={item.img}
                title={item.title}
                description={item.description} 
                buttontext={item.buttontext}  />
        </div>) 

    useEffect(()=>{
        dispatch(addDataProfileSalonAndClinics(SalonProfileListItems))
        dispatch(activeNav('Gallary'))
        console.log(Thisstate.activeid)
    },[props])
    return(
        <div>
            <ul>
                <BreadCrumb name={page} parentname="Salon" /><br />
                
                

                <div className="">
                    <Typography variant="h4">{ClinicsState.name}</Typography>
                    <div className="headerborder"></div>
                </div>
                <div className="Carousel">
                    <UncontrolledCarousel items={ImagesList} />
                </div>

                <br />
                <br />
                <div 
                    className=""> 
                    <QRCode 
                        value={`/salon/${page}`} 
                        size={110} 
                    />
                </div>

                <Typography 
                    variant="h4" 
                    style={{
                        color:"rgb(100,100,100)"
                    }}
                    className="mt-4">
                        Epithet
                </Typography><br />
            
                <Nav />

                <br />
                </ul>

                <ul 
                    style={ 
                        activeNaV === 'About Us' ? 
                        { display:"block", textAlign:"center" }
                        : {display:"none"}}>

                    <Typography variant="h6">
                        { ClinicsState.aboutme}
                    </Typography>
     
                </ul> 
                
                <div 
                    style={ 
                        activeNaV === 'Address' ? 
                        { display:"block" }
                        : {display:"none"}}>

                        <div className="container">
                            <div className="row" style={{ justifyContent: "center" }}>
                                <div className="col-12 col-sm-5">
                                    <Paper className="">
                                        <div style={HeaderStyle} className="p-2 pl-3">
                                            <Typography variant="h6">
                                                Address
                                            </Typography>
                                        </div>
                                        <div className="row p-3 pl-5">
                                            <div className="col-12 col-sm-6">
                                                <div 
                                                    className="row align-center" 
                                                    style={{ alignItems: "center" , color: "black"}}>
                                                    <div>
                                                        <LocationOnIcon />
                                                    </div>
                                                    <div className="ml-4">
                                                        <Typography>{ClinicsState.address.address}</Typography>
                                                        <Typography>{ClinicsState.address.city}</Typography>
                                                        <Typography>{ClinicsState.address.country}</Typography>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <div 
                                                    className="row align-center" 
                                                    style={{ alignItems: "center", color: "black" }}>
                                                    <div>
                                                        <PhoneIcon />   
                                                    </div>
                                                    <div className="ml-4">
                                                        <Typography>{ClinicsState.address.mobile}</Typography>
                                                        <Typography>{ClinicsState.address.phone}</Typography>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <Button 
                                            className="m-3 ml-5" 
                                            variant="outlined" 
                                            style={ButtonStyle} >
                                            
                                            Route Me To This Address <ArrowForwardIcon />
                                        </Button>
                                    </Paper>
                                </div>
                                <div className="col-12 col-sm-5">
                                        <Paper className="">
                                            <div style={HeaderStyle} className="p-2">
                                                <Typography variant="h6">
                                                    <ContactMailIcon className="mr-3"/> Send Mail To Salon
                                                </Typography>
                                            </div>
                                            <div className="p-3 pl-1 mt-3">
                                                <TextField
                                                    id="outlined-multiline-flexible"
                                                    label="User"
                                                    multiline
                                                    rowsMax={4}
                                                    className="w-100"
                                                    variant="outlined"
                                                />
                                                <TextField
                                                    id="outlined-multiline-flexible"
                                                    label="Email"
                                                    multiline
                                                    rowsMax={4}
                                                    variant="outlined"
                                                    className="mt-2 w-100"
                                                />
                                                <TextField
                                                    id="outlined-multiline-flexible"
                                                    label="Message"
                                                    multiline
                                                    rowsMax={4}
                                                    variant="outlined"
                                                    className="mt-2 w-100"
                                                />
                                                <br />
                                                <Button variant="outlined" style={ButtonStyle} >
                                                    Send Mail
                                                </Button>
                                            </div>
                                        </Paper>
                                </div>

                            </div>
                        </div>
     
                </div> 
                
                <ul 
                    style={ 
                        activeNaV === 'Working Time' ? 
                        {display:"block"}: {display:"none"}}>
                        
                        <div className="row" style={{justifyContent: "center"}}>
                            <div calssName="col-12 col-sm-4">
                                <Paper
                                    style={{
                                        textAlign:"center",
                                        margin:"auto auto",
                                        textAlign: "center",
                                        width: "100%",
                                        overflow:"hidden",
                                        maxWidth:" 375px"
                                    }}>
                                    <div 
                                        className="row p-2 pl-5 pr-5" 
                                        style={HeaderStyle}>
                                            <Typography variant="h6">Day</Typography>
                                            <Typography variant="h6">Time</Typography>
                                    </div>
                                    <div className="row p-4" style={{
                                            alignItem:"center",
                                            flexDirection:"column",
                                            justifyContent:"center",
                                            textAlign:"center",
                                            margin: "auto auto"
                                        }}>
                                        {WorkingTime.map((item)=> 
                                            <div className="">
                                                <li style={{
                                                    display: "flex",
                                                    width: "20em",
                                                    textAlign:"center",
                                                    justifyContent: "space-between",
                                                    borderBottom: "1px solid lightgrey"
                                                }}>
                                                    {item.split("::").map(
                                                        (item2)=> <p>{item2}</p>)}
                                                </li>
                                                <br />
                                            </div>
                                        )}
                                    </div>
                            </Paper>
                            </div>
                            <div className="col-12 col-sm-4">
                                <Paper className="">
                                    <div className=" p-2 pl-3 "
                                        style={HeaderStyle}>
                                        <Typography variant="h6">
                                            Request for an Appointment
                                        </Typography>
                                    </div>
                                    <div className=" p-3 mt-3">
                                        <TextField
                                            id="outlined-multiline-flexible"
                                            label="Name"
                                            multiline
                                            rowsMax={4}
                                            variant="outlined"
                                            className="w-100"
                                        />
                                        <TextField
                                            id="outlined-multiline-flexible"
                                            label="Email"
                                            multiline
                                            rowsMax={4}
                                            variant="outlined"
                                            className="mt-2 w-100"
                                        />
                                        <TextField
                                            id="outlined-multiline-flexible"
                                            label="Phone"
                                            multiline
                                            rowsMax={4}
                                            variant="outlined"
                                            className="mt-2 w-100"
                                        />
                                        <br />
                                        <button className="btn" style={ButtonStyle} >
                                            Send Your Request
                                        </button>
                                    </div>
                                </Paper>
                            </div>
                        </div>
                </ul>    
                <ul 
                    style={ 
                        activeNaV === 'Bussiness Information' ? 
                        {display:"block"}: {display:"none"}}>

                    
                    <ItemList 
                        listName="Membership" 
                        value={ClinicsState.bussinessinformation.membership} />
                    <ItemList 
                        listName="Membership-Nr" 
                        value={ClinicsState.bussinessinformation.membership_nr} />
                    <ItemList 
                        listName="Healthcare Provider Identifier Organisation" 
                        value={ClinicsState.bussinessinformation.healthcare_provider_identifier_organistion} />
                    <ItemList 
                        listName="Healthcare Provider Identifier Individual" 
                        value={ClinicsState.bussinessinformation.healthcare_provider_identifier_individual} />
                    <ItemList 
                        listName="Chamber of Commerce-Nr " 
                        value={ClinicsState.bussinessinformation.chamber_of_commerce_nr} />
                    <ItemList 
                        listName="Taxpayer-Nr" 
                        value={ClinicsState.bussinessinformation.taxpayer_nr} />
                    <ItemList 
                        listName="Languages" 
                        value={ClinicsState.bussinessinformation.language} />
                </ul> 
                <ul 
                    style={ 
                        activeNaV === 'Testimonials' ? 
                        {display:"block"}: {display:"none"}}>

                    
                    <ItemList 
                        listName="Testimonials" 
                        value={ClinicsState.testimonials} />
     
                </ul> 

                <ul
                    style={
                        activeNaV === 'Gallary' ?
                        { display: "block" } : { display: "none" }
                    }>
                        <div className="row" style={{}}>
                            { GallaryArray }
                        </div>
                </ul>
        </div>
    )
}

export default React.memo(SalonItems)