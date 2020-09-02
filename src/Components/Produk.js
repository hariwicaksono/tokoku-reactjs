import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Produk extends Component {
    constructor(props){
        super(props)
        this.state={
            url : 'http://localhost/api_olsop_fix/server/asset/img/'
        }
    }
    render() {
        const ListProduk = this.props.data.map(produk => (
               
                <div className="card shadow" key={produk.id_produk}>
                    <img src={this.state.url+produk.foto_produk} alt="test" className="card-img-top" />
                    <div className="card-body">
                        <p><b>Rp {produk.harga_produk} </b></p>
                        <p><b> {produk.nama_produk} </b></p>
                        <Link to={'/detail/'+produk.id_produk} className="btn btn-success" >DETAIL</Link>
                    </div>
                
                </div>

        ))
        return (
            <div className="row">
 <div className="card-columns">
                    {ListProduk}
                    </div>
            </div>
        )
    }
}

export default Produk