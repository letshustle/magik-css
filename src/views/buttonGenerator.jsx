import React from 'react';
import {Component, PropTypes} from 'react';

import FontAwesome from 'react-fontawesome';


import BoxShadow from '../components/boxShadow';


import Single from '../components/single';
import Color from '../components/color';
import SimpleDropDown from '../components/simpleDropDown';
import Border from '../components/border';
import Font from '../components/font';
import Padding from '../components/padding';
import BorderRadius from '../components/borderRadius';
import ActionButton from '../components/actionButton';
import Credits from '../components/credits';

class ButtonGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                    loading: false,
                    error: false,
                    text: "Click Me",
                    color: "#FF6500",
                    fontWeight: "400",
                    fontSize: "32",
                    fontStyle: "normal",
                    background:"#FFF",
                    borderRadius:"0 0 0 0",
                    padding:"0 0 0 0",
                    border:"0 solid #333",
                    isBoxShadow: false,
                    isBorder: false,
                    value: 0
        };
    }




    handleChangeComplete = (color) => {

        console.log(color)
        this.setState({background: color.hex});
    }

    handleChange = (type, event) => {
        console.log("type is",type);
        switch (type) {
            case "text":
                this.setState({text: event.target.value});
                break;
            case "color":
                this.setState({color: event.target.value});
                break;
            case "fontStyle":
                this.setState({fontStyle: event.target.value});
                break;
            case "fontWeight":
                this.setState({fontWeight: event.target.value});
                break;
            case "fontSize":
                this.setState({fontSize: event.target.value});
                break;
            case "border":
                this.setState({border: event.target.value});
                break;
            case "background":
                this.setState({background: event.target.value});
                break;
            case "borderRadius":
                this.setState({borderRadius: event.target.value});
                break;
            case "padding":
                this.setState({padding: event.target.value});
                break;

            default:
                break;
        }

    }


    getSidePanel = () => {
      let shadow_style = (typeof this.refs.boxshadow == "undefined")?"0 0 0 #888": (this.refs.boxshadow.vlength+"  "+this.refs.boxshadow.hlength+"  "+this.refs.boxshadow.vlength+"  "+this.refs.boxshadow.vlength+"  "+this.refs.boxshadow.color);
      let text_style = {
          "color": this.state.color,
          "fontSize": this.state.fontSize,
          "fontWeight": this.state.fontWeight,
          "fontStyle": this.state.fontStyle,
          "border":this.state.border,
          "fontStyle": this.state.fontStyle,
          "background":this.state.background,
          "borderRadius":this.state.borderRadius,
          "padding":this.state.padding
      };
      let box_style = {
          "color": this.state.color,
          "fontSize": this.state.fontSize,
          "fontWeight": this.state.fontWeight,
          "fontStyle": this.state.fontStyle,
          "border":this.state.border,
          "background":this.state.background,
          "boxshadow": shadow_style,
      };
      let allStyle = {
        "shadow_style" : shadow_style,
        "text_style": text_style,
        "box_style": box_style
      }
        return (
            <div className="Grid  nopadding">

                <Single name="Text" propname="text" ivalue={this.state.text} func={this.handleChange}></Single>
                <Color name="Color" propname="color" ivalue={this.state.color} func={this.handleChange} color={this.state.color}></Color>
                <Color name="Background" propname="background" ivalue={this.state.background} func={this.handleChange} color={this.state.background}></Color>
                <Font ref="font"
                           name="Font"
                           propname={["fontSize","fontWeight","fontStyle"]}
                           ivalue={[this.state.fontSize, this.state.fontWeight, this.state.fontStyle]}
                           func={this.handleChange}
                           ></Font>
                <Padding ref="padding"
                         name="Padding"
                         propname="padding"
                         ivalue={this.state.padding}
                         func={this.handleChange}
                         type="number"
                        ></Padding>
                <Border ref="border"
                           name="Border"
                           propname="border"
                           ivalue={this.state.border}
                           func={this.handleChange}
                           ></Border>
               <BorderRadius ref="borderRadius"
                           name="Border Radius"
                           propname="borderRadius"
                           ivalue={this.state.borderRadius}
                           func={this.handleChange}
                           type="number"
                           ></BorderRadius>
              <ActionButton name={"buttonGenerator"} cssStyle={text_style} ></ActionButton>

            </div>

        )
    }
    render() {

        let shadow_style = (typeof this.refs.boxshadow == "undefined")?"0 0 0 #888": (this.refs.boxshadow.vlength+"  "+this.refs.boxshadow.hlength+"  "+this.refs.boxshadow.vlength+"  "+this.refs.boxshadow.vlength+"  "+this.refs.boxshadow.color);
        let text_style = {
            "color": this.state.color,
            "fontSize": this.state.fontSize,
            "fontWeight": this.state.fontWeight,
            "fontStyle": this.state.fontStyle,
            "border":this.state.border,
            "fontStyle": this.state.fontStyle,
            "background":this.state.background,
            "borderRadius":this.state.borderRadius,
            "padding":this.state.padding
        };
        let box_style = {
            "color": this.state.color,
            "fontSize": this.state.fontSize,
            "fontWeight": this.state.fontWeight,
            "fontStyle": this.state.fontStyle,
            "border":this.state.border,
            "background":this.state.background,
            "boxshadow": shadow_style,
        };
        let allStyle = {
          "shadow_style" : shadow_style,
          "text_style": text_style,
          "box_style": box_style
        }
        {console.log(this.state)}
        return (

            <div className="holder" >
                    <div className="subject">
                        <div className="element" style={text_style}>{this.state.text}</div>
                        {this.state.error}
                        <Credits/>
                    </div>
                    <div className="sidebar">
                        {this.getSidePanel()}
                    </div>

            </div>
        );
    }
}

export default ButtonGenerator;
