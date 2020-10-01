import React from 'react';


class Registration extends React.Component {
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

        const { register_email, register_password, register_confirm_password } = data

        console.log(register_email, register_password, register_confirm_password)

        // 'register_email', 'register_password', 'register_confirm_password' submitted with empyt strings

        if (register_email === '') {
            console.log('empty email input')
            this.setState({
                formValidationError: 'Please enter email address!!'
            })
        }

        else if (register_password === '') {
            console.log('empty password input')
            this.setState({
                formValidationError: 'Please enter password!!'
            })
        }

        else if (register_confirm_password === '') {
            console.log('empty confrim password input')
            this.setState({
                formValidationError: 'Please enter password confirmation!!'
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
            //         "Authorization": "",
            //         "Content-Type": "application/json"
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

            //     //catch connection errors
            //     .catch(err => {
            //         this.setState({
            //             error: err.message
            //         })
            //     })
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
            <section className="registration">

                {/* <div className="alert alert-success">
                    <i className="fas fa-check"></i> <strong>Success</strong> Account Activated Sucessfully!!
                </div>
    
                <div className="alert alert-warning">
                    <i className="fas fa-exclamation"></i> <strong>Warning</strong> Password does not meet complexity requirements!!
                </div>
    
                <div className="alert alert-failure">
                    <i className="fas fa-times"></i> <strong>Failure</strong> Registration Failed!! Please see System Adminstrator!!
                </div> */}

                <form className="registration-form" onSubmit={this.handleSearch}>
                    {showErrorOutput}

                    <h1>DHR Registration</h1>

                    <div className="form-item">
                        <label htmlFor="register-email">Email</label>
                        <input name="register_email" type="text" placeholder="email" required="" id="register-email" />
                    </div>

                    <div className="form-item">
                        <label htmlFor="register-password">Password</label>
                        <input name="register_password" type="text" placeholder="password" required="" id="register-password" />
                    </div>

                    <div className="form-item">
                        <label htmlFor="register-confirm-password">Confirm Password</label>
                        <input name="register_confirm_password" type="text" placeholder="confirm-password" required="" id="register-confirm-password" />
                    </div>

                    <div className="form-item">
                        <button type='submit' className="myButton">Register</button>
                        <p>Already have an account? <a href="/">Sign In</a></p>
                    </div>
                </form>
            </section>
        );
    }

}

export default Registration;
