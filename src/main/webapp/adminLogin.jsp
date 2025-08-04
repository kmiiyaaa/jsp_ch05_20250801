<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
	<script type="text/javascript">
	function error() {
		if (document.login.loginId.value == "" || document.login.loginPw.value == "") {
				alert("아이디와 비밀번호를 모두 입력하세요.")
				return false; 
			}
		}
	</script>
</head>
<body>
	<form action="adminLoginOK.jsp" name="logim" onsubmit="return error()"> 
		아이디 : <input type="text" name="loginId"><br><br>     <%-- 입력한 아이디 비밀번호 값이 LoginOk로 넘어간다 --%>
		비밀번호 : <input type="password" name="loginPw"><br><br>
		<input type = "submit" value="로그인">
		<input type = "reset" value="취소">		
	</form>
	
</body>
</html>