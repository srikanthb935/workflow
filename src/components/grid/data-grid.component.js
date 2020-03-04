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

import { gridColumnData, gridRowData } from './grid-data';

import './style.css';

class DataGrid extends Component {
  constructor() {
    super();
    this.state = { rowsPerPage: 10, page: 0, open: false, activeStep: 1, skipped: new Set(), stepName: '', rowNum: ''};
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

  handleClickOpen = event => {
    if (event.target.innerText && event.target.innerText) {
      let Status = {
        CREATED: 1,
        'IN-PROGRESS': 2,
        COMPLETED: 3
      };
      this.setState({ activeStep: Status[event.target.innerText] });
      this.setState({ rowNum: event.target.className });
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

  onStepClick = event => {
    this.setState({ stepName: event.target.innerText });
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
                    {gridColumnData.map(column => (
                      <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {gridRowData
                    .slice(
                      this.state.page * this.state.rowsPerPage,
                      this.state.page * this.state.rowsPerPage + this.state.rowsPerPage
                    )
                    .map((row, rowIndex) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                          {gridColumnData.map(column => {
                            const value = row[column.id];
                            if (column.id === 'ticketStatus') {
                              return (
                                <TableCell key={column.id} align={column.align}>
                                  <Button color="primary" onClick={this.handleClickOpen} >
                                    <span className={rowIndex}>{column.format && typeof value === 'number' ? column.format(value) : value}</span>
                                  </Button>
                                </TableCell>
                              );
                            } else {
                              return (
                                <TableCell key={column.id} align={column.align}>
                                  <span className={rowIndex}>{column.format && typeof value === 'number' ? column.format(value) : value}</span>
                                </TableCell>
                              );
                            }
                          })}
                        </TableRow>
                      );
                    })}
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
              <div className="stepper-container">
                <Stepper activeStep={this.state.activeStep}>
                  {this.steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (this.isStepSkipped(index)) {
                      stepProps.completed = false;
                    }
                    return (
                      <Step key={label} {...stepProps}>
                        <StepLabel {...labelProps} onClick={this.onStepClick} className="step-label-cursor">
                          <span>{label}</span>
                        </StepLabel>
                      </Step>
                    );
                  })}
                </Stepper>
              </div>
              <div>
                {this.state.stepName === 'Created' && (
                  <List>
                    {gridRowData[this.state.rowNum].workflow.created.map((p, index) => {
                      return (
                        <ListItem className={'color-' + p.step}>
                          <ListItemText primary={p.name}></ListItemText>
                        </ListItem>
                      );
                    })}
                  </List>
                )}
                {this.state.stepName === 'In-Progress' && (
                  <List>
                    {gridRowData[this.state.rowNum].workflow.inProgress.map((q, index) => {
                      return (
                        <ListItem className={'color-' + q.step}>
                          <ListItemText primary={q.name}></ListItemText>
                        </ListItem>
                      );
                    })}
                  </List>
                )}
                {this.state.stepName === 'Completed' && (
                  <List>
                    {gridRowData[this.state.rowNum].workflow.completed.map((r, index) => {
                      return (
                        <ListItem className={'color-' + r.step}>
                          <ListItemText primary={r.name}></ListItemText>
                        </ListItem>
                      );
                    })}
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

export default DataGrid;
