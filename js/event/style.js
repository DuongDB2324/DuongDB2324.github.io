// xóa phần tử
function removeEle(){
	var list=document.getElementById("remove");
		list.removeChild(list.childNodes[0]);
}
// onfocus & onblur
function getFocus(){
	document.getElementById("input").style.background="yellow";
}	
function setFocus(){	
	document.getElementById("input").style.background="red";
}
// onmousedown
function getMouseover(){
	document.getElementById("demo").style.color="red";
}
// onmouseout	
function setMouseuot(){
	document.getElementById("demo").style.color="green";
}
// onchange

function getChange(){
	var selected=document.getElementById("Motor").value;
		selected = "bạn đã chọn" + value;
		alert(selected);
}

// onkeypress - onkeydown
function getKeyPress(){
	alert("ok!");
}
function getKeyDow(){
	alert("ok!");
}
// đếm từ
function countWork(){
	var input=document.getElementById("input2").value;
	count=input.split(" ").length;
	document.getElementById("count").innerHTML=count;
}

// đếm ký tự

//function countWork(){
//	var input=document.getElementById("input2").value;
//	count=input.length;
//	document.getElementById("count").innerHTML=count;
//}
function useSubmitForm(){
	document.getElementById("submitForm").submit;
}