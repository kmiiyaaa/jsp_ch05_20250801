<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

</head>
<body>
	<%
		request.setCharacterEncoding("UTF-8");
	
		String id = request.getParameter("loginId");
		String pw = request.getParameter("loginPw");
		
		if (id.equals("admin") && pw.equals("1234")) {
			out.println("안녕하세요 로그인 성공하셨습니다!");
		} else {
			out.println("로그인 실패!");
		}

	%>
</body>
</html>