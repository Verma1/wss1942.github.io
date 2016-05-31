// color.js

(function(){
	var colors=[
		{"name":"胭脂","value":"#9d2932"},
		{"name":"赤","value":"#c3272b"},
		{"name":"炎","value":"#ff3300"},
		{"name":"妃色","value":"#ed5736"},
		{"name":"绾wan","value":"#a98175"},
		{"name":"檀","value":"#b36d61"},
		{"name":"驼色","value":"#a88462"},
		{"name":"黎","value":"#76664d"},
		{"name":"鸦青","value":"#424b50"},
		{"name":"黛蓝","value":"#415065"},
		{"name":"黛","value":"#494166"},
		{"name":"竹青","value":"#789262"},
		{"name":"艾青","value":"#a3e2c5"},
		{"name":"靛青","value":"#177cb0"},
		{"name":"秋香色","value":"#b9b612"},
		{"name":"牙白","value":"#efdeb0"},
		{"name":"茶白","value":"#f3f8f1"},
		{"name":"水绿","value":"#d2f2e8"},
		{"name":"月白","value":"#d7ecf1"}
	],
	container = $(".container"),
	colorStr="",i,color;

	for(i=0;i<colors.length;i=i+1){
		color = colors[i];
		colorStr = colorStr+"<div class='color' style='background-color: "+color.value+";'>"+
            "<span class='name'>"+color.name+"</span>"+
            "<span class='value'>"+color.value+"</span>"+
        	"</div>";
	}
	colorStr = colorStr+"<div class='color no-event'><span class='name desc'>点击颜色可以直接复制颜色值</span></div>"+
            "<span id='color'>hello</span>"+
    "<button id='copy' class='btn' data-clipboard-action='copy' data-clipboard-target='#color'>Copy</button>";

	container.html(colorStr);

	container.delegate('div','click',function(event){
		var str = $(this).children('.value').text();
		console.log(str);
		// console.log(str.match(/\#.{6}/)[0]);

		$("#color").text(str);
		$("#copy").click();
	});
})()