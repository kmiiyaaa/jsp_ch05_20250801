<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
	
</head>
<body>

<% // request - 내장객체 , 여기로 한번에 묶여서 서버로 입력정보 넘어간다
	request.setCharacterEncoding("UTF-8");

	int korScore = Integer.parseInt(request.getParameter("kor"));
	int engScore  = Integer.parseInt(request.getParameter("eng"));
	int mathScore =  Integer.parseInt(request.getParameter("math"));
	
	double avg = (double)(korScore+engScore+mathScore)/3;
	out.print(avg);
%>


</body>
</html>