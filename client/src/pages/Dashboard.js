import React from 'react'
import MainLayout from '../layout/MainLayout'

function Dashboard() {
  return (

        // <div className='dash-contain'>
        //     <div className='user-proposals'>   
        //         <ul>
        //             <li>registered users</li>
        //             <li> </li>
        //         </ul>
        //     </div>
        //     <div className='accept-reject'>
        //         <button>
        //             accept
        //         </button>
        //         <button>
        //             reject
        //         </button>
        //     </div>
        // </div>
    <MainLayout>
        <div className="border"></div>
        <div className="prod-wrapper" >

            

            <div className="prod_browse">
                <h2>Dashboard</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody id="userTableBody">
                        <tr className='user-info'>
                            <td>
                                test
                            </td>
                            <td>
                                test
                            </td>
                            <td>
                                <button className='accept'>Accept</button>
                                <button className='reject'>Reject</button>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>

        </div>
    </MainLayout>

  )
}

export default Dashboard