import React from 'react';
import adjust from './icons/adjust.svg';
// Icons
import angleDoubleDown from './icons/angle-double-down.svg';
import angleDoubleUp from './icons/angle-double-up.svg';
import angleLeft from './icons/angle-left.svg';
import arrows from './icons/arrows.svg';
import arrowsAltH from './icons/arrows-alt-h.svg';
import arrowsAltV from './icons/arrows-alt-v.svg';
import bars from './icons/bars.svg';
import brain from './icons/brain.svg';
import caretDown from './icons/caret-down.svg';
import caretUp from './icons/caret-up.svg';
import check from './icons/check.svg';
import checkCircle from './icons/check-circle.svg';
import checkCircleO from './icons/check-circle-o.svg';
import chevronDown from './icons/chevron-down.svg';
import circle from './icons/circle.svg';
import circleNotch from './icons/circle-notch.svg';
import circleO from './icons/circle-o.svg';
import cog from './icons/cog.svg';
import createComment from './icons/create-comment.svg';
import createScreenCapture from './icons/create-screen-capture.svg';
import crosshairs from './icons/crosshairs.svg';
import cube from './icons/cube.svg';
import d3Rotate from './icons/3d-rotate.svg';
import database from './icons/database.svg';
import dotCircle from './icons/dot-circle.svg';
import edit from './icons/edit.svg';
import ellipseCircle from './icons/ellipse-circle.svg';
import ellipseH from './icons/ellipse-h.svg';
import ellipseV from './icons/ellipse-v.svg';
import eraser from './icons/eraser.svg';
import exclamationCircle from './icons/exclamation-circle.svg';
import exclamationTriangle from './icons/exclamation-triangle.svg';
import fastBackward from './icons/fast-backward.svg';
import fastForward from './icons/fast-forward.svg';
import info from './icons/info.svg';
import inlineEdit from './icons/inline-edit.svg';
import level from './icons/level.svg';
import link from './icons/link.svg';
import linkCircles from './icons/link-circles.svg';
import list from './icons/list.svg';
import liver from './icons/liver.svg';
import lock from './icons/lock.svg';
import lockAlt from './icons/lock-alt.svg';
import lung from './icons/lung.svg';
import measureNonTarget from './icons/measure-non-target.svg';
import measureTarget from './icons/measure-target.svg';
import measureTargetCr from './icons/measure-target-cr.svg';
import measureTargetNe from './icons/measure-target-ne.svg';
import measureTargetUn from './icons/measure-target-un.svg';
import measureTemp from './icons/measure-temp.svg';
import objectGroup from './icons/object-group.svg';
import ohifLogo from './icons/jlk-logo.svg';
import ohifTextLogo from './icons/ohif-text-logo.svg';
import jlkLogo from './icons/jlk-logo.svg'
import oval from './icons/oval.svg';
import palette from './icons/palette.svg';
import play from './icons/play.svg';
import plus from './icons/plus.svg';
import powerOff from './icons/power-off.svg';
import reset from './icons/reset.svg';
import rotate from './icons/rotate.svg';
import rotateRight from './icons/rotate-right.svg';
import search from './icons/search.svg';
import searchPlus from './icons/search-plus.svg';
import softTissue from './icons/soft-tissue.svg';
import sort from './icons/sort.svg';
import sortDown from './icons/sort-down.svg';
import sortUp from './icons/sort-up.svg';
import squareO from './icons/square-o.svg';
import star from './icons/star.svg';
import stepBackward from './icons/step-backward.svg';
import stepForward from './icons/step-forward.svg';
import stop from './icons/stop.svg';
import sun from './icons/sun.svg';
import th from './icons/th.svg';
import thLarge from './icons/th-large.svg';
import thList from './icons/th-list.svg';
import times from './icons/times.svg';
import trash from './icons/trash.svg';
import user from './icons/user.svg';
import youtube from './icons/youtube.svg';
import angle_jlk from './icons/angle_jlk.svg';
import annotation_tool_kit_jlk from './icons/annotation-tool-kit_jlk.svg';
import arrow_tag_jlk from './icons/arrow-tag_jlk.svg';
import bidirectional_jlk from './icons/bidirectional_jlk.svg';
import cine_jlk from './icons/cine_jlk.svg';
import clear_jlk from './icons/clear_jlk.svg';
import download_jlk from './icons/download_jlk.svg';
import ellipse_jlk from './icons/ellipse_jlk.svg';
import eraser_jlk from './icons/eraser_jlk.svg';
import flip_h_jlk from './icons/flip-h_jlk.svg';
import flip_v_jlk from './icons/flip-v_jlk.svg';
import histogram_jlk from './icons/histogram_jlk.svg';
import invert_jlk from './icons/invert_jlk.svg';
import layout_jlk from './icons/layout_jlk.svg';
import length_jlk from './icons/length_jlk.svg';
import levels_jlk from './icons/levels_jlk.svg';
import line_jlk from './icons/line_jlk.svg';
import lr_point_jlk from './icons/lr-point_jlk.svg';
import magnify_jlk from './icons/magnify_jlk.svg';
import measurement_jlk from './icons/measurement_jlk.svg';
import pan_jlk from './icons/pan_jlk.svg';
import point_jlk from './icons/point_jlk.svg';
import polygon_jlk from './icons/polygon_jlk.svg';
import polyline_jlk from './icons/polyline_jlk.svg';
import probe_jlk from './icons/probe_jlk.svg';
import rectangle_jlk from './icons/rectangle_jlk.svg';
import reset_jlk from './icons/reset_jlk.svg';
import roi_window_jlk from './icons/roi-window_jlk.svg';
import rotate_right_jlk from './icons/rotate-right_jlk.svg';
import sharpness_jlk from './icons/sharpness_jlk.svg';
import stack_scroll_down_jlk from './icons/stack-scroll-down_jlk.svg';
import stack_scroll_up_jlk from './icons/stack_scroll-up_jlk.svg';
import text_jlk from './icons/text_jlk.svg';
import zoom_jlk from './icons/zoom_jlk.svg';
import scale_jlk from './icons/scale_jlk.svg';
import stack_scroll_jlk from './icons/stack-scroll_jlk.svg';
import r_point_jlk from './icons/r-point_jlk.svg';
import l_point_jlk from './icons/l-point_jlk.svg';

