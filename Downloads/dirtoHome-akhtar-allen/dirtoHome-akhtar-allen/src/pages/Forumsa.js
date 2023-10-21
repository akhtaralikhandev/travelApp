import React,{useState,useEffect} from 'react'
import '../assets/css/forumsa/Forumsa.css';
import Carousel from 'react-bootstrap/Carousel';
import ForumHostingCompo from '../components/forumsa-component/ForumHostingCompo';
import  HighlightCard from '../components/forumsa-component/HighlightCard.js';
import ForumUse from '../components/forumsa-component/ForumUse';
import ForumIntegration from '../components/forumsa-component/ForumIntegration';
import Footer from "../components/common/footer/Footer";
import TextTransition, { presets } from "react-text-transition";
import img from '../assets/images/forumsa-img.jpg'
import img1 from '../assets/images/forumsa-img2.jpg'
import img2 from '../assets/images/forumsa-img3.jpg'
import high_img from '../assets/images/forumsa-highlight-img.png';

function Forumsa() {
    const[slideImages,setSlideImages] = useState([img,img1,img2]); //here get the array of images from db or anywhere want to display
    const[hightLight_data,setHighLightData] = useState([
        {img: high_img,heading: 'Escape email & chat silos',detail:'Engage in searchable discussions with your customers, superfans,and team members.'},
        {img: high_img,heading: 'Escape email & chat silos',detail:'Engage in searchable discussions with your customers, superfans,and team members.'},
        {img: high_img,heading: 'Escape email & chat silos',detail:'Engage in searchable discussions with your customers, superfans,and team members.'},
        {img: high_img,heading: 'Escape email & chat silos',detail:'Engage in searchable discussions with your customers, superfans,and team members.'}
       
    ]);
    const [index, setIndex] = React.useState(0);
    const TEXTS = [
        "Community",
        "Customers",
        "Fans"
      ];

      useEffect(() => {
        const intervalId = setInterval(() =>
          setIndex(index => index + 1),
          3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
      }, []);


    return (
        <div className='forum-sa'>
        {/* //////////////// FIRST PART ////////////////*/}
            <header id='forumsa'>
                <div className='header-heading'>
                <h1>Civilized discussion for your  &nbsp;   
                    
                
                  </h1>
                  <h1  className='header-heading-dynamic'> 
                    <TextTransition
                        text={TEXTS[index % TEXTS.length] }
                        springConfig={ presets.wobbly }
                    /></h1>

                  </div>
                  
                <div style={{textAlign: 'center'}}><a src='#' className='try-btn' >Try it FREE</a> </div>
                <div className='caro'>
                    
                    <Carousel fade className='big-slider'>

                    { slideImages.map((i,key)=>{
                        return(
                        <Carousel.Item>
                        
                        <img
                        key={key}
                        src={i}
                        className="d-block w-100"
                        />
                        
                        
                        
                    </Carousel.Item>
                    )}
                    )}
                            
                    
                    
                    </Carousel>
                    
                   
                    <Carousel fade className='mini-slider'>
                       
                        { slideImages.map((i,key)=>{ // map the images you want to show
                        return(
                        <Carousel.Item>
                        
                        <img
                        key={key}
                        src={i}
                        className="d-block w-100"
                        />
                        
                        
                        
                    </Carousel.Item>
                    )}
                    )}
                    </Carousel>
                    </div>
               

            </header>


            {/*////////////////  SECOND PART//////////////// */}
            <div className='highlights'>
            {
                hightLight_data.map((d,key)=>{
                    return(
                    <HighlightCard data={d}/>
                    )
                })
            }
               

            </div>
           
             {/* //////////////// THIRD PART ////////////////*/}
            <div className='forum-hosting'>
           
                <ForumHostingCompo />
                <p className='forum-quote'><q>The wide range of Discourse tools, as well as its intelligence 
                    that comes out of the box, made it possible for our community to thrive</q></p>
            </div>


           


          {/*////////////////  FOURTH PART//////////////// */}
          <div className='forum-who-use-it'>
           <ForumUse />
           </div>


            {/*////////////////  FIFTH PART//////////////// */}
          <div className='forum-integration'>
            <ForumIntegration />
           </div>

           {/*////////////////  FOOTER GOES THERE //////////////// */}
           <Footer/>
        </div>
    )
}

export default Forumsa
