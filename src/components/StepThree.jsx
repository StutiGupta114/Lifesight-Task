import React from 'react';
import InfoIcon from '@material-ui/icons/Info';
import '../Style/StepOne.css'
import '../Style/StepThree.css'

class StepThree extends React.Component {
    gotoPrevStep = (event) => {
        console.log("here");
        event.preventDefault();
        this.props.prevStep();
    }
    render() {
        return (
            <div>
                <div className='container-box-size'>
                    <h4>
                        <InfoIcon color='primary' style={{ fontSize: 30, position: 'relative', top: 10, right: 5 }} />
                        How much is your campaign budget?
                </h4>
                    <div className='ui grid'>
                        <div className='four wide column'>
                            <h3>Total Budget</h3>
                            <div className="ui right labeled input">
                                <div className="ui basic label">US$</div>
                                <input type='number' className="set-cuurency-box-budget"
                                    onChange={this.props.setAmount} value={this.props.amount}/>
                                <div className="ui label">.00</div>
                            </div>
                        </div>
                        <div className='four wide column'>
                            <h3>Total Impressions</h3>
                            <input type='number' className="set-cuurency-box-impression"
                                onChange={this.props.setImpressions} value={this.props.impressions} />
                        </div>
                    </div>
                </div>
                <footer>
                    <button className='ui primary left floated button' onClick={this.gotoPrevStep}> Previous </button>
                    <button className='ui primary right floated button' onClick={this.props.createTracker}> Create Tracker </button>
                </footer>
            </div>

        );
    }
}

export default StepThree;