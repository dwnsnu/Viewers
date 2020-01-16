const displayFunction = data => {
  let lengthValue = '';
  if (data.length) {
    lengthValue = data.length.toFixed(2) + ' mm';
  }
  return lengthValue;
};

export const polyline = {
  id: 'Polyline',
  name: 'Polyline',
  toolGroup: 'allTools',
  cornerstoneToolType: 'Polyline',
  options: {
    measurementTable: {
      displayFunction,
    },
    caseProgress: {
      include: true,
      evaluate: true,
    },
  },
};
