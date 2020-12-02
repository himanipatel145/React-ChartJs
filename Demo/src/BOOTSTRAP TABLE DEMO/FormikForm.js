// import React from 'react';
// import { Modal } from "react-bootstrap";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from 'yup';

// const FormikForm = () => {
//     return (
//         <Formik
//             initialValues={{ firstName: '', lastName: '', email: '' }}

//             validationSchema={Yup.object({
//                 firstName: Yup.string()
//                     .max(15, 'Must be 15 characters or less')
//                     .required('Required'),
//                 lastName: Yup.string()
//                     .max(20, 'Must be 20 characters or less')
//                     .required('Required'),
//                 email: Yup.string()
//                     .email('Invalid email address')
//                     .required('Required'),
//             })}
//             onSubmit={(values, { setSubmitting }) => {
//                 setTimeout(() => {
//                     alert(JSON.stringify(values, null, 2));
//                     setSubmitting(false);
//                 }, 400);
//             }}
//         >
//             <Modal.Body className="overlay overlay-block">

//                 <Form className="form form-label-right">
//                     <div className="form-group row">
//                         <div className="col-lg-4">
//                             <Field
//                                 name="firstName"
//                                 component={Input}
//                                 placeholder="First Name"
//                                 label="First Name"
//                             />
//                         </div>
//                         <div className="col-lg-4">
//                             <Field
//                                 name="lastName"
//                                 component={Input}
//                                 placeholder="Last Name"
//                                 label="Last Name"
//                             />
//                         </div>
//                         <div className="col-lg-4">
//                             <Field
//                                 type="email"
//                                 name="email"
//                                 component={Input}
//                                 placeholder="Email ID"
//                                 label="Email ID"
//                             />
//                         </div>
//                     </div>
//                     <div className="form-group row">
//                         <div className="col-lg-4">
//                             <Field
//                                 name="mobile"
//                                 component={Input}
//                                 placeholder="Mobile"
//                                 label="Mobile"
//                             />
//                         </div>
//                         <div className="col-lg-4">
//                             <Select name="role" label="Role">
//                                 <option value="option">option</option>
//                                 <option value="option">option</option>
//                             </Select>
//                         </div>
//                         <div className="col-lg-4">
//                             <DatePickerField
//                                 name="createDate"
//                                 label="Create Date"
//                             />
//                         </div>
//                     </div>
//                 </Form>
//             </Modal.Body>
//         </Formik>
//     )
// }

// export default FormikForm;
