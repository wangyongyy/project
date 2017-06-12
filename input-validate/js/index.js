

$(function(){
	$('#search_button').button({
		disabled : false,
		icons : {
			primary : 'ui-icon-search',
		},
		label : '查找',
		//text : false,
	});
	$('#reg').dialog({
		autoOpen : true,
		modal : true,
		resizable : false,
		width : 370,
		height : 350,
		buttons : {
			'提交' : function(){
				$(this).submit();
			}
		},
		closeText : '关闭',
	}).buttonset().validate({
		
		submitHandler : function(form){
			alert('提交中...');
		},
		
		showErrors : function(errorMap,errorList){
			var errors = this.numberOfInvalids();
			//自动扩展
			if(errors>0){
				$('#reg').dialog('option','height',errors*20+350);
			}else{
				$('#reg').dialog('option','height',errors*20+350);
			};
			this.defaultShowErrors();
		},
		
		highlight : function(element,errorClass){
			$(element).css('border','1px solid #f00');
		},
		unhighlight : function(element,errorClass){
			$(element).css('border','1px solid #ccc');
			$(element).parent().find('span').html('&nbsp;').addClass('succ');
		},
		
		
		
		errorLabelContainer : 'ol.reg_error',
		wrapper : 'li',
		
		
		rules : {
			user : {
				required : true,
				minlength : 2,
			},
			pass : {
				required : true,
				minlength : 6,
			},
			email : {
				required : true,
				email : true,
			},
			date : {
				date : true,
			},
		},
		messages : {
			user : {
				required : '账号不得为空',
				minlength : jQuery.format('账号不得小于{0}位'),
			},
			pass : {
				required : '密码不得为空',
				minlength : jQuery.format('密码不得小于{0}位'),
			},
			email : {
				required : '邮编不得为空',
				email : '请输入正确的邮箱地址',
			},
		},
	});
	
	$('#date').datepicker({
		dateFormat : 'yy-mm-dd',
		dayNamesMin : ['日','一','二','三','四','五','六'],
		monthNames : ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
		altField : '#abc',
		altFormat : 'dd/mm/yy',
		//appendText : '日历',
		showWeek : true,
		weekHeader : '周',
		firstDay : 1,
		showOtherMonths : true,
		changeMonth : true,
		monthNamesShort : ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
		changeYear : true,
		showOn : 'both',
		buttonText : '日了',
		buttonImage : 'images/calendar.gif',
		buttonImageOnly : true,
		showButtonPanel : true,
		closeText : '关闭',
		currentText : '今天dd',
		nextText : '下一月mm',
		prevText : '上一月mm',
		navigationAsDateFormat : true,
		yearSuffix : '年',
		showMonthAfterYear : true,
		yearRange : '1950:2040',
		//minDate : -1110,
		//maxDate : 0,
		//defaultDate : -2,
		//gotoCurrent : true,
		duration : 50,
		beforeShow : function(){
			$('#date').datepicker('refresh');
		},
	});
	//alert($('#date').datepicker('setDate'));
	
	$('#reg input[title]').tooltip({
		//disabled : false,
		//content : '改变文字',
		position : {
			my : 'left center',
			at : 'right+5 center',
		}
	});
	$('#email').autocomplete({
		minLength : 1,
		delay : 50,
		autoFocus : true,
		source : function(request,response){
			//response(['aa','aaaa','aaaaaa','bb']);
			var hosts = ['qq.com','163.com','263.com','gmail.com','hotmail.com'],
			term = request.term,
			ix = term.indexOf('@'),
			name = term,
			host = '';
			result = [];
			result.push(term);
			
			if(ix>-1){
				name = term.slice(0,ix);
				host = term.slice(ix + 1);
			}
			if(name){
				var findedHosts = (host ? $.grep(hosts,function(value,index){
						return value.indexOf(host)>-1;
					}) : hosts),
					findedResult = $.map(findedHosts,function(value,index){
					return name + '@' +value;
				});
				result = result.concat(findedResult);
			}
			
			response(result);
		}
	})
	
});
