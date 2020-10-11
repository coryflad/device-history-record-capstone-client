import React from 'react'


class DhrReport extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            params: {},
            dataParams: {},
            formValidationError: ''
        }
    }

    //get the imput from the user
    handleData = (e) => {
        e.preventDefault()

        //create an object to store the search filters
        const testData = {}

        //get all the from data from the form component
        const formData = new FormData(e.target)

        //for each of the keys in form data populate it with form value
        for (let value of formData) {
            testData[value[0]] = value[1]
        }

        console.log(testData)

        const { test_location, db_user_value_entry, freq_value, cap_value1, cap_value2 } = testData

        // console.log(test_location, db_user_value_entry, freq_value, cap_value1, cap_value2)

        if (test_location === '') {
            console.log('empty test location input')
            this.setState({
                formValidationError: ' Please enter test location!!'
            })
        }

        else if (db_user_value_entry === '') {
            console.log('no db value recorded')
            this.setState({
                formValidationError: ' Please enter dB value!!'
            })
        }

        else if (freq_value === '') {
            console.log('no freq value recorded')
            this.setState({
                formValidationError: ' Please enter frequency value!!'
            })
        }

        else if (cap_value1 === 'None') {
            console.log('no cap value 1 selected')
            this.setState({
                formValidationError: ' Please enter capacitor value at C2!!'
            })
        }

        else if (cap_value2 === 'None') {
            console.log('no cap value 2 selected')
            this.setState({
                formValidationError: ' Please enter capacitor value at C3!!'
            })
        }

        else {
            //assigning the object from the form data to params in the state
            this.setState({
                dataParams: testData,
                formValidationError: ''
            })

            //check if the state is populated with the search params data
            console.log(this.state.dataParams)

            // //get the google books api url
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
            //         'Authorization': '',
            //         'Content-Type': 'application/json'
            //     }
            // }

            // //useing the url and paramters above make the api call
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

            //             // get the title, authors, description, imageLinks, previewLink from 'volumeInfo'
            //             const { title, authors, description, imageLinks, previewLink } = book.volumeInfo

            //             // get the saleability, retailPrice from 'saleInfo'
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

            //     //catch connection errors
            //     .catch(err => {
            //         this.setState({
            //             error: err.message
            //         })
            //     })

        }


    }




    //get the equipment input from the user
    handleEquipment = (e) => {
        e.preventDefault()

        //create an object to store the search filters
        const data = {}

        //get all the from data from the form component
        const formData = new FormData(e.target)

        //for each of the keys in form data populate it with form value
        for (let value of formData) {
            data[value[0]] = value[1]
        }

        console.log(data)

        const { network_analyzer, power_supply, s21_probe, calibration_standard } = data

        console.log(network_analyzer, power_supply, s21_probe, calibration_standard)

        if (network_analyzer === 'None') {
            console.log('network analyzer not selected')
            this.setState({
                formValidationError: ' Please select a network analyzer!!'
            })
        }

        else if (power_supply === 'None') {
            console.log('power supply not selected')
            this.setState({
                formValidationError: ' Please select a power supply!!'
            })
        }

        else if (s21_probe === 'None') {
            console.log('s21 probe not selected')
            this.setState({
                formValidationError: ' Please select a s21 probe !!'
            })
        }

        else if (calibration_standard === 'None') {
            console.log('calibration_standard not selected')
            this.setState({
                formValidationError: ' Please select a calibration_standard !!'
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

            // //get the google books api url
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
            //         'Authorization': '',
            //         'Content-Type': 'application/json'
            //     }
            // }

            // //useing the url and paramters above make the api call
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

            //             // get the title, authors, description, imageLinks, previewLink from 'volumeInfo'
            //             const { title, authors, description, imageLinks, previewLink } = book.volumeInfo

            //             // get the saleability, retailPrice from 'saleInfo'
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

            //     //catch connection errors
            //     .catch(err => {
            //         this.setState({
            //             error: err.message
            //         })
            // })
        }




    }


    render() {
        let showErrorOutput = ''
        if (this.state.formValidationError) {
            showErrorOutput = <div className='alert alert-info'>
                <i className='fas fa-info'></i>
                <strong>Info</strong>
                {this.state.formValidationError}
            </div>
        }
        return (
            <section className='dhr-page clearfix'>
                {/* <div className='alert alert-warning'>
                    <i className='fas fa-exclamation'></i> <strong>Warning</strong> Please enter 'equipment description' Identfiers!!
                </div>

                <div className='alert alert-failure'>
                    <i className='fas fa-times'></i> <strong>Failure</strong> 'equipment name' is out of calibration!! Contact QA!!
                    </div>

                <div className='alert alert-warning'>
                    <i className='fas fa-exclamation'></i> <strong>Warning</strong> Are you sure you want to submit DHR with missing test data!!
                </div>

                <div className='alert alert-warning'>
                    <i className='fas fa-exclamation'></i> <strong>Warning</strong> Please enter capactior defaultValue for Test Location TP1, C2 defaultValue
                </div>

                <div className='alert alert-warning'>
                    <i className='fas fa-exclamation'></i> <strong>Warning</strong> 'test location name' fails to meet the test limits!! Are you sure you want to submit DHR??
                </div>

                <div className='alert alert-success'>
                    <i className='fas fa-check'></i> <strong>Success</strong> All test locations meet test limits!!
                </div>

                <div className='alert alert-failure'>
                    <i className='fas fa-times'></i> <strong>Failure</strong> 'test location name' fails to meet test limits!!
                </div> */}

                <h2>DHR Report</h2>

                <div className='divTable blueTable media'>
                    <div className='divTableHeading'>
                        <div className='divTableRow'>
                            <div className='divTableHead'>Assembly Details</div>
                            <div className='divTableHead'>Identifier</div>
                        </div>
                    </div>

                    <div className='divTableBody'>
                        <div className='divTableRow'>
                            <div className='divTableCell'>Assembly No.</div>
                            <div className='divTableCell'>3.0T-124801</div>
                        </div>
                        <div className='divTableRow'>
                            <div className='divTableCell'>Assembly Name</div>
                            <div className='divTableCell'>3.0T RF Trap</div>
                        </div>
                        <div className='divTableRow'>
                            <div className='divTableCell'>Applicable DMR</div>
                            <div className='divTableCell'>3.0T-124DMR</div>
                        </div>
                        <div className='divTableRow'>
                            <div className='divTableCell'>Device S/N</div>
                            <div className='divTableCell'>24106589</div>
                        </div>
                        <div className='divTableRow'>
                            <div className='divTableCell'>Work Order No.</div>
                            <div className='divTableCell'>4578</div>
                        </div>
                        <div className='divTableRow'>
                            <div className='divTableCell'>Document ID No.</div>
                            <div className='divTableCell'>1</div>
                        </div>
                        <div className='divTableRow'>
                            <div className='divTableCell'>Date Created</div>
                            <div className='divTableCell'>2020-08-25</div>
                        </div>
                    </div>
                </div>
                {showErrorOutput}
                <form className='equipment' onSubmit={this.handleEquipment}>
                    <div className='divTable blueTable'>
                        <div className='divTableHeading'>
                            <div className='divTableRow'>
                                <div className='divTableHead'>Equipment Description</div>
                                <div className='divTableHead'>Identifier</div>
                                <div className='divTableHead'>Cal Due Date</div>
                            </div>
                        </div>
                        <div className='divTableBody'>
                            <div className='divTableRow'>
                                <div className='divTableCell'>Network Analyzer</div>
                                <div className='divTableCell'>
                                    <select name='network_analyzer' id='network_analyzer'>
                                        <option value='None'>Select one...</option>
                                        <option defaultValue='2789'>2789</option>
                                        <option defaultValue='4256'>4256</option>
                                        <option defaultValue='5236'>5236</option>
                                    </select>
                                </div>
                                <div className='divTableCell'>2021-01-04</div>
                            </div>
                            <div className='divTableRow'>
                                <div className='divTableCell'>Power Supply</div>
                                <div className='divTableCell'>
                                    <select name='power_supply' id='power_supply'>
                                        <option value='None'>Select one...</option>
                                        <option defaultValue='6895'>6895</option>
                                        <option defaultValue='0027'>0027</option>
                                        <option defaultValue='4569'>4569</option>
                                    </select>
                                </div>
                                <div className='divTableCell'>2021-04-26</div>
                            </div>
                            <div className='divTableRow'>
                                <div className='divTableCell'>S21 Probe</div>
                                <div className='divTableCell'>
                                    <select name='s21_probe' id='s21_probe'>
                                        <option value='None'>Select one...</option>
                                        <option defaultValue='7273'>7273</option>
                                        <option defaultValue='0036'>0036</option>
                                        <option defaultValue='4482'>4482</option>
                                    </select>
                                </div>
                                <div className='divTableCell'>2022-12-23</div>
                            </div>
                            <div className='divTableRow'>
                                <div className='divTableCell'>Calibration Standard</div>
                                <div className='divTableCell'>
                                    <select name='calibration_standard' id='calibration_standard'>
                                        <option value='None'>Select one...</option>
                                        <option defaultValue='8673'>8673</option>
                                        <option defaultValue='2736'>2736</option>
                                        <option defaultValue='4382'>4382</option>
                                    </select>
                                </div>
                                <div className='divTableCell'>No Cal Required</div>
                            </div>

                        </div>
                    </div>
                    <div className='fullWidth'>
                        <div className='buttonWrapper clearfix'>
                            <button type='submit' className='myButton'>Select Equipment</button>
                        </div>
                    </div>
                </form>

                <form className='test_data' onSubmit={this.handleData}>
                    <div className='divTable blueTable'>
                        <div className='divTableHeading'>
                            <div className='divTableRow'>
                                <div className='divTableHead'>Test Location</div>
                                <div className='divTableHead'>dB</div>
                                <div className='divTableHead'>Test Freq<br />(MHz)</div>
                                <div className='divTableHead'>C2 defaultValue<br />(pF)</div>
                                <div className='divTableHead'>C3 defaultValue<br />(pF)</div>
                                <div className='divTableHead'>Actions</div>
                            </div>
                        </div>
                        <div className='divTableBody'>
                            <div className='divTableRow'>
                                <div className='divTableCell'>
                                    <input
                                        name='test_location'
                                        type='text'
                                        placeholder='enter test location'
                                        required=''
                                        id='test_location' />
                                </div>
                                <div className='divTableCell'>
                                    <input
                                        name='db_user_value_entry'
                                        type='text'
                                        placeholder='enter dB'
                                        required=''
                                        id='db_user_value_entry' />
                                </div>
                                <div className='divTableCell'>
                                    <input
                                        name='freq_value'
                                        type='text'
                                        placeholder='enter freq'
                                        required=''
                                        id='freq_value' />
                                </div>
                                <div className='divTableCell'>
                                    <select name='cap_value1' id='cap_value'>
                                        <option value='None'>Select one...</option>
                                        <option defaultValue='N/A'>N/A</option>
                                        <option defaultValue='1.0'>1.0</option>
                                        <option defaultValue='1.5'>1.5</option>
                                        <option defaultValue='2.0'>2.0</option>
                                        <option defaultValue='2.4'>2.4</option>
                                        <option defaultValue='2.7'>2.7</option>
                                        <option defaultValue='3.0'>3.0</option>
                                    </select>
                                </div>
                                <div className='divTableCell'>
                                    <select name='cap_value2' id='cap_value'>
                                        <option value='None'>Select one...</option>
                                        <option defaultValue='N/A'>N/A</option>
                                        <option defaultValue='1.0'>1.0</option>
                                        <option defaultValue='1.5'>1.5</option>
                                        <option defaultValue='2.0'>2.0</option>
                                        <option defaultValue='2.4'>2.4</option>
                                        <option defaultValue='2.7'>2.7</option>
                                        <option defaultValue='3.0'>3.0</option>
                                    </select>
                                </div>
                                <div className='divTableCell'>
                                    <div className='buttonWrapper clearfix'>
                                        <button type='submit' className='myButton'>~</button>
                                    </div>
                                </div>

                            </div>
                            <div className='divTableRow'>
                                <div className='divTableCell'>TP1</div>
                                <div className='divTableCell'>-9</div>
                                <div className='divTableCell'>127.72</div>
                                <div className='divTableCell'>2.7</div>
                                <div className='divTableCell'>2.2</div>
                                <div className='divTableCell'>
                                    <div className='buttonWrapper clearfix'>
                                        <button type='submit' className='myButton red'>X</button>
                                    </div>
                                </div>
                            </div>
                            <div className='divTableRow'>
                                <div className='divTableCell'>TP2</div>
                                <div className='divTableCell'>-13</div>
                                <div className='divTableCell'>127.72</div>
                                <div className='divTableCell'>3.3</div>
                                <div className='divTableCell'>3.6</div>
                                <div className='divTableCell'>
                                    <div className='buttonWrapper clearfix'>
                                        <button type='submit' className='myButton red'>X</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>


                <div className='divTable blueTable'>
                    <div className='divTableHeading'>
                        <div className='divTableRow'>
                            <div className='divTableHead'>dB Limit</div>
                            <div className='divTableHead'>Frequency Range Limit<br />(MHz)</div>
                        </div>
                    </div>
                    <div className='divTableBody'>
                        <div className='divTableRow'>
                            <div className='divTableCell'>&lt;= -10</div>
                            <div className='divTableCell'>127.47 - 127.97</div>
                        </div>
                    </div>
                </div>

                <div className='divTable blueTable'>
                    <div className='divTableHeading'>
                        <div className='divTableRow'>
                            <div className='divTableHead'>Tested By and Date</div>
                        </div>
                    </div>
                    <div className='divTableBody'>
                        <div className='divTableRow'>
                            <div className='divTableCell'>Jimmy Smith 2020-08-27</div>
                        </div>
                    </div>
                </div>

                <div className='buttonWrapper clearfix'>
                    <button type='submit' className='myButton'>Submit</button>
                </div>

                <div className='divTable blueTable'>
                    <div className='divTableHeading'>
                        <div className='divTableRow'>
                            <div className='divTableHead'>Inspected By and Date</div>
                        </div>
                    </div>
                    <div className='divTableBody'>
                        <div className='divTableRow'>
                            <div className='divTableCell'>Sally Day 2020-08-27</div>
                        </div>
                    </div>
                </div>

                <div className='buttonWrapper clearfix'>
                    <button type='submit' className='myButton'>QA Approval</button>
                </div>

                <div className='buttonWrapper clearfix'>
                    <button type='submit' className='myButton red'>QA Reject</button>
                </div>
                
                <div className='divTable blueTable completed'>
                    <div className='divTableHeading'>
                        <div className='divTableRow'>
                            <div className='divTableHead'>Completed Date of Manufacture</div>
                        </div>
                    </div>
                    <div className='divTableBody'>
                        <div className='divTableRow'>
                            <div className='divTableCell'>2020-08-27</div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}

export default DhrReport
