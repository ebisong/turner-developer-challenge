import React, { Component } from 'react';

import ReactTable from 'react-table';
import 'react-table/react-table.css'
import DetailsPage from "./DetailsPage";


class ResultsList extends Component {
  state = {
    title: {
      TitleName: '',
      TitleId: '',
      ReleaseYear: ''
    },
    detailsOpen: false
  };

   handleTdProps = (state, rowInfo, column) => {
     return {
       onClick: () => {
         this.setState({
           detailsOpen: true,
           title: rowInfo.original
         });
       }
     }
   };

   closeDetails = () => {
     this.setState({ detailsOpen: false })
   };

   render() {
    const columns = [
      {
        Header: 'Title ID',
        accessor: 'TitleId'
      },
      {
        Header: 'Title Name',
        accessor: 'TitleName'
      },
      {
        Header: 'Release Year',
        accessor: 'ReleaseYear'
      }
    ];
    return (
      <div>
        <DetailsPage title={this.state.title}
                     open={this.state.detailsOpen}
                     handleClose={this.closeDetails}
        />
        <ReactTable
          data={this.props.titles}
          getTdProps={this.handleTdProps}
          columns={columns}
        />
      </div>
    )
  }
}

export default ResultsList;
