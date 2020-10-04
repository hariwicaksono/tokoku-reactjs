import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import { Container, Row, Col, Card } from 'react-bootstrap'
import API from '../Configs/Axios'
import Loader from 'react-loader'
import Slideshow from './Slideshow'
import { isLogin } from '../Utils'
import Produk from './Produk'


var options = {lines: 13,length: 20,width: 10,radius: 30,scale: 0.35,corners: 1,color: '#fff',opacity: 0.25,rotate: 0,direction: 1,speed: 1,trail: 60,fps: 20,zIndex: 2e9,top: '50%',left: '50%',shadow: false,hwaccel: false,position: 'absolute'};
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Produk: [],
            Slideshow: [],
            loading: true,

        }
      
    }
    
    componentDidMount = () => {
        API.GetProduk().then(res => {
            setTimeout(() => this.setState({
                Produk: res,
                loading: false
            }), 100);
        })
        API.GetSlideshow().then(res => {
            this.setState({
                Slideshow: res,
            });
        })
    }
    render() {
        if (isLogin()) {
            return( <Redirect to="/user" /> )
        }
        return (
            <>
            <Container fluid>
            <Slideshow data={this.state.Slideshow} />
            </Container>
                <Container>
                 

                        { this.state.loading ?
                        <Loader options={options} className="spinner" />
                        
                        :
                        <>
                        <h2>Semua Produk</h2>
                           <Produk data={this.state.Produk} totalCnt={this.props.totalCnt}/>
                        </>
                        }
             
                </Container>

            </>
        )
    }
}

export default Home