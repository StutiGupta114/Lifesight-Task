import React from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import '../Style/MainStep.css';

class MainStep extends React.Component {

    constructor(props) {
        super(props);
        this.activeStepOneRef = React.createRef();
        this.activeStepTwoRef = React.createRef();
        this.activeStepThreeRef = React.createRef();
    }

    state = {
        step: 1,
        //for step one
        channel: null,
        channelType: [{ type: 'In App', value: false }, { type: 'Mobile Web', value: false }, { type: 'Desktop', value: false },
        { type: 'Social Media', value: false }, { type: 'Paid Search', value: false }, { type: 'Email', value: false },
        { type: 'Lead Form', value: false }, { type: 'Landing Page', value: false }],
        trackingOption: [{ type: 'Visits', value: false }, { type: 'Transactions', value: false }],
        //for step two
        startDate: '',
        endDate: '',
        //for step three
        amount: '',
        impressions: ''
    };

    componentDidMount = () => {
        if (this.state.step === 1) {
            this.activeStepOneRef.current.style.borderBottom = 'grey 2px solid';
            this.activeStepTwoRef.current.style.borderBottom = 'white';
            this.activeStepThreeRef.current.style.borderBottom = 'white';
        }
    }

    componentDidUpdate = () => {
        console.log('updated.');
        if (this.state.step === 1) {
            this.activeStepOneRef.current.style.borderBottom = 'grey 2px solid';
            this.activeStepTwoRef.current.style.borderBottom = 'white';
            this.activeStepThreeRef.current.style.borderBottom = 'white';
        }
        else if (this.state.step === 2) {
            this.activeStepOneRef.current.style.borderBottom = 'white';
            this.activeStepTwoRef.current.style.borderBottom = 'grey 2px solid';
            this.activeStepThreeRef.current.style.borderBottom = 'white';
        }
        else if (this.state.step === 3) {
            this.activeStepOneRef.current.style.borderBottom = 'white';
            this.activeStepTwoRef.current.style.borderBottom = 'white';
            this.activeStepThreeRef.current.style.borderBottom = 'grey 2px solid';
        }
    }

    showStepDetails = () => {
        const { step, channel, channelType, trackingOption, startDate, endDate, amount, impressions } = this.state;
        if (step === 1) {
            return <StepOne onChangeChannel={this.onChangeChannel}
                onChangeChannelType={this.onChangeChannelType}
                nextStep={this.nextStep}
                channel={channel}
                channelType={channelType}
                trackingOption={trackingOption}
            />
        }
        if (step === 2) {
            return <StepTwo setStartDate={this.setStartDate}
                startDate={startDate}
                setEndDate={this.setEndDate}
                endDate={endDate}
                nextStep={this.nextStep}
                prevStep={this.prevStep}
            />
        }
        if (step === 3) {
            return <StepThree setAmount={(e) => this.setState({ amount: e.target.value })}
                setImpressions={(e) => this.setState({ impressions: e.target.value })}
                amount={amount}
                impressions={impressions}
                prevStep={this.prevStep}
                createTracker={this.createTracker} />
        }
    }

    nextStep = () => this.setState({ step: this.state.step + 1 })

    prevStep = () => this.setState({ step: this.state.step - 1 })

    onChangeChannel = (e) => this.setState({ channel: e.target.id })

    onChangeChannelType = (event) => {
        if (event.target.id === 'channel') {
            this.state.channelType.map((element) => {
                if (element.type === event.target.name) {
                    element.value = (element.value === true ? false : true);
                }
                this.setState({ element });
            });
        }
        if (event.target.id === 'attribution') {
            this.state.trackingOption.map((element) => {
                if (element.type === event.target.name) {
                    element.value = (element.value === true ? false : true);
                }
                this.setState({ element });
            });
        }
    }

    setStartDate = (e) => this.setState({ startDate: e })

    setEndDate = (e) => this.setState({ endDate: e })

    createTracker = () => {
        var dataToSend = "channel : " + this.state.channel + ", start date : " +this.state.startDate + ", end date : "
        +this.state.endDate + ", amount : " + this.state.amount + ", impressions : " + this.state.impressions;
        alert(dataToSend);

        //post API call
        //axios({
        //    method: 'post',
        //    url: 'myurl',
        //    data: {this.state},
        //    })
        //    .then(function (response) {
        //        //handle success
        //        console.log(response);
        //   })
        //    .catch(function (response) {
        //        //handle error
        //        console.log(response);
        //    });
    }

    render() {
        return (
            <div className='container-box'>
                    <h5>CAMPAIGN NAME</h5>
                    <h1 style={{ textDecoration: 'underline grey' }}>Manis Ad Mobile</h1>
                    <br /><br /><br />
                    <div className="container">
                        <div id='stepOne' ref={this.activeStepOneRef}><h3> STEP 1 - SELECT CHANNEL </h3></div>
                        <div id='stepTwo' ref={this.activeStepTwoRef}><h3> STEP 2 - FLIGHT </h3></div>
                        <div id='stepThree' ref={this.activeStepThreeRef}><h3> STEP 3 - BUDGET </h3></div>
                    </div>
                <br />
                {this.showStepDetails()}
            </div>
        );
    };
}

export default MainStep;