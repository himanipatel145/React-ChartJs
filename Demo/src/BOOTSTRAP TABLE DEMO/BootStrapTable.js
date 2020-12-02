import React, { useState, useEffect } from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from 'react-bootstrap-table2-paginator';
import * as ReactBootStrap from 'react-bootstrap';
import axios from 'axios';

const BootStrapTable = () => {

    const [players, setplayers] = useState([])
    //const [loading, setloading] = useState(false)

    const getPlayerData = async () => {
        try {
            const data = await axios.get('https://nba-players.herokuapp.com/players-stats');
            console.log(data);
            setplayers(data.data)
            //setloading(true)
        } catch (error) {
            console.log(error);
        }
    }
    const columns = [
        {
            dataField: 'name',
            text: 'Player Name'
        }, {
            dataField: 'points_per_game',
            text: 'Points Per Game'
        }, {
            dataField: 'team_name',
            text: 'Player team'
        }
    ]
    useEffect(() => {
        getPlayerData();
    }, [])

    const CaptionElement = () =>
        <>
            <h3
                style={{ borderRadius: '0.25em', textAlign: 'left', padding: '0.5em' }}>
                Manage User
            </h3>
        </>
    // const selectRow = {
    //     mode: 'checkbox',
    //     selected: [1, 3] 
    // };

    const selectRow = {
        mode: 'checkbox',
        selectionHeaderRenderer: ({ indeterminate, ...rest }) => (
        <input
           type="checkbox"
           ref={ (input) => {
           if (input) input.indeterminate = indeterminate;
           } }
           { ...rest }
           onClick={() => console.log(rest.checked)}
           onChange={()=>{}}
        />
        ),
          selectionRenderer: ({ mode, ...rest }) =>
        <div>
        <input
           type={ mode }
           checked={rest.checked}
           disabled={rest.disabled}
           rowindex={rest.rowIndex}
           onClick={() => console.log(rest.checked)}
           onChange={()=>{}}
        />
      </div>
    }
    return (
        <div className="container" style={{ marginTop: 50 }}>
            {/* {loading ? ( */}
                <BootstrapTable
                    caption={<CaptionElement />}
                    striped
                    hover
                    keyField='name'
                    data={players}
                    columns={columns}
                    pagination={paginationFactory()}
                    selectRow={selectRow}
                   // {...props.baseProps} 

                />
            {/* ) : (
                    <ReactBootStrap.Spinner animation='border' />
                )
                } */}

        </div>
    )
}

export default BootStrapTable;







































// import React, { Component } from 'react'
// import BootstrapTable from 'react-bootstrap-table-next';
// import axios from 'axios';
// export class BootStrapTable extends Component {
//     state = {
//         employee: [],
//         columns: [{
//             dataField: 'Id',
//             text: 'Id'
//         },
//         {
//             dataField: 'Name',
//             text: 'Name',
//             sort: true
//         }, {
//             dataField: 'Age',
//             text: 'Age',
//             sort: true
//         },
//         {
//             dataField: 'Address',
//             text: 'Address',
//             sort: true
//         },
//         {
//             dataField: 'City',
//             text: 'City',
//             sort: true
//         },
//         {
//             dataField: 'ContactNum',
//             text: 'ContactNum',
//             sort: true
//         },
//         {
//             dataField: 'Salary',
//             text: 'Salary',
//             sort: true
//         },
//         {
//             dataField: 'Department',
//             text: 'Department',
//             sort: true
//         }]
//     }
//     componentDidMount() {
//         axios.get('http://localhost:51760/Api/Emp/employee').then(response => {
//             console.log(response.data);
//             this.setState({
//                 employee: response.data
//             });
//         });
//     }
//     render() {
//         return (
//             <div className="container">
//                 <div class="row" className="hdr">
//                     <div class="col-sm-12 btn btn-info">
//                         React Bootstrap Table with Searching and Custom Pagination
//                          </div>
//                 </div>
//                 <div style={{ marginTop: 20 }}>
//                     <BootstrapTable
//                         striped
//                         hover
//                         keyField='id'
//                         data={this.state.employee}
//                         columns={this.state.columns} />
//                 </div>
//             </div>
//         )
//     }
// }

// export default BootStrapTable;



