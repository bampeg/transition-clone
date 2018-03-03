import React, { Component } from 'react'
import './HoverImage.css'

export default class HoverImage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: this.props.defaultImage
        }
    }

    handleMouseOver(hoverImage) {
        this.setState({
            image: hoverImage
        })
    }

    handleMouseOut(defaultImage) {
        this.setState({
            image: defaultImage
        })
    }

    render() {
        return(
                <img className="HoverImage" src={this.state.image} alt="" onMouseOver={() => this.handleMouseOver(this.props.hoverImage)} onMouseOut={() => this.handleMouseOut(this.props.defaultImage)}/>

        )
    }
}