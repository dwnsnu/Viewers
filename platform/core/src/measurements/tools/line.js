const displayFunction = data => {
  let lengthValue = '';
  if (data.length) {
    lengthValue = data.length.toFixed(2) + ' mm';
  }
  return lengthValue;
};

export const line = {
  id: 'Line',
  name: 'Line',
  toolGroup: 'allTools',
  cornerstoneToolType: 'Line',
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
