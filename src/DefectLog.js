import React from 'react'


class DefectLog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            params: {},
            formValidationError: ''
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

        console.log(data)

        const { user_entry, sign_in_email, qa_approval } = data

        console.log(user_entry, qa_approval, sign_in_email)

        // 'user_entry', 'qa_approval', 'sign_in_email' submitted with empty strings

        if (user_entry === '') {
            console.log('empty user entry input')
            this.setState({
                formValidationError: 'Please enter rework details!!'
            })
        }

                else if (qa_approval === 'None') {
            console.log('NCM not selected')
            this.setState({
                formValidationError: 'Please select if NCM is resolved!!'
            })
        }

        else if (sign_in_email === '') {
            console.log('empty "Entered By" input')
            this.setState({
                formValidationError: 'Please enter email for signature!!'
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
            <section className='defect-log clearfix'>
                {showErrorOutput}

                <h2>Defect Log</h2>

                <h3>S/N: 24106589</h3>
                <h3>NCM: 20-176</h3>

                <form className='defect-log-text' onSubmit={this.handleSearch}>
                    <div className='divTable blueTable clearfix fullWidth'>

                        <div className='divTableHeading'>

                            <div className='divTableRow'>
                                <div className='divTableHead'>Rework Details</div>
                                <div className='divTableHead'>NCM<br />resolved? (Y/N)</div>
                                <div className='divTableHead'>Entered By</div>
                                <div className='divTableHead'>Date</div>
                            </div>

                        </div>

                        <div className='divTableBody'>

                            <div className='divTableRow'>
                                <div className='divTableCell'>TP#1 fails to meet dB limit</div>
                                <div className='divTableCell'>No</div>
                                <div className='divTableCell'>Sally Day</div>
                                <div className='divTableCell'>2020-08-27</div>
                            </div>

                            <div className='divTableRow'>
                                <div className='divTableCell'>
                                    <input name='user_entry' type='text' placeholder='enter details here' required='' id='user_entry' />
                                </div>
                                <div className='divTableCell'>
                                    <select name='qa_approval' id='qa_approval'>
                                        <option value='None'>Select one...</option>
                                        <option defaultValue='n/a'>N/A</option>
                                        <option defaultValue='yes'>Yes</option>
                                        <option defaultValue='no'>No</option>
                                    </select>
                                </div>
                                <div className='divTableCell'>
                                    <input name='sign_in_email' type='text' placeholder='email' required='' id='sign_in_email' />
                                </div>
                                <div className='divTableCell'>
                                    <div className='buttonWrapper clearfix'>
                                        <button type='submit' className='myButton'>Submit</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </form>



            </section>
        )
    }

}

export default DefectLog
