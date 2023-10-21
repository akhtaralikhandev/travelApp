import React,{ useState , useEffect } from 'react';
import GeneralHeader from "../components/common/GeneralHeader";
import Breadcrumb from "../components/common/Breadcrumb";
// import NewsLetter from "../components/other/cta/NewsLetter";
import Footer from "../components/common/footer/Footer";
import ScrollTopBtn from "../components/common/ScrollTopBtn";
import breadcrumbimg from '../assets/images/bread-bg.jpg';
 import { getPrivacyPolicies,savePrivacyPolicy} from'../services/privacypolicies.js';
// import { PrivacyPolicyData } from "../store/PrivacyPolicyData"
import Typography  from '@material-ui/core/Typography';
import RemoveIcon from '@material-ui/icons/Remove';
// import auth from "./../../../services/authservice";
// import QuillEditor from "../postEditor/quillEditor";



const state = {
    breadcrumbimg: breadcrumbimg,
}


function PrivacyPolicy() {
    const active = "Privacy Policy"
    const TemplateColor = { color: "#ff6b6b", marginRight: "0.4em"}
    
    const [privacyPolicyData, setPrivacyPolicyData] = useState([]);
    
    const fetchPrivacyPolicies = async () => {
        try {
          const {data:privacypolicies} = await getPrivacyPolicies();
          console.log(privacypolicies);
          setPrivacyPolicyData(privacypolicies);
          
        
        } catch (error) {
          console.log(error);
        }
      };
   
    useEffect(() => {
  
        fetchPrivacyPolicies();
        console.log("running",privacyPolicyData);
      }, []);
      let privacyPolicyDatasorted=  privacyPolicyData.sort(function (a, b) { if (a.code < b.code) {
        return -1;
      }
      if (a.code > b.code) {
        return 1;
      }
      return 0;
      
    });

    // let privacyPolicyDatasorted1=  privacyPolicyDatasorted.map(privacyPolicyDatasorted.split (';;').join('\n'));
      
   
    // let privacyPolicyDatasorted1 = privacyPolicyDatasorted.replace(";; ","\n")
    
   
    // var dataArray =privacyPolicyDatasorted.split(";;");
    
    // privacyPolicyDatasorted1      = (dataArray.join("\n"));
   
    return (

        <main className="signup-page">
            {/* Header */}
            <GeneralHeader />

            {/* Breadcrumb */}
            <Breadcrumb CurrentPgTitle={active} img={state.breadcrumbimg} />
          
           
       

            {privacyPolicyDatasorted.map((item, idx) => {
        return (

          
           <div key={idx}>
            <section className="form-shared padding-top-0px padding-bottom-0px">
                <div className="container-fluid">
                
                    <div className="row">
                        <div className="col-11 col-sm-11 col-lg-11 border p-4 shadow mx-auto">
                        
                      
 
                            <Typography variant="h5" style={TemplateColor}>
                                { item.title }
                            </Typography>
                           

                            {/* <Typography className="mt-3" variant="h6">
                             {  item.code }
                            </Typography> */}

                            <Typography className="mt-3" variant="body1">

                            {item.article.split(";;").map(el =>  <div>{el}<br/></div>)} 

                            </Typography>
                           
                        </div>
                       
                   
                    </div>
                    
                </div>
            </section>
            
			

            </div>)})}
            <section className="form-shared padding-top-0px padding-bottom-0px">
                <div className="container-fluid">
                
                    <div className="row">
                        <div className="col-11 col-sm-11 col-lg-11 border p-4 shadow mx-auto">
                        
                      
 
                        <div style={{ textAlign: "start" }}>
                                <Typography variant="h5" color="TemplateColor">
                                    { "WoW T.Q.T. TONG" }
                                    <br />
                                    <small>C.D.O</small>
                                </Typography>
                            </div>
                        </div>
                       
                   
                    </div>
                    
                </div>
            </section>
                        
        <Footer />

        <ScrollTopBtn />
                        

        </main>
    );
 }

export default PrivacyPolicy;
