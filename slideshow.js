$(document).ready(function(){
	var slideIndex = 0;
	$(".dot").eq(slideIndex).addClass("active");
	$(".slide").eq(slideIndex).fadeIn(300);

	setInterval(function(){ moveSlides(1) }, 3000);

	$(".dot").click(function()
	{
		let i = $(".dot").index(this);
		slideIndex = i;
		$(this).siblings(".dot").removeClass("active");
		$(this).addClass("active");
		$(".slide").eq(i).siblings(".slide").fadeOut(300,function(){
			$(".slide").eq(i).fadeIn(300);
		});
	});

	$(".next").click(function()
	{
		moveSlides(1);
	});

	$(".prev").click(function()
	{
		moveSlides(-1);
	});

	function moveSlides(n)
	{
		slideIndex += n;
		if (slideIndex > $(".dot").last().index()) { slideIndex = 0 }
		if (slideIndex < 0) { slideIndex = $(".dot").last().index() }
		$(".dot").eq(slideIndex).addClass("active");
		$(".dot").eq(slideIndex).siblings(".dot").removeClass("active");
		$(".slide").eq(slideIndex).siblings(".slide").fadeOut(300,function(){
			$(".slide").eq(slideIndex).fadeIn(300);
		});
	}
})