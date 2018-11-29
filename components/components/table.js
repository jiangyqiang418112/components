function Table(options){
	this.container = document.getElementById(options.el);
	this.colunms = options.colunms;
	this.data = options.data;
	this.table = null;
	this.thead = null;
	this.tbody = null;
	this.tfoot = null;
	/*
	 * 数据读取完毕自动初始化
	 */
	this.init();
}
//初始化
Table.prototype.init = function(){
	this.container.innerHTML = "";
	this.table = document.createElement("table");
	this.table.setAttribute("border",'1px');
	this.initHead();
	this.initBody();
	this.container.appendChild(this.table);
}
//初始化table
Table.prototype.initTable = function(){
	
}
//初始化头部
Table.prototype.initHead = function(){
	var col = this.colunms;
	this.thead = document.createElement("thead");
	var tr = document.createElement("tr");
	if(col.length > 0){
		col.forEach(function(ele,index){
			var td = document.createElement("td");
			td.innerHTML = ele.title || "-";
			tr.appendChild(td);
		})
		this.thead.appendChild(tr);
	}
	this.table.appendChild(this.thead);
}
//初始化主体
Table.prototype.initBody = function(){
	var that = this;
	this.tbody = document.createElement("tbody");
	var data = this.data;
	var col = this.colunms;
	if(data && data.length>0){
		data.forEach(function(ele,index){
			var tr = document.createElement("tr");
			col.forEach(function(el,ind){
				var td = document.createElement("td");
				var type = el.type;
				var key = el.key;
				if(type){
					switch(type){
						case "index":
							td.innerHTML = index + 1;
						break;
						case "handle":
							var methods = el.methods;
							methods.forEach(function(method,dex){
								var a = document.createElement("a");
								a.setAttribute("href","javascript:void(0);");
								a.style.margin = "0 5px"; 
								a.innerHTML = method.title;
								a.onclick = function(){
									method.method(data,ele);
								};
								td.appendChild(a);
							})
						break;
						default:
							td.innerHTML = "-";
						break;
					}
				}else{
					td.innerHTML = ele[key];
				}
				tr.appendChild(td);
			})
			that.tbody.appendChild(tr);
		})
	}else{
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		td.innerHTML = "暂时没有数据！";
		tr.appendChild(td);
		that.tbody.appendChild(tr);
	}
	this.table.appendChild(this.tbody);
}
//刷新数据
Table.prototype.refreshTable = function(data){
	this.data = data;
	this.init();
}
