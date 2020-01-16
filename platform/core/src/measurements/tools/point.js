const displayFunction = data => {
  let meanValue = '';
  const { cachedStats } = data;
  if (cachedStats && cachedStats.mean) {
    meanValue = cachedStats.mean.toFixed(2) + ' HU';
  }
  return meanValue;
};

export const point = {
  id: 'Point',
  name: 'Point',
  toolGroup: 'allTools',
  cornerstoneToolType: 'Point',
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
