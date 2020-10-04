import React, { Component } from 'react'

class TombolHapus extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cartItems: [],
            success:''
        }
        this.handlerRemove = this.handlerRemove.bind(this)
    }

    handlerRemove = () => {
        const items = JSON.parse(localStorage.getItem('cartItem'));
        const id = items[0].id
        const cartItems = items.filter(elm => elm.id !== id)
        localStorage.setItem('cartItem',JSON.stringify(cartItems))

        this.setState({
            success: "Berhasil dihapus"
        })
        //window.location.reload();
    }

    componentDidMount = () => {
        if (localStorage.getItem('cartItem')) {
            this.setState({
                produk: JSON.parse(localStorage.getItem('cartItem'))
            })
        }
    }
    render() {
        return (
            <div>
                <button className="btn btn-danger" onClick={(e) => this.handlerRemove(e)} >HAPUS</button>
                <br/>
                {
                    this.state.success
                }
            </div>
        )
    }
}

export default TombolHapus