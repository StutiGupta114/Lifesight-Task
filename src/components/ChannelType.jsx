import React from 'react';
import '../Style/StepOne.css';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import TvIcon from '@material-ui/icons/Tv';
import RadioIcon from '@material-ui/icons/Radio';

class ChannelType extends React.Component {
    constructor(props){
        super(props);
        this.selectedChannelRef = React.createRef();
    }

    state={
        channelArray: [{type : 'Digital', value : 'false'}, {type : 'OutOfHome', value : 'false'}]
    }

    componentDidMount = (event) =>{
        console.log(this.selectedChannelRef.current);
        if(this.selectedChannelRef.current.id === this.props.selectedChannel){
            this.selectedChannelRef.current.style.backgroundColor = '#2B60DE';
        }
    }

    selectedItem = (event) =>{
        console.log(event.target.id);
        if(event.target.style.backgroundColor === 'rgb(43, 96, 222)'){
            event.target.style.backgroundColor = 'white';
            //todo
            
        }
        else
            event.target.style.backgroundColor = '#2B60DE';
        this.props.onChangeChannel(event);
    }

    setDisplayIcon = (type) => {
        if (type === 'Digital')
            return <PhoneIphoneIcon color = 'primary' style={{ fontSize: 60, display: 'inline-block' }} />
        else if (type === 'OutOfHome')
            return <DesktopWindowsIcon color = 'primary' style={{ fontSize: 60, display: 'inline-block' }} />
        else if (type === 'TV')
            return <TvIcon color = 'disabled' style={{ fontSize: 60, display: 'inline-block' }} />
        else if (type === 'Radio')
            return <RadioIcon color = 'disabled' style={{ fontSize: 60, display: 'inline-block' }} />
    }

    render(){
        return (
            <div id={this.props.text} style={{ textAlign: "center" }} onClick={this.selectedItem} ref={this.selectedChannelRef}>
                {this.setDisplayIcon(this.props.iconType) }
                <label style={{ display: 'inline-block', paddingTop: 15 }}>{this.props.text}</label>
            </div>
        );
    }
}

export default ChannelType;