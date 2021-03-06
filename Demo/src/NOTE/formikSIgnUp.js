import React from 'react';
import { Formik, Field, } from 'formik';
import DoubleInputField from '../../components/inputFields/doubleInputField';
import AuthModelAction from '../../actions/auth.action';
import { AuthMap, signUpUserAsync } from '../../actions/auth.action';
import { useDispatch } from 'react-redux';
import { ArrowRightIcon, UploadPlusIcon } from '../../components/icons/Icons';
import DoubleErrorMessage from '../../components/inputFields/inputErrorMessage';

const SignUpForm = () => {

    const dispatch = useDispatch();

    const navigateToSignIn = () => {
        dispatch(AuthModelAction.toggleAuthModals(AuthMap.TOGGLE_SIGN_IN_MODAL));
    }

    const onSubmits = (values) => {
        const data = new FormData()
        data.append('file', values.corpDoc)
        data.set("companyName", values.companyName)
        data.set("firstName", values.firstName)
        data.set("lastName", values.lastName)
        data.set("position", values.position)
        data.set("department", values.department)
        data.set("corporateEmailId", values.corporateEmail)
        data.set("email", values.personalEmail)
        data.set("officeContactNo", values.officeContactNo)
        data.set("mobileNo", values.mobileNo)
        // data.set("employeeId", values.employeeId)
        data.set("username", values.userName)
        data.set("password", values.password)

        dispatch(signUpUserAsync(data));
    }

    return (
        <>
            <Formik
                initialValues={{
                    companyName: "",
                    firstName: "",
                    lastName: "",
                    position: "",
                    department: "",
                    corporateEmail: "",
                    personalEmail: "",
                    officeContactNo: "",
                    mobileNo: "",
                    // employeeId: "",
                    userName: "",
                    password: "",
                    reEnterPassword: "",
                    corpDoc: "",
                }}
                validate={(values) => {
                    const errors = {};
                    for (let key in values) {
                        if (!values[key]) {
                            errors[key] = `${key} is required.`
                        }
                    }
                    if (values.corporateEmail && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.corporateEmail)) {
                        errors.corporateEmail = "Invalid email address";
                    }
                    if (values.personalEmail && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.personalEmail)) {
                        errors.personalEmail = "Invalid email address";
                    }
                    if (values.officeContactNo && !/^\d{10}$/.test(values.officeContactNo)) {
                        errors.officeContactNo = "Invalid mobile number";
                    }
                    if (values.mobileNo && !/^\d{10}$/.test(values.mobileNo)) {
                        errors.mobileNo = "Invalid mobile number";
                    }
                    if (values.password !== values.reEnterPassword) {
                        errors.reEnterPassword = "Password and Re Enter Password are not same."
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values);
                    onSubmits(values);
                    //setSubmitting(false);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    isSubmitting,
                    setFieldValue,
                    handleSubmit,
                }) => (

                        <form className="form-horizontal" onSubmit={handleSubmit} >

                            <div className="input-group">
                                <Field placeholder="COMPANY NAME" type='text' name='companyName' className="form-control" />
                            </div>
                            <DoubleErrorMessage
                                leftError={errors.companyName}
                                leftTouched={touched.companyName}
                            />

                            <DoubleInputField >
                                <Field placeholder="FIRST NAME" type='text' name='firstName' className="input_box_1 form-control" />
                                <Field placeholder="LAST NAME" type='text' name='lastName' className="input_box_2 form-control" />
                            </DoubleInputField>
                            <DoubleErrorMessage
                                leftError={errors.firstName}
                                leftTouched={touched.firstName}
                                rightError={errors.lastName}
                                rightTouched={touched.lastName}
                            />

                            <DoubleInputField>
                                <Field placeholder="POSITION" type='text' name='position' className="input_box_1 form-control" />
                                <Field placeholder="DEPARTMENT" type='text' name='department' className="input_box_2 form-control" />
                            </DoubleInputField>
                            <DoubleErrorMessage
                                leftError={errors.position}
                                leftTouched={touched.position}
                                rightError={errors.department}
                                rightTouched={touched.department}
                            />

                            <DoubleInputField>
                                <Field placeholder="CORPORATE EMAIL ID" type='email' name='corporateEmail' className="input_box_1 form-control" />
                                <Field placeholder="PERSONAL EMAIL ID" type='email' name='personalEmail' className="input_box_2 form-control" />
                            </DoubleInputField>
                            <DoubleErrorMessage
                                leftError={errors.corporateEmail}
                                leftTouched={touched.corporateEmail}
                                rightError={errors.personalEmail}
                                rightTouched={touched.personalEmail}
                            />

                            <DoubleInputField>
                                <Field placeholder="OFFICE CONTACT NO" type='tel' name='officeContactNo' className="input_box_1 form-control" />
                                <Field placeholder="MOBILE NO" type='tel' name='mobileNo' className="input_box_2 form-control" />
                            </DoubleInputField>
                            <DoubleErrorMessage
                                leftError={errors.officeContactNo}
                                leftTouched={touched.officeContactNo}
                                rightError={errors.mobileNo}
                                rightTouched={touched.mobileNo}
                            />

                            <DoubleInputField>
                                <Field placeholder="EMPLOYEE ID" type='text' name='employeeId' className="input_box_1 form-control" />
                                <Field placeholder="USERNAME" type='text' name='userName' className="input_box_2 form-control" />
                            </DoubleInputField>
                            <DoubleErrorMessage
                                leftError={errors.userName}
                                leftTouched={touched.userName}
                            />

                            <DoubleInputField>
                                <Field placeholder="PASSWORD" type='password' name='password' className="input_box_1 form-control" />
                                <Field placeholder="RE ENTER PASSWORD" type='password' name='reEnterPassword' className="input_box_2 form-control" />
                            </DoubleInputField>
                            <DoubleErrorMessage
                                leftError={errors.password}
                                leftTouched={touched.password}
                                rightError={errors.reEnterPassword}
                                rightTouched={touched.reEnterPassword}
                            />

                            <div className="upload_document_file">
                                <div htmlFor="inputGroupFile03">
                                    <UploadPlusIcon />
                                </div>
                                <label className="upload_document" >UPLOAD DOCUMENT</label>
                                {
                                    values.corpDoc && values.corpDoc.name ?
                                        <span className="upload_file_name">{values.corpDoc.name}</span> : null
                                }
                                <input type="file"
                                    className="custom-file-input"
                                    id="inputGroupFile03"
                                    onChange={event => setFieldValue('corpDoc', event.target.files[0])}
                                />
                            </div>

                            <button type="submit" className="modal-fill_btn btn btn-lg" disabled={isSubmitting}>
                                <span className="sign_in">SUBMIT</span>
                                <span className="left_arrow">
                                    <ArrowRightIcon />
                                </span>
                            </button>
                        </form>
                    )}
            </Formik>
            <div className="modal-footer">
                <h5 className="footer_title"> Already have an account!</h5>
                <span className="navbar-text">
                    <a onClick={navigateToSignIn} href="#">SIGN IN</a>
                </span>
            </div>
        </>
    )
}

export default SignUpForm;