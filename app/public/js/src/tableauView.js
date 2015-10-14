// var myViz;

// function checkLoaded() {
//   return document.readyState === "complete" || document.readyState === "interactive";
// }

// function initializeViz() {
//   var viz;
//   var placeholderDiv = window.document.getElementById("tableauViz");
//   var url = "http://public.tableau.com/views/WorldIndicators/GDPpercapita";
//   // var url = "https://data.medcity.net/#/site/CDMDataLab/views/clinicalUI_0/Patient";
//   var options = {
//     width: placeholderDiv.offsetWidth,
//     height: placeholderDiv.offsetHeight,
//     hideTabs: true,
//     hideToolbar: true,
//     onFirstInteractive: function () {
//       var workbook = viz.getWorkbook();
//       var activeSheet = workbook.getActiveSheet();
//     }
//   };
//  return viz = new tableau.Viz(placeholderDiv, url, options);
// };      
		 

// if(checkLoaded){
// 	myViz = initializeViz();
// 	myViz
// }

define(function(){
	return {
		initializeViz: function(){
		  var viz;
		  var placeholderDiv = window.document.getElementById("tableauViz");
		  var url = "http://public.tableau.com/views/WorldIndicators/GDPpercapita";
		  // var url = "https://data.medcity.net/#/site/CDMDataLab/views/clinicalUI_0/Patient";
		  var options = {
		    width: placeholderDiv.clientWidth,
		    height: placeholderDiv.clientHeight,
		    hideTabs: true,
		    hideToolbar: true,
		    onFirstInteractive: function () {
		      var workbook = viz.getWorkbook();
		      var activeSheet = workbook.getActiveSheet();
		    }
		  };
		 return viz = new tableau.Viz(placeholderDiv, url, options);
		}
	}
});