var StyleSheet = require('react-style');

var ButtonStyle = StyleSheet.create({
  button: {
    "textAlign": "center",
    "paddingTop": "10px",
    "border": "1px solid #ccc",
    "borderRadius": "7px",
    "boxShadow": "2px 2px 9px -2px #A8A8A8",
    "cursor": "pointer",
    "fontFamily": "sans-serif",
    "fontSize": "14px",
    "fontWeight": "400",
    "color": "#aaa",
    "WebkitTouchCallout": "none",
    "WebkitUserSelect": "none",
    "KhtmlUserSelect": "none",
    "MozUserSelect": "none",
    "MsUserSelect": "none",
    "userSelect": "none"
  },

  normal: {
    "backgroundColor": "#FAFAFA"
  },

  hover: {
    "backgroundColor": "#FCFCFC"
  },

  active: {
    "backgroundColor": "#F5F5F5"
  }
});

module.exports = ButtonStyle;