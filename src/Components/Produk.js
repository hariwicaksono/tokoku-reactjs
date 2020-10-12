import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Container, Row, Col, Card } from 'react-bootstrap'
import ReactPaginate from 'react-paginate'
import {ImagesUrl} from '../Configs/Url'
import { FiChevronsLeft, FiChevronsRight, FiShoppingCart } from "react-icons/fi"
import _ from 'underscore';
import { NotificationManager } from 'react-notifications'

class Produk extends Component {
    constructor(props){
        super(props)
        this.state={
            url : ImagesUrl(),
            offset: 0,
            perPage: 8,
            currentPage: 0,
        }
        this.handlePageClick = this
        .handlePageClick
        .bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    } 
    handleSubmit(data, index) {
        const array = [];
        array.push(data);
        const cartData = JSON.parse(localStorage.getItem('cartItem'));
        const findManData = _.findWhere(cartData, {id_produk: data.id_produk});
        if (findManData) {
            for (let i = 0; i < cartData.length; i++) {
                if (data.id_produk === cartData[i].id_produk) {
                    cartData[i].count += 1; 
                    break;
                }
            }
            localStorage.setItem('cartItem',JSON.stringify(cartData));
        } else {
            if (cartData) {
                cartData.push({...data,count:1})
                localStorage.setItem('cartItem',JSON.stringify(cartData));
            } else {
                localStorage.setItem('cartItem',array);
            }
        }
        NotificationManager.warning('Berhasil masuk keranjang');
        setTimeout(()=>{
          this.props.totalCnt(JSON.parse(localStorage.getItem('cartItem')) ? JSON.parse(localStorage.getItem('cartItem')).length : 0);
        },1000);
    }
   
    getHandler = () => {
       
                const slice = this.props.data.slice(this.state.offset, this.state.offset + this.state.perPage)
                const ListProduk = slice.map((produk, key) => (
                    <Col md={3} key={produk.id_produk}>
                    <Card className="shadow-sm mb-3">
                        <Card.Img variant="top" src={this.state.url+produk.foto_produk} alt={produk.nama_produk} />
                        <Card.Body className="pt-1">
                            <Card.Text className="mb-0" style={{fontSize: '1.125rem'}}>{produk.nama_produk}</Card.Text>
                            <Card.Text className="text-danger" style={{fontSize: '1rem'}}>Rp{produk.harga_produk}</Card.Text>
                            <Link to={'/detail/'+produk.id_produk} className="" ></Link>
                            <button type="submit" name="submit" defaultValue="Keranjang" className="btn btn-secondary btn-block" onClick={() => this.handleSubmit(produk, key)}>Tambah Ke <FiShoppingCart size="1.5em"/></button>
                        </Card.Body>
                    </Card>
                    </Col>
                ))

                this.setState({
                    pageCount: Math.ceil(this.props.data.length / this.state.perPage),
                   
                    ListProduk
                })

    
    }
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.getHandler()
        });

    };
    componentDidMount = () => {
        this.getHandler()
  }
    render() {
        return (
            <>
            <Row>
                {this.state.ListProduk}
            </Row>
            <div className="py-3">
                <ReactPaginate
                containerClassName="pagination"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                pageClassName="page-item"
                previousClassName="page-item"
                nextClassName="page-item"
                pageLinkClassName="page-link"
                previousLinkClassName="page-link"
                nextLinkClassName="page-link"
                activeClassName="active"
                previousLabel={<FiChevronsLeft/>}
                nextLabel={<FiChevronsRight/>}
                pageCount={this.state.pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={this.handlePageClick}
                />
            </div>
            </>
        )
    }
}

export default Produk