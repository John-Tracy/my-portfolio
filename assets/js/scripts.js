var formSuccess = function(){
	$('#contactEmail').val('');
	$('#contactName').val('');
	$('#contactMessage').val('');
	$('#msgSubmit').removeClass("hidden");

};

var submitForm = function() {
	
	var email = $('#contactEmail').val().trim();
	var name = $('#contactName').val().trim();
	var message = $('#contactMessage').val().trim();

	$.ajax({
		type: "POST",
		url: "assets/php/process.php",
		data: "name=" + name + "&email=" + email + "&message=" + message,
		success: function(text){
			if (text == "success"){
				formSuccess();
			}
		}
	});

};



$('#contact-form').submit(function(){

	submitForm();

//	$('#contactEmail').val('');
//	$('#contactName').val('');
//	$('#contactMessage').val('');
	return false;
})