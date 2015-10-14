define(function(require){
	var $myViz;
	var tableauView = require('./tableauView');

	window.myViz = tableauView.initializeViz()
	$myViz = window.myViz;

	$myViz.addEventListener(tableau.TableauEventName.MARKS_SELECTION,function(){
		if($("#controls").css("display") === "none"){
			$("#controls").show();
		}else{
			$("#controls").hide();
		}
	})
});