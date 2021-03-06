import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { MODULE_TYPES } from '@ohif/core';
import OHIF from '@ohif/core';
import moment from 'moment';
import ConnectedHeader from './ConnectedHeader.js';
import ConnectedToolbarRow from './ConnectedToolbarRow.js';
import ConnectedToolbarCol from './ConnectedToolbarCol.js';
import ConnectedLabellingOverlay from './ConnectedLabellingOverlay';
import ConnectedStudyBrowser from './ConnectedStudyBrowser.js';
import ConnectedViewerMain from './ConnectedViewerMain.js';
import SidePanel from './../components/SidePanel.js';
import { extensionManager } from './../App.js';
import cornerstone from 'cornerstone-core';
// import HistIcon from './histogram.png';
// import histIcon from './histogram.png';
// Contexts
import WhiteLabellingContext from '../context/WhiteLabellingContext.js';
import UserManagerContext from '../context/UserManagerContext';

//histogram
import Histogram from './Histogram';

import './Viewer.css';
/**
 * Inits OHIF Hanging Protocol's onReady.
 * It waits for OHIF Hanging Protocol to be ready to instantiate the ProtocolEngine
 * Hanging Protocol will use OHIF LayoutManager to render viewports properly
 */
/*const initHangingProtocol = () => {
    // When Hanging Protocol is ready
    HP.ProtocolStore.onReady(() => {

        // Gets all StudyMetadata objects: necessary for Hanging Protocol to access study metadata
        const studyMetadataList = OHIF.viewer.StudyMetadataList.all();

        // Instantiate StudyMetadataSource: necessary for Hanging Protocol to get study metadata
        const studyMetadataSource = new OHIF.studies.classes.OHIFStudyMetadataSource();

        // Get prior studies map
        const studyPriorsMap = OHIF.studylist.functions.getStudyPriorsMap(studyMetadataList);

        // Creates Protocol Engine object with required arguments
        const ProtocolEngine = new HP.ProtocolEngine(layoutManager, studyMetadataList, studyPriorsMap, studyMetadataSource);

        // Sets up Hanging Protocol engine
        HP.setEngine(ProtocolEngine);
    });
};*/

/*const viewportUtils = OHIF.viewerbase.viewportUtils;

OHIF.viewer.functionList = {
    toggleCineDialog: viewportUtils.toggleCineDialog,
    toggleCinePlay: viewportUtils.toggleCinePlay,
    clearTools: viewportUtils.clearTools,
    resetViewport: viewportUtils.resetViewport,
    invert: viewportUtils.invert
};*/
// const imageId = null;

// console.log("imageId", imageId)
class Viewer extends Component {
  static propTypes = {
    studies: PropTypes.array,
    studyInstanceUids: PropTypes.array,
    onTimepointsUpdated: PropTypes.func,
    onMeasurementsUpdated: PropTypes.func,
    // window.store.getState().viewports.viewportSpecificData
    viewports: PropTypes.object.isRequired,
    // window.store.getState().viewports.activeViewportIndex
    activeViewportIndex: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);
    OHIF.measurements.MeasurementApi.setConfiguration({
      dataExchange: {
        retrieve: this.retrieveMeasurements,
        store: this.storeMeasurements,
      },
    });

