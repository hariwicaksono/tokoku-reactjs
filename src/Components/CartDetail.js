import React, { Component } from 'react'

class CartDetail extends Component {
    render() {
        return (
            <div className="container">
                <div className="col-md-10">
                    <div className="panel panel-default">
                        <div className="panel-body">
                        <p><b>ID </b> {this.props.data.id_produk} </p>
                            <p><b>NAMA PRODUK </b> {this.props.data.nama_produk} </p>
                            <p><b>HARGA PRODUK </b> {this.props.data.harga_produk} </p>
                            <p><b>JUMLAH PRODUK </b> {this.props.data.count} </p>
                            <div className="quantity">
                  <button className="plus-btn" type="button" name="button" onClick={() => this.addPlus()}>
                    <img src="" alt="plus"/>
                  </button>
                  <input type="text" name="name" value="" readOnly/>
                  <button className="minus-btn" type="button" name="button" onClick={() => this.addMinus()}>
                    <img src="" alt="minus"/>
                  </button>
                </div>
                            <p><b>TOTAL HARGA </b> Rp. {this.props.data.harga_produk * this.props.data.count} </p>
                           
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartDetail