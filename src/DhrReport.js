import React from 'react'


function DhrReport() {
    return (
        <section className="dhr-page clearfix">

            <div className="alert alert-warning">
                <i className="fas fa-exclamation"></i> <strong>Warning</strong> Please enter "equipment description" Identfiers!!
            </div>

            <div className="alert alert-failure">
                <i className="fas fa-times"></i> <strong>Failure</strong> "equipment name" is out of calibration!! Contact QA!!
                </div>

            <div className="alert alert-warning">
                <i className="fas fa-exclamation"></i> <strong>Warning</strong> Are you sure you want to submit DHR with missing test data!!
            </div>

            <div className="alert alert-warning">
                <i className="fas fa-exclamation"></i> <strong>Warning</strong> Please enter capactior defaultValue for Test Location TP1, C2 defaultValue
            </div>

            <div className="alert alert-warning">
                <i className="fas fa-exclamation"></i> <strong>Warning</strong> "test location name" fails to meet the test limits!! Are you sure you want to submit DHR??
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
    )
}

export default DhrReport
