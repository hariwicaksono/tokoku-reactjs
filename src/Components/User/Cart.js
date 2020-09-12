import React, { Component } from 'react'
import CartDetail from './CartDetail'
import API from '../../Configs/Axios'
import { isLogin } from '../../Utils'

class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: '',
            produk: [],
            id_user : '',
            desk : 'Belum Melakukan pembayaran',
            nama_user : ''
        }
    }

    handlerSimpan = () => {
        this.state.produk.map(prd =>{
            const data = {
                user : this.state.id_user,
                produk: prd.id,
                count : prd.count,
                desk : this.state.desk,
                namap : prd.nama,
                hargap : prd.harga,
                namau :  this.state.nama_user,
                jml : prd.count
            }
            alert(JSON.stringify(data))
            console.log(data)
            //API.PostPesan(data).then(res=>{
                //if (res.status === 1) {
                    //localStorage.setItem('cartItem','')
                    //localStorage.clear()
                    //this.props.history.push('/pesanu')
                //}
            //})
            var yourNumber = "6282136091613"
            var yourMessage = JSON.stringify(data)

            // %20 mean space in link
            // If you already had an array then you just join them with '%20'
            // easy right

            function getLinkWhastapp(number, message) {
            number = yourNumber
            message = encodeURIComponent(yourMessage).split(' ').join('%20')

            return console.log('https://api.whatsapp.com/send?phone=' + number + '&text=%20' + message)
            }

            getLinkWhastapp()
        })
    }

    componentDidMount = () => {
        if (localStorage.getItem('cartItem')) {
            this.setState({
                produk: JSON.parse(localStorage.getItem('cartItem'))
            })
        } else {
            this.setState({
                error: "KERANJANG KOSONG"
            })
        }
        
        if (isLogin()) {
            const datas = JSON.parse(sessionStorage.getItem('isLogin'))
            this.setState({
                id_user: datas[0].id_user,
                nama_user: datas[0].nama_user
            })
        }
    }
    

    render() {
        return (
            <div>
           
                <div className="container">
                    <hr />
                    <h1>{this.state.error}</h1>
                    {
                        this.state.produk.map(produk => {
                            return <CartDetail key={produk.id} data={produk} />
                        })
                    }
                    <hr/>
                    <button className="btn btn-info margin" onClick={this.handlerSimpan} >CHECKOUT</button>
                </div>
                
            </div>
        )
    }
}

export default Cart