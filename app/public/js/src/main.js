define(function(require){
	var tableauView = require('./tableauView');
    window.myViz = tableauView.initializeViz()
	
	$myViz = window.myViz;

	$myViz.addEventListener(tableau.TableauEventName.MARKS_SELECTION,function(){
			alert("event called");
			
		});
});
