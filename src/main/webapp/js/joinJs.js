/**
 * 
 */

function joinCheck(){
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
		
	if(document.join.email.value=="" ) {
		alert("이메일은 필수 입력사항입니다.");
		document.join.email.focus(); //해당 입력폼으로 커서 이동
		return;
		 }		
		
		
		
		
	 
	document.join.submit();	
		
		
	
	
}