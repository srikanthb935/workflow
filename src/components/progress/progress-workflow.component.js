import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';

import { gridColumnData, gridRowData } from './../grid/grid-data';

import './styles.css';

class ProgressWorkflow extends Component {
  constructor() {
    super();
    this.state = { rowsPerPage: 10, page: 0, open: false, activeStep: 1, skipped: new Set(), stepName: '' };
  }

  steps = ['Created', 'In-Progress', 'Completed'];
  clickedState = this.steps[0];

  handleChangePage = (event, newPage) => {
    this.setState({ page: newPage });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: +event.target.value });
    this.setState({ page: 0 });
  };

  openStatus = () => {
    if (this.openDialog) {
      this.openDialog();
    }
  };

  getActiveStep = statusCode => {
    let Status = {
      CREATED: 1,
      'IN-PROGRESS': 2,
      COMPLETED: 3
    };
    return Status[statusCode.toUpperCase()];
  };

  getStatusClassName(code, isMultiColumn) {
    switch (code) {
      case 'Created':
        return isMultiColumn ? 'multi-gray' : 'gray';
        break;
      case 'In-Progress':
        return isMultiColumn ? 'multi-yellow' : 'yellow';
        break;
      case 'Completed':
        return isMultiColumn ? 'multi-green' : 'green';
        break;
      default:
        return isMultiColumn ? 'multi-none' : 'none';
        break;
    }
  }

  onStepClick = event => {
    if (event.target.innerText) {
      this.setState({ stepName: event.target.innerText });
      setTimeout(() => {
        this.setState({ open: true });
      });
    }
  };

  handleClose = () => {
    this.setState({ open: false });
    this.setState({ stepName: '' });
  };

  isStepSkipped = step => {
    return this.state.skipped.has(step);
  };

  render() {
    return (
      <div className="main-container">
        <div className="header-cls">Workflow</div>
        <div>
          <Paper className="paper-container">
            <TableContainer className="table-container">
              <Table stickyHeader size="small">
                <TableHead>
                  <TableRow>
                    {gridColumnData.map(column => {
                      if (column.id !== 'ticketStatus') {
                        return (
                          <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                            {column.label}
                          </TableCell>
                        );
                      }
                    })}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {gridRowData
                    .slice(
                      this.state.page * this.state.rowsPerPage,
                      this.state.page * this.state.rowsPerPage + this.state.rowsPerPage
                    )
                    .map(row => (
                      <React.Fragment>
                        <TableRow role="checkbox" tabIndex={-1} key={row.code} className="row-data">
                          {gridColumnData.map(column => {
                            const value = row[column.id];
                            if (column.id !== 'ticketStatus') {
                              return (
                                <TableCell
                                  key={column.id}
                                  align={column.align}
                                  className={this.getStatusClassName(row['ticketStatus'], true)}
                                >
                                  {column.format && typeof value === 'number' ? column.format(value) : value}
                                </TableCell>
                              );
                            }
                          })}
                        </TableRow>
                        <TableRow role="checkbox" tabIndex={-1} key={row.code} className="row-stepper">
                          {gridColumnData.map(column => {
                            if (column.id === 'ticketStatus') {
                              return (
                                <TableCell colSpan="8" className={this.getStatusClassName(row[column.id], false)}>
                                  <div className="stepper-container">
                                    <Stepper activeStep={this.getActiveStep(row[column.id])}>
                                      {this.steps.map((label, index) => {
                                        const stepProps = {};
                                        const labelProps = {};
                                        if (this.isStepSkipped(index)) {
                                          stepProps.completed = false;
                                        }
                                        return (
                                          <Step key={label} {...stepProps}>
                                            <StepLabel
                                              {...labelProps}
                                              onClick={this.onStepClick}
                                              className="step-label-cursor"
                                            >
                                              {label}
                                            </StepLabel>
                                          </Step>
                                        );
                                      })}
                                    </Stepper>
                                  </div>
                                </TableCell>
                              );
                            }
                          })}
                        </TableRow>
                      </React.Fragment>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, 100]}
              component="div"
              count={gridRowData.length}
              rowsPerPage={this.state.rowsPerPage}
              page={this.state.page}
              onChangePage={this.handleChangePage}
              onChangeRowsPerPage={this.handleChangeRowsPerPage}
            />
          </Paper>
        </div>
        <div>
          <Dialog onClose={this.handleClose} open={this.state.open} maxWidth="md" fullWidth={true}>
            <DialogTitle id="ticket-status-dialog-title" onClose={this.handleClose}>
              Ticket Status
            </DialogTitle>
            <DialogContent dividers>
              <div>
                {this.state.stepName === 'Created' && (
                  <List>
                    <ListItem>
                      <ListItemText primary="Create Ticket"></ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Assign User"></ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Add Task"></ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Update Customer"></ListItemText>
                    </ListItem>
                  </List>
                )}
                {this.state.stepName === 'In-Progress' && (
                  <List>
                    <ListItem>
                      <ListItemText primary="Modify Ticket"></ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Change Primary Neid"></ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Start Work"></ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Stop Work"></ListItemText>
                    </ListItem>
                  </List>
                )}
                {this.state.stepName === 'Completed' && (
                  <List>
                    <ListItem>
                      <ListItemText primary="Completed"></ListItemText>
                    </ListItem>
                  </List>
                )}
              </div>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={this.handleClose} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    );
  }
}

export default ProgressWorkflow;
