import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Row, Card } from 'react-bootstrap'

class Produk extends Component {
    constructor(props){
        super(props)
        this.state={
            url : 'http://localhost/tokoku-server/assets/images/'
        }
    }
    render() {
        const ListProduk = this.props.data.map(produk => (
               <div className="col-md-3" key={produk.id_produk}>
                <Card className="shadow-sm">
                    <Card.Img variant="top" src={this.state.url+produk.foto_produk} alt={produk.nama_produk} />
                    <Card.Body>
                        <Card.Text>Rp {produk.harga_produk}<br/>
                        {produk.nama_produk}</Card.Text>
                        <Link to={'/detail/'+produk.id_produk} className="btn btn-success" >DETAIL</Link>
                    </Card.Body>
                </Card>
                </div>
                

        ))
        return (
            <Row>
                {ListProduk}
            </Row>
        )
    }
}

export default Produk