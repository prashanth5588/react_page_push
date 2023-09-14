
import React , {useState} from "react";

import "./formComponent.css"

// import OutputRender from "./renderOnSubmission"

function UserForm() {

    const [formData, modifyFormData] = useState({

        userName: "",
        emailId: "",
        mobileNumber: "",
        massage: "",
        submitClicked: false,

    });


    const handleOnInputChage = (e) => {
        const { name, value} = e.target;  // Here the name is the name provided in the input box the names are also keys for formData object
        modifyFormData({...formData, [name] : value})
    };

    var {userName, emailId, mobileNumber, massage} = formData ;

    const handleSubmit = (event) => {
        
        event.preventDefault();
       

        console.log("form submitted:" , formData);
        // window.location = "second.html";
        

        modifyFormData({...formData, submitClicked:true});

    }

    const clearingForm = () => {

        //  

        modifyFormData({...formData,userName:"", emailId: "", mobileNumber: "", massage:"", submitClicked:false});
    
        
    }

    // userName:"", emailId: "", mobileNumber: "", massage:"",


    return (
        <div >
            <div className="content-container">
            <h3 className="heading2">Welcome to Shopping Website Myntra </h3>
            <h4 className="heading4">Dear user You have to Login</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="userName">Name   :</label>
                <input type="text" id="userName" name="userName" value={formData.userName} onChange={handleOnInputChage}/>
                <br/>
                <label htmlFor="emailId">EmailId  :</label>
                <input type="text" id="emailId" name="emailId" value={formData.emailId} onChange={handleOnInputChage}/>
                <br/>
                <label htmlFor="mobileNumber">Mobilenumber :</label>
                <input type="number" id="mobileNumber" name="mobileNumber" value={formData.mobileNumber} onChange={handleOnInputChage}/>
                <br/>
                <p><label htmlFor="massage" className="area1">Message : </label></p>
                <textarea  id="massage" name="massage" value={formData.massage} onChange={handleOnInputChage}> </textarea>
                <br/>

                <input type="submit" value="SubmitDetails" className="btn btn-primary" />
            </form>

            </div>

            { formData.submitClicked && (
                    <div className="below-details">
                        <button onClick={clearingForm} className="btn btn-danger">Clear Form</button>
                        <h4 className="heading2">Dear User Welcome! Please check your details</h4>
                        <p>Name : <b>{userName}</b></p>
                        <p>Email : <b>{emailId}</b></p>
                        <p>Mobilenumber : <b>{mobileNumber}</b></p>
                        <p>Meassage : <b>{massage}</b></p>
                    </div>
            ) }
           
        </div>
    )

}

export default UserForm;