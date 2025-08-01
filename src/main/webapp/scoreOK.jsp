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

	int korScore = Integer.parseInt(request.getParameter("kor"));
	int engScore  = Integer.parseInt(request.getParameter("eng"));
	int mathScore =  Integer.parseInt(request.getParameter("math"));
	
	double avg = (double)(korScore+engScore+mathScore)/3;
	out.print(avg);
%>


</body>
</html>