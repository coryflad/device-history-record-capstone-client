import React from 'react'

import Nav from './Nav'
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

        if (!TokenService.hasAuthToken()){
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

            //get the google books api url
            // const searchURL = 'https://www.googleapis.com/books/v1/volumes'

            // //format the queryString paramters into an object
            // const queryString = this.formatQueryParams(data)

            // //sent all the params to the final url
            // const url = searchURL + '?' + queryString

            // console.log(url)

            // //define the API call parameters
            // const options = {
            //     method: 'GET',
            //     header: {
            //         "Authorization": "",
            //         "Content-Type": "application/json"
            //     }
            // }

            // //using the url and paramters above make the api call
            // fetch(url, options)

            //     // if the api returns data ...
            //     .then(res => {
            //         if (!res.ok) {
            //             throw new Error('Something went wrong, please try again later.')
            //         }

            //         // ... convert it to json
            //         return res.json()
            //     })

            //     // use the json api output
            //     .then(data => {

            //         //check if there is meaningfull data
            //         console.log(data);

            //         // check if there are no results
            //         if (data.totalItems === 0) {
            //             throw new Error('No books found')
            //         }

            //         // create and object with each one of the results
            //         const aBooks = data.items.map(book => {

            //             // get the title, authors, description, imageLinks, previewLink from "volumeInfo"
            //             const { title, authors, description, imageLinks, previewLink } = book.volumeInfo

            //             // get the saleability, retailPrice from "saleInfo"
            //             const { saleability, retailPrice } = book.saleInfo


            //             let validatedOutput = {
            //                 title: this.checkString(title),
            //                 author: this.checkString(authors),
            //                 description: this.checkString(description),
            //                 previewLink: this.checkURL(previewLink),
            //                 thumbnail_URL: this.checkEmptyImage(imageLinks.thumbnail),
            //                 saleability: this.checkInteger(saleability),
            //                 price: this.checkInteger(retailPrice),
            //             }

            //             //check if the data validation works
            //             console.log(validatedOutput);

            //             // fix the inconsitent results and return them
            //             return validatedOutput;
            //         })

            //         //check if the validated data is structured in a new array objects
            //         console.log(aBooks);

            //         //send all the results to the state
            //         this.setState({
            //             books: aBooks,
            //             error: null
            //         })
            //     })

            //catch connection errors
            // .catch(err => {
            //     this.setState({
            //         error: err.message
            //     })
            // })
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
                    
                    <div className="form-item">
                        <label htmlFor="device_name">Which device are you testing?:</label>
                        <select name="device_name" id="device_name">
                            <option defaultValue="select device">select device</option>
                            <option defaultValue="1.5T">1.5T RF Trap</option>
                            <option defaultValue="3.0T">3.0T RF Trap</option>
                        </select>
                    </div>

                    <div className="form-item">
                        <label htmlFor="wo_no">Which work order?:</label>
                        <select name="wo_no" id="wo_no">
                            <option defaultValue="select W/O">select W/O</option>
                            <option defaultValue="4710">4710</option>
                            <option defaultValue="4718">4718</option>
                            <option defaultValue="4725">4725</option>
                            <option defaultValue="4731">4731</option>
                        </select>
                    </div>

                    <div className="form-item">
                        <label htmlFor="device_sn">Which serial number?:</label>
                        <select name="device_sn" id="device_sn">
                            <option defaultValue="select S/N">select S/N</option>
                            <option defaultValue="20206589">20206589</option>
                            <option defaultValue="20206590">20206590</option>
                            <option defaultValue="20206591">20206591</option>
                            <option defaultValue="20206592">20206592</option>
                        </select>
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
