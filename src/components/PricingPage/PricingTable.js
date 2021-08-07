import React, { Component } from 'react'
import './pricingTable.css'

export default class PricingTable extends Component {
    render() {
        return (
            <article className="pricing_table_main_div">


                <table>
                    <thead className="pricing_table_plans">
                        <tr>
                        <th className="hide"></th>
                        <th>FREE</th>
                        <th>STARTUP</th>
                        <th>PROFESSIONAL</th>
                        <th>ENTERPRISE</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Monthly price</td>
                            <td><span className="txt-top">&#8377;</span><span className="txt-l">0</span></td>
                            <td><span className="txt-top">&#8377;</span><span className="txt-l">1999</span></td>
                            <td><span className="txt-top">&#8377;</span><span className="txt-l">4999</span></td>
                            <td><span className="txt-top">&#8377;</span><span className="txt-l">custom</span></td>
                        </tr>
                        <tr>
                            <td>Yearly price</td>
                            <td><span className="txt-top">&#8377;</span><span className="txt-l">0</span></td>
                            <td><span className="txt-top">&#8377;</span><span className="txt-l">999</span></td>
                            <td><span className="txt-top">&#8377;</span><span className="txt-l">2999</span></td>
                            <td><span className="txt-top">&#8377;</span><span className="txt-l">custom</span></td>
                        </tr>
                        
                        <tr>
                            <td colSpan="5" className="sep">Transaction Features</td>
                        </tr>

                        <tr>
                            <td>Number Of Auctions Per Month</td>
                            <td><span >1</span></td>
                            <td><span >4</span></td>
                            <td><span >10</span></td>
                            <td><span >unlimited</span></td>
                        </tr>

                        <tr>
                            <td>Number Of RFQ Per Month</td>
                            <td><span >7</span></td>
                            <td><span >12</span></td>
                            <td><span >25</span></td>
                            <td><span >unlimited</span></td>
                        </tr>

                        <tr>
                            <td>View reports</td>
                            <td><span >1 Month History</span></td>
                            <td><span >3 Month History</span></td>
                            <td><span > Month History</span></td>
                            <td><span >Lifetime Reports</span></td>
                        </tr>

                        <tr>
                            <td>Chat With Supplier</td>
                            <td><span className="notick">&#10008;</span></td>
                            <td><span className="notick">&#10008;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                        </tr>

                        <tr>
                            <td>Live Monitoring Of Auctions</td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                        </tr>

                        <tr>
                            <td>Quick Auction Setup</td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                        </tr>

                        <tr>
                            <td colSpan="5" className="sep">Supplier Features</td>
                        </tr>

                        <tr>
                            <td>Supplier Management Module</td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                        </tr>

                        <tr>
                            <td>Maximum Supplier Limit</td>
                            <td><span >10</span></td>
                            <td><span >30</span></td>
                            <td><span >100</span></td>
                            <td><span >unlimited</span></td>
                        </tr>

                        <tr>
                            <td>Maximum Item List</td>
                            <td><span >10</span></td>
                            <td><span >10</span></td>
                            <td><span >100</span></td>
                            <td><span >unlimited</span></td>
                        </tr>

                        <tr>
                            <td colSpan="5" className="sep">Buyer Group Features</td>
                        </tr>

                        <tr>
                            <td>Login Access</td>
                            <td><span >Single</span></td>
                            <td><span >Single</span></td>
                            <td><span >Two</span></td>
                            <td><span >Multiple</span></td>
                        </tr>

                        <tr>
                            <td>View Access Control</td>
                            <td><span >No</span></td>
                            <td><span >No</span></td>
                            <td><span >3 Groups</span></td>
                            <td><span >Multiple</span></td>
                        </tr>

                        <tr>
                            <td>Maximum Groups</td>
                            <td><span >1</span></td>
                            <td><span >1</span></td>
                            <td><span >3</span></td>
                            <td><span >Multiple</span></td>
                        </tr>

                        <tr>
                            <td colSpan="5" className="sep">Add-Ons Features</td>
                        </tr>

                        <tr>
                            <td>Industry Templets</td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                        </tr>

                        <tr>
                            <td>Emails Notifications</td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                        </tr>

                        <tr>
                            <td>Auction OTP</td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                        </tr>

                        <tr>
                            <td>Forward Auction</td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                        </tr>

                        <tr>
                            <td>Notifications Activation</td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                        </tr>

                        <tr>
                            <td>Social Media Integration</td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                        </tr>

                        <tr>
                            <td>Reverse Auction</td>
                            <td><span className="notick">&#10008;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                        </tr>

                        <tr>
                            <td>Auto Report Emailers</td>
                            <td><span className="notick">&#10008;</span></td>
                            <td><span className="notick">&#10008;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                        </tr>

                        <tr>
                            <td>3rd Party API Integrations</td>
                            <td><span className="notick">&#10008;</span></td>
                            <td><span className="notick">&#10008;</span></td>
                            <td><span className="tick">&#10004;*</span></td>
                            <td><span className="tick">&#10004;</span></td>
                        </tr>

                        <tr>
                            <td>Supplier URL Customizations</td>
                            <td><span className="notick">&#10008;</span></td>
                            <td><span className="notick">&#10008;</span></td>
                            <td><span className="tick">&#10004;*</span></td>
                            <td><span className="tick">&#10004;</span></td>
                        </tr>

                        <tr>
                            <td>ASN Integrations</td>
                            <td><span className="notick">&#10008;</span></td>
                            <td><span className="notick">&#10008;</span></td>
                            <td><span className="tick">&#10004;*</span></td>
                            <td><span className="tick">&#10004;</span></td>
                        </tr>

                        <tr>
                            <td>Barcode Integrations</td>
                            <td><span className="notick">&#10008;</span></td>
                            <td><span className="notick">&#10008;</span></td>
                            <td><span className="tick">&#10004;*</span></td>
                            <td><span className="tick">&#10004;</span></td>
                        </tr>

                        <tr>
                            <td colSpan="5" className="sep">Reports</td>
                        </tr>

                        <tr>
                            <td>Saving Dashboard</td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                        </tr>

                        <tr>
                            <td>Reports Downloads</td>
                            <td><span className="notick">&#10008;</span></td>
                            <td><span>pdf</span></td>
                            <td><span>pdf + excel</span></td>
                            <td><span>all formats</span></td>
                        </tr>

                        <tr>
                            <td>Custom Reports</td>
                            <td><span className="notick">&#10008;</span></td>
                            <td><span className="notick">&#10008;</span></td>
                            <td><span className="notick">&#10008;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                        </tr>

                        <tr>
                            <td>JIT & OTIF</td>
                            <td><span className="notick">&#10008;</span></td>
                            <td><span className="notick">&#10008;</span></td>
                            <td><span className="notick">&#10008;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                        </tr>

                        <tr>
                            <td colSpan="5" className="sep">Reports</td>
                        </tr>

                        <tr>
                            <td>Video Tutorials</td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                        </tr>

                        <tr>
                            <td>Activation / Trial Support</td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                        </tr>

                        <tr>
                            <td>Custom Support</td>
                            <td><span>Email</span></td>
                            <td><span>Email / Chat</span></td>
                            <td><span>Email / Chat / Phone</span></td>
                            <td><span>Dedicated Mobile</span></td>
                        </tr>

                        <tr>
                            <td>Dedicated Account Manager</td>
                            <td><span className="notick">&#10008;</span></td>
                            <td><span className="notick">&#10008;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                        </tr>

                    </tbody>
                </table>

                <br/>

                <div className="additional_cost">
                    <span>&#10004;*</span> : At Additional Cost
                </div>
                
            </article>
        )
    }
}
