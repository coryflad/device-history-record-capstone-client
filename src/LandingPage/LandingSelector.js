import React from 'react'

class LandingSelector extends React.Component {

    changeSelection(value) {
        if (value === 'None') {
            this.props.changeHandler(null)
        } else {
            const country = this.props.countries.find(country => country.name === value)
            this.props.changeHandler(country)
        }
    }

    render() {
        const devices = this.props.countries
            .map(
                (country, i) => <option value={country.name} key={i}>{country.name}</option>
            )
        return (
            <div className='landing_selector'>
                    <label htmlFor='device_name'>Select a device for testing:</label>
                    <select
                        id='device_name'
                        name='device_name'
                        onChange={e => this.changeSelection(e.target.value)}>
                        <option value='None'>Select one...</option>
                        {devices}
                    </select>

                    <label htmlFor='device_sn'>Select a serial number:</label>
                    <select
                        id='device_sn'
                        name='device_sn'
                        onChange={e => this.changeSelection(e.target.value)}>
                        <option value='None'>Select one...</option>
                    </select>
            </div>
        )
    }
}

LandingSelector.defaultProps = {
    countries: []
}

export default LandingSelector