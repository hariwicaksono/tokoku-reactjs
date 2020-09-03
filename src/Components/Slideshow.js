import React, { Component } from 'react'
//import {Link} from 'react-router-dom'
import {ImagesUrl} from '../Configs/Axios'
import {Carousel} from 'react-bootstrap'

const url = ImagesUrl();
class Slideshow extends Component {
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    render() {
        const ListSlideshow = this.props.data.map(s => (
            <Carousel.Item key={s.id_slide}>
                <img
                className="rounded d-block w-100"
                src={url+s.gambar_slide}
                alt={s.tulisan_slide}
                />
            </Carousel.Item>

        ))
        return (
            <Carousel>
                {ListSlideshow}
            </Carousel>
        )
    }
}

export default Slideshow