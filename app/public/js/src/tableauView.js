define(function(){
	return {
		initializeViz: function(){
		  var viz;
		  var placeholderDiv = window.document.getElementById("tableauViz");
		  // var url = "http://public.tableau.com/views/WorldIndicators/GDPpercapita";
		  var url = "https://data.medcity.net/#/site/CDMDataLab/views/clinicalUI_0/Patient";
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
		},
		getWorkbook: function(viz){
			var workbook = viz.getWorkbook();
			return workbook;
		},
		getActiveSheet: function(wb){
			var sheet = wb.getActiveSheet();
			return sheet;
		}
	}
});