//Creating aliases for Cornerstone tools buttons
export function initCornerstoneToolsAliases() {
  cy.get('.ToolbarRow > :nth-child(2)').as('stackScrollBtn');
  cy.get('.ToolbarRow > :nth-child(3)').as('zoomBtn');
  cy.get('.ToolbarRow > :nth-child(4)').as('levelsBtn');
  cy.get('.ToolbarRow > :nth-child(5)').as('panBtn');
  cy.get('.ToolbarRow > :nth-child(6)').as('lengthBtn');
  cy.get('.ToolbarRow > :nth-child(7)').as('annotateBtn');
  cy.get('.ToolbarRow > :nth-child(8)').as('angleBtn');
  cy.get('.ToolbarRow > :nth-child(9)').as('resetBtn');
  cy.get('.ToolbarRow > :nth-child(10)').as('cineBtn');
  cy.get('.ToolbarRow > :nth-child(11)').as('pointBtn');
  cy.get('.ToolbarRow > :nth-child(12)').as('lineBtn');
  cy.get('.ToolbarRow > :nth-child(13)').as('polylineBtn');
  cy.get('.ToolbarRow > :nth-child(14)').as('polygonBtn');
  cy.get('.ToolbarRow > :nth-child(15)').as('textmarkerBtn');
  cy.get('.ToolbarRow > :nth-child(16)').as('lrpointBtn');
  cy.get('.ToolbarRow > :nth-child(17)').as('scaleoverlayBtn');
  cy.get('.expandableToolMenu').as('moreBtn');
  cy.get('.btn-group > .toolbar-button').as('layoutBtn');
}

//Creating aliases for Common page elements
export function initCommonElementsAliases() {
  cy.get(
    '.pull-right > .RoundedButtonGroup > .roundedButtonWrapper > .roundedButton'
  ).as('measurementsBtn');
  cy.get('.viewport-element').as('viewport');
  cy.get('section.sidepanel.from-right').as('measurementsPanel');
  cy.get(
    '.pull-left > .RoundedButtonGroup > .roundedButtonWrapper > .roundedButton'
  ).as('seriesBtn');
  cy.get('section.sidepanel.from-left').as('seriesPanel');
  cy.get('div.ViewportOverlay > div.bottom-left.overlay-element > div').as(
    'viewportInfoBottomLeft'
  );
  cy.get('div.ViewportOverlay > div.bottom-right.overlay-element > div').as(
    'viewportInfoBottomRight'
  );
  cy.get('.left-mid.orientation-marker').as('viewportInfoMidLeft');
  cy.get('.top-mid.orientation-marker').as('viewportInfoMidTop');
}

//Creating aliases for Routes
export function initRouteAliases() {
  cy.server();
  cy.route('GET', '**/series**').as('getStudySeries');
  cy.route('GET', '**/studies**').as('getStudies');
}

//Creating aliases for VTK tools buttons
export function initVTKToolsAliases() {
  cy.get('.PluginSwitch > .toolbar-button').as('twodmprBtn');
  cy.get('.ToolbarRow > :nth-child(2)').as('crosshairsBtn');
  cy.get('.ToolbarRow > :nth-child(3)').as('wwwcBtn');
  cy.get('.ToolbarRow > :nth-child(4)').as('rotateBtn');
  cy.get('.slab-thickness').as('slabSlider');
  cy.get('.select-ohif').as('modeDropdown');
  cy.get('.ohif-check-label').as('modeCheckbox');
  cy.get('.btn-group > .toolbar-button').as('layoutBtn');
}

//Creating aliases for Study List page elements on Desktop experience
export function initStudyListAliasesOnDesktop() {
  cy.get('.study-count').as('studyCount');
  cy.get('#filter-patientName').as('patientName');
  cy.get('#filter-patientId').as('MRN');
  cy.get('#filter-accessionNumber').as('accessionNumber');
  cy.get('#start-date').as('studyListStartDate');
  cy.get('#end-date').as('studyListEndDate');
  cy.get('#filter-modalities').as('modalities');
  cy.get('#filter-studyDescription').as('studyDescription');
  cy.get('[data-cy="study-list-results"] > tr').as('searchResult');
}

//Creating aliases for Study List page elements on Tablet experience
export function initStudyListAliasesOnTablet() {
  cy.get('.study-count').as('studyCount');
  cy.get('#filter-patientNameOrId').as('patientNameOrMRN');
  cy.get('#filter-accessionOrModalityOrDescription').as(
    'accessionModalityDescription'
  );
  cy.get('#start-date').as('studyListStartDate');
  cy.get('#end-date').as('studyListEndDate');
  cy.get('[data-cy="study-list-results"] > tr').as('searchResult');
}

//Creating aliases for User Preferences modal
export function initPreferencesModalAliases() {
  cy.get('.OHIFModal').as('preferencesModal');
  cy.get('.nav-link')
    .first()
    .as('userPreferencesHotkeysTab');
  cy.get('.nav-link')
    .last()
    .as('userPreferencesGeneralTab');
  cy.get('[data-cy="reset-default-btn"]').as('restoreBtn');
  cy.get('[data-cy="cancel-btn"]').as('cancelBtn');
  cy.get('[data-cy="save-btn"]').as('saveBtn');
}
