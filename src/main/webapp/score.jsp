<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript">
		function checkFun(){
			if(document.score.kor.value=="" || document.score.eng.value=="" || document.score.math.value=="" ){ 
				// console.log("함수 출력"); // 빈칸 검사
				alert("점수는 필수 입력사항입니다.");
				return false;
			}
		}
	</script>
</head>
<body>

	<form action="scoreOK.jsp" name = "score" onsubmit="return checkFun()">
		국어 : <input type="text" name="kor"><br>
		영어 : <input type="text" name="eng"><br>
		수학 : <input type="text" name="math"><br>
		<input type = "submit" value="평균 출력" >
		<input type = "reset" value="다시 입력">
	
	</form>

</body>
</html>