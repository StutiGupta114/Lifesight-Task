import React from 'react';

class CheckBox extends React.Component {

    checkStatus = () => {
        console.log("here");
        return 'true';
       
    }

    render(){
        return (
            <div>   
                <input type="checkbox" id={this.props.itemType} 
                                        name={this.props.label} 
                                        onChange = {this.props.onChangeChannelType}
                                        value = {this.props.label} 
                                        checked ={this.props.checkedChannelValue}
                                        />
                <label>{this.props.label}</label>
            </div>
        );
    }
}

export default CheckBox;