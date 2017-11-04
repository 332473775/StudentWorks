window.onload=function(){
	var t1 = document.getElementsByTagName('tr');
	for (var i = 1; i < t1.length; i++) {
		t1[0].style.color="#fff";
		t1[0].style.background="#707070";
		if (i%2==0) {
			t1[i].style.background="#d8ebff";
		}
		else{t1[i].style.background="#fff";}
	}
	var a = document.getElementsByClassName('title')[0];
	a.onclick=function(){
		var b = document.getElementsByClassName('photo3')[5];
		console.log(b);
		b.style.display="block";
		a.style.display="none";
	}
	document.getElementById("x1").onclick=function(){
		 window.location.href="../html/xunke5.html";
	}
	document.getElementById("x2").onclick=function(){
		 window.location.href="../html/xunke10.html";
	}
	document.getElementById("x3").onclick=function(){
		 window.location.href="../html/xunke.html";
	}
	document.getElementById("x4").onclick=function(){
		 window.location.href="../html/xunke7.html";
	}
	document.getElementById("x5").onclick=function(){
		 window.location.href="../html/xunke2.html";
	}
	document.getElementsByClassName("photo3")[0].onclick=function(){
		 window.location.href="../html/xunke4.html";
	}
}