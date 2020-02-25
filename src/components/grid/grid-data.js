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

function createData(
  ticketNumber,
  instanceId,
  processName,
  triggerName,
  version,
  completed,
  createdDate,
  completedDate,
  ticketStatus
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
    ticketStatus
  };
}

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
    'Completed'
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
    'In-Progress'
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
    'Completed'
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
    'Created'
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
    'Completed'
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
    'Completed'
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
    'In-Progress'
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
    'Completed'
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
    'In-Progress'
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
    'Completed'
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
    'Completed'
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
    'Completed'
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
    'Completed'
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
    'In-Progress'
  )
];
