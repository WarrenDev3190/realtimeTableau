define(['require','lodash','moment'],function(_,moment){
	return {
		sendPatientFb: function(e){
			var percent = 0.74;
			$('body').loadie(percent);
			e.preventDefault();
			var data = {};
				data.patientNum = $('#patient').val();
				data.septicStatus = $('#selectbasic').val();
				data.message = $('#message').val()
			$.ajax({
				type:'POST',
				url:'/patient',
				data: data,
				success: function(data){
					if(data.status === 200){
						$('.bs-example-modal-lg').modal("hide");
						$('body').loadie(100);
					}
				},
				dataType:'json'
			})
		},
		sendAnnotation:function(data){
			var percent = 0.25;
			$('body').loadie(percent);
			data.clinicianName = $('#clinicianName').val();
			data.message = $('#annotationMessage').val();
			data.createdAt = Date();
			$('body').loadie(0.55);
			$.ajax({
				method:'POST',
				url:'/annotation',
				data:data,
				success:function(data){
					$('body').loadie(100);
					if(data.status === 200){
						$('.annotation-modal').modal("hide");
						$('#clinicianName').val("");
						$("#annotationMessage").val("");
					}
				},
				error:function(err){
					if(err.responseText.indexOf('PayLoadTooLargeError') != -1){
						console.log("Too big.")
					}
				},
				dataType:'json'
			})
		},
		changeViewState: function(bool){
				if(bool){
	    				bool = false;
	    				$(".actions-label").hide();

	    		}else{
	    				bool = true;
	    				$("li[role='presentation']").removeClass("disabled");
	    				$(".action-label").show();
	    		}
		}
	}
})