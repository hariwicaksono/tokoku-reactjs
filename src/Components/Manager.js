import React, { Component } from 'react'
import {Redirect,Link} from 'react-router-dom'
import API from '../Configs/Axios'
import { Helmet } from 'react-helmet'
import {Container, Card, Row, Col, Spinner, Button, Form} from 'react-bootstrap'
import { Formik } from 'formik';
import * as yup from 'yup';

const TITLE = ' Masuk - Tokoku'
const validationSchema = yup.object({
    username: yup.string().required(),
    password: yup.string().required(),
    level: yup.string().required(),
  }); 
class Manager extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            level: "",
            isLogin:false,
            idLogin:"",
            gagalLogin : ""
        }
        this.handlerChange = this.handlerChange.bind(this)
        this.handlerSubmit = this.handlerSubmit.bind(this)
    }

    handlerChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handlerSubmit = (event) => {
        event.preventDefault()
        API.PostLogin(this.state).then(res=>{
            if (res.id === "1" ) {
                sessionStorage.setItem('isLogin',JSON.stringify(res.data))
                this.setState({
                    isLogin:true,
                    idLogin:"1"
                })
            } else if (res.id === "2" ) {
                sessionStorage.setItem('isAdmin',JSON.stringify(res.data))
                this.setState({
                    isLogin:true,
                    idLogin:"2"
                })
            } else {
                this.setState({
                    gagalLogin : "LOGIN FAILED,PLEACE REGISTER NOW"
                })
            }
        })
    }

    render() {

        if(this.state.isLogin){
            if (this.state.idLogin === "1") {
                return( <Redirect to="/user" /> )
            } else {
                return(<Redirect to="admin" />)
            }
        }

        return (
            <>
            <Helmet>
            <title>{ TITLE }</title>
            </Helmet>
                <Container>
                    <Row>
                    <Col lg="7">

                    </Col>
                    <Col lg="5">
                        <Card>
                            <Card.Body>
                            <Formik
                            initialValues={{ username: '', password: '' }}
                            onSubmit={(values, actions) => {
                                alert(JSON.stringify(values));
                                API.PostLogin(values).then(res=>{
                                    if (res.id === "1" ) {
                                        sessionStorage.setItem('isLogin',JSON.stringify(res.data))
                                        this.setState({
                                            isLogin:true,
                                            idLogin:"1"
                                        })
                                    } else if (res.id === "2" ) {
                                        sessionStorage.setItem('isAdmin',JSON.stringify(res.data))
                                        this.setState({
                                            isLogin:true,
                                            idLogin:"2"
                                        })
                                    } else {
                                        this.setState({
                                            gagalLogin : "LOGIN FAILED,PLEACE REGISTER NOW"
                                        })
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
        isValid,
        errors,
        isSubmitting
      }) => (
                                <Form noValidate onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label>MASUKAN EMAIL</label>
                                        <Form.Control type="text" name="username" className="form-control" onChange={handleChange} onBlur={handleBlur} isInvalid={!!errors.username} />
                                        {touched.username && errors.username && <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>}
                                    </div>
                                    <div className="form-group">
                                        <label>MASUKAN PASSWORD</label>
                                        <Form.Control type="password" name="password" className="form-control" onChange={handleChange} onBlur={handleBlur} isInvalid={!!errors.password} />
                                        {touched.password && errors.password && <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>}
                                    </div>
                                    <div className="form-group">
                                        <Form.Control as="select" name="level" className="form-control" onChange={handleChange} onBlur={handleBlur} isInvalid={!!errors.level}>
                                            <option>--PILIH LEVEL--</option>
                                            <option>USER</option>
                                            <option>ADMIN</option>
                                        </Form.Control>
                                        {touched.level && errors.level && <Form.Control.Feedback type="invalid">{errors.level}</Form.Control.Feedback>}
                                    </div>
                                    
            <Button type="submit" disabled={isSubmitting}>{isSubmitting ? (
            <>
            <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
            /> Memuat...
       </>
          ) : ( <>Masuk</>  )}</Button>
         
                                   
                                   
                     </Form>
                     )}
                    </Formik>
                                <br/>
                                {
                                    this.state.gagalLogin
                                }
                                <br/>
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

export default Manager