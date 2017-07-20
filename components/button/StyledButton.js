'use strict';

exports.__esModule = true;
exports.StyledIcon = exports.StyledLabel = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _mixins = require('../mixins');

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var primaryStyle = (0, _styledComponents.css)(['background-color:', ';color:', ';svg{fill:', ';stroke:', ';transition:none;}'], function (props) {
  return props.theme.colors.brand;
}, function (props) {
  return props.theme.colors.activeTextColor;
}, function (props) {
  return props.theme.colors.activeTextColor;
}, function (props) {
  return props.theme.colors.activeTextColor;
});

var accentStyle = (0, _styledComponents.css)(['border-color:', ';'], function (props) {
  return props.theme.button.colors.accent;
});

var criticalStyle = (0, _styledComponents.css)(['border-color:', ';'], function (props) {
  return props.theme.button.colors.critical;
});

var secondaryStyle = (0, _styledComponents.css)(['border-color:', ';'], function (props) {
  return props.theme.button.colors.secondary;
});

var disabledStyle = '\n  opacity: 0.3;\n  cursor: default;\n';

function getHoverColor(props) {
  if (props.accent) {
    return props.theme.button.colors.accent;
  } else if (props.critical) {
    return props.theme.button.colors.critical;
  } else if (props.secondary) {
    return props.theme.button.colors.secondary;
  }
  return props.theme.button.border.color || props.theme.colors.brand;
}

var hoverStyle = (0, _styledComponents.css)(['&:hover{', ' ', '}'], function (props) {
  return !props.plain && 'box-shadow: 0px 0px 0px 2px ' + getHoverColor(props) + ';';
}, function (props) {
  return !props.plain && !props.primary && '\n        // TODO: revisit this\n        svg {\n          fill: ' + props.theme.colors.hoverTextColor + ';\n          stroke: ' + props.theme.colors.hoverTextColor + ';\n          transition: none;\n        }\n      ';
});

var plainStyle = (0, _styledComponents.css)(['width:auto;height:auto;min-width:0;max-width:none;text-align:inherit;font-weight:inherit;padding:', 'px;', ''], function (props) {
  return (0, _utils.parseMetricToInt)(props.theme.brand.spacing) / 4;
}, function (props) {
  return !props.focus && 'border-color: transparent;';
});

var StyledButton = _styledComponents2.default.button.withConfig({
  displayName: 'StyledButton__StyledButton'
})(['border:', ' solid ', ';border-radius:', ';color:', ';cursor:pointer;text-align:center;outline:none;min-width:', ';max-width:', ';margin:0;overflow:visible;text-transform:none;background-color:transparent;-webkit-appearance:button;font:inherit;font-weight:', ';', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ''], function (props) {
  return props.theme.button.border.width;
}, function (props) {
  return props.theme.button.border.color || props.theme.colors.brand;
}, function (props) {
  return props.theme.button.border.radius;
}, function (props) {
  return props.theme.button.color || props.theme.colors.text;
}, function (props) {
  return props.theme.button.minWidth;
}, function (props) {
  return props.theme.button.maxWidth;
}, function (props) {
  return props.theme.brand.control.font.weight;
}, function (props) {
  return !props.disabled && !props.focus && hoverStyle;
}, function (props) {
  return props.disabled && disabledStyle;
}, function (props) {
  return (0, _mixins.fontSize)(props.theme.brand.control.font.size, props.theme.brand.spacing);
}, function (props) {
  return !props.plain && !props.box && 'padding: ' + props.theme.button.padding.vertical + ' ' + props.theme.button.padding.horizontal + ';';
}, function (props) {
  if (props.primary) {
    return primaryStyle;
  } else if (props.accent) {
    return accentStyle;
  } else if (props.critical) {
    return criticalStyle;
  } else if (props.secondary) {
    return secondaryStyle;
  }
  return '';
}, function (props) {
  return props.plain && plainStyle;
}, function (props) {
  return props.focus && _utils.focusStyle;
}, (0, _mixins.lapAndUp)('\n    transition: 0.1s ease-in-out;\n  '));

var StyledLabel = exports.StyledLabel = _styledComponents2.default.span.withConfig({
  displayName: 'StyledButton__StyledLabel'
})(['&:first-child:not(:last-child){margin-right:', 'px;}'], function (props) {
  return (0, _utils.parseMetricToInt)(props.theme.brand.spacing) / 2;
});

var StyledIcon = exports.StyledIcon = _styledComponents2.default.span.withConfig({
  displayName: 'StyledButton__StyledIcon'
})(['display:inline-block;&:first-child:not(:last-child){margin-right:', 'px;}> *{vertical-align:bottom;}'], function (props) {
  return (0, _utils.parseMetricToInt)(props.theme.brand.spacing) / 2;
});

exports.default = StyledButton.extend(_templateObject, function (props) {
  return props.theme.button.extend;
});