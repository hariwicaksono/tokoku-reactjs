import React, { Component } from 'react'
import Navbar from './Components/Navbar'
//import Footer from '../../Components/Footer'
//import Sidebar from '../../Components/Sidebar'
import MyRouter from './Configs/Routes'
import Seo from './Seo'

const TITLE = 'TokoRia'
class App extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            showMenu: true,
          
        }

        this.toggleMenu = this.toggleMenu.bind(this)
    }

    toggleMenu = function() {
        this.setState({ showMenu: !this.state.showMenu });
      }


    render() {
   
        return (
            
            <>
            <Seo/>
            <Navbar toggleMenu={this.toggleMenu} />
                
                <div className="wrapper">

                <div id="content">

                <MyRouter/>
 
                </div>
                
                </div> 
              
            </>
        )
    }
}

export default App