const ICONS = {
  user,
  sort,
  th,
  star,
  'sort-up': sortUp,
  'sort-down': sortDown,
  info,
  cube,
  crosshairs,
  'dot-circle': dotCircle,
  'angle-left': angleLeft,
  '3d-rotate': d3Rotate,
  plus,
  'chevron-down': chevronDown,
  'angle-double-down': angleDoubleDown,
  'angle-double-up': angleDoubleUp,
  'arrows-alt-h': arrowsAltH,
  'arrows-alt-v': arrowsAltV,
  bars,
  'caret-down': caretDown,
  'caret-up': caretUp,
  'check-circle-o': checkCircleO,
  check,
  circle,
  'circle-o': circleO,
  times,
  'create-comment': createComment,
  'create-screen-capture': createScreenCapture,
  edit,
  eraser,
  'fast-backward': fastBackward,
  'fast-forward': fastForward,
  'object-group': objectGroup,
  search,
  'power-off': powerOff,
  'inline-edit': inlineEdit,
  list,
  'ohif-logo': ohifLogo,
  'ohif-text-logo': ohifTextLogo,
  'jlk-logo': jlkLogo,
  lock,
  play,
  database,
  cog,
  'circle-notch': circleNotch,
  'square-o': squareO,
  'check-circle': checkCircle,
  'lock-alt': lockAlt,
  'step-backward': stepBackward,
  'step-forward': stepForward,
  stop,
  'th-large': thLarge,
  'th-list': thList,
  sun,
  palette,
  youtube,
  oval,
  'ellipse-h': ellipseH,
  'ellipse-v': ellipseV,
  adjust,
  level,
  'link-circles': linkCircles,
  'search-plus': searchPlus,
  'measure-non-target': measureNonTarget,
  'measure-target': measureTarget,
  'measure-target-cr': measureTargetCr,
  'measure-target-un': measureTargetUn,
  'measure-target-ne': measureTargetNe,
  'measure-temp': measureTemp,
  'ellipse-circle': ellipseCircle,
  arrows,
  reset,
  rotate,
  'rotate-right': rotateRight,
  trash,
  'exclamation-circle': exclamationCircle,
  link,
  'exclamation-triangle': exclamationTriangle,
  brain,
  'soft-tissue': softTissue,
  lung,
  liver,
  'angle_jlk': angle_jlk,
  'annotation-tool-kit_jlk': annotation_tool_kit_jlk,
  'arrow-tag_jlk': arrow_tag_jlk,
  'bidirectional_jlk': bidirectional_jlk,
  'cine_jlk': cine_jlk,
  'clear_jlk': clear_jlk,
  'download_jlk': download_jlk,
  'ellipse_jlk': ellipse_jlk,
  'eraser_jlk': eraser_jlk,
  'flip-h_jlk': flip_h_jlk,
  'flip-v_jlk': flip_v_jlk,
  'histogram_jlk': histogram_jlk,
  'invert_jlk': invert_jlk,
  'layout_jlk': layout_jlk,
  'length_jlk': length_jlk,
  'levels_jlk': levels_jlk,
  'line_jlk': line_jlk,
  'lr-point_jlk': lr_point_jlk,
  'magnify_jlk': magnify_jlk,
  'measurement_jlk': measurement_jlk,
  'pan_jlk': pan_jlk,
  'point_jlk': point_jlk,
  'polygon_jlk': polygon_jlk,
  'polyline_jlk': polyline_jlk,
  'probe_jlk': probe_jlk,
  'rectangle_jlk': rectangle_jlk,
  'reset_jlk': reset_jlk,
  'roi-window_jlk': roi_window_jlk,
  'rotate-right_jlk': rotate_right_jlk,
  'sharpness_jlk': sharpness_jlk,
  'stack-scroll-down_jlk': stack_scroll_down_jlk,
  'stack_scroll-up_jlk': stack_scroll_up_jlk,
  stack_scroll_down_jlk,
  'text_jlk': text_jlk,
  'zoom_jlk': zoom_jlk,  
  'stack-scroll_jlk': stack_scroll_jlk,  
  'r-point_jlk': r_point_jlk,  
  'l-point_jlk': l_point_jlk,  
  'scale_jlk': scale_jlk,  
};

/**
 * Return the matching SVG Icon as a React Component.
 * Results in an inlined SVG Element. If there's no match,
 * return `null`
 */
export default function getIcon(key, props) {
  if (!key || !ICONS[key]) {
    return React.createElement('div', null, 'Missing Icon');
  }

  return React.createElement(ICONS[key], props);
}

export { ICONS };