    OHIF.measurements.TimepointApi.setConfiguration({
      dataExchange: {
        retrieve: this.retrieveTimepoints,
        store: this.storeTimepoints,
        remove: this.removeTimepoint,
        update: this.updateTimepoint,
        disassociate: this.disassociateStudy,
      },
    });
  }

  state = {
    isLeftSidePanelOpen: false,
    isRightSidePanelOpen: true,
    selectedRightSidePanel: '',
    selectedLeftSidePanel: 'studies', // TODO: Don't hardcode this
    thumbnails: [],
    isDicom: false,
    loadImage: null,
    histogramvisible: false,
  };

  retrieveMeasurements = (patientId, timepointIds) => {
    OHIF.log.info('retrieveMeasurements');
    // TODO: Retrieve the measurements from the latest available SR
    return Promise.resolve();
  };

  storeMeasurements = (measurementData, timepointIds) => {
    OHIF.log.info('storeMeasurements');
    // TODO: Store the measurements into a new SR sent to the active server
    return Promise.resolve();
  };

  retrieveTimepoints = filter => {
    OHIF.log.info('retrieveTimepoints');

    // Get the earliest and latest study date
    let earliestDate = new Date().toISOString();
    let latestDate = new Date().toISOString();
    if (this.props.studies) {
      latestDate = new Date('1000-01-01').toISOString();
      this.props.studies.forEach(study => {
        const studyDate = moment(study.studyDate, 'YYYYMMDD').toISOString();
        if (studyDate < earliestDate) {
          earliestDate = studyDate;
        }
        if (studyDate > latestDate) {
          latestDate = studyDate;
        }
      });
    }

    // Return a generic timepoint
    return Promise.resolve([
      {
        timepointType: 'baseline',
        timepointId: 'TimepointId',
        studyInstanceUids: this.props.studyInstanceUids,
        patientId: filter.patientId,
        earliestDate,
        latestDate,
        isLocked: false,
      },
    ]);
  };

  storeTimepoints = timepointData => {
    OHIF.log.info('storeTimepoints');
    return Promise.resolve();
  };

  updateTimepoint = (timepointData, query) => {
    OHIF.log.info('updateTimepoint');
    return Promise.resolve();
  };

  removeTimepoint = timepointId => {
    OHIF.log.info('removeTimepoint');
    return Promise.resolve();
  };

  disassociateStudy = (timepointIds, studyInstanceUid) => {
    OHIF.log.info('disassociateStudy');
    return Promise.resolve();
  };

  onTimepointsUpdated = timepoints => {
    if (this.props.onTimepointsUpdated) {
      this.props.onTimepointsUpdated(timepoints);
    }
  };

  onMeasurementsUpdated = measurements => {
    if (this.props.onMeasurementsUpdated) {
      this.props.onMeasurementsUpdated(measurements);
    }
  };

  componentDidMount() {
    const { studies } = this.props;

    const { TimepointApi, MeasurementApi } = OHIF.measurements;
    const currentTimepointId = 'TimepointId';

    const timepointApi = new TimepointApi(currentTimepointId, {
      onTimepointsUpdated: this.onTimepointsUpdated,
    });

    const measurementApi = new MeasurementApi(timepointApi, {
      onMeasurementsUpdated: this.onMeasurementsUpdated,
    });

    this.currentTimepointId = currentTimepointId;
    this.timepointApi = timepointApi;
    this.measurementApi = measurementApi;

    if (studies) {
      const patientId = studies[0] && studies[0].patientId;

      timepointApi.retrieveTimepoints({ patientId });
      measurementApi.retrieveMeasurements(patientId, [currentTimepointId]);

      this.setState({
        thumbnails: _mapStudiesToThumbnails(studies),
      });
    }

    // this.loadImage();
  }

  componentDidUpdate(prevProps) {
    if (this.props.studies !== prevProps.studies) {
      const { studies } = this.props;
      const patientId = studies[0] && studies[0].patientId;
      const currentTimepointId = this.currentTimepointId;

      this.timepointApi.retrieveTimepoints({ patientId });
      this.measurementApi.retrieveMeasurements(patientId, [currentTimepointId]);

      this.setState({
        thumbnails: _mapStudiesToThumbnails(studies),
      });
    }
    const aaa = this.state.thumbnails[0];
    // console.log("this.state.thumbnails[0]", this.state.thumbnails[0]);
  }

  loadImage = () => {
    const aaa = this.state.thumbnails[0];

    cornerstone.loadImage(aaa.thumbnails[0].imageId).then(
      image => {
        this.image = image;

        this.setState({
          loadImage: this.image,
          histogramvisible: !this.state.histogramvisible,
        });
      },
      e => {
        console.log('error', e);
        this.setState({
          errorOnOpenImage: 'This is not a valid JPG or PNG file.',
        });
      }
    );

    // console.log("this.state.loadImage", this.state.loadImage)
  };

  render() {
    // console.log("this.state.thumbnails-render", this.state.thumbnails);

    console.log('render####');

    // console.log("render-this.props", this.props);
    let VisiblePanelLeft, VisiblePanelRight;
    const panelExtensions = extensionManager.modules[MODULE_TYPES.PANEL];

    const aaa = this.state.thumbnails[0];

    panelExtensions.forEach(panelExt => {
      panelExt.module.components.forEach(comp => {
        if (comp.id === this.state.selectedRightSidePanel) {
          VisiblePanelRight = comp.component;
        } else if (comp.id === this.state.selectedLeftSidePanel) {
          VisiblePanelLeft = comp.component;
        }
      });
    });

    return (
      <>
        {/* HEADER */}
        <WhiteLabellingContext.Consumer>
          {whiteLabelling => (
            <UserManagerContext.Consumer>
              {userManager => (
                <ConnectedHeader home={false} userManager={userManager}>
                  {whiteLabelling.logoComponent}
                </ConnectedHeader>
              )}
            </UserManagerContext.Consumer>
          )}
        </WhiteLabellingContext.Consumer>

        {/* VIEWPORTS + SIDEPANELS */}
        <div className="FlexboxLayout">
          {/*/!* LEFT *!/*/}
          <div>
            <SidePanel from="left" isOpen={this.state.isLeftSidePanelOpen}>
              {VisiblePanelLeft ? (
                <VisiblePanelLeft
                  viewports={this.props.viewports}
                  activeIndex={this.props.activeViewportIndex}
                />
              ) : (
                <ConnectedStudyBrowser
                  studies={this.state.thumbnails}
                  studyMetadata={this.props.studies}
                />
              )}
            </SidePanel>
          </div>

          {/* MAIN */}
          <div className={classNames('main-content')}>
            {this.state.histogramvisible === true ? (
              <Histogram
                loadImage={this.state.loadImage}
                isDicom={this.state.isDicom}
              />
            ) : null}
            <ConnectedViewerMain studies={this.props.studies} />
          </div>

          {/* RIGHT */}
          <div>
            <SidePanel from="right" isOpen={this.state.isRightSidePanelOpen}>
              {VisiblePanelRight ? (
                <VisiblePanelRight
                  viewports={this.props.viewports}
                  activeIndex={this.props.activeViewportIndex}
                />
              ) : (
                <div
                  style={{
                    // border:'red solid',
                    width: '300px',
                    display: 'flex',
                    justifyContent: 'center',
                    height: '100%',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {/* <div style={{ color: 'white', height: '7vh', fontSize: '13px', display: 'flex', alignItems: 'center' }}><div style={{ backgroundColor: 'grey', border: 'gray solid', width: '100%', justifyContent: 'center', display: 'flex', padding: '1vh' }}>Marker (L,R)</div></div> */}
                    <div
                      onClick={() => {
                        this.loadImage();
                      }}
                      style={{
                        color: 'white',
                        cursur: 'pointer',
                        height: '7vh',
                        fontSize: '13px',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      {/*<div style={{ color: 'white', height: '7vh', fontSize: '13px', display: 'flex', alignItems: 'center' }}><div style={{ backgroundColor: 'grey', border: 'gray solid', width: '100%', justifyContent: 'center', display: 'flex', padding: '1vh' }}>Brightness</div></div>*/}
                      <div style={{ width: '100%',justifyContent: 'center', alignItems:'center',display: 'flex', flexDirection:'column',padding: '1vh'}}>
                        <img style={{width:'30px', height:'30px'}} src="data:image/svg+xml;base64, PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMiIgY2xhc3M9IiI+PGc+PHBhdGggZD0ibTQ0Ni40NjQ4NDQgNDA3LjM1NTQ2OWMtMTguOTAyMzQ0LTQ0LjE5MTQwNy0zMi4xOTkyMTktMTA0LjkyMTg3NS00NS4wNTg1OTQtMTYzLjY1NjI1LTEyLjUyNzM0NC01Ny4yMTA5MzgtMjUuNDg0Mzc1LTExNi4zNzEwOTQtNDMuODYzMjgxLTE2MC42MDkzNzUtMTAuNTA3ODEzLTI1LjI5Njg3NS0yMi4wNTg1OTQtNDQuMTY0MDYzLTM1LjMwNDY4OC01Ny42Nzk2ODgtMTYuNTI3MzQzLTE2Ljg1OTM3NS0zNS43ODUxNTYtMjUuNDEwMTU2LTU3LjIzODI4MS0yNS40MTAxNTYtMjEuMzQ3NjU2IDAtNDAuNDcyNjU2IDguNDY0ODQ0LTU2LjgzOTg0NCAyNS4xNjQwNjItMTMuMTIxMDk0IDEzLjM4NjcxOS0yNC41MTU2MjUgMzIuMDc0MjE5LTM0LjgzNTkzNyA1Ny4xMjUtMTguMDI3MzQ0IDQzLjc3MzQzOC0zMC4wNTQ2ODggOTkuODI0MjE5LTQyLjc4NTE1NyAxNTkuMTcxODc2LTEyLjY5MTQwNiA1OS4xNzU3ODEtMjUuODE2NDA2IDEyMC4zNjMyODEtNDQuOTIxODc0IDE2NS4wMDM5MDYtMTUuNzk2ODc2IDM2LjkxNzk2OC0zMS43MzgyODIgNTMuMzE2NDA2LTQ1LjYxNzE4OCA2MC40MDIzNDR2LTQ2Ni44NjcxODhoLTQwdjUxMmg1MTJ2LTQwYy0xNi4yNjU2MjUgMC00MC43NTM5MDYtNi42OTkyMTktNjUuNTM1MTU2LTY0LjY0NDUzMXptLTI3Ni44MTI1LTE1Ny41MDc4MTNjMTIuMzM5ODQ0LTU3LjUzNTE1NiAyNC0xMTEuODc4OTA2IDQwLjY2MDE1Ni0xNTIuMzI0MjE4IDIxLjIzODI4MS01MS41NTg1OTQgNDEuMzgyODEyLTU3LjUyMzQzOCA1NC42ODc1LTU3LjUyMzQzOCAxMy40NDUzMTIgMCAzMy44NDM3NSA2LjA1ODU5NCA1NS42MDU0NjkgNTguNDM3NSAxNy4wMDc4MTIgNDAuOTM3NSAyOS41NzQyMTkgOTguMzI0MjE5IDQxLjcyNjU2MiAxNTMuODIwMzEyIDEzLjI1NzgxMyA2MC41NDY4NzYgMjYuOTY4NzUgMTIzLjE1NjI1IDQ3LjM1NTQ2OSAxNzAuODI0MjE5IDguNDg0Mzc1IDE5LjgzOTg0NCAxNy42MjUgMzUuOTg0Mzc1IDI3LjcwNzAzMSA0OC45MTc5NjloLTM0My40Mjk2ODdjMTAuMzkwNjI1LTEzLjEzNjcxOSAxOS43Njk1MzEtMjkuNTcwMzEyIDI4LjQyOTY4Ny00OS44MDA3ODEgMjAuNjI1LTQ4LjE5NTMxMyAzNC4xNjQwNjMtMTExLjMxMjUgNDcuMjU3ODEzLTE3Mi4zNTE1NjN6bTAgMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojOUNDRUY5IiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPjwvZz4gPC9zdmc+" />
                        <div style={{color:'#9CCEF9', fontSize:'12px'}}>Histogram</div>
                      </div>
                    </div>
                    {/* <div style={{ color: 'white', height: '7vh', fontSize: '13px', display: 'flex', alignItems: 'center' }}><div style={{ backgroundColor: 'grey', border: 'gray solid', width: '100%', justifyContent: 'center', display: 'flex', padding: '1vh' }}>Brightness</div></div> */}
                    {/* <div style={{ color: 'white', height: '7vh', fontSize: '13px', display: 'flex', alignItems: 'center' }}><div style={{ backgroundColor: 'grey', border: 'gray solid', width: '100%', justifyContent: 'center', display: 'flex', padding: '1vh' }}>Contrast</div></div> */}
                    {/* <div style={{ color: 'white', height: '7vh', fontSize: '13px', display: 'flex', alignItems: 'center' }}><div style={{ backgroundColor: 'grey', border: 'gray solid', width: '100%', justifyContent: 'center', display: 'flex', padding: '1vh' }}>Denoise</div></div> */}
                    {/*<div*/}
                    {/*style={{*/}
                    {/*color: 'white',*/}
                    {/*height: '7vh',*/}
                    {/*fontSize: '13px',*/}
                    {/*display: 'flex',*/}
                    {/*alignItems: 'center',*/}
                    {/*}}*/}
                    {/*>*/}
                    {/*/!* <div*/}
                    {/*style={{*/}
                    {/*backgroundColor: 'grey',*/}
                    {/*border: 'gray solid',*/}
                    {/*width: '100%',*/}
                    {/*justifyContent: 'center',*/}
                    {/*display: 'flex',*/}
                    {/*padding: '1vh',*/}
                    {/*}}*/}
                    {/*>*/}
                    {/*Sharpness*/}
                    {/*</div> *!/*/}
                    {/*</div>*/}
                    {/* <div style={{ color: 'white', height: '7vh', fontSize: '13px', display: 'flex', alignItems: 'center' }}><div style={{ backgroundColor: 'grey', border: 'gray solid', width: '100%', justifyContent: 'center', display: 'flex', padding: '1vh' }}>AI Result</div></div> */}
                  </div>
                  <div>
                    <ConnectedToolbarCol
                      isLeftSidePanelOpen={this.state.isLeftSidePanelOpen}
                      isRightSidePanelOpen={this.state.isRightSidePanelOpen}
                      selectedLeftSidePanel={
                        this.state.isLeftSidePanelOpen
                          ? this.state.selectedLeftSidePanel
                          : ''
                      }
                      selectedRightSidePanel={
                        this.state.isRightSidePanelOpen
                          ? this.state.selectedRightSidePanel
                          : ''
                      }
                      handleSidePanelChange={(side, selectedPanel) => {
                        const sideClicked =
                          side && side[0].toUpperCase() + side.slice(1);
                        const openKey = `is${sideClicked}SidePanelOpen`;
                        const selectedKey = `selected${sideClicked}SidePanel`;
                        const updatedState = Object.assign({}, this.state);

                        const isOpen = updatedState[openKey];
                        const prevSelectedPanel = updatedState[selectedKey];
                        // RoundedButtonGroup returns `null` if selected button is clicked
                        const isSameSelectedPanel =
                          prevSelectedPanel === selectedPanel ||
                          selectedPanel === null;

                        updatedState[selectedKey] =
                          selectedPanel || prevSelectedPanel;

                        const isClosedOrShouldClose =
                          !isOpen || isSameSelectedPanel;
                        if (isClosedOrShouldClose) {
                          updatedState[openKey] = !updatedState[openKey];
                        }

                        this.setState(updatedState);
                      }}
                      studies={this.props.studies}
                    />
                  </div>
                </div>
              )}
            </SidePanel>
          </div>
        </div>
        <ConnectedLabellingOverlay />
      </>
    );
  }
}

export default Viewer;

/**
 * What types are these? Why do we have "mapping" dropped in here instead of in
 * a mapping layer?
 *
 * TODO[react]:
 * - Add sorting of display sets
 * - Add showStackLoadingProgressBar option
 *
 * @param {Study[]} studies
 * @param {DisplaySet[]} studies[].displaySets
 */
const _mapStudiesToThumbnails = function(studies) {
  return studies.map(study => {
    const { studyInstanceUid } = study;

    // console.log("study", study)

    const thumbnails = study.displaySets.map(displaySet => {
      const {
        displaySetInstanceUid,
        seriesDescription,
        seriesNumber,
        instanceNumber,
        numImageFrames,
      } = displaySet;

      let imageId;
      let altImageText;

      if (displaySet.modality && displaySet.modality === 'SEG') {
        // TODO: We want to replace this with a thumbnail showing
        // the segmentation map on the image, but this is easier
        // and better than what we have right now.
        altImageText = 'SEG';
      } else if (displaySet.images && displaySet.images.length) {
        const imageIndex = Math.floor(displaySet.images.length / 2);

        imageId = displaySet.images[imageIndex].getImageId();
      } else {
        altImageText = displaySet.modality ? displaySet.modality : 'UN';
      }

      return {
        imageId,
        altImageText,
        displaySetInstanceUid,
        seriesDescription,
        seriesNumber,
        instanceNumber,
        numImageFrames,
      };
    });

    return {
      studyInstanceUid,
      thumbnails,
    };
  });
};
