import React from 'react';
import InfoIcon from '@material-ui/icons/Info';
import '../Style/StepOne.css'
import CheckBox from './CheckBox';
import ChannelType from './ChannelType';

class StepOne extends React.Component {
    state = {
        isChannelTypeChecked: [
            { type: 'In App', value: false },
            { type: 'Mobile Web', value: false },
            { type: 'Desktop', value: false },
            { type: 'Social Media', value: false },
            { type: 'Paid Search', value: false },
            { type: 'Email', value: false },
            { type: 'Lead Form', value: false },
            { type: 'Landing Page', value: false }
        ],
        isTrackingOptionChecked: [
            { type: 'Visits', value: false },
            { type: 'Transactions', value: false }
        ]
    }

    componentDidMount = () => {
        this.setState({ isChannelTypeChecked: this.props.channelType });
        this.setState({ isTrackingOptionChecked: this.props.trackingOption });
    }

    gotoNextStep = (event) => {
        event.preventDefault();
        this.props.nextStep();
    }

    render() {
        return (
            <div>
                <h4>
                    <InfoIcon color='primary' style={{ fontSize: 30, position: 'relative', top: 10, right: 5 }} />
                    Select the channel of your campaign
                </h4>
                <div className="flex-container-camp">
                    <ChannelType iconType='Digital' text='Digital' selectedChannel={this.props.channel} onChangeChannel={this.props.onChangeChannel} />
                    <ChannelType iconType='OutOfHome' text='Out Of Home' selectedChannel={this.props.channel} onChangeChannel={this.props.onChangeChannel} />
                    <ChannelType iconType='TV' text='TV' selectedChannel={this.props.channel} onChangeChannel={this.props.onChangeChannel} />
                    <ChannelType iconType='Radio' text='Radio' selectedChannel={this.props.channel} onChangeChannel={this.props.onChangeChannel} />
                </div>
                <h4>TYPE(S) OF CHANNEL</h4>
                <div className="flex-container-channel">
                    <CheckBox label="In App" itemType="channel" checkedChannelValue={this.state.isChannelTypeChecked[0].value} onChangeChannelType={this.props.onChangeChannelType}></CheckBox>
                    <CheckBox label="Mobile Web" itemType="channel" checkedChannelValue={this.state.isChannelTypeChecked[1].value} onChangeChannelType={this.props.onChangeChannelType}></CheckBox>
                    <CheckBox label="Desktop" itemType="channel" checkedChannelValue={this.state.isChannelTypeChecked[2].value} onChangeChannelType={this.props.onChangeChannelType}></CheckBox>
                    <CheckBox label="Social Media" itemType="channel" checkedChannelValue={this.state.isChannelTypeChecked[3].value} onChangeChannelType={this.props.onChangeChannelType}></CheckBox>
                </div>
                <div className="flex-container-channel">
                    <CheckBox label="Paid Search" itemType="channel" checkedChannelValue={this.state.isChannelTypeChecked[4].value} onChangeChannelType={this.props.onChangeChannelType}></CheckBox>
                    <CheckBox label="Email" itemType="channel" checkedChannelValue={this.state.isChannelTypeChecked[5].value} onChangeChannelType={this.props.onChangeChannelType}></CheckBox>
                    <CheckBox label="Lead Form" itemType="channel" checkedChannelValue={this.state.isChannelTypeChecked[6].value} onChangeChannelType={this.props.onChangeChannelType}></CheckBox>
                    <CheckBox label="Landing Page" itemType="channel" checkedChannelValue={this.state.isChannelTypeChecked[7].value} onChangeChannelType={this.props.onChangeChannelType}></CheckBox>
                </div>
                <h4>TRACKING OPTIONS</h4>
                <label>Attribution Type</label>
                <div className="flex-container-channel">
                    <CheckBox label="Visits" itemType="attribution" checkedChannelValue={this.state.isTrackingOptionChecked[0].value} onChangeChannelType={this.props.onChangeChannelType}></CheckBox>
                    <CheckBox label="Transactions" itemType="attribution" checkedChannelValue={this.state.isTrackingOptionChecked[1].value} onChangeChannelType={this.props.onChangeChannelType}></CheckBox>
                </div>
                <footer>
                    <button className='ui primary right floated button' onClick={this.gotoNextStep}>Next ></button>
                </footer>
            </div>
        );
    }
}

export default StepOne;