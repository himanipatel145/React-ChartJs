import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextError from './TextError';

const initialValues = {
    name: '',
    email: '',
    channel: '',
    comments: '',
    address: '',
    social:{
        facebook:'',
        twitter:''
    },
}

const onSubmit = (values) => {
    console.log(values); //for api_call 
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid Email').required('Required'),
    channel: Yup.string().required('Required')

})

const YoutubeForm = () => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            <div>
                <Form>
                    <div className='form-control'>
                        <label htmlFor='name'>Name</label>
                        <Field type='text' id='name' name='name' />
                        <ErrorMessage name='name' component={TextError}></ErrorMessage>
                    </div>

                    <div className='form-control'>
                        <label htmlFor='email'>Email</label>
                        <Field type='email' id='email' name='email' />
                        <ErrorMessage name='email' >
                            {
                                (errorMsg) => {
                                    return (
                                        <div className='error'>{errorMsg}</div>
                                    )
                                }
                            }
                        </ErrorMessage>
                    </div>

                    <div className='form-control'>
                        <label htmlFor='channel'>Channel</label>
                        <Field type='text' id='channel' name='channel' />
                        <ErrorMessage name='channel' />
                    </div>

                    <div className='form-control'>
                        <label htmlFor='comments'>comments</label>
                        <Field as='textarea' id='comments' name='comments' />
                        <ErrorMessage name='comments' ></ErrorMessage>
                    </div>

                    <div className='form-control'>
                        <label htmlFor='address'>address</label>
                        <Field name='address'>
                            {
                                (props) => {
                                    const { field, form, meta } = props
                                    // console.log("Props::::", props);
                                    return (
                                        <div>
                                            <input type='text' id='address'{...field} />
                                            {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                                        </div>
                                    )
                                }
                            }
                        </Field>
                        <ErrorMessage name='address' ></ErrorMessage>
                    </div>

                    <div className='form-control'>
                        <label htmlFor='facebook'>facebook</label>
                        <Field type='text' id='facebook' name='social.facebook' />
                        <ErrorMessage name='comments' ></ErrorMessage>
                    </div>
                    
                    <div className='form-control'>
                        <label htmlFor='twitter'>twitter</label>
                        <Field type='text' id='twitter' name='social.twitter' />
                        <ErrorMessage name='comments' ></ErrorMessage>
                    </div>

                    <button type='submit'>Submit</button>
                </Form>
            </div>
        </Formik>
    )
}

export default YoutubeForm;























// onChange = { formik.handleChange }
// onBlur = { formik.handleBlur }
// value = { formik.values.email } )=======>>>> { ...formik.getFieldProps('name') } ===>>> Field component ====>> does three things
// 1= hook up inputs to the top-level form Component
// 2=uses name attribute to match up with the formik state
// 3=by default field will render and input Element which is what our YoutubeForm has as well

// {
//     formik.touched.email && formik.errors.email ? (
//         <div>{formik.errors.email}</div>
//     ) : null
// } ==============>>>>>>>>>>> <ErrorMessage name='pass the name attribute' />