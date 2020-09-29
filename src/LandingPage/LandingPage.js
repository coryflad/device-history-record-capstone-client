import React from 'react'
import LandingSelector from './LandingSelector'


class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            device_sn: [],
            device_name: [],
            countries: [],
            selected: null
        }
    }

    //get the imput from the user
    componentDidMount() {
        fetch('https://country.register.gov.uk/records.json?page-size=5000')
            .then(response => response.json())
            .then(data => {
                const countries = Object.keys(data)
                    .map(key => data[key].item[0])
                this.setState({
                    countries,
                    error: null
                })
                console.log(countries)
            })
            .catch(err => {
                this.setState({
                    error: err.message
                })
            })
    }

    setSelected(selected) {
        this.setState({
            selected
        })
    }


    render() {

        const device = this.state.selected
            ? <div className="alert alert-info">
                <i className="fas fa-info"></i>
                <strong>Info</strong>
                Please select a serial number!!
            </div>
            : <div className="alert alert-info">
                <i className="fas fa-info"></i>
                <strong>Info</strong>
                Please select a device!!
            </div>

        return (
            <section className="landing-page">
                {device}
                <form className="select-device-form">

                    <h1>Good Morning Jimmy Smith!</h1>

                    <div>
                        <LandingSelector
                            countries={this.state.countries}
                            changeHandler={selected => this.setSelected(selected)} />
                    </div>

                    <div className="form-item">
                        <button type='submit' className="myButton">Create DHR</button>
                    </div>

                </form>
            </section>
        )
    }

}

export default LandingPage
