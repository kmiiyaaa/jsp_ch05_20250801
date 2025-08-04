<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script type="text/javascript" src="js/joinJs.js"> </script>
<title>회원 가입</title>
</head>
<body>
	<h2>회원 가입</h2>
	<hr>
	<form action="memberJoinOk.jsp" name="join" method="post">
		아이디 : <input type="text" name="id"><br><br>
		비밀번호 : <input type="password" name="pw1"><br><br>
		비밀번호 확인 : <input type="password" name="pw2"><br><br>
		이름 : <input type="text" name=name><br><br>
		이메일 : <input type="text" name=email><br><br>
		주소 : <input type="text" name=addr><br><br>s
		나이 : <input type="text" name=age><br><br>
		<input type="button" value="회원가입" onclick="joinCheck()">
	</form>

</body>
</html>