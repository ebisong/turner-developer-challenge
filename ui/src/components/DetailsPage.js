import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import blue from '@material-ui/core/colors/blue';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
};
class DetailsPage extends Component {

  render() {
    return (
      <div>
        <Dialog
          modal={false.toString()}
          open={this.props.open}
          onClose={this.props.handleClose}
        >
          <DialogTitle id="simple-dialog-title">Title Details</DialogTitle>

          <br/><br /><br />
          <h3>ID:</h3> { this.props.title.TitleId }
          <br /><br />
          <h3>Name:</h3>
          { this.props.title.TitleName }
          <br /><br />
          <h3>Release Year:</h3>
          { this.props.title.ReleaseYear }
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(DetailsPage);;
