var count = 0;
var score = document.getElementById("score");
var c1 = document.getElementById("c1");
var w1 = document.getElementById("w1");
var w2 = document.getElementById("w2");
var w3 = document.getElementById("w3");
var box1 = document.getElementById("box1");

var a = false;

function check()
{
	if(a===false)
	{
	c1.style.background="#04B70F";
	w1.style.background="#E90505"
	w2.style.background="#E90505"
	w3.style.background="#E90505"
	box1.style.background="#272E34"
	a=true;
	score.innerHTML=count;
	}
	
}

c1.addEventListener("click",function()
{
	count++;
	check();
})
w1.addEventListener("click",function()
{
	count--;
	check();
})
w2.addEventListener("click",function()
{
	count--;
	check();
})
w3.addEventListener("click",function()
{
	count--;
	check();
})


//green

var c2 = document.getElementById("c2");
var w4 = document.getElementById("w4");
var w5 = document.getElementById("w5");
var w6 = document.getElementById("w6");
var box2 = document.getElementById("box2");

var b = false;

function check1()
{
	if(b===false)
	{
	c2.style.background="#04B70F";
	w4.style.background="#E90505"
	w5.style.background="#E90505"
	w6.style.background="#E90505"
	box1.style.background="#272E34"
	b=true;
	score.innerHTML=count;
	}
	
}

c2.addEventListener("click",function()
{
	count++;
	check1();
})
w4.addEventListener("click",function()
{
	count--;
	check1();
})
w5.addEventListener("click",function()
{
	count--;
	check1();
})
w6.addEventListener("click",function()
{
	count--;
	check1();
})

//yellow

var c3 = document.getElementById("c3");
var w7 = document.getElementById("w7");
var w8 = document.getElementById("w8");
var w9 = document.getElementById("w9");
var box3 = document.getElementById("box3");

var c = false;

function check2()
{
	if(c===false)
	{
	c3.style.background="#04B70F";
	w7.style.background="#E90505"
	w8.style.background="#E90505"
	w9.style.background="#E90505"
	box3.style.background="#272E34"
	c=true;
	score.innerHTML=count;
	}
	
}

c3.addEventListener("click",function()
{
	count++;
	check2();
})
w7.addEventListener("click",function()
{
	count--;
	check2();
})
w8.addEventListener("click",function()
{
	count--;
	check2();
})
w9.addEventListener("click",function()
{
	count--;
	check2();
})

//red

var c4 = document.getElementById("c4");
var w10 = document.getElementById("w10");
var w11 = document.getElementById("w11");
var w12 = document.getElementById("w12");
var box4 = document.getElementById("box4");

var d = false;

function check3()
{
	if(d===false)
	{
	c4.style.background="#04B70F";
	w10.style.background="#E90505"
	w11.style.background="#E90505"
	w12.style.background="#E90505"
	box4.style.background="#272E34"
	d=true;
	score.innerHTML=count;
	}
	
}

c4.addEventListener("click",function()
{
	count++;
	check3();
})
w10.addEventListener("click",function()
{
	count--;
	check3();
})
w11.addEventListener("click",function()
{
	count--;
	check3();
})
w12.addEventListener("click",function()
{
	count--;
	check3();
})

//red




//purple

var c5 = document.getElementById("c5");
var w13 = document.getElementById("w13");
var w14 = document.getElementById("w14");
var w15 = document.getElementById("w15");
var box5 = document.getElementById("box5");

var e = false;

function check4()
{
	if(e===false)
	{
	c5.style.background="#04B70F";
	w13.style.background="#E90505"
	w14.style.background="#E90505"
	w15.style.background="#E90505"
	box5.style.background="#272E34"
	e=true;
	score.innerHTML=count;
	alert("Your score is :"+ count)
	}
	
}

c5.addEventListener("click",function()
{
	count++;
	check4();
})
w13.addEventListener("click",function()
{
	count--;
	check4();
})
w14.addEventListener("click",function()
{
	count--;
	check4();
})
w15.addEventListener("click",function()
{
	count--;
	check4();
})
