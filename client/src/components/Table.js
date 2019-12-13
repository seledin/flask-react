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
        <th key={index}>{entity}</th>
      );
    })

    var tableRows = this.props.tableData.data.map(( entity, index ) => {
      let cells = entity.map((e,i) => {
        if(i>0){
          return <td key = {i}>{e.toFixed(2)}</td>
        }else{
          return <td key = {i}>{capitalizeString(e)}</td>
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
            <th>#</th>
            <th>Keyword</th>
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