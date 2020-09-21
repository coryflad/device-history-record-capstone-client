import React from 'react'


function DefectLog() {
    return (
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
    )
}

export default DefectLog
