function hiddenfild1(){
	var n = $("#name").val()
	
	if (n.charAt()==0){
		$(".hn").css("opacity","1")
	}
	
	
}
function hiddenfild2(){
var e = $("#e-mail").val()
if (e.charAt()==0){
		$(".he").css("opacity","1")
	}
}
function hiddenfild3(){
	var m = $("#message").val()
	if (m.charAt()==0){
		$(".hm").css("opacity","1")
	}
}