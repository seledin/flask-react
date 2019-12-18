import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import { capitalizeString } from '../utils_dates/functions'

class TableComponent extends Component {	

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      keywords: []
		};
  }

  render() {

    var tableHeaders = this.props.tableData.headers.map(( entity, index ) => {
      return (
        <th key={index} className="align-top">{entity}</th>
      );
    })

    var tableRows = this.props.tableData.data.map(( entity, index ) => {
      let cells = entity.map((e,i) => {

        if(e !== null){
          if(i>0){
            return <td key = {i}>{e.toFixed(2)}</td>
          }else{
            return <td key = {i}>{capitalizeString(e)}</td>
          }
        }else{
          if(i>0){
            return <td key = {i}>{"null"}</td>
          }else{
            return <td key = {i}>{"null"}</td>
          }
        }
      })
      
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          {cells}
        </tr>
      );
    })

    return (
		<div className="table_div">
      <span className="center"><h3>{this.props.title}</h3></span>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="align-top">#</th>
            <th className="align-top">Keyword</th>
            {tableHeaders}
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </Table>
		</div>
		);
  }
}

export default TableComponent