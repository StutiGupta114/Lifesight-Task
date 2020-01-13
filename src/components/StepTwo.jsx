import React from 'react';
import '../Style/StepOne.css';
import '../Style/StepTwo.css';
import InfoIcon from '@material-ui/icons/Info';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class StepTwo extends React.Component {
    gotoNextStep = (event) => {
        event.preventDefault();
        this.props.nextStep();
    }
    gotoPrevStep = (event) => {
        event.preventDefault();
        this.props.prevStep();
    }
    render() {
        return (
            <div>
                <div className='container-box-size'>
                    <h4>
                        <InfoIcon color='primary' style={{ fontSize: 30, position: 'relative', top: 10, right: 5 }} />
                        Select when the campaign start and end
                </h4>
                    <br /> <br />
                    <div className='container-flex-date'>
                        <div>
                            <h3>START</h3>
                            <div className="customDatePickerWidth">
                                <DatePicker
                                    selected={this.props.startDate}
                                    onChange={this.props.setStartDate}
                                    dateFormat="dd MMM yyyy"
                                    peekNextMonth={true}
                                    showMonthDropdown={true}
                                    showYearDropdown={true}
                                    placeholderText="Start Date"
                                    shouldCloseOnSelect={true}
                                    minDate={new Date()}
                                    maxDate={new Date().setMonth(new Date().getMonth() + 2)}
                                    calenderIcon={true}
                                    calendarAriaLabel={true}
                                />
                            </div>
                        </div>
                        <div>
                            <h3>END</h3>
                            <div className="customDatePickerWidth">
                                <DatePicker
                                    selected={this.props.endDate}
                                    onChange={this.props.setEndDate}
                                    dateFormat="dd MMM yyyy"
                                    peekNextMonth={true}
                                    showMonthDropdown={true}
                                    showYearDropdown={true}
                                    placeholderText="End Date"
                                    shouldCloseOnSelect={true}
                                    minDate={new Date().setDate(new Date().getDate() + 7)}
                                    maxDate={new Date().setMonth(new Date().getMonth() + 2)}
                                    calenderIcon={true}
                                    calendarAriaLabel={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <button className='ui primary left floated button bottom attached' onClick={this.gotoPrevStep}>Previous</button>
                    <button className='ui primary right floated button' onClick={this.gotoNextStep}>Next ></button>
                </footer>
            </div>
        );
    }
}

export default StepTwo;