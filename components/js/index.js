window.onload = function(res){
	var table = new Table({
		el:"table",
		colunms:[
			{title:"序号",type:"index"},
			{title:"姓名",key:"name"},
			{title:"年龄",key:"age"},
			{title:"身高",key:"height"},
			{title:"操作",type:"handle",methods:[
				{title:"增加",method:function(data,row){
					console.log(data,row);
				}},
				{title:"删除",method:function(data,row){
					console.log(data,row);
				}}
			]}
		],
		data:[
			{name:"j1",age:11,height:121},
			{name:"j2",age:12,height:122},
			{name:"j3",age:13,height:123},
			{name:"j4",age:14,height:124},
			{name:"j5",age:15,height:125},
			{name:"j6",age:16,height:126},
			{name:"j7",age:17,height:127}
		]
	})
	document.getElementById("refresh").onclick = function(){
		refresh();
	}
	function refresh(){
		var data = "";
		table.refreshTable(data);
	}
}