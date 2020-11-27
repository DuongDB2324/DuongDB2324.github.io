function validateForm(){
	var name=document.forms["register"].txtName.value,
		age=document.forms["register"].txtAge.value,
		email=document.forms["register"].txtEmail.value,
		pass=document.forms["register"].txtPassword.value,
		gender=document.forms["register"].gender.value;
	if(name=="" || name==" "){
		alert("tên người dùng không được để trống");
	}
	if(age<"18"){
		alert("tuổi phải từ 18 trở lên.");
	}
	if(email=="" || email==" "){
		alert("email không được để trống");
	}
	console.log("name");
}