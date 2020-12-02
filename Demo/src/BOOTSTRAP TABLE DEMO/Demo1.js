// var React = require('react');
// var ReactBsTable = require('react-bootstrap-table');
// var BootstrapTable = ReactBsTable.BootstrapTable;
// var TableHeaderColumn = ReactBsTable.TableHeaderColumn;

// var DemoApp = React.createClass({
//     getInitialState: function () {
//         /*
//           segments is a simple data for table
//           selected is mean that selected row on table. default is empty
//         */
//         return {
//             segments:this.props.data,
//             selected: []
//         };
//     },
    
//     selectFirstRow: function(e){
//       this.setState({
//         selected: [this.props.data[0].unitId]
//       });
//     },

//     unselectAllRow: function(e){
//       this.setState({
//         selected: []
//       });
//     },

//     render: function () {
//         var selectRowProp = {
//             mode: "checkbox",
//             clickToSelect: true,
//             selected: this.state.selected  //give a default selected row.
//         };
//         /*
//          Render the DemoTable and push down the data and selected to it.
//         */
//         return (
//           <div>
//             <div>
//               <button onClick={this.selectFirstRow}>Dynamic select first row</button>
//               <button onClick={this.unselectAllRow}>Dynamic unselect all row</button>
//             </div>
//             <div>
//               <BootstrapTable pagination={true} selectRow={selectRowProp} search={true} data={this.state.segments} hover={true}>
//                 <TableHeaderColumn isKey={true} dataField="unitId" dataSort={true}>ID</TableHeaderColumn>
//                 <TableHeaderColumn dataField="unitName" dataSort={true}>Name</TableHeaderColumn>
//                 <TableHeaderColumn dataField="schemaId" dataSort={true}>Scheme</TableHeaderColumn>
//               </BootstrapTable>
//             </div>
//           </div>
//         );
//     }
// });

// module.exports = DemoApp;