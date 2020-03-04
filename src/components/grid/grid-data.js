export const gridColumnData = [
  { id: 'ticketNumber', label: 'Ticket Number', minWidth: 100 },
  { id: 'instanceId', label: 'Instance ID', minWidth: 100 },
  {
    id: 'processName',
    label: 'Process Name',
    minWidth: 100
  },
  {
    id: 'triggerName',
    label: 'Trigger Name',
    minWidth: 100
  },
  {
    id: 'version',
    label: 'Version',
    minWidth: 100,
    align: 'right'
  },
  {
    id: 'completed',
    label: 'Completed',
    minWidth: 100,
    align: 'center'
  },
  {
    id: 'createdDate',
    label: 'Created Date',
    minWidth: 100
  },
  {
    id: 'completedDate',
    label: 'Completed Date',
    minWidth: 100
  },
  {
    id: 'ticketStatus',
    label: 'Ticket Status',
    minWidth: 100
  }
];

function getWorkflow(a, b, c) {
  return {
    created: [{name: 'Create Ticket', step: a[0]}, {name: 'Assign User', step: a[1]}, {name: 'Add Task', step: a[2]}, {name: 'Update Customer', step: a[3]}],
    inProgress: [{name: 'Modify Ticket', step: b[0]}, {name: 'Change Primary Neid', step: b[1]}, {name: 'Start Work', step: b[2]}, {name: 'Stop Work', step: b[3]}],
    completed: [{name: 'Approval', step: c[0]}, {name: 'completed', step: c[1]}]
  };
}

function createData(
  ticketNumber,
  instanceId,
  processName,
  triggerName,
  version,
  completed,
  createdDate,
  completedDate,
  ticketStatus,
  isFailed,
  workflow,
  rowNum
) {
  return {
    ticketNumber,
    instanceId,
    processName,
    triggerName,
    version,
    completed,
    createdDate,
    completedDate,
    ticketStatus,
    isFailed,
    workflow,
    rowNum
  };
}
// 1-completed, 2-in progress,3-failed, 4-not started
export const gridRowData = [
  createData(
    20199122300153,
    5452628261,
    'HLO_ETTR',
    'HLO_ETTR',
    16,
    'Y',
    '22-DEC-19 02.30pm',
    '23-DEC-19 01.30pm',
    'Completed',
    false,
    getWorkflow([1,1,1,1], [1,1,1,1], [1,1])
  ),
  createData(
    20199122300154,
    5452628264,
    'HLO_ETTR',
    'HLO_ETTR',
    43,
    'Y',
    '22-DEC-19 02.30pm',
    '23-DEC-19 01.30pm',
    'In-Progress',
    false,
    getWorkflow([1,1,1,1], [1,1,1,2], [4,4])
  ),
  createData(
    20199122300156,
    5452628269,
    'HLO_ETTR',
    'HLO_ETTR',
    65,
    'Y',
    '22-DEC-19 02.30pm',
    '23-DEC-19 01.30pm',
    'Completed',
    true,
    getWorkflow([1,1,1,1], [1,1,1,1], [3,4])
  ),
  createData(
    20199122300157,
    5452628263,
    'HLO_ETTR',
    'HLO_ETTR',
    23,
    'Y',
    '22-DEC-19 02.30pm',
    '23-DEC-19 01.30pm',
    'Created',
    false,
    getWorkflow([1,1,1,1], [1,2,4,4], [4,4])
  ),
  createData(
    20199122300158,
    5452628266,
    'HLO_ETTR',
    'HLO_ETTR',
    10,
    'Y',
    '22-DEC-19 02.30pm',
    '23-DEC-19 01.30pm',
    'Completed',
    false,
    getWorkflow([1,1,1,1], [1,1,1,1], [1,1])
  ),
  createData(
    20199122300161,
    5452628270,
    'HLO_ETTR',
    'HLO_ETTR',
    10,
    'Y',
    '22-DEC-19 02.30pm',
    '23-DEC-19 01.30pm',
    'Completed',
    false,
    getWorkflow([1,1,1,1], [1,1,1,1], [1,1])
  ),
  createData(
    20199122300168,
    5452628276,
    'HLO_ETTR',
    'HLO_ETTR',
    10,
    'Y',
    '22-DEC-19 02.30pm',
    '23-DEC-19 01.30pm',
    'In-Progress',
    false,
    getWorkflow([1,1,1,1], [1,1,1,1], [2,4])
  ),
  createData(
    20199122300153,
    5452628261,
    'HLO_ETTR',
    'HLO_ETTR',
    16,
    'Y',
    '22-DEC-19 02.30pm',
    '23-DEC-19 01.30pm',
    'Completed',
    false,
    getWorkflow([1,1,1,1], [1,1,1,1], [1,1])
  ),
  createData(
    20199122300154,
    5452628264,
    'HLO_ETTR',
    'HLO_ETTR',
    43,
    'Y',
    '22-DEC-19 02.30pm',
    '23-DEC-19 01.30pm',
    'In-Progress',
    false,
    getWorkflow([1,1,1,1], [1,1,1,1], [2,4])
  ),
  createData(
    20199122300156,
    5452628269,
    'HLO_ETTR',
    'HLO_ETTR',
    65,
    'Y',
    '22-DEC-19 02.30pm',
    '23-DEC-19 01.30pm',
    'Completed',
    false,
    getWorkflow([1,1,1,1], [1,1,1,1], [1,1])
  ),
  createData(
    20199122300157,
    5452628263,
    'HLO_ETTR',
    'HLO_ETTR',
    23,
    'Y',
    '22-DEC-19 02.30pm',
    '23-DEC-19 01.30pm',
    'Completed',
    false,
    getWorkflow([1,1,1,1], [1,1,1,1], [1,1])
  ),
  createData(
    20199122300158,
    5452628266,
    'HLO_ETTR',
    'HLO_ETTR',
    10,
    'Y',
    '22-DEC-19 02.30pm',
    '23-DEC-19 01.30pm',
    'Completed',
    false,
    getWorkflow([1,1,1,1], [1,1,1,1], [1,1])
  ),
  createData(
    20199122300161,
    5452628270,
    'HLO_ETTR',
    'HLO_ETTR',
    10,
    'Y',
    '22-DEC-19 02.30pm',
    '23-DEC-19 01.30pm',
    'Completed',
    false,
    getWorkflow([1,1,1,1], [1,1,1,1], [1,1])
  ),
  createData(
    20199122300168,
    5452628276,
    'HLO_ETTR',
    'HLO_ETTR',
    10,
    'Y',
    '22-DEC-19 02.30pm',
    '23-DEC-19 01.30pm',
    'In-Progress',
    false,
    getWorkflow([1,1,1,1], [1,1,1,1], [1,2])
  )
];
