$("#tabs-nav li:first-Child").addClass('active');
$(".tab-content").hide();
$(".tab-content:first").show();

//click event
$('#tabs-nav li').click(function(){
	$('#tabs-nav li').removeClass('active');
	$(this).addClass('active');
	$('.tab-content').hide();
	
	var activeTab = $(this).find('a').attr('href');
		$(activeTab).fadeIn();
});