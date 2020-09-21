import React from 'react';


function LandingPage() {
    return (
        <section className="landing-page">

            <form className="select-product-form">

                <div className="alert alert-info">
                    <i className="fas fa-info"></i> <strong>Info</strong> Please select a device!!
                    </div>
                <div className="alert alert-info">
                    <i className="fas fa-info"></i> <strong>Info</strong> Please select a work order!!
                    </div>
                <div className="alert alert-info">
                    <i className="fas fa-info"></i> <strong>Info</strong> Please select a serial number!!
                </div>

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
                    <a href="#" className="myButton">Create DHR</a>
                </div>

            </form>
        </section>
    )
}

export default LandingPage
