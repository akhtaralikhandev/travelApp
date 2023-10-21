import React,{ useState , useEffect } from 'react';
// import SignUpBox from "../components/other/account/SignUpBox";
import GeneralHeader from "../components/common/GeneralHeader";
import Breadcrumb from "../components/common/Breadcrumb";
// import NewsLetter from "../components/other/cta/NewsLetter";
import Footer from "../components/common/footer/Footer";
import ScrollTopBtn from "../components/common/ScrollTopBtn";
import breadcrumbimg from '../assets/images/bread-bg.jpg'
// import sectiondata from "../store/store";
import { Form, Input , Col, Row, Label, FormGroup ,FormText } from "reactstrap"
import { CountryListData } from '../store/CountryListData';
import Typography  from '@material-ui/core/Typography';

const state = {
    breadcrumbimg: breadcrumbimg,
}

class Form2 extends React.Component{
    constructor(){
        super();
        this.state = {
            firstname: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount(){
        document.title = "Form"
    }
    handleChange(event){
        this.setState({
            firstname: event.target.value
        })
        console.log(this.state.firstname)
    }
    render(){
        const active = "Form"
        return(
            <>
            
                <main className="signup-page">
                    {/* Header */}
                    <GeneralHeader />

                    {/* Breadcrumb */}
                    <Breadcrumb CurrentPgTitle={active} img={state.breadcrumbimg} />

                    <section className="form-shared padding-top-40px padding-bottom-100px">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 mx-auto shadow-sm border p-5">
                                    
                                    <Form>
                                        <Row xs={1} sm={2} md={3}>
                                            <Col>
                                                <FormGroup>
                                                    <Label for="firstname">First Name</Label>
                                                    <Input 
                                                        value={this.state.firstname}
                                                        onFocus={(event)=> console.log("Foucused", event)}
                                                        onChange={this.handleChange}
                                                        type="text" 
                                                        name="firstname" 
                                                        id="firstname" 
                                                        placeholder="First Name*" required />
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <FormGroup>
                                                    <Label for="firstname">Initials</Label>
                                                    <Input 
                                                        type="text" 
                                                        name="initials" 
                                                        id="initials" 
                                                        placeholder="Initials"/>
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <FormGroup>
                                                    <Label for="firstname">Last Name</Label>
                                                    <Input 
                                                        type="text" 
                                                        name="lastname" 
                                                        id="lastname" 
                                                        placeholder="Last Name*" required />
                                                </FormGroup>
                                            </Col>

                                            <Col>
                                                <FormGroup>
                                                    <Label for="address1">Address 1</Label>
                                                    <Input
                                                        type="text"
                                                        name="address1"
                                                        id="address1"
                                                        placeholder="Address 1" />
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <FormGroup>
                                                    <Label for="address2">Address 2</Label>
                                                    <Input
                                                        type="text"
                                                        name="address2"
                                                        id="address2"
                                                        placeholder="Address 2" />
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <FormGroup>
                                                    <Label for="address3">Address 3</Label>
                                                    <Input
                                                        type="text"
                                                        name="address3"
                                                        id="address3"
                                                        placeholder="Address 3" />
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <FormGroup>
                                                    <Label for="zipcode">Zip Code</Label>
                                                    <Input 
                                                        type="number" 
                                                        name="zipcode" 
                                                        id="zipcode" 
                                                        placeholder="Zip Code*" required />
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <FormGroup>
                                                    <Label for="city">City</Label>
                                                    <Input 
                                                        type="text" 
                                                        name="city" 
                                                        id="city" 
                                                        placeholder="City" />
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <FormGroup>
                                                    <Label for="state">State</Label>
                                                    <Input 
                                                        type="text" 
                                                        name="state" 
                                                        id="state" 
                                                        placeholder="State" />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row xs={1} md={1} lg={1} sm={1} className="mt-4">
                                            <Col>
                                                <FormGroup row>
                                                    <Label sm={3} for="country">Country</Label>
                                                    <Col sm={9}>
                                                        <Input type="select" name="country" id="country">
                                                            <option>Country</option>
                                                            {
                                                                CountryListData.map((item)=>
                                                                    <option value={item}>{item}</option>
                                                                )
                                                            }
                                                        </Input>
                                                    </Col>
                                                </FormGroup>
                                            </Col>    
                                        </Row>
                                        <Row xs={1} sm={1} md={3} lg={3} className="mt-4">
                                            <Col>
                                                <FormGroup>
                                                    <Label for="username">Username</Label>
                                                    <Input 
                                                        type="text"
                                                        placeholder="Username"
                                                        id="username"
                                                        name="username"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <FormGroup>
                                                    <Label for="email">Email</Label>
                                                    <Input 
                                                        type="email"
                                                        placeholder="Email"
                                                        id="email"
                                                        name="email"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <FormGroup>
                                                    <Label for="password">Password</Label>
                                                    <Input 
                                                        type="password"
                                                        placeholder="Password"
                                                        id="password"
                                                        name="password"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <FormGroup>
                                                    <Label for="bank">Bank</Label>
                                                    <Input 
                                                        type="text"
                                                        placeholder="Bank"
                                                        id="bank"
                                                        name="bank"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <FormGroup>
                                                    <Label for="iban">IBAN</Label>
                                                    <Input 
                                                        type="text"
                                                        placeholder="IBAN"
                                                        id="iban"
                                                        name="iban"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <FormGroup>
                                                    <Label for="branchofbank">Branch Of Bank</Label>
                                                    <Input 
                                                        type="text"
                                                        placeholder="Branch Of Bank"
                                                        id="branchofbank"
                                                        name="branchofbank"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row xs={1} sm={1} md={2} lg={2} className="mt-3">
                                            <Col>
                                                <FormGroup row>
                                                    <Label sm={4} for="organistionaname">Organistion A Name</Label>
                                                    <Col sm={8}>
                                                        <Input 
                                                            type="text"
                                                            placeholder="Organistion A Name"
                                                            id="organisationaname"
                                                            name="organisationaname"
                                                        />
                                                    </Col>
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <FormGroup row>
                                                    <Label sm={4} for="organisationanumber">Organisation A Number</Label>
                                                    <Col sm={8}>
                                                        <Input   
                                                            type="number"
                                                            placeholder="Organisation A Number"
                                                            id="organisationanumber"
                                                            name="organisationanumber"
                                                        />
                                                    </Col>
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <FormGroup row>
                                                    <Label sm={4} for="organistionbname">Organistion B Name</Label>
                                                    <Col sm={8}>
                                                        <Input 
                                                            
                                                            type="text"
                                                            placeholder="Organistion B Name"
                                                            id="organisationbname"
                                                            name="organisationbname"
                                                        />
                                                    </Col>
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <FormGroup row>
                                                    <Label sm={4} for="organisationbnumber">Organisation B Number</Label>
                                                    
                                                    <Col sm={8}>
                                                        <Input 
                                                            
                                                            type="number"
                                                            placeholder="Organisation B Number"
                                                            id="organisationbnumber"
                                                            name="organisationbnumber"
                                                        />
                                                    </Col>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row xs={1} md={2} sm={1} lg={2} className="mt-4">
                                            <Col>
                                                <FormGroup row>
                                                    <Label for="redbloodcell" sm={4}>Red Blood Cell</Label>
                                                    <Col sm={8}>
                                                        <Input 
                                                            type="text" 
                                                            name="redbloodcell" 
                                                            id="redbloodcell" 
                                                            placeholder="Red Blood Cell" />
                                                    </Col>
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <FormGroup row>
                                                    <Label for="whitebloodcell" sm={4}>White Blood Cell</Label>
                                                    <Col sm={8}>
                                                        <Input 
                                                            type="text" 
                                                            name="whitebloodcell" 
                                                            id="whitebloodcell" 
                                                            placeholder="White Blood Cell" />
                                                    </Col>
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <FormGroup row>
                                                    <Label for="gsr" sm={4}>GSR</Label>
                                                    <Col sm={8}>
                                                        <Input 
                                                            type="text" 
                                                            name="gsr" 
                                                            id="gsr" 
                                                            placeholder="GSR" />
                                                    </Col>
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <FormGroup row>
                                                    <Label for="gsp" sm={4}>GSP</Label>
                                                    <Col sm={8}>
                                                        <Input 
                                                            type="text" 
                                                            name="gsp" 
                                                            id="gsp" 
                                                            placeholder="GSP" />
                                                    </Col>
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <FormGroup row>
                                                    <Label for="systolicbloodpressure" sm={4}>SystolicBloodPressure</Label>
                                                    <Col sm={8}>
                                                        <Input 
                                                            type="text" 
                                                            name="systolicbloodpressure" 
                                                            id="systolicbloodpressure" 
                                                            placeholder="Systolic Blood Pressure" />
                                                    </Col>
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <FormGroup row>
                                                    <Label for="diastolicbloodpressure" sm={4}>DiastolicBloodPressure</Label>
                                                    <Col sm={8}>
                                                        <Input 
                                                            type="text" 
                                                            name="diastolicbloodpressure" 
                                                            id="diastolicbloodpressure" 
                                                            placeholder="Diastolic Blood Pressure" />
                                                    </Col>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row className="mt-5">
                                            <Col className="text-right">
                                                <button className="btn btn-primary px-5" 
                                                    style={{ 
                                                        borderRadius: "0px"
                                                    }}>
                                                        Submit
                                                </button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </section>


                {/* Newsletter */}
                {/* <NewsLetter newsLetterContent={sectiondata.calltoactions.newsletters} /> */}

                {/* Footer */}
                <Footer />

                <ScrollTopBtn />

                </main>
            </>
        )
    }
}

export default Form2