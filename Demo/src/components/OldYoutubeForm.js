
//managing form state,handling form submission ,validation and error msges

import React from 'react';
import { useFormik, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
 
const initialValues = {
    name: '',
    email: '',
    channel: '',
}
const onSubmit = (values) => {
    console.log("Form data", values); //for call api
}
// const validate = (values) => {

//     const errors = {}
//     if (!values.name) {
//         errors.name = 'Required'
//     }
//     if (!values.email) {
//         errors.email = 'Required'
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = 'Invalid email format'
//     }
//     if (!values.channel) {
//         errors.channel = 'Required'
//     }
//     return errors
// }

const validationSchema  = Yup.object({
    name:Yup.string().required("Required"),
    email:Yup.string().email("Invalid Email").required("Required"),//with the help of yup library
    channel:Yup.string().required("Required")

})

const OldYoutubeForm = () => {

    const formik = useFormik({
        initialValues,
        onSubmit,
        //validate,
        validationSchema
    })
    //console.log("form values::::::", formik.values); 
    //console.log("form errors::::::", formik.errors);
    console.log("visited fields::::::", formik.touched);//give information if field is visited or not ....if we click on field then we can see the output "true" in visited field
    //console.log("visited fields::::::", formik.);
    return (

        <Formik>
            <div>
                <form onSubmit={formik.handleSubmit}>

                    <div className='form-control'>
                        <label htmlFor='name'>Name</label>
                        <input type='text' id='name' name='name'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name} />
                        {formik.touched.name && formik.errors.name ? (
                            <div>{formik.errors.name}</div>) : null}
                    </div>

                    <div className='form-control'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' name='email'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email} />
                        {formik.touched.email && formik.errors.email ? (
                            <div>{formik.errors.email}</div>) : null}
                    </div>

                    <div className='form-control'>
                        <label htmlFor='channel'>channel</label>
                        <input type='channel' id='channel' name='channel'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.channel} />
                        {formik.touched.channel && formik.errors.channel ? (
                            <div>{formik.errors.channel}</div>) : null}
                    </div>

                    <button type='submit'>Submit</button>
                </form>
            </div>
        </Formik>
    )
}

export default OldYoutubeForm;



// import React, { useState } from 'react';
// import DoubleInputField from '../../components/inputFields/doubleInputField';
// import AuthModelAction from '../../actions/auth.action';
// import { AuthMap, signUpUserAsync } from '../../actions/auth.action';
// import { useDispatch } from 'react-redux';
// import { ArrowRightIcon, UploadPlusIcon } from '../../components/icons/Icons';

// const SignUpForm = () => {

//     const dispatch = useDispatch();

//     const navigateToSignIn = () => {
//         dispatch(AuthModelAction.toggleAuthModals(AuthMap.TOGGLE_SIGN_IN_MODAL));
//     }

//     const [formName, setformName] = useState({
//         companyName: "", firstName: "", lastName: "", position: "", department: "", corporateEmail: "", personalEmail: "",
//         officeContactNo: "", mobileNo: "", employeeId: "", userName: "", password: "", reEnterPassword: "", corpDoc: ""
//     });

//     const inputEvent = (event) => {

//         setformName({
//             ...formName,
//             [event.target.name]: event.target.value
//         });
//     }

//     const onFileChange = (event) => {

//         setformName({
//             ...formName,
//             corpDoc: event.target.files[0]
//         })
//     }

//     const onSubmits = (event) => {

//         event.preventDefault();

//         const data = new FormData()
//         data.append('file', formName.corpDoc)
//         data.set("companyName", formName.companyName)
//         data.set("firstName", formName.firstName)
//         data.set("lastName", formName.lastName)
//         data.set("position", formName.position)
//         data.set("department", formName.department)
//         data.set("corporateEmailId", formName.corporateEmail)
//         data.set("email", formName.personalEmail)
//         data.set("officeContactNo", formName.officeContactNo)
//         data.set("mobileNo", formName.mobileNo)
//         data.set("employeeId", formName.employeeId)
//         data.set("username", formName.userName)
//         data.set("password", formName.password)

