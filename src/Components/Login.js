import React, { Component } from 'react'
import {Link,Redirect,NavLink} from 'react-router-dom'
import API from '../Configs/Axios'
import { Helmet } from 'react-helmet'
import { NotificationManager } from 'react-notifications'
import {Container, Card, Row, Col, Spinner, Button, Form} from 'react-bootstrap'
import { Formik } from 'formik';
import * as yup from 'yup';

const TITLE = ' Masuk - Tokoku'
const validationSchema = yup.object({
    username: yup.string().required(),
    password: yup.string().required()
    //.min(8, "Password is too short - should be 8 chars minimum.")
    //.matches(/(?=.*[0-9])/, "Password must contain a number.")
    ,
  }); 
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogin:false,
            idLogin:"",
            gagalLogin : ""
        }

    }

    render() {

        if(this.state.isLogin){
            if (this.state.idLogin === "1") {
                return( <Redirect to="/user" /> )
            } 
        }

        return (
            <>
            <Helmet>
            <title>{ TITLE }</title>
            </Helmet>
                <Container>
                    <Row className="justify-content-center">
                  
                    <Col lg="6">
                    <ul className="nav nav-tabs nav-fill bg-white" style={{fontSize: '1.125rem', fontWeight: '600'}}>
                <li className="nav-item">
                    <NavLink className="nav-link active" to='/login'>Masuk</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to='/register'>Daftar</NavLink>
                </li>

                </ul>
                        <Card>
                            <Card.Body>
                            <Formik
                            initialValues={{ username: '', password: '', level:'USER' }}
                            onSubmit={(values, actions) => {
                                alert(JSON.stringify(values));
                                API.PostLogin(values).then(res=>{
                                    if (res.id === "1" ) {
                                        sessionStorage.setItem('isLogin',JSON.stringify(res.data))
                                        this.setState({
                                            isLogin:true,
                                            idLogin:"1"
                                        })
                                        NotificationManager.success('Login Berhasil');
                                    } else {
                                        NotificationManager.error('Login Gagal, periksa kembali username dan password anda');
                                    }
                                })
                                setTimeout(() => {
                                actions.setSubmitting(false);
                                }, 1000);
                            }}
                            validationSchema={validationSchema}
                            >
                            {({
                                handleSubmit,
                                handleChange,
                                handleBlur,
                                values,
                                touched,
                                errors,
                                isSubmitting
                            }) => (
                        <Form noValidate onSubmit={handleSubmit} className="px-5 py-3">
                                
                            <Form.Group>
                                <Form.Label>MASUKAN EMAIL</Form.Label>
                                <Form.Control type="text" name="username" className="form-control" onChange={handleChange} onBlur={handleBlur} value={values.username} isInvalid={!!errors.username && touched.username} />
                                {errors.username && touched.username && <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>}
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>MASUKAN PASSWORD</Form.Label>
                                <Form.Control type="password" name="password" className="form-control" onChange={handleChange} onBlur={handleBlur} isInvalid={!!errors.password && touched.password} />
                                {errors.password && touched.password && <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>}
                            </Form.Group>
    
                            <Button block variant="primary" type="submit" disabled={isSubmitting}>{isSubmitting ? (
                            <>
                            <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                            /> Memuat...
                            </>
                            ) : ( <>Masuk</> )}</Button>
       
                     </Form>
                     )}
                    </Formik>
                                {
                                    this.state.gagalLogin
                                }
                                <hr/>
                                <Link to={'/register'}>DAFTAR AKUN</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Login