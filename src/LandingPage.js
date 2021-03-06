import React from 'react'

import config from './config'
import TokenService from './services/TokenServices'


class LandingPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            params: {},
            formValidationError: ''
        }
    }

    componentDidMount() {
        let currentUserId = TokenService.getUserId()
        let currentUserToken = TokenService.getAuthToken()
        console.log(currentUserId, currentUserToken)
        console.log(TokenService.hasAuthToken())

        if (!TokenService.hasAuthToken()) {
            window.location = '/'
        }
    }

    //get the imput from the user
    handleSearch = (e) => {
        e.preventDefault()

        //create an object to store the search filters
        const data = {}

        //get all the from data from the form component
        const formData = new FormData(e.target)

        //for each of the keys in form data populate it with form value
        for (let value of formData) {
            data[value[0]] = value[1]
        }
        //  lines 31-33 are critical to start 
        console.log(data)

        const { device_name, device_sn, wo_no } = data

        console.log(device_name, device_sn, wo_no)

        // 'select device' 'select S/N' 'select W/O' submitted form without anything selected.

        if (device_name === 'select device') {
            console.log('select device')
            this.setState({
                formValidationError: 'Please select a device!!'
            })
        }

        else if (device_sn === 'select S/N') {
            console.log('select S/N')
            this.setState({
                formValidationError: 'Please select a serial number!!'
            })
        }

        else if (wo_no === 'select W/O') {
            console.log('select W/O')
            this.setState({
                formValidationError: 'Please select a work order!!'
            })
        }
        else {

            //assigning the object from the form data to params in the state
            this.setState({
                params: data,
                formValidationError: ''
            })

            //check if the state is populated with the search params data
            console.log(this.state.params)

            // create payload and send it across we left of here!!!!

            const payload = {
                device_name: data.device_name,
                wo_no: data.wo_no,
                device_sn: data.device_sn,
                currentUserId: TokenService.getUserId()
            };

            console.log(payload)

            const url = `${config.API_ENDPOINT}/create-dhr`;

            fetch(url, {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "content-type": "application/json",
                },
            })
                .then((res) => {
                    if (!res.ok) {
                        return res.json().then((error) => {
                            throw error;
                        });
                    }
                    return res.json();
                })
                .then((data) => {
                    // this.props.updateNote(data);
                    alert('Post added!');
                    window.location = '/dhr-report'
                })

                .catch((error) => {
                    this.setState({ appError: error });
                });
        }



    }

    render() {
        let showErrorOutput = ''
        if (this.state.formValidationError) {
            showErrorOutput = <div className="alert alert-info">
                <i className="fas fa-info"></i>
                <strong>Info</strong>
                {this.state.formValidationError}
            </div>
        }

        return (
            <section className="landing-page">

                <form className="select-product-form" onSubmit={this.handleSearch}>

                    {showErrorOutput}

                    <h1>Good Morning Jimmy Smith!</h1>

                </form>
            </section>
        )
    }

}

export default LandingPage
