import React, { Component } from 'react'
import API from '../../Configs/Axios'
import ProdukU from './ProdukU'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Loader from 'react-loader'
import Slideshow from '../Slideshow'
import { Helmet } from 'react-helmet'

const TITLE = 'Member - Nita Mart'
var options = {lines: 13,length: 20,width: 10,radius: 30,scale: 0.35,corners: 1,color: '#fff',opacity: 0.25,rotate: 0,direction: 1,speed: 1,trail: 60,fps: 20,zIndex: 2e9,top: '50%',left: '50%',shadow: false,hwaccel: false,position: 'absolute'};
class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Produk: [],
            Slideshow: [],
            loading: true
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
        return (
            <>
           <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
                <Container>

                <Row className="mb-3 justify-content-center">
                    <Col md={12}>
                    <Slideshow data={this.state.Slideshow} />
                    </Col>
                   

                    </Row>

                    <Card className="shadow-sm" body>This is some text within a card body.</Card>

                    <Row>
                        <Col>
                        

                        { this.state.loading ?
                        <Loader options={options} className="spinner" />
                        
                        :
                        <>
                        <h2>Semua Produk</h2>
                            <ProdukU data={this.state.Produk} />
                        </>
                        }
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}


export default Index