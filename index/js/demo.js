 

$(function(){
	
	
	$('#search_button').button({
		icons : {
			primary : 'ui-icon-search',
		},
	});
	
	$('#reg').dialog({
		title : '会员登录',
		autoOpen : true,
		modal : true,
		resizable : false,
		width : 320,
		height : 340,
		buttons : {
			'提交':function(){	
				alert('正在提交中...')
			},
		},
		autoOpen : false,
	});
	$('#reg_a').click(function(){
		$('#reg').dialog('open');
	})
	$('#reg input[type=radio]').button();
	$('#date').datepicker({
		dateFormat : 'yy-mm-dd',
		//dayNames : ['日','一','二','三','四','五','六']
		dayNamesMin : ['日','一','二','三','四','五','六'],
		monthNames : ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
		altField : '#abc',
		altFormat : 'dd/mm/yy',
		//appendText : '日历',
		showWeek : true,
		weekHeader : '周',
		firstDay : 1,
		showOtherMonths : true,
		//selectOtherMonths : true,
		changeMonth : true,
		showOn : 'both',
		buttonText : '日历',
	});
	$('#reg input[title]').tooltip({
		
		open : 'open',
		show : false,
		hide : false,
		position : {
			my : 'left+5 top',
			at : 'right center'
		},
		disabled : false,
		tooltipClass : 'a',
	});
	
	$('#email').autocomplete({
		delay : 0,
		autoFocus : true,
		source : function(request,response){
			
			//获取用户输入的内容
			//alert(request.term);
			//response(['aa','aaa','aaaaa','bb']);
			var hosts = ['qq.com','163.com','263.com','sina.com.cn','gmail.com','hotmail.com'],
				term = request.term,		//获取用户输入的内容.
				name = term,				//邮箱的用户名
				host = '',					//邮箱的域名
				ix = term.indexOf('@'),		//@的位置
				result = [];				//最终呈现的邮箱列表
				result.push(term);
				//当有@的时候从新分配用户名和域名
				if(ix>-1){
					name = term.slice(0,ix);
					host = term.slice(ix+1);
				}
				if(name){
					//如果用户已经输入@和后面的域名，就找到相关的域名提示
					//如果用户还没有输入@和后面的域名，就把所有的域名都提示出来。
					var findedHosts = [];
					if(host){
						findedHosts=$.grep(hosts,function(value,index){
						 	return value.indexOf(host)>-1;
						})
					}else{
						findedHosts = hosts;
					}
					var findeResult = $.map(findedHosts,function(value,index){
						return name + '@'+value;
					});
					result = result.concat(findeResult);
				}
				response(result);
				
				
		}
		
	});
	
});
