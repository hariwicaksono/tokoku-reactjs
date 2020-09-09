import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import API from '../Configs/Axios'
import { Helmet } from 'react-helmet'
import {Container, Card, Row, Col, Spinner, Button, Form} from 'react-bootstrap'
import { Formik } from 'formik';
import * as yup from 'yup';

const TITLE = ' Daftar - Nita Mart'
class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            nama:"",
            alamat:"",
            nohp:"",
            email:"",
            password:"",
            foto:"user.jpg",
            err:""
        }
    }

    handlerChange = (event) => {
       this.setState({
           [event.target.name] : event.target.value
       })
    }

    handlerSubmit = (event) => {
        event.preventDefault()
        //console.log(event)
        API.PostUser(this.state).then(res=>{
            console.log(res)
            if (res.status === 1 ) {
                this.props.history.push('/login')
            } else {
                this.setState({
                    err:"GAGAL REGISTER"
                })
            }
        })
    }


    render() {
        return (
            <>
            <Helmet>
            <title>{ TITLE }</title>
            </Helmet>
                <Container>
                <Row className="justify-content-center">
                  
                  <Col lg="6">
                  <ul className="nav nav-tabs nav-fill bg-white" style={{fontSize: '1.125rem'}}>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/login'>Masuk</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link active font-weight-bold" to='/register'>Daftar</NavLink>
                </li>

                </ul>
                        
                            <Card>
                                <Card.Body>

                                    <form onSubmit={this.handlerSubmit} >
                                        <div className="form-group">
                                            <label>MASUKAN NAMA</label>
                                            <input type="text" name="nama" className="form-control" onChange={this.handlerChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>MASUKAN ALAMAT</label>
                                            <input type="text" name="alamat" className="form-control" onChange={this.handlerChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>MASUKAN NO HP</label>
                                            <input type="text" name="nohp" className="form-control" onChange={this.handlerChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>MASUKAN EMAIL</label>
                                            <input type="text" name="email" className="form-control" onChange={this.handlerChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>MASUKAN PASSWORD</label>
                                            <input type="password" name="password" className="form-control" onChange={this.handlerChange} />
                                        </div>
                                        <input type="submit" className="btn btn-info" value="REGISTER" />
                                    </form>
                                    {
                                        this.state.err
                                    }
                                    
                                </Card.Body>
                            </Card>
                     
                    </Col>
                    </Row>
                </Container>
            </>
        )
    }
}


export default Register