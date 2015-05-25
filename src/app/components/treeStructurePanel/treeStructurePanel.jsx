var React = require('react');
var TreeStructurePanelStyle = require('./treeStructurePanelStyle.jsx');

var TreeStructurePanel = React.createClass(
{
  propTypes: {
  	onChangeStructure: React.PropTypes.func
  },

  calculateJSONStructure()
  {
  	// reload structure
  	var newStructure = {};

	jQuery.extend(newStructure, treeData);

	(function _removeParents(list)
	{
	    if(list)
	    {
	        for(var i=0; i < list.length; i++)
	        {
	            var obj = list[i];

	            // save collapsed children
				var collapsedChildren = obj["_children"];

	            for(var prop in obj)
	            {
	                if(prop != "name" && prop != "children")
	                {
	                    delete obj[prop];
	                }

	                if(obj["children"] && obj["children"].length == 0)
	            	{
	            		delete obj["children"];
	            	}

	            	if(obj["_children"] && obj["_children"].length == 0)
	            	{
	            		delete obj["_children"];
	            	}
	            }

	            _removeParents(obj["children"] || collapsedChildren);
	        }
	    }
	}([newStructure]));

	localStorage.setItem("structure", JSON.stringify(newStructure, null, 2));

	var textarea = React.findDOMNode(this.refs.structureContent);
	textarea.value = JSON.stringify(newStructure, null, 2);

	return newStructure;
  },

  componentDidMount()
  {
	var textarea = React.findDOMNode(this.refs.structureContent);

	if(localStorage && localStorage.structure)
    {
    	textarea.value = localStorage.structure;
    }

	textarea.addEventListener('input', function(){
		if(this.props.onChangeStructureContent)
		{
			this.props.onChangeStructureContent();
		}
	}.bind(this));
  },

  render()
  {
    return (
      <div ref="treeStructurePanel" styles={[TreeStructurePanelStyle.initial, this.props.style]}>
      	<textarea ref="structureContent" style={TreeStructurePanelStyle.structureArea} spellCheck="false" id="structureTextArea"></textarea>
      </div>
    );
  },

  setVisible(value)
  {
  	React.findDOMNode(this.refs.treeStructurePanel).style.left = (value) ? '0' : '-490px';
  },

  getStructure()
  {
  	return React.findDOMNode(this.refs.structureContent).value;
  }
});

module.exports = TreeStructurePanel;