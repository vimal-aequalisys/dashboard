
/*--- SHOW AND HIDE ACCOUNT MODALS ---*/
$('.roles-trigger').click(function() {
	var account = '#' + $(this).closest('.account-row').attr('id');
	
	$(account).find('.roles-modal').show();
	$('.modal-bkg').show();
});

/*--- ENABLE AND DISABLE ACCOUNT FIELDS ---*/

$('.edit-button').click(function(){
	var account = '#' + $(this).closest('.account-row').attr('id');


	if($(this).hasClass('active')){
		$(account).find('input').prop( 'disabled', true );
		$(this).removeClass('active');
	} else {
		$(account).find('input').prop( 'disabled', false );
		$(this).addClass('active');
	}
}); 


/*--- HIDE AND SHOW ACCOUNT TABLES ON USAGE PAGE ---*/

$('#all-records').click(function(){
	$('#records-table-vs').hide();
	$('#records-table-all').show();
});

$('#vs-records').click(function(){
	$('#records-table-all').hide();
	$('#records-table-vs').show();
});

/*--- HIDE AND SHOW PILOT SELF-SERVICE MODALS ---*/

$('.cancel-upload').click(function() {
	$('#cancel-upload-alert, .modal-bkg').show();
});

$('.continue-upload').click(function() {
	$('#continue-upload-alert, .modal-bkg').show();
});

$('.close-modal').click(function() {
	$('.modal .modal-bkg').hide();
});




/*--- HIDE ALL MODALS ---*/

$('.modal-bkg, .close-modal').click(function(){
	$('.modal-bkg, .modal').hide();
});