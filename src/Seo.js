import React, { Component } from 'react'
import PropTypes from "prop-types"
import { Helmet } from 'react-helmet'

const TITLE = 'TokoRia'
class Seo extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
           
          
        }

       
    }

   


    render() {
   
        return (
            
            <>
            <Helmet>
            <title>{ TITLE }</title>
            {/**<style type="text/css">{`
            body {
                background-color: #fff;
            }
            `}
            </style>**/}
            </Helmet>
              
            </>
        )
    }
}


export default Seo