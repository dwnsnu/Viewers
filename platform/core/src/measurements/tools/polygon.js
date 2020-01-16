const displayFunction = data => {
  let lengthValue = '';
  if (data.length) {
    lengthValue = data.length.toFixed(2) + ' mm';
  }
  return lengthValue;
};

export const polygon = {
  id: 'Polygon',
  name: 'Polygon',
  toolGroup: 'allTools',
  cornerstoneToolType: 'Polygon',
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
