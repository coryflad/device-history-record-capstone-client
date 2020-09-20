import React from 'react';
import Registration from './Registration';


function App() {
    return (
        <div className="App">
            <Registration />

            <section className="sign-in">
                <div className="alert alert-info">
                    <i className="fas fa-info"></i> <strong>Info</strong> Please enter username and password!
</div>

                <div className="alert alert-warning">
                    <i className="fas fa-exclamation"></i> <strong>Warning</strong> Username or password incorrect!!
</div>

                <form className="sign-in-form">
                    <h1>DHR Sign-In</h1>

                    <div className="form-item">
                        <label htmlFor="sign-in-email">Email</label>
                        <input type="text" placeholder="email" required="" id="sign-in-email" />
                    </div>
                    <div className="form-item">
                        <label htmlFor="sign-in-password">Password</label>
                        <input type="text" placeholder="password" required="" id="sign-in-password" />
                    </div>
                    <div className="form-item">
                        <a href="#" className="myButton">Sign-In</a>
                        <p>Need to create an account? <a href="#">Register</a></p>
                    </div>
                </form>
            </section>

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

            <section className="dhr-page clearfix">

                <div className="alert alert-warning">
                    <i className="fas fa-exclamation"></i> <strong>Warning</strong> Please enter "equipment description"
    Identfiers!!
</div>

                <div className="alert alert-failure">
                    <i className="fas fa-times"></i> <strong>Failure</strong> "equipment name" is out of calibration!! Contact
    QA!!
</div>

                <div className="alert alert-warning">
                    <i className="fas fa-exclamation"></i> <strong>Warning</strong> Are you sure you want to submit DHR with
    missing
    test data!!
</div>

                <div className="alert alert-warning">
                    <i className="fas fa-exclamation"></i> <strong>Warning</strong> Please enter capactior defaultValue for Test
    Location TP1, C2 defaultValue
</div>

                <div className="alert alert-warning">
                    <i className="fas fa-exclamation"></i> <strong>Warning</strong> "test location name" fails to meet the test
    limits!! Are you sure
    you want to submit DHR??
</div>

                <div className="alert alert-success">
                    <i className="fas fa-check"></i> <strong>Success</strong> All test locations meet test limits!!
</div>

                <div className="alert alert-failure">
                    <i className="fas fa-times"></i> <strong>Failure</strong> "test location name" fails to meet test limits!!
</div>

                <h2>DHR Report</h2>

                <div className="divTable blueTable media">
                    <div className="divTableHeading">
                        <div className="divTableRow">
                            <div className="divTableHead">Assembly Details</div>
                            <div className="divTableHead">Identifier</div>
                        </div>
                    </div>

                    <div className="divTableBody">
                        <div className="divTableRow">
                            <div className="divTableCell">Assembly No.</div>
                            <div className="divTableCell">3.0T-124801</div>
                        </div>
                        <div className="divTableRow">
                            <div className="divTableCell">Assembly Name</div>
                            <div className="divTableCell">3.0T RF Trap</div>
                        </div>
                        <div className="divTableRow">
                            <div className="divTableCell">Applicable DMR</div>
                            <div className="divTableCell">3.0T-124DMR</div>
                        </div>
                        <div className="divTableRow">
                            <div className="divTableCell">Device S/N</div>
                            <div className="divTableCell">24106589</div>
                        </div>
                        <div className="divTableRow">
                            <div className="divTableCell">Work Order No.</div>
                            <div className="divTableCell">4578</div>
                        </div>
                        <div className="divTableRow">
                            <div className="divTableCell">Document ID No.</div>
                            <div className="divTableCell">1</div>
                        </div>
                        <div className="divTableRow">
                            <div className="divTableCell">Date Created</div>
                            <div className="divTableCell">2020-08-25</div>
                        </div>
                    </div>
                </div>

                <div className="divTable blueTable">
                    <div className="divTableHeading">
                        <div className="divTableRow">
                            <div className="divTableHead">Equipment Description</div>
                            <div className="divTableHead">Identifier</div>
                            <div className="divTableHead">Cal Due Date</div>
                        </div>
                    </div>
                    <div className="divTableBody">
                        <div className="divTableRow">
                            <div className="divTableCell">Network Analyzer</div>
                            <div className="divTableCell">2789</div>
                            <div className="divTableCell">2021-01-04</div>
                        </div>
                        <div className="divTableRow">
                            <div className="divTableCell">Power Supply</div>
                            <div className="divTableCell">1007</div>
                            <div className="divTableCell">2021-04-26</div>
                        </div>
                        <div className="divTableRow">
                            <div className="divTableCell">S21 Probe</div>
                            <div className="divTableCell">0078</div>
                            <div className="divTableCell">2022-12-23</div>
                        </div>
                        <div className="divTableRow">
                            <div className="divTableCell">Calibration Standard</div>
                            <div className="divTableCell">0003</div>
                            <div className="divTableCell">No Cal Required</div>
                        </div>
                    </div>
                </div>

                <div className="divTable blueTable">
                    <div className="divTableHeading">
                        <div className="divTableRow">
                            <div className="divTableHead">Test Location</div>
                            <div className="divTableHead">dB</div>
                            <div className="divTableHead">Test Freq<br />(MHz)</div>
                                <div className="divTableHead">C2 defaultValue<br />(pF)</div>
                                    <div className="divTableHead">C3 defaultValue<br />(pF)</div>
                                    </div>
                                </div>
                                <div className="divTableBody">
                                    <div className="divTableRow">
                                        <div className="divTableCell">TP1</div>
                                        <div className="divTableCell">-9</div>
                                        <div className="divTableCell">127.72</div>
                                        <div className="divTableCell">2.7</div>
                                        <div className="divTableCell">2.2</div>
                                    </div>
                                    <div className="divTableRow">
                                        <div className="divTableCell">TP2</div>
                                        <div className="divTableCell">-13</div>
                                        <div className="divTableCell">127.72</div>
                                        <div className="divTableCell">3.3</div>
                                        <div className="divTableCell">3.6</div>
                                    </div>
                                </div>
                            </div>

                            <div className="divTable blueTable">
                                <div className="divTableHeading">
                                    <div className="divTableRow">
                                        <div className="divTableHead">dB Limit</div>
                                        <div className="divTableHead">Frequency Range Limit<br />(MHz)</div>
                                    </div>
                                </div>
                                <div className="divTableBody">
                                    <div className="divTableRow">
                                        <div className="divTableCell">&lt;= -10</div>
                                        <div className="divTableCell">127.47 - 127.97</div>
                                    </div>
                                </div>
                            </div>

                            <div className="divTable blueTable">
                                <div className="divTableHeading">
                                    <div className="divTableRow">
                                        <div className="divTableHead">Tested By and Date</div>
                                    </div>
                                </div>
                                <div className="divTableBody">
                                    <div className="divTableRow">
                                        <div className="divTableCell">Jimmy Smith 2020-08-27</div>
                                    </div>
                                </div>
                                <a href="#" className="myButton">Submit for QA Inspect</a>
                            </div>

                            <div className="divTable blueTable">
                                <div className="divTableHeading">
                                    <div className="divTableRow">
                                        <div className="divTableHead">Inspected By and Date</div>
                                    </div>
                                </div>
                                <div className="divTableBody">
                                    <div className="divTableRow">
                                        <div className="divTableCell">Sally Day 2020-08-27</div>
                                    </div>
                                </div>

                                <a href="#" className="myButton">QA Approval</a>

                                <a href="#" className="myButton red">QA Reject</a>
                            </div>

                            <div className="divTable blueTable completed">
                                <div className="divTableHeading">
                                    <div className="divTableRow">
                                        <div className="divTableHead">Completed Date of Manufacture</div>
                                    </div>
                                </div>
                                <div className="divTableBody">
                                    <div className="divTableRow">
                                        <div className="divTableCell">2020-08-27</div>
                                    </div>
                                </div>
                            </div>

</section>

                        <section className="defect-log clearfix">
                            <h2>Defect Log</h2>

                            <h3>S/N: 24106589</h3>
                            <h3>NCM: 20-176</h3>

                            <div className="divTable blueTable clearfix fullWidth">
                                <div className="divTableHeading">
                                    <div className="divTableRow">
                                        <div className="divTableHead">User Entry</div>
                                        <div className="divTableHead">NCM<br />resolved? (Y/N)</div>
                                            <div className="divTableHead">Entered By</div>
                                            <div className="divTableHead">Date</div>

                                        </div>
                                    </div>
                                    <div className="divTableBody">
                                        <div className="divTableRow">
                                            <div className="divTableCell">TP#1 fails to meet dB limit</div>
                                            <div className="divTableCell">No</div>
                                            <div className="divTableCell">Sally Day</div>
                                            <div className="divTableCell">2020-08-27</div>

                                        </div>
                                        <div className="divTableRow">
                                            <div className="divTableCell">Found open condition at location C2<br />Add solder to C2 to remove open
                condition<br />Performed retest</div>
                                                <div className="divTableCell">No</div>
                                                <div className="divTableCell">Jimmy Smith</div>
                                                <div className="divTableCell">2020-08-27</div>

        </div>
                                                <div className="divTableRow">
                                                    <div className="divTableCell">Approved solder rework at location C2<br />confirmed passing test
                                                    results
                for TP#1</div>
                                                        <div className="divTableCell">Yes</div>
                                                        <div className="divTableCell">Sally Day</div>
                                                        <div className="divTableCell">2020-08-27</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="buttonWrapper clearfix">
                                                <a href="#" className="myButton">Submit</a>
                                            </div>


</section>
                                    </div>
  );
}

export default App;
