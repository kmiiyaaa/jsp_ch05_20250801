/**
 * 
 */

function joinCheck(){
	
 var f = document.join; 
	
	var cname = document.join.name.value;
	var cmail = document.join.email.value;
	var cage = document.join.age.value;

	
	var regex1 = /^[가-힣]+$/;   // 한글만 입력 받는  정규표현식
	var regex2 = /^[0-9A-Za-z!@$^&*()_\-=\[\]{};\\|.<>\/]+$/; // 숫자, 영어와 특정 특수문자 입력 받는 정규표현식	
	// var regex2 = /[ㄱ-ㅎㅏ-ㅣ가-힣]/;    //  한글,자음,모음 받는 정규표현식
	var regex3 = /^[0-9]+$/;  //숫자만 입력 받는 정규표현식 
	// var regex4 = /^[a-z|A-Z]+$;  

	if(document.join.id.value=="" ) {  // 아이디가 빈칸으로 입력된 경우
		alert("아이디는 필수 입력사항입니다.");
		document.join.id.focus(); //해당 입력폼으로 커서 이동
		return;
	 }
	 
	if(document.join.id.value.length <4 || document.join.id.value.length >15 ) {  // 아이디가 4자이상 15자 이하면 해당
	 	alert("아이디는 4자~15자 입력하셔야 합니다.");
	 	document.join.id.focus(); //해당 입력폼으로 커서 이동
	 	return;
	 } 
	 
	if(document.join.pw1.value=="" ) {
		alert("비밀번호는 필수 입력사항입니다.");
		document.join.pw1.focus(); //해당 입력폼으로 커서 이동
		return;
	 }

	 if(document.join.pw1.value.length <4 ||document.join.pw1.value.length >15 ) {
	 	alert("비밀번호는 4자~15자 입력하셔야 합니다.");
	 	document.join.pw1.focus(); //해당 입력폼으로 커서 이동
	 	return;
	  }
		
	if(document.join.pw2.value=="" ) {
		alert("비밀번호 확인은 필수 입력사항입니다.");
		document.join.pw2.focus(); //해당 입력폼으로 커서 이동
		return;
		}		

	if(document.join.pw1.value != document.join.pw2.value ) { 
		alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
		document.join.pw2.focus(); //해당 입력폼으로 커서 이동
		return;
		}		
				
		
	if(document.join.name.value=="" ) {
		alert("이름은 필수 입력사항입니다.");
		document.join.name.focus(); //해당 입력폼으로 커서 이동
		return;
		}	
		
	if(!regex1.test(cname)) {   // 이름입력값이 한글이 아닌경우 -> ! 추가
		alert("이름은 한글만 입력 가능합니다.");
		document.join.name.focus(); //해당 입력폼으로 커서 이동
		return;
		}			
		
	if(document.join.email.value=="" ) {
		alert("이메일은 필수 입력사항입니다.");
		document.join.email.focus(); //해당 입력폼으로 커서 이동
		return;
		 }	
	
	
	 if(!regex2.test(cmail)) {   // 이메일이 숫자,영어,특수문자가 아닌경우
		alert("이메일은 영어, 숫자와 허용된 특수문자만 입력 가능합니다.");
		document.join.email.focus(); //해당 입력폼으로 커서 이동
		return;
		}		
	
		/*
			if(regex2.test(cmail)) {   // 이메일에 한글이 입력된경우
			alert("이메일은 영어, 숫자와 허용된 특수문자만 입력 가능합니다.");
			document.join.email.focus(); //해당 입력폼으로 커서 이동
			return;
			}	
  	*/	
		
		if(!regex3.text(cage)) {
			alert("나이는 숫자만 입력 가능합니다.");
			document.join.age.focus(); //해당 입력폼으로 커서 이동
			return;
			}	
		
	document.join.submit();	
		
		
	
	
}