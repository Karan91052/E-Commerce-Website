function showHideLogin(){
    let loginfo=document.getElementById('loginfo');
	if(loginfo.style.display === 'none')
		loginfo.style.display = 'block';
	else
		loginfo.style.display = 'none';
}
function showHideCart(){
	let cart=document.getElementById("cart");
	if(cart.style.display === 'none')
		cart.style.display = 'block';
	else
		cart.style.display = 'none';
}
$(document).ready(function(){
	$("#logbtn").click(()=>{
		$("#loginfo1").show();
		$("#signup").hide();
	})
	$("#signbtn").click(()=>{
		$("#loginfo1").hide();
		$("#signup").show();
	})
	$("#login").click(()=>{
		$("#loginfo1").show();
		$("#signup").hide();
	})

})

