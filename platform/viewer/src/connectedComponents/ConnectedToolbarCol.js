// TODO: REPLACE THIS WITH A CONTEXT PROVIDER
// EVERYTHING IN `VIEWER.JS` COULD USE THIS FOR APPROPRIATE CONTEXT
import ToolbarCol from './ToolbarCol';
import { connect } from 'react-redux';
import { getActiveContexts } from './../store/layout/selectors.js';

const mapStateToProps = state => {
  return {
    activeContexts: getActiveContexts(state),
  };
};

const ConnectedToolbarCol = connect(mapStateToProps)(ToolbarCol);

export default ConnectedToolbarCol;
