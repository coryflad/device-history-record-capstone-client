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
        const options = this
            .props
            .countries
            .map(
                (country, i) => <option value={country.name} key={i}>{country.name}</option>
            )
        return (
            <div className='country_selector'>
                    <label htmlFor='country'>Select a device for testing:</label>
                    <select
                        id='country'
                        name='country'
                        onChange={e => this.changeSelection(e.target.value)}>
                        <option value='None'>Select one...</option>
                        {options}
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