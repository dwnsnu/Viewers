// TODO: A way to add Icons that don't already exist?
// - Register them and add
// - Include SVG Source/Inline?
// - By URL, or own component?

// What KINDS of toolbar buttons do we have...
// - One's that dispatch commands
// - One's that set tool's active
// - More custom, like CINE
//    - Built in for one's like this, or custom components?

// Visible?
// Disabled?
// Based on contexts or misc. criteria?
//  -- ACTIVE_ROUTE::VIEWER
//  -- ACTIVE_VIEWPORT::CORNERSTONE
// setToolActive commands should receive the button event that triggered
// so we can do the "bind to this button" magic

const TOOLBAR_BUTTON_TYPES = {
  COMMAND: 'command',
  SET_TOOL_ACTIVE: 'setToolActive',
  BUILT_IN: 'builtIn',
};

const TOOLBAR_BUTTON_BEHAVIORS = {
  CINE: 'CINE',
  DOWNLOAD_SCREEN_SHOT: 'DOWNLOAD_SCREEN_SHOT',
};

/* TODO: Export enums through a extension manager. */
const enums = {
  TOOLBAR_BUTTON_TYPES,
  TOOLBAR_BUTTON_BEHAVIORS,
};

const definitions = [
  {
    id: 'StackScroll',
    label: 'Stack Scroll',
    icon: 'stack-scroll_jlk',
//    icon: 'bars',
    //
    type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
    commandName: 'setToolActive',
    commandOptions: { toolName: 'StackScroll' },
  },
  {
    id: 'Magnify',
    label: 'Zoom',
    icon: 'zoom_jlk',
    //
    type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
    commandName: 'setToolActive',
    commandOptions: { toolName: 'Magnify' },
  },  // {
  //   id: 'Zoom',
  //   label: 'Zoom',
  //   icon: 'search-plus',
  //   //
  //   type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
  //   commandOptions: { toolName: 'Zoom' },
  // },
  {
    id: 'Wwwc',
    label: 'Levels',
    icon: 'levels_jlk',
    //
    type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
    commandName: 'setToolActive',
    commandOptions: { toolName: 'Wwwc' },
  },
  {
    id: 'Sharpness',
    label: 'Sharpness',
    icon: 'sharpness_jlk',
    //
    type: TOOLBAR_BUTTON_TYPES.COMMAND,
    commandName: 'changeSharpness',
  },
  {
    id: 'Pan',
    label: 'Pan',
    icon: 'pan_jlk',
    //
    type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
    commandName: 'setToolActive',
    commandOptions: { toolName: 'Pan' },
  },
  {
    id: 'Reset',
    label: 'Reset',
    icon: 'reset_jlk',
    //
    type: TOOLBAR_BUTTON_TYPES.COMMAND,
    commandName: 'resetViewport',
  },
  {
    id: 'ScaleOverlay',
    label: 'Scale',
    icon: 'scale_jlk',
    //
    type: TOOLBAR_BUTTON_TYPES.COMMAND,
    commandName: 'setRuler',
  },
  {
    id: 'ArrowAnnotate',
    label: 'Arrow',
    icon: 'arrow-tag_jlk',
    //
    type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
    commandName: 'setToolActive',
    commandOptions: { toolName: 'ArrowAnnotate' },
  },
  // {
  //   id: 'Cine',
  //   label: 'CINE',
  //   icon: 'youtube',
  //   //
  //   type: TOOLBAR_BUTTON_TYPES.BUILT_IN,
  //   options: {
  //     behavior: TOOLBAR_BUTTON_BEHAVIORS.CINE,
  //   },
  // },
  {
    id: 'TextMarker',
    label: 'Text',
    icon: 'text_jlk',
    //
    type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
    commandName: 'setToolActive',
    commandOptions: { toolName: 'TextMarker' },
  },
  {
    id: 'LRpoint',
    label: 'L,R marker',
    icon: 'lr-point_jlk',
    buttons: [
    {
      id: 'Lpoint',
      label: '',
      icon: 'l-point_jlk',
      //
      type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
      commandName: 'setToolActive',
      commandOptions: { toolName: 'Lpoint' },
    },
    {
      id: 'Rpoint',
      label: '',
      icon: 'r-point_jlk',
      //
      type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
      commandName: 'setToolActive',
      commandOptions: { toolName: 'Rpoint' },
    },
    ],
  },
  {
    id: 'Measurement',
    label: 'Measurement',
    icon: 'measurement_jlk',
    buttons: [
      {
        id: 'Length',
        label: 'Length',
        icon: 'length_jlk',
       //
        type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
        commandName: 'setToolActive',
        commandOptions: { toolName: 'Length' },
      },
      {
        id: 'Angle',
        label: 'Angle',
        icon: 'angle_jlk',
        //
        type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
        commandName: 'setToolActive',
        commandOptions: { toolName: 'Angle' },
      },
    ],
  },
  {
    id: 'Annotation Tool Kit',
    label: 'Annotation',
    icon: 'annotation-tool-kit_jlk',
    buttons: [
      {
        id: 'Point',
        label: 'Point',
        icon: 'point_jlk',
        //
        type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
        commandName: 'setToolActive',
        commandOptions: { toolName: 'Point' },
      },
      {
        id: 'Line',
        label: 'Line',
        icon: 'line_jlk',
        //
        type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
        commandName: 'setToolActive',
        commandOptions: { toolName: 'Line' },
      },
      {
        id: 'Polyline',
        label: 'Polyline',
        icon: 'polyline_jlk',
        //
        type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
        commandName: 'setToolActive',
        commandOptions: { toolName: 'Polyline' },
      },
      {
        id: 'Polygon',
        label: 'Polygon',
        icon: 'polygon_jlk',
        //
        type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
        commandName: 'setToolActive',
        commandOptions: { toolName: 'Polygon' },
      },
      {
        id: 'EllipticalRoi',
        label: 'Ellipse',
        icon: 'ellipse_jlk',
        //
        type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
        commandName: 'setToolActive',
        commandOptions: { toolName: 'EllipticalRoi' },
      },
      {
        id: 'RectangleRoi',
        label: 'Rectangle',
        icon: 'rectangle_jlk',
        //
        type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
        commandName: 'setToolActive',
        commandOptions: { toolName: 'RectangleRoi' },
      },
       // {
       //   id: 'Bidirectional',
       //   label: 'Bidirectional',
       //   icon: 'measure-target',
       //   //
       //   type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
       //   commandName: 'setToolActive',
       //   commandOptions: { toolName: 'Bidirectional' },
       // },
    ],
  },
  {
    Id: 'More',
    label: 'More',
    icon: 'ellipse-circle',
    buttons: [
      // {
      //   id: 'WwwcRegion',
      //   label: 'ROI Window',
      //   icon: 'stop',
      //   //
      //   type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
      //   commandName: 'setToolActive',
      //   commandOptions: { toolName: 'WwwcRegion' },
      // },
      {
        id: 'DragProbe',
        label: 'Probe',
        icon: 'probe_jlk',
        //
        type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
        commandName: 'setToolActive',
        commandOptions: { toolName: 'DragProbe' },
      },
      {
        id: 'Invert',
        label: 'Invert',
        icon: 'invert_jlk',
        //
        type: TOOLBAR_BUTTON_TYPES.COMMAND,
        commandName: 'invertViewport',
      },
      {
        id: 'RotateRight',
        label: 'Rotate Right',
        icon: 'rotate-right_jlk',
        //
        type: TOOLBAR_BUTTON_TYPES.COMMAND,
        commandName: 'rotateViewportCW',
      },
      {
        id: 'FlipH',
        label: 'Flip H',
        icon: 'flip-h_jlk',
        //
        type: TOOLBAR_BUTTON_TYPES.COMMAND,
        commandName: 'flipViewportHorizontal',
      },
      {
        id: 'FlipV',
        label: 'Flip V',
        icon: 'flip-v_jlk',
        //
        type: TOOLBAR_BUTTON_TYPES.COMMAND,
        commandName: 'flipViewportVertical',
      },
      {
        id: 'Clear',
        label: 'Clear',
        icon: 'clear_jlk',
        //
        type: TOOLBAR_BUTTON_TYPES.COMMAND,
        commandName: 'clearAnnotations',
      },
      {
        id: 'Eraser',
        label: 'Eraser',
        icon: 'eraser_jlk',
        //
        type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
        commandName: 'setToolActive',
        commandOptions: { toolName: 'Eraser' },
      },
      {
        id: 'Download',
        label: 'Download',
        icon: 'download_jlk',
        //
        type: TOOLBAR_BUTTON_TYPES.BUILT_IN,
        options: {
          behavior: TOOLBAR_BUTTON_BEHAVIORS.DOWNLOAD_SCREEN_SHOT,
          togglable: true,
        },
      },
    ],
  },
];

export default {
  definitions,
  defaultContext: 'ACTIVE_VIEWPORT::CORNERSTONE',
};
