  clearAnnotations: ({ viewports }) => {
    const element = _getActiveViewportEnabledElement(
      viewports.viewportSpecificData,
      viewports.activeViewportIndex
    );
    if (!element) {
      return;
    }

    const enabledElement = cornerstone.getEnabledElement(element);
    if (!enabledElement || !enabledElement.image) {
      return;
    }

    const {
      toolState,
    } = cornerstoneTools.globalImageIdSpecificToolStateManager;
    console.log('temptemp',toolState);
      
    if (
      !toolState ||
      toolState.hasOwnProperty(enabledElement.image.imageId) === false
    ) {
      return;
    }

    const imageIdToolState = toolState[enabledElement.image.imageId];

    const measurementsToRemove = [];

    Object.keys(imageIdToolState).forEach(toolType => {
      const { data } = imageIdToolState[toolType];

      data.forEach(measurementData => {
        const { _id, lesionNamingNumber, measurementNumber } = measurementData;
        if (!_id) {
          return;
        }

        measurementsToRemove.push({
          toolType,
          _id,
          lesionNamingNumber,
          measurementNumber,
        });
      });
    });

    measurementsToRemove.forEach(measurementData => {
      OHIF.measurements.MeasurementHandlers.onRemoved({
        detail: {
          toolType: measurementData.toolType,
          measurementData,
        },
      });
    });

  },
