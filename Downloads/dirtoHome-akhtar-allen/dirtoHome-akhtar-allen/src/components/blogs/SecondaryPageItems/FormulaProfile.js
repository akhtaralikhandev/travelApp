import React,{ useEffect } from "react"
import Nav from "../../../layouts/Nav.js"

import { useSelector, useDispatch } from "react-redux"
import Typography from "@material-ui/core/Typography"

import QRCode from "react-qr-code"

import BreadCrumb from "../../../layouts/BreadCrumb"
import ItemList from "../../../layouts/ItemList"
import { UncontrolledCarousel } from "reactstrap"

import { activeNav } from "../../../actionCreator"
import ImagesList from "../../../store/ImageList"


const FormulasItems = (incomingData) =>{
    const props = incomingData.newItem
    
    const dispatch = useDispatch()
    const Thisstate = useSelector(s=> s.entities.acupoint)
    const page = Thisstate.acupagelink


    const activeNaV = Thisstate.nav

    const Ingredients = props.ingredients.split(",")
    useEffect(()=>{
        dispatch(activeNav('Profile'))
    },[props])
return(
        <div>
            <ul>
            <BreadCrumb name={page} parentname="Formulas" /><br />    

                <div className="">
                    <Typography variant="h4">{props.name}</Typography>
                    <div className="headerborder"></div>
                </div>

                <br />
                <br />

                <div className="qrcodeformula"> 
                    <QRCode 
                        value={`/formulas/${page}`} 
                        size={110} 
                    />
                </div>

                <br />
                <br />

                <Typography 
                    variant="h4" 
                    style={{
                        color:"rgb(100,100,100)"
                    }}>
                        Epithet
                </Typography><br />
                
                <div className="Carousel">
                    <UncontrolledCarousel items={ImagesList} />
                </div>
                                                
                <ItemList 
                    listName="Pinyin" 
                    value={props.pinyin}
                />
                <ItemList 
                    listName="Chinese" 
                    value={props.chineseSPL}
                />
                <ItemList 
                    listName="Japanese" 
                    value={props.japanese}
                />
                <ItemList 
                    listName="English" 
                    value={props.english}
                />
                <ItemList 
                    listName="Korean" 
                    value={props.korean}
                />
                <ItemList 
                    listName="Vietnamese" 
                    value={props.vietnamese}
                />
                
                <br />

                <Nav />

                <br />
                </ul>
                <ul 
                    style={ 
                        activeNaV === 'Profile' ? 
                        {display:"block"}: {display:"none"}}>

                    <ItemList
                        listName="Category"
                        value={props.category}
                    />
                    <ItemList
                        listName="Ingredients"
                        value={"NULL"}
                    />
                    <ul style={{marginLeft:"10em" }}>
                        {Ingredients.map(
                            (items)=> <li>{items}</li>)}
                    </ul>
                    <ItemList
                        listName="Tongue"
                        value={props.tongue}
                    />
                    <ItemList
                        listName="Pulse"
                        value={props.pulse}
                    />
                    <ItemList
                        listName="Contra-indications"
                        value={props.contraIndication}
                    />
                    <ItemList
                        listName="Suggestion"
                        value={props.suggestion}
                    />
                    <ItemList
                        listName="Caution"
                        value={props.caution}
                    />
     
            </ul>    
        </div>
    )
}

export default React.memo(FormulasItems)

