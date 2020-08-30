import React from 'react';
import { Route, Switch } from "react-router-dom"
import { NotificationContainer } from 'react-notifications';
import ScrollToTop from 'react-router-scroll-top';
import PrivateRoute from './Private';
import PublicRoute from './Public';
import Home from '../../Components/Home';
import About from '../../Components/AboutShop'
import Login from '../../Components/Login';
import Index from '../../Components/Admin/Index';
import User from '../../Components/User/Index'
import Register from '../../Components/Register';
import Detail from '../../Components/Detail';
import AkunU from '../../Components/User/AkunU';
import DetailU from '../../Components/User/DetailU';
import AboutU from '../../Components/User/AboutU';
import Cart from '../../Components/User/Cart';
import Pemesanan from '../../Components/User/Pemesanan';
import ProdukA from '../../Components/Admin/ProdukA';
import TProdukA from '../../Components/Admin/TProdukA';
import EditProduk from '../../Components/Admin/EditProduk';
import DetailProdukA from '../../Components/Admin/DetailProdukA';
import PemesananA from '../../Components/Admin/PemesananA';
import EditPemesanan from '../../Components/Admin/EditPemesanan';
import UserA from '../../Components/Admin/UserA';
import DetailUser from '../../Components/Admin/DetailUser';
import HAdmin from '../../Components/Admin/HAdmin';
import TambahAdmin from '../../Components/Admin/TambahAdmin';
import EAdmin from '../../Components/Admin/EAdmin';
import EditUser from '../../Components/User/EditUser';

const MyRouter = () => {
    return(
    <Switch>
        <ScrollToTop>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/aboutu" component={AboutU} />
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Index} />
        <Route path="/user" component={User} />
        <Route path="/akunU" component={AkunU} />
        <Route path="/register" component={Register} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/detailu/:id" component={DetailU} />
        <Route path="/cart" component={Cart} />
        <Route path="/pesanu" component={Pemesanan} />
        <Route path="/produka" component={ProdukA} />
        <Route path="/tproduk" component={TProdukA} />
        <Route path="/editpa/:id" component={EditProduk} />
        <Route path="/detailpa/:id" component={DetailProdukA} />
        <Route path="/pemesanana" component={PemesananA} />
        <Route path="/editpesan/:id" component={EditPemesanan} />
        <Route path="/usera" component={UserA} />
        <Route path='/detailuser/:id' component={DetailUser}/>
        <Route path='/hadmin' component={HAdmin}/>
        <Route path='/tadmin' component={TambahAdmin}/>
        <Route path='/editadmin/:id' component={EAdmin}/>
        <Route path='/edituser/:id' component={EditUser}/>
        </ScrollToTop>
        <NotificationContainer />
    </Switch>
            
    )
}

export default MyRouter

