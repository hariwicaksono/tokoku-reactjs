import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import { Nav } from 'react-bootstrap'
//import { HouseDoorFill, GridFill, PersonFill, PersonPlusFill, FilePostFill } from 'react-bootstrap-icons'

import { BsFillHouseDoorFill, BsPersonFill, BsPersonPlusFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { isLogin } from '../Utils'

class Appbar extends Component{
  constructor(props) {
    super(props)
    this.state = {
        login:false,
        id: ''  
    }
  }
  componentDidMount = () => {
    if (isLogin()) {
       // console.log('Ok')
       const data = JSON.parse(sessionStorage.getItem('isLogin'))
       this.setState({
        id : data[0].id_user
       })
    } else {
        this.setState({
            login:true
        })
    }
}
    render(){
        
        return(
            <div className="pt-4 mt-4">
            
              
              <Nav id="appbar" fill className="mx-auto text-center border-top" style={{backgroundColor:"#fafafa",height:"60px", position: "fixed",width: "100%",left: "0",bottom: "0",zIndex: "9999"}}>

              {this.state.login ?
               <Nav.Item>
               <Nav.Link as={NavLink} to="/" activeClassName="active" exact><BsFillHouseDoorFill size="20"/><div>Home</div></Nav.Link>
             </Nav.Item>
              :

              <Nav.Item>
                <Nav.Link as={NavLink} to="/user" activeClassName="active" exact><BsFillHouseDoorFill size="20"/><div>Member</div></Nav.Link>
              </Nav.Item>
              }
              
              <Nav.Item>
                <Nav.Link as={NavLink} to="/cart" activeClassName="active"><FaShoppingCart size="20"/><div>Keranjang</div></Nav.Link>
              </Nav.Item>
              
              {this.state.login ?
              <Nav.Item>
                <Nav.Link as={NavLink} to="/login" activeClassName="active"><BsPersonFill size="20"/><div>Akun</div></Nav.Link>
              </Nav.Item>
              :
              <Nav.Item>
                <Nav.Link as={NavLink} to="/akunU" activeClassName="active"><BsPersonFill size="20"/><div>Akun</div></Nav.Link>
              </Nav.Item>
              }
              {this.state.login ?
              <Nav.Item>
                <Nav.Link as={NavLink} to="/register" activeClassName="active"><BsPersonPlusFill size="20"/><div>Daftar</div></Nav.Link>
              </Nav.Item>
              :
              <Nav.Item>
                <Nav.Link as={NavLink} to="/user/pendaftaran" activeClassName="active"><BsPersonPlusFill size="20"/><div>Form</div></Nav.Link>
              </Nav.Item>
              }
              </Nav>
        
        </div>
        )
    }
}

export default Appbar