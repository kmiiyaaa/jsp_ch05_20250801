/**
 * 
 */

function joinCheck(){
	if(document.join.id.value=="" ) {  // 아이디가 빈칸으로 입력된 경우
		alert("아이디는 필수 입력사항입니다.");
		document.join.id.focus(); //해당 입력폼으로 커서 이동
		return;
	 }
	if(document.join.pw1.value=="" ) {
			alert("비밀번호는 필수 입력사항입니다.");
			document.join.id.focus(); //해당 입력폼으로 커서 이동
			return;
	 }

	 
	document.join.submit();	
		
		
	
	
}