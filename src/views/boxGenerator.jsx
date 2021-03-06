import React from 'react'
import ReactDOM from 'react-dom'
import { Component, PropTypes } from 'react'
import Gradient from '../components/gradient'
import Single from '../components/single'
import Dimension from '../components/dimension'
import ActionButton from '../components/actionButton'
import SingleDropDown from '../components/singleDropDown'
import Three from '../components/three'
import Color from '../components/color'
import BoxShadow from '../components/boxShadow'
import Border from '../components/border'
import BorderRadius from '../components/borderRadius'
import Credits from '../components/credits'
// import Slider from 'material-ui/Slider';

class BoxGenerator extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      locked: false,
      loading: false,
      error: false,
      background: 'yellow',
      backgroundImage: '0deg' + ' yellow' + ' yellow',
      value: 0,
      width: '200',
      height: '200',
      border: '0 solid #333',
      borderRadius: '10 10 10 10',
      boxShadow: '0 4 4 0 #000000',
      opacity: 1,
      testList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      aspectRatio: 1
    }
  }

  getStyleProps = () => {
    // console.log(ReactDOM.findDOMNode(this.refs.container).style)
  }

  handleChangeComplete = color => {
    this.setState({ background: color.hex })
  }
  shouldComponentUpdate (nextProps, nextState) {
    return true
  }
  handleChange = (type, event) => {
    // console.log(type, event.target.value)
    switch (type) {
      case 'lock':
        let newLockState = !this.state.locked
        this.setState({ locked: newLockState })
        break
      case 'gradient':
        if (event.target.value.length == 0) {
          this.setState({
            backgroundImage: '0deg ' + this.state.background + ' ' + this.state.background })
        } else {
          this.setState({
            backgroundImage: event.target.value })
        }
        break
        this.setState({ backgroundImage: event.target.value })
        break
      case 'width':
        if (this.state.locked) {
          let aspectRatio = this.state.width / this.state.height ? this.state.width / this.state.height : this.state.aspectRatio
          this.setState({
            aspectRatio: aspectRatio
          })
          let newWidth = event.target.value
          let newHeight = (newWidth / aspectRatio).toFixed(0)
          this.setState({ width: newWidth, height: newHeight })
          break
        } else {
          this.setState({ width: event.target.value })
          break
        }
      case 'height':
        if (this.state.locked) {
          let aspectRatio = this.state.width / this.state.height ? this.state.width / this.state.height : this.state.aspectRatio
          this.setState({
            aspectRatio: aspectRatio
          })
          let newHeight = event.target.value
          let newWidth = (aspectRatio * newHeight).toFixed(0)
          this.setState({ width: newWidth, height: newHeight })
          break
        } else {
          this.setState({ height: event.target.value })
          break
        }
      case 'color':
        this.setState({ background: event.target.value })
        break
      case 'border':
        if (event.target.value.length == 0) {
          this.setState({ border: '0px solid black' })
        } else {
          this.setState({ border: event.target.value })
        }
        break
      case 'borderRadius':
        if (event.target.value.length == 0) {
          this.setState({ borderRadius: '0px 0px 0px 0px' })
        } else {
          this.setState({ borderRadius: event.target.value })
        }
        break
      case 'background':
        this.setState({ background: event.target.value })
        break
      case 'opacity':
        this.setState({ opacity: event.target.value })
        break
      case 'boxShadow':
        if (event.target.value.length == 0) {
          this.setState({ boxShadow: '0px 0px 0px 0px #333' })
        } else {
          this.setState({ boxShadow: event.target.value })
        }
        break
      // default:
    }
  }
  getSidePanel = () => {
    let box_style = {
      width: this.state.width,
      height: this.state.height,
      borderRadius: this.state.borderRadius,
      backgroundImage: this.state.backgroundImage,
      background: this.state.background,
      border: this.state.border,
      opacity: this.state.opacity,
      boxShadow: this.state.boxShadow
    }
    return (
      <div className='Grid  nopadding'>
        <Dimension
          name='Size'
          propname={['height', 'width', 'lock']}
          ivalue={[this.state.height, this.state.width]}
          func={this.handleChange}
          locked={this.state.locked}
        />
        <Color
          name='Color'
          propname='background'
          ivalue={this.state.background}
          func={this.handleChange}
          color={this.state.background}
          disabled={!this.state.isGradient}
        />
        <Three
          name='Opacity'
          propname='opacity'
          func={this.handleChange}
          currentValue={this.state.opacity}
          min={0}
          max={1}
        />
        <Border ref='border' name='Border' propname='border' ivalue={this.state.border} func={this.handleChange} />
        <BoxShadow
          ref='boxShadow'
          name='Box Shadow'
          propname='boxShadow'
          ivalue={this.state.boxShadow}
          func={this.handleChange}
        />

        <Gradient
          ref='gradient'
          name='Gradient'
          propname='gradient'
          ivalue={this.state.backgroundImage}
          func={this.handleChange}
        />
        <BorderRadius
          ref='borderRadius'
          name='Border Radius'
          propname='borderRadius'
          ivalue={this.state.borderRadius}
          func={this.handleChange}
          type='number'
        />
        <ActionButton name={'boxGenerator'} cssStyle={box_style} />
      </div>
    )
  }

  render () {
    let box_style = {
      width: this.state.width,
      height: this.state.height,
      borderRadius: this.state.borderRadius,
      background: this.state.background,
      backgroundImage: 'linear-gradient(' + this.state.backgroundImage.split(' ').join(', ') + ')',
      border: this.state.border,
      opacity: this.state.opacity,
      boxShadow: this.state.boxShadow
    }
    return (
      <div className='holder'>
        <div className='subject'>
          <div ref={'container'} className='element' style={box_style} />
          {this.state.error}
          <Credits />
        </div>
        <div className='sidebar'>{this.getSidePanel()}</div>
      </div>
    )
  }
}

export default BoxGenerator
