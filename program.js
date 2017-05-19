
$(document).ready(function()
{   var color1;
	$(".ch").hide();
	$(".lich").css({"background-color":"#090d13"});
	$("#p1").css({"background-color":"green"});
	$("#p11").show();
	$("#p1").click(function(){ 
		$(".ch").hide();
		color1="green";
		$(".lich").css({"background-color":"#090d13"});
		$("#p1").css({"background-color":color1});
		$("#p11").show();})
	$("#p2").click(function(){ 
		$(".ch").hide();
		color1="green";
		$(".lich").css({"background-color":"#090d13"});
		$("#p2").css({"background-color":color1});
		$("#p22").show();})
	$("#p3").click(function(){ 
		$(".ch").hide();
		color1="green";
		$(".lich").css({"background-color":"#090d13"});
		$("#p3").css({"background-color":color1});
		$("#p33").show();})
	$("#p4").click(function(){ 
		$(".ch").hide();
		color1="green"
		$(".lich").css({"background-color":"#090d13"});
		$("#p4").css({"background-color":color1});
		$("#p44").show();})



    $(".mouse").mouseenter(function(){
        $(".dropdown-content").show();
     });
    $(".mouse").mouseleave(function(){
        $(".dropdown-content").hide();
    });
	

   
	$("#p1").mouseenter(function(){
        color1 = $( this ).css( "background-color" );
        $("#p1").css({"background-color":"#000000"});
    });
    $("#p1").mouseleave(function(){
        $("#p1").css({"background-color":color1});
    });
  	$("#p2").mouseenter(function(){
        color1 = $( this ).css( "background-color" );
        $("#p2").css({"background-color":"#000000"});
    });
    $("#p2").mouseleave(function(){
        $("#p2").css({"background-color":color1});
    });
  	$("#p3").mouseenter(function(){
        color1 = $( this ).css( "background-color" );
        $("#p3").css({"background-color":"#000000"});
    });
    $("#p3").mouseleave(function(){
        $("#p3").css({"background-color":color1});
    });
  	$("#p4").mouseenter(function(){
        color1 = $( this ).css( "background-color" );
        $("#p4").css({"background-color":"#000000"});
    });
    $("#p4").mouseleave(function(){
        $("#p4").css({"background-color":color1});
    });
	
	$("#dr1").mouseenter(function(){
        color1 = $( this ).css( "background-color" );
        $("#dr1").css({"background-color":"#C0C0C0"});
    });
    $("#dr1").mouseleave(function(){
        $("#dr1").css({"background-color":color1});
    });
    
    $("#dr2").mouseenter(function(){
        color1 = $( this ).css( "background-color" );
        $("#dr2").css({"background-color":"#C0C0C0"});
    });
    $("#dr2").mouseleave(function(){
        $("#dr2").css({"background-color":color1});
    });



})