//         dispatch(signUpUserAsync(data));
//     }

//     return (
//         <>
//             <form className="form-horizontal" onSubmit={onSubmits} >

//                 <div className="input-group">
//                     <input placeholder="COMPANY NAME" type="text" name="companyName" onChange={inputEvent} value={formName.companyName} required className="form-control" />
//                 </div>
//                 <DoubleInputField >
//                     <input placeholder="FIRST NAME" type="text" className="input_box_2 form-control"
//                         name="firstName" onChange={inputEvent} value={formName.firstName} required
//                     />
//                     <input placeholder="LAST NAME" type="text" className="input_box_2 form-control"
//                         name="lastName" onChange={inputEvent} value={formName.lastName} required
//                     />
//                 </DoubleInputField>

//                 <DoubleInputField>
//                     <input placeholder="POSITION" type="text" className="input_box_1 form-control"
//                         name="position" onChange={inputEvent} value={formName.position} required
//                     />
//                     <input placeholder="DEPARTMENT" type="text" className="input_box_2 form-control"
//                         name="department" onChange={inputEvent} value={formName.department} required
//                     />
//                 </DoubleInputField>

//                 <DoubleInputField>
//                     <input placeholder="CORPORATE EMAIL ID" type="email" className="input_box_1 form-control"
//                         name="corporateEmail" onChange={inputEvent} value={formName.corporateEmail} required

//                     />
//                     <input placeholder="PERSONAL EMAIL ID" type="email" className="input_box_2 form-control"
//                         name="personalEmail" onChange={inputEvent} value={formName.personalEmail} required
//                     />
//                 </DoubleInputField>

//                 <DoubleInputField>
//                     <input placeholder="OFFICE CONTACT NO" type="tel" className="input_box_1 form-control"
//                         name="officeContactNo" onChange={inputEvent} value={formName.officeContactNo} required
//                     />
//                     <input placeholder="MOBILE NO" type="tel" className="input_box_2 form-control"
//                         name="mobileNo" onChange={inputEvent} value={formName.mobileNo} required
//                     />
//                 </DoubleInputField>

//                 <DoubleInputField>
//                     <input placeholder="EMPLOYEE ID" type="text" className="input_box_1 form-control"
//                         name="employeeId" onChange={inputEvent} value={formName.employeeId} required
//                     />
//                     <input placeholder="USERNAME" type="text" className="input_box_2 form-control"
//                         name="userName" onChange={inputEvent} value={formName.userName} required
//                     />
//                 </DoubleInputField>

//                 <DoubleInputField>
//                     <input placeholder="PASSWORD" type="password" className="input_box_1 form-control"
//                         name="password" onChange={inputEvent} value={formName.password} required
//                     />
//                     <input placeholder="RE ENTER PASSWORD" type="password" className="input_box_2 form-control"
//                         name="reEnterPassword" onChange={inputEvent} value={formName.reEnterPassword} required
//                     />
//                 </DoubleInputField>



//                 <div className="upload_document_file">
//                     <UploadPlusIcon />
//                     <label className="upload_document" htmlFor="inputGroupFile03">UPLOAD DOCUMENT</label>
//                     <input type="file"
//                         className="custom-file-input"
//                         id="inputGroupFile03"
//                         onChange={onFileChange} required />
//                 </div>



//                 <button className="modal-fill_btn btn btn-lg">
//                     <span className="sign_in">SUBMIT</span>
//                     <span className="left_arrow">
//                         <ArrowRightIcon />
//                     </span>
//                 </button>
//             </form>
//             <div className="modal-footer">
//                 <h5 className="footer_title"> Already have an account!</h5>
//                 <span className="navbar-text">
//                     <a onClick={navigateToSignIn} href="#">SIGN IN</a>
//                 </span>
//             </div>
//         </>
//     )
// }

// export default SignUpForm;