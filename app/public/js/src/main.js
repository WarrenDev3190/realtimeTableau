define(['require'
		,'lodash'
		,'q'
		,'./tableauView'
		,'./dataMap'
		,'./domHandlers']
	,function(require ,_ ,q ,tableauView ,dataMap ,domHandlers){
	    
	    var $TableauViz,
	    	$Workbook,
	    	$Sheet,
	    	$activeSheets;

	    var areControlsVisible;

    	window.tableauvix = $TableauViz = tableauView.initializeViz();
    	$('body').loadie();

    	$TableauViz.addEventListener("marksSelection",selectionMade);
    	$('.send-patient-fb').on('click' ,domHandlers.sendPatientFb);


    	$('.send-annotation').on('click',function(e){ 
    		e.preventDefault();
    		if($activeSheets === undefined){
    			alert("Please select a patient.")
    			return false
    		}else{
	    		$activeSheets[1].getSelectedMarksAsync().then(function(data){
	    				if(data.length <= 0){
	    					alert("Please mark measure(s) to annotate");
	    					return false;
	    				}else{
	    					return data;
	    				}
	    		}).then(function(data){
	    			var sortedData = []
	    			_.forEach(data,function(bj){
	    				_.forEach(_.get(bj,'$0.$5.$4'),function(meas){
	    					sortedData.push(meas);
	    				})
	    			});	
	    			return sortedData;
	    		}).then(function(sd){
	    			var payload = {};
	    			payload.measures = sd;
	    			domHandlers.sendAnnotation(payload);
	    		}).catch(function(err){
	    			console.log(err);
	    		})

    		}
    	});

	    function selectionMade(marks){
	    		setEnvVarsUp();
	    		domHandlers.changeViewState(areControlsVisible);
	    	}

		function setEnvVarsUp(){
			$Workbook = $TableauViz.getWorkbook();
			$Sheet    = $Workbook.getActiveSheet();
			$activeSheets = $Sheet.getWorksheets();
		}

});


