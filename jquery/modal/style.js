$(".show").click(function(e){
	e.preventDefault();
	$(".modal").toggleClass("isvisible");
});
$("button#close").click(function(e){
	e.preventDefault();
	$(".modal").removeClass("isvisible");
});