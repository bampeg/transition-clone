import React, { Component } from 'react'
import './ExpandableBox.css'

export default class ExpandableBox extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            expanded: false 
        }
    }

    handleClickedBox() {
        this.setState({ expanded: !this.state.expanded })
    }

    render() {

        let styles = this.state.expanded ? 
            { backgroundColor: this.props.expandedBackgroundColor } : 
            { backgroundColor: this.props.notExpandedBackgroundColor }

        return(
            <div style={ styles } className={ this.state.expanded ? 'expanded' : 'notExpanded' }>
                <div style={ styles } className='boxTitle' onClick={ () => this.handleClickedBox() }>{ this.props.boxTitle }</div>
                { this.state.expanded ? this.props.children : null }
            </div>
        )
    }
}