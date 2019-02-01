
// init variables
var trcopy;
var editing = 0;
var tdediting = 0;
var editingtrid = 0;
var editingtdcol = 0;
//var key_escape_up = 0;  //  added by OD
var inputs = ':checked,:selected,:text,textarea,select';
var this_tr = '';


var page = 1;
var per_page = 20;

 function radio1_check() {
    if(1){
             radio_val = ($('.radio1:checked').val());
         if(radio_val == 'radio1_1') {
        //    $("a.ajaxDelete, a.ajax_category_Delete").show();
            $("td.td_action a").hide();
            $("a.ajaxDelete, a.ajax_category_Delete").css({ "display":"block" });  
         } else if (radio_val == 'radio1_2') {
            $("td.td_action a").hide();    
            $("a.ajaxEdit, a.ajax_category_Edit").css({ "display":"block" });
         } else if (radio_val == 'radio1_3') {
            $("td.td_action a").hide();    
            $("a.ajaxCopying, a.ajax_category_Copying").css({ "display":"block" });
         } 
        // console.log (radio_val);  
         return radio_val;

    }
}; 


$(document).ready(function(){
    
    touch_evt ='';
    if(Modernizr.hasEvent('touchstart') || navigator.userAgent.search(/Touch/i) != -1){
                        click_evt ='touchstart';
             } else {
    //            alert("is not touch");
                        click_evt ='click';
        }

    

// функция для вывода сообщений в модальном окне (как функция "Alert")
// для вызова всплывающего сообщения нужно вызвать функцию show_alert() как с параметром так и без него, - например show_alert('переменная text='+text) ;
    function show_alert(testv){
//	testv = '';
        new jBox('Notice', {
            content: 'Страница успешно загружена </br>'+testv,
            autoClose: 2000
//      autoClose: false
        });
        testv = '';
    }



	
    // функция UNIX-времени для именования загружаемых файлов-изображений
	time_unix = function get_time () {
// console.log (new Date().getTime());	
// console.log ( Math.floor(Date.now() / 1000) );
	return ( Math.floor(Date.now() / 1000) );
	}
	
	
	// запуск экспериментальной функции скрытия по timeout - по клику
//    $(document).on("click","#main_title_2",function(){    
//   alert (''); 
// console.log ('test function_1 fired');

// obj_1 = $("#progress-bar-3");                
// autohide(obj_1); 

// get_time ();
      
//    });

// функция подсветки редактируемых полей "input" и "select"
//function highlight_On_editing_Row(this_tr) {
//    this_tr.addClass("current_edit"); 
//}
// фуекция удаления подсветки редактируемых полей "input" и "select"
function highlight_off_editing_Row() {
    $('tr.current_edit').removeClass("current_edit");
}

function highlight_off_editing_TD() {
//    $('td.current_edit').removeClass("current_edit");
    $('td#current_edit').removeAttr('id');
}




// блок с функцией для определения нажатия радио-кнопки в выезжающей слева, боковой панели
//$( "#radio1_2" ).prop( "checked", true );
$( "#radio1_1" ).click();



//radio1_check();  // вызов функции определения нажатой кнопки типа "радио" в выезжающей панеле настроек (слева)
 
// $(document).on("click",".radio1",function(){ 
// radio1_check();
// radio_val = ($('.radio1:checked').val());
// console.log (radio_val);    
// });










	

// скрытие slideUp/ SlideDown Admin config DIV
    $(document).on("click","a.test_2",function(){ 
//        $('#custom_1').slideToggle('fast');
        $('#custom_1').toggle('fast'); 
//        $('#custom_1').slideToggle('fast');       
});




// show/ hide верхнего (1-го), который показывает имеющиеся категории, на AJAX-странице "категории"
    $(document).on("click","a.toggle_cat_block_1",function(){
if ($('div#test_inner_1').css('display') == 'block')
{   
    $('div#test_inner_1').hide();
    $.cookie('category_block_1','hide');
}
//else if(!$('div#admin_category_form').is(':visible'))
else if($('div#test_inner_1').css('display') == 'none')
{
    $('div#test_inner_1').show();
    $.cookie('category_block_1','show');
}     
});


// show/ hide блока с формой, на AJAX-странице "категории"
    $(document).on("click","a.toggle_cat_block_2",function(){
if ($('div#admin_category_form').css('display') == 'block')
{   
    $('div#admin_category_form').hide();
    $.cookie('category_block_2','hide');
}
//else if(!$('div#admin_category_form').is(':visible'))
else if($('div#admin_category_form').css('display') == 'none')
{
    $('div#admin_category_form').show();
    $.cookie('category_block_2','show');
}     
});


// show/ hide 2-х таблиц с корневыми категориями и подкатегориями, на AJAX-странице "категории"
    $(document).on("click","a.toggle_categories_tables",function(){
//if ($('table.type_table').css('display') == 'block')
if($('table.type_table').is(':visible'))
{   
    $('table.type_table, table.category_table').hide();
    $.cookie('category_table_1_2','hide');
}
//else if(!$('div#admin_category_form').is(':visible'))
else if($('table.type_table').css('display') == 'none')
{
    $('table.type_table, table.category_table').show();
    $.cookie('category_table_1_2','show');
}     
});
















// запуск экспериментальной функции получения (обновления) основной таблицы товаров
    $(document).on("click","a.test_2",function(){ 
//        $('#custom_1').slideToggle('fast');
//        $('#custom_1').toggle('fast'); 
//    $("#layer_3").css({ "display":"block" });
//        $("#layer_3").fadeIn(3000);
        // ajax2(0,"get_main_table");
          $("#layer_3").hide();
		  $("#layer_1").fadeIn(2000);
          loadData(1, per_page);
//        $('#custom_1').slideToggle('fast');
        
});





// запуск экспериментальной функции получения (обновления) основной таблицы товаров
    $(document).on("click","a.test_3",function(){ 
//        $('#custom_1').slideToggle('fast');
//        $('#custom_1').toggle('fast'); 
//    $("#layer_3").css({ "display":"block" });
		$("#layer_1").fadeOut(300);
        $("#layer_3").fadeIn(3000);
        ajax2(0,"get_main_table");
//        $('#custom_1').slideToggle('fast');
        
});

// запуск экспериментальной функции получения (обновления) основной таблицы категорий
    $(document).on("click","a.test_4",function(){ 
//        $('#custom_1').slideToggle('fast');
//        $('#custom_1').toggle('fast'); 
		$("#layer_1").fadeOut(300);

    ajax2(0,"get_main_table_category");
    $("div#layer_3").css({ "display":"none" });

    
//console.log ('Category update link pressed')
        
});








// ------------------------------ Блок для категорий (start:) ------------------------------


//   1. Подстановка в input type text названия Типа товара из списка типа товаров (из полей типа select)
        $('select[name="select_name_type_tovara"]').change(function(event){
            $('input[name="input_text_root_category_name"]').val($('#id_type_tovara option:selected').text());
        });

        $(document).on("click","a.sel_1 li",function(){
            var a_text = $(this).children().text();            
            $('input[name="input_text_root_category_name"]').val(a_text);
//console.log($('this a').text());
// console.log(a_text);  // work good          
        });

//   2. Подстановка в input type text - алиаса Типа товара из БД, название таблици в БД: "category_root_type_tovara"
        $("#id_type_tovara").bind("change", function(){
            $.get("actions/ajax-preload-category-root-aliases.php",
                {id: $('#id_type_tovara').val()},
                function(data){
                    $("#id_input_text_root_category_alias").val(data);
                                });
            //По клику (см функц. выше) выбора типа товара проверяется: если поле выбора брэндов содержит одно option value и его значение=0
            // или не содежит вообще (<=1), то поле выбора подкатегорий очищается:  $('#id_subcategory_name').empty()
            if ($('#id_category_name').size()<=1 &&  ($("#id_category_name option[value=0]").length > 0))
            {
                $('#id_subcategory_name').empty();
                $('#id_input_text_category_name').val('');  //Очистка текстового поля для ввода названия Брэнда
            }

    });


//   3. Подстановка в input type text названия Бренда из списка брендов (из полей типа select)
        $('select[name="select_category_name"]').change(function(event){
        $('input[name="input_text_category_name"]').val($('#id_category_name option:selected').text());
        });


//   4. Выбор категорий (выбор Брендов) по выбору типа товара
    $(document).on("change","#id_type_tovara", function(){
//    $("#id_category_name").load("actions/ajax-preload-category.php?id=" + $('#id_type_tovara').val(),
//                null,
//                $("#id_category_name").prop("disabled", ''));

        var id_type_tovara = $('#id_type_tovara').val();
//console.log (id_type_tovara)    
    $.get(
      "actions/ajax-preload-category.php",
      {
        id: id_type_tovara
      },
      onAjaxSuccess
    );
    
    function onAjaxSuccess(data)
    {
      // Здесь мы получаем данные, отправленные сервером и выводим их на экран.
    //  alert(data);
    $("#id_category_name").html(data);
    $('select').selectBox('refresh');  // перезапуск (обновление) плагина "selectBox.js"
    }
    });


//   5. Выбор подкатегорий (выбор коллекции) по выбору названия Бренда
    $("#id_category_name").bind("change", function(){
    $("#id_subcategory_name").load("actions/ajax-preload-subcategory.php?id=" + $('#id_category_name').val(),
                        null,
                        $("#id_subcategory_name").prop("disabled", ''));
    });




//  блок сохранения формы категорий (корневой и подкатегории): сохранение (обновление) данных на сервере (в Базе Данных)

//    $(document).on("click","#Button15",function(){
       $(document).on("click","input#submit_new_categories_form",function() {
        
// alert('input#submit_form"')
//		var id = $(this).attr("id");
//var id = $('textarea[name="products_id"]').val();
//        e.preventDefault();
//alert (id);       
        var serialized = ($('#add_categories').serialize())

//		alert(serialized);
      console.log(serialized);
//			ajax3(serialized,"add_categories_1_2_3");        
			ajax3(serialized,"add_categories_1_2_3_from_second_block");
//alert ('rid='+id)

//        ajax(serialized+"&rid="+id,"extended_update_row");
    return false;              

    });













// ------------------------------ Блок для категорий (End) ------------------------------

	
// экспериментальная функция: определение одновременно нажатых клавиш

var map = [];
var down = [];
$(document).on('keydown','body', function(e) {
    if(!map[e.which]){
        down.push(e.which);

//		 if(down[0] === 68 && down[1] === 69 && down[2] === 86) {
		 if(down[0] === 17 && down[1] === 81)  {
//		 alert ('test fired - Ctrl + Q pressed');
		 console.log ('test fired - Ctrl + Q pressed');
		 }
/*		
        if(down[0] === 68 && down[1] === 69 && down[2] === 86) {
            $('.alert').html('D + E + V was pressed');
        } else if(down[0] === 17 && down[1] === 13) {
            $('.alert').html('CTRL + ENTER');
        } else if(down[0] === 16 && down[1] === 46) {
            $('.alert').html('SHIFT + DEL');
        } else if(down.length>2) { 
            // only care that last key is last...
            if($.inArray(68,down)!=-1 && $.inArray(69,down)!=-1 && down[2] === 86) {
                $('.alert').html('A hacky D+E+V was pressed');
            }
            if($.inArray(18,down)!=-1 && $.inArray(17,down)!=-1 && $.inArray(16,down)!=-1 && down[down.length-1] === 13) {
                $('.alert').html('(ALT<=>CTRL<=>SHIFT) + ENTER');           // alternative -->----^-----^-----^
            }
        }
		
        /* more conditions here */
		
		
		
    }
    map[e.which] = true;
}).keyup(function(e) {
    map[e.which] = false;

    /* important for detecting repeat presses of last key while holding first key(s) */
    unset(down,e.which);
    
//    $('.alert').html('');
});

/* removes an element from an array by its value 
   found at http://stackoverflow.com/questions/3954438/remove-item-from-array-by-value */
function unset(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax= arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}




	
	

	
	
	
	
	
	
	
	
	
	
	
	
	


    function show_alert() {                                 // Button which will activate our modal
                $('#add_new_content_page').reveal({                      // The item which will be opened with reveal
                    animation: 'fade',                    // fade, fadeAndPop, none
                    animationspeed: 200,                  // how fast animtions are
                    closeonbackgroundclick: true,         // if you click background will modal close?
                    dismissmodalclass: 'close'            // the class of a button or element that will close an open modal
                });
            return false;
            };


    function show_modal_content_page_prop() {                                 // Button which will activate our modal
                $('#content_page_seo_editing').reveal({                      // The item which will be opened with reveal
                    animation: 'fade',                    // fade, fadeAndPop, none
                    animationspeed: 200,                  // how fast animtions are
                    closeonbackgroundclick: true,         // if you click background will modal close?
                    dismissmodalclass: 'close'            // the class of a button or element that will close an open modal
                });
            return false;
            };


    function show_modal_content_only_page_editing() {                                 // Button which will activate our modal
			   	$('#content_only_page_editing').reveal({                      // The item which will be opened with reveal
				  	animation: 'fade',                    // fade, fadeAndPop, none
					animationspeed: 200,                  // how fast animtions are
					closeonbackgroundclick: true,         // if you click background will modal close?
					dismissmodalclass: 'close'            // the class of a button or element that will close an open modal
				});
			return false;
			};





    // функция модального окна для загрузки основного изображения товара              
   function show_modal_add_main_image_product_form() {
			   	$('#modal_admin_add_main_image_product').reveal({
				  	animation: 'fade',
					animationspeed: 200,
					closeonbackgroundclick: true,
					dismissmodalclass: 'close'
				});
        //  автозакрытие модального окна, через указанное время
//    setTimeout(function(){ $('#modal_admin_add_main_image_product').trigger('reveal:close'); }, 1000);
			return false;
//   setTimeout(function(){ $('#userImage').click(); }, 500);
//setTimeout(function(){   document.getElementById('userImage').click();  }, 1000);
			};
 
 
 
 
    // функция модального окна для загрузки "Rollover"-изображения товара
   function show_modal_3() {
			   	$('#modal_3').reveal({
				  	animation: 'fade',
					animationspeed: 200,
					closeonbackgroundclick: true,
					dismissmodalclass: 'close'
				});
        //  автозакрытие модального окна, через указанное время
//    setTimeout(function(){ $('#modal_admin_add_main_image_product').trigger('reveal:close'); }, 1000);
			return false;
			};     
 
 
 
            
    // функция модального окна для загрузки дополнительных изображений товара
   function show_modal_add_additional_image_product_form() {
			   	$('#modal_admin_add_additional_image_product').reveal({
				  	animation: 'fade',
					animationspeed: 200,
					closeonbackgroundclick: true,
					dismissmodalclass: 'close'
				});
        //  автозакрытие модального окна, через указанное время
//    setTimeout(function(){ $('#modal_admin_add_main_image_product').trigger('reveal:close'); }, 1000);
			return false;
			};    
    
    
    
    
    
//   $("div#block-parameters").on('click', ".test", function() {
     $(".test").click(function(){
    
    $("#"+"modal-heading").html();
    $("#"+"modal-heading").html('Тестовое модальное окно: ');      
    data = 'Тестовое модальное окно' ; 
//    alert ();
    show_alert();     
//    $("add_new_content_page").css({"top":"", "width":"", "height":"", "margin-top":"", "margin-left":"", "left":"", "position":''});    
    $("add_new_content_page").css({ "top":"0" });
  
   }); 

//  вызов функции открытия модального окна загрузки основного изображения товара
//   $("div#block-parameters").on('click', ".test", function() {
     $("#launch_modal_1").click(function(){
     translit_2();
    show_modal_add_main_image_product_form();
//   setTimeout(function(){ $('#userImage').click(); }, 2000);
//setTimeout(function(){   document.getElementById('userImage').click();  }, 1000);
    $('#uploadForm input[type="file"]').click();   // открытие Windows-окна для выбора выгружаемого файла    
   }); 

    //  Авто-Закрытие модального окна загрузки файла основного изображения продукта, по клику на кнопку "Submit"
$('#btnSubmit').click(function(){ 
//    alert();
    setTimeout(function(){ $('#modal_admin_add_main_image_product').trigger('reveal:close'); }, 300);
    });




//  вызов функции открытия модального окна загрузки "Rollover"-изображения товара
    $("#launch_modal_3").click(function(){
//     translit_2();
//	$("#rollover_image_id_alias").val(12345); // for test only: подстановка в поле "Транслитированное новое название файла:" - случайного значения
    $("#rollover_image_id_alias").val(time_unix);
    
	 current_product_id = ($('#products_id_2').val());
	$("#product_id_rollover_image").val(current_product_id); // for test only: подстановка в поле "id product:" - текущее значение id product
   show_modal_3();
   $('#uploadForm_3 input[type="file"]').click();   // открытие Windows-окна для выбора выгружаемого файла       
  }); 

    //  Авто-Закрытие модального окна загрузки файла "Rollover"-изображения продукта, по клику на кнопку "Submit"
$('#btnSubmit_3').click(function(){ 
//    alert();
    setTimeout(function(){ $('#modal_3').trigger('reveal:close'); }, 300);
    });





//  вызов функции открытия модального окна загрузки дополнительных изображений товара
//   $("div#block-parameters").on('click', ".test", function() {
     $("#launch_modal_2, #launch_modal_upload_rollover_image").click(function(){
    current_product_id = ($('#products_id_2').val()); // получаем из input формы значение product_id
    $("#product_id_additional_image").val(current_product_id);
    $("#additional_image_alias").val(time_unix);
    
    show_modal_add_additional_image_product_form();
    $('#uploadForm_2 input[type="file"]').click();   // открытие Windows-окна для выбора выгружаемого файла       
   }); 

    //  Авто-Закрытие модального окна загрузки файла дополнительных изображений товара, по клику на кнопку "Submit"
$('#btnSubmit_2').click(function(){ 
//    alert();
    setTimeout(function(){ $('#modal_admin_add_additional_image_product').trigger('reveal:close'); }, 300);
    });






// функция определения и установки ширины модального окна, полей типа "textarea" и др. потребностей
function get_size(){
//  document.querySelector('.width').innerText = document.documentElement.clientWidth;
//  document.querySelector('.height').innerText = document.documentElement.clientHeight;
  
      div_width = ($('#block-tovar-v3').width()); // определение ширины DIV c #block-body (обертка сайта)
//    alert(div_width);
      $('#add_new_content_page').css("width", div_width);
      
//      $('#TextArea11, #TextArea12, #TextArea13, #TextArea1, #TextArea2, #TextArea3').css("width", div_width-420);
//      $('.textarea_admin_right').css("width", div_width-360); // установка ширины полей "textarea", с классом "right_textarea"(которые справа)
      
//      $('.notes_right_wrapper').css("width", div_width-354);    // установка ширины DIV-wrapper для пояняющ. надписей с правой части формы
            
//      $('.bordered').css("width", div_width+1); // установка ширины таблицы  с классом ".bordered"
} 
   get_size();
window.addEventListener('resize', get_size);    
	












    // set images for edit and delete
    $(".eimage").attr("src",editImage);
    $(".dimage").attr("src",deleteImage);
    $(".cimage").attr("src",copyImage);
    $(".advedimage").attr("src",AdvanEditImage);


    //$('input[name="products_id"]').attr("width",20px;);

    // init table
/*    
    blankrow = '<tr valign="top" class="inputform"><td></td><td></td><td></td>';
    for(i=0;i<columns.length;i++){
        // Create input element as per the definition
        input = createInput(i,'');
        blankrow += '<td class="ajaxReq">'+input+'</td>';
    }
    blankrow += '<td><a href="javascript:;" class="'+savebutton+'"><img class="save_icon" src="'+saveImage+'"></a></td></tr>';
//console.log(blankrow);
    // append blank row at the end of table
    $("."+table).append(blankrow);
*/








    //////////////////////////////////////////////////////////////////////////////////////////////////
//  start block of change inputs fieds size    

    /*
     $.fn.textWidth = function(text, font) {
     if (!$.fn.textWidth.fakeEl) $.fn.textWidth.fakeEl = $('<span>').hide().appendTo(document.body);
     $.fn.textWidth.fakeEl.text(text || this.val() || this.text()).css('font', font || this.css('font'));
     return $.fn.textWidth.fakeEl.width();
     };

     //$('#inpt, #inpt2, #inpt3').on('input', function() {
     //    $('input[name="products_id"]').css('width', 15px);
     $('input[name="products_id"]').on('input', function() {
     var padding = 15; //Works as a minimum width
     var valWidth = ($(this).textWidth() + padding) + 'px';
     //    $('#'+this.id+'-width').html(valWidth);
     //    $('#inpt').css('width', valWidth);
     $('input[name="products_id"]').css('width', valWidth);
     }).trigger('input');





     //$('#inpt, #inpt2, #inpt3').on('input', function() {
     $('input[name="title"]').on('input', function() {
     var padding = 155; //Works as a minimum width
     var valWidth = ($(this).textWidth() + padding) + 'px';

     $('input[name="title"]').css('width', valWidth);
     }).trigger('input');
     */
     
/*     
    function set_width_column(){
        $('input[name="products_id"]', $('.bordered')).css('width', "18px");
        $('input[name="main_title"]', $('.bordered')).css('width', "200px");
        $('input[name="title"]', $('.bordered')).css('width', "200px");
        $('input[name="article"]', $('.bordered')).css('width', "50px");
        $('input[name="price"]', $('.bordered')).css('width', "30px");
        $('input[name="brand_2"]', $('.bordered')).css('width', "60px");
    }
*/
    // set_width_column();

//  end block of change inputs fieds sixe    
    //////////////////////////////////////////////////////////////////////////////////////////////////






    // Delete record
    $(document).on("click","."+deletebutton,function(){
// alert('нажата кнопка "deletebutton"')
        data_type = $(this).closest("table").attr("data_type");
        var this_tr = $(this).closest("tr");
//console.log('this_tr = '+ this_tr);         
        var current_tr_type = this_tr.attr("type");
//console.log('current_tr_type = '+ current_tr_type); 
//        var id = $(this).attr("id");
        var id = this_tr.attr("id");

if (data_type == 'products') {
        if(0){
//			if(confirm("Do you really want to delete record ?"))
                if (current_tr_type == 'root_category') {
// console.log('current_tr_type == root_category');
                        ajax("rid="+id,"del_root_category_row");
                }
                else if (current_tr_type == 'category') {
// console.log('current_tr_type == category');
                        ajax("rid="+id,"del_category_row");
                } 
                else if (current_tr_type == 'catalogue_item') {
// console.log('current_tr_type == catalogue_item');                     
                        ajax("rid="+id,"del_catalogue_row");
                }   
//			if(confirm("Do you really want to delete record ?"))
//            ajax("rid="+id,"del");  // string by default
            }

        } else if (data_type == 'content') {

            ajax("rid="+id,"del_content_row");

        }    

    });




    // Add new record
    $(document).on("click","."+savebutton,function(){
        var validation = 1;

        var $inputs =
            $(document).find("."+table).find(inputs).filter(function() {
                // check if input element is blank ??
//			if($.trim( this.value ) == ""){
//				$(this).addClass("error");
//				validation = 0;
//			}else{
//				$(this).addClass("success");
//			}
                return $.trim( this.value );
            });

        var array = $inputs.map(function(){
            //console.log(this.value);
            //console.log(this);
            return this.value;
        }).get();

        var serialized = $inputs.serialize();
// 		alert(inputs);
//		alert(serialized);
      console.log(serialized);
        if(validation == 1){
            ajax(serialized,"save");
        }

//        name11 = $('select[name="address"] option:selected').text();      // работает, текст определяется нормально
//        console.log(name11);

//               $('select[name="address"] option:selected').text();

//        name12 = $('select[name="address"] option:selected').text('name11');
//        name12 = $('select[name="address"]').text('name11');
//        console.log(name12);

    });
    
    
    
    
    
    
    
    

    // Update record (Editbutton)
    $(document).on("click","."+editbutton,function(){
        id = $(this).attr("id");
        
        var this_tr = $(this).closest("tr");
//console.log('this_tr = '+ this_tr);         
        current_tr_type = this_tr.attr("type");
//console.log('current_tr_type = '+ current_tr_type); 

       
        if(id && editing == 0 && tdediting == 0){
            this_tr.addClass("current_edit");   // подсветка редактируемых полей "input" и "select"
            // hide editing row, for the time being
//            $("."+table+" tr:last-child").fadeOut("fast");

            var html = '';
    // в строке ниже: последние тэг "<td></td>" определяют-сколько будет пустых (нередактируемых)ячеек при редактировании строки, т.е
    // по нажатию иконки (в данном случае иконка "карандаш"), справа от каждой строки.



    if (current_tr_type == 'root_category') {
// console.log('current_tr_type == category');
                 html += '<td class="number">'+$("."+table+" tr[id="+id+"] td:first-child").html()+"</td>";
//console.log(html);
                 for(i=0;i<root_category_columns.length;i++){
                // fetch value inside the TD and place as VALUE in input field
                var val = $(document).find("."+table+" tr[id="+id+"] td[class='"+root_category_columns[i]+"']").html();
                input = createInput(i,val,current_tr_type);
//   console.log(i);
//console.log(val);
//                html +='<td>'+input+'</td>';   // string by default
                html +='<td class="'+root_category_columns[i]+'">'+input+'</td>';
//console.log(html);
                }
console.log('html after cycle "for" = '+html);                
                     
    }
    else if (current_tr_type == 'category') {
// console.log('current_tr_type == category');
                 html += '<td class="number">'+$("."+table+" tr[id="+id+"] td:first-child").html()+"</td> ";
//console.log(html);
                 for(i=0;i<category_columns.length;i++){
                // fetch value inside the TD and place as VALUE in input field
                var val = $(document).find("."+table+" tr[id="+id+"] td[class='"+category_columns[i]+"']").html();
                input = createInput(i,val,current_tr_type);
// console.log(i);
// console.log(val);
//                html +='<td>'+input+'</td>';   // string by default
                html +='<td class="'+category_columns[i]+'">'+input+'</td>';
//console.log(html);
                }
                     
    } 
    else if (current_tr_type == 'catalogue_item') {          

                 html += "<td>"+$("."+table+" tr[id="+id+"] td:first-child").html()+"</td> <td></td><td></td>";
//console.log(html);
                for(i=0;i<columns.length;i++){
                // fetch value inside the TD and place as VALUE in input field
                var val = $(document).find("."+table+" tr[id="+id+"] td[class='"+columns[i]+"']").html();
                input = createInput(i,val,current_tr_type);
//   console.log(i);
//console.log(val);
//                html +='<td>'+input+'</td>';   // string by default
                html +='<td class="'+columns[i]+'">'+input+'</td>';
//console.log(html);
                }          
    }         
            
            
            
            

            
            
            
            html += '<td><a href="javascript:;" id="'+id+'" class="'+updatebutton+'"><img class="save_edit_icon" src="'+updateImage+'"></a> <a href="javascript:;" id="'+id+'" class="'+cancelbutton+'"><img class="cancel_edit_icon" src="'+cancelImage+'"></a></td>';
//console.log(html);

//alert(html);
            // Before replacing the TR contents, make a copy so when user clicks on
//            trcopy = $("."+table+" tr[id="+id+"]").html();    // string by default
            trcopy = this_tr.html(); // new variant: Before replacing the TR contents, make a copy so when user clicks on
//   console.log(trcopy);
//    $("."+table+" tr[id="+id+"]").html('');
//            $("."+table+" tr[id="+id+"]").html(html); // string by default
//            $("table tr[id="+id+"]").empty();
//            $("table tr[id="+id+"]").html(html);
            this_tr.html(html);
//    test_html = '<td></td><td></td><td></td><td></td><td></td>'; 
//    test_html_2 = '<td class="number">7</td><td class="root_id"><input type="text" name="root_id" value="17" ></td><td class="visible"><input type="text" name="visible" value="1" ></td><td class="type_name_eng"><input type="text" name="type_name_eng" value="Accessories" ></td><td class="type_name_rus"><input type="text" name="type_name_rus" value="Accessories" ></td>';       

//            $("table tr[id="+id+"]").html(test_html_2);
//            $("table tr[id="+id+"]").html(html);
//            $("table tr[id="+id+"]").append(html);


//var tr_17 = document.getElementById('17');
//var tr_17 = ($("table tr[id="+id+"]"));

//tr_17.appendChild(test_html);
//tr_17.append(test_html);

//$("table tr[id="+id+"]").innerHTML = '<td></td><td></td><td></td><td></td><td></td>';

//  запуск ранее объявленной функции set_width_column() для установки ширины столбцов
//            set_width_column();

//alert(trcopy);			
            // set editing flag
            editing = 1;
//            alert (id);
//           var editbottonid = "";
//           editbottonid = id;
//          alert (editbottonid);




            //start  added by od:   cancel the edit mode by pressing the ESC (escape) key
            $(document).on('keyup',function(evt) {
                if (evt.keyCode == 27) {
                    //       alert('Esc key pressed.');
                    //		var id = $(this).attr("id");
                    //        alert (id);
                    //console.log(id);
                    $("."+table+" tr[id='"+id+"']").html(trcopy);
                    $("."+table+" tr:last-child").fadeIn("fast");
                    editing = 0;
                    //console.log(id);
                    this_tr.removeClass("current_edit");  // удаление подсветки редактируемых полей "input" и "select"
                }
            });
            //end  added by od
        }
    });       //  Update record (Editbutton). End of block.



// отмена редактирования всей строки
    $(document).on("click","."+cancelbutton,function(){
        var id = $(this).attr("id");
        $("."+table+" tr[id='"+id+"']").html(trcopy);
        $("."+table+" tr:last-child").fadeIn("fast");
        editing = 0;
//        alert (id);
//        alert (editing);
//    $("."+table+" tr[id='"+id+"']").effect("highlight",{color: '#f4667b'},1000);
        highlight_off_editing_Row ();    // удаление подсветки редактируемых полей "input" и "select"
    });





// Save changed Row on press "save" icon:
    $(document).on("click","."+updatebutton,function(){
        var this_tr = $(this).closest("tr");
        id = $(this).attr("id");
        editingtrid = this_tr.attr("id");
        current_tr_type = this_tr.attr("type"); // определение типа строки ("корневая категория", "категория", или "каталог")

console.log (current_tr_type);
console.log ('editing = '+editing);
console.log ('tdediting = '+tdediting);
//        editingtrid = $(this).closest('tr').attr("id");        // определение ID редактируемой строки (ID-по базе данных)
//  alert(editingtrid);
//	var $inputs = $(document).find("."+table).find(inputs).filter(function() {  оригинал строки
//  var $inputs = $(document).find("."+table).find("input:text").filter(function() {
//	return $.trim( this.value );
//	});
        var $inputs = $("."+table+" tr[id='"+editingtrid+"']").find("input[type=text], select[name=type_tovara_rus], select[name=brand]").filter(function() {    //так  работает нормально, - выбирает только: input type="text"
            return $.trim( this.value );
        });
//  console.log ($inputs);            
        var serialized = $inputs.serialize();
//  alert(serialized);
//  var selected = $('select[name="brand_2"]').val();      //так работает нормально
//  alert(selected);
        editingtrid = "";    //очистка значения переменной id текущей строки
        
                if (current_tr_type == 'root_category') {
// console.log('current_tr_type == root_category');
                        ajax(serialized+"&rid="+id,"update_root_category_row");
                }
                else if (current_tr_type == 'category') {
// console.log('current_tr_type == category');
                        ajax(serialized+"&rid="+id,"update_category_row");
                } 
                else if (current_tr_type == 'catalogue_item') {
// console.log('current_tr_type == catalogue_item');                     
                        ajax(serialized+"&rid="+id,"update_Row");
                }    
        
//        ajax(serialized+"&rid="+id,"update_Row");
        // clear editing flag
        editing = 0;
        tdediting = 0;
        highlight_off_editing_Row ();
    });







    // td doubleclick event
    $(document).on("dblclick","."+table+" td",function(e){
        if(!$(e.target).is('.noedit')) {
        // check if any other TD is in editing mode ? If so then dont show editing box
        //alert(tdediting+"==="+editing);
        var this_tr = $(this).closest("tr");
        var isEditingform = this_tr.attr("class");
        current_tr_type = this_tr.attr("type");
//alert ($(this).width());
//        td_wid = ($(this).width())-5;  // по дв. клику определяется ширина ячейки таблицы, для дальнейшей передачи в функцию
//console.log ($(this).width());
//console.log (current_tr_type);
//console.log ('editing = '+editing);
//console.log ('tdediting = '+tdediting);

//alert(isEditingform);
//console.log(isEditingform);        
        if(tdediting == 0 && editing == 0 && isEditingform != "inputform"){
            editingtrid = $(this).closest('tr').attr("id");
            editingtdcol = $(this).attr("class");  // string by default

//console.log('editingtdcol= '+editingtdcol+'\r\n editingtrid= '+editingtrid);

//            editingtdcol = $(this).attr("class").get(0);
//        $(this).addClass("current_edit");  // подсветка текущей редактируемой ячейки (точнее подсветка  поля "input")
          $(this).attr("id","current_edit"); // подсветка текущей редактируемой ячейки (точнее подсветка  поля "input")
         
            var text = $(this).html();
            test_value = $(this).html();   // added by OD: Переменная обозначающее первоначальное значение. variable using for action: "updatetd" in AJAX-query (for response.success == 0)
            //если respons.success=0, то переменной "test_value" заменяем редактируемую ячейку таблицы на первоначальные данные.
           
//console.log('text = '+text);
//console.log('test_value = '+test_value);           
            var tr = $(this).parent();
            var tbody = tr.parent();
//			$(this).val("text");


                if (current_tr_type == 'root_category') {
                   i=0
                }
                else if (current_tr_type == 'category') {
                   i=0
                } 
                else if (current_tr_type == 'catalogue_item') {
                   i=-2
                }   








            for (var i = 0; i < tr.children().length; i++) {
                if (tr.children().get(i) == this) {
                    var column = i;
//console.log(column);                    
                    break;
                }
            }
            // decrement column value by one to avoid sr no column
            column--;
// alert('isEditingform='+isEditingform+'\r\n tdediting='+tdediting+'\r\n editing='+editing+'\r\n editingtrid='+editingtrid+'\r\n editingtdcol='+editingtdcol+'\r\n text='+text+'\r\n tr='+tr+'\r\n tbody='+tbody);
// alert(column+"==="+placeholder[column]);
            if(column <= columns.length){
                var text = $(this).html();   //строка по умолчанию
// var text = '\"'+$(this).html()+'\"';   //added by OD: in INPUT attribute "value" has no quotes - this resolved the problem
// alert(text);
//console.log(column,text); 
//                input = createInput(column,text,td_wid);
//                input = createInput(column,text);
                input = createInput(column,text,current_tr_type);
// console.log(test);                          
// alert(input);
// alert(text+'\r\n'+input+'\r\n'+$(this));


//show_alert(text+'</br>'+input);
//show_alert(input);
//            console.log(text+'\r\n'+input+'\r\n'+$(this));

                $(this).html(input);
                $(this).find(inputs).focus();
                tdediting = 1;
// test_33 = $("."+table+" tr[id='"+editingtrid+"'] td[class='"+editingtdcol+"']").find(inputs).attr('type');  // тест-проверка: проверен, работает!
// alert (test_33);
// test_33 = $("."+table+" tr[id='"+editingtrid+"'] td[class='"+editingtdcol+"'] select").length  // тест-проверка: проверен, работает!
// alert (test_33);                            
            }
        }
        }
    
    });



/////////////////start  added by od:   cancel the edit mode by pressing the ESC (escape) key   
    key_escape_up = "0";
    $(document).on('keyup',function(evt) {
        if (evt.keyCode == 27) {
// скрытие поля для расширенного редактирования (DIV id="#Layer1")                    
//    $("#Layer1").slideUp("1000"); 

// alert('Esc key pressed.');
// alert(tdediting);
            key_escape_up = 1;    // added by OD
// alert ('on key up esc: key_escape_up = '+key_escape_up);      // added by OD
            if(tdediting == 1){

//	ajax(editingtdcol+"="+newval+"&rid="+editingtrid,"updatetd");
//  tdediting = 0;  // added by OD

//      start added by OD: продолжение блока "отмен редактирования по нажатию ESC" блок бзят из AJAX ($.ajax==>action: updatetd, - см. ниже) но AJAX-запрос при этом не выполняется
                //$("."+cancelbutton).trigger("click");
//                var newval = $("."+table+" tr[id='"+editingtrid+"'] td[class='"+editingtdcol+"']").find(inputs).val();
                //alert($("."+table+" tr[id='"+editingtrid+"'] td[class='"+editingtdcol+"']").html());
//				$("."+table+" tr[id='"+editingtrid+"'] td[class='"+editingtdcol+"']").html(newval);  //так было по умолчанию
                $("."+table+" tr[id='"+editingtrid+"'] td[class='"+editingtdcol+"']").html(test_value);
                //$("."+table+" tr[id='"+editingtrid+"'] td[class='"+editingtdcol+"']").html(newval);
                tdediting = 0;      // remove editing flag
                test_value = "";    // обнуление переменной
                $("."+table+" tr[id='"+editingtrid+"'] td[class='"+editingtdcol+"']").effect("highlight",{color: '#f4667b'},1000);



//      end added by OD
            }
// console.log(id);
        }
    });
/////////////////end  added by od    



/////////////////start  added by od:   ending editing mode by pressing the ENTER key
    $(document).on('keyup',function(evt) {
        if (evt.keyCode == 13) {
// alert('Enter key pressed.'+'/r/n'+tdediting);
console.log('editing (begin of function) = ' + editing);
console.log('tdediting (begin of function) = ' + tdediting);
            if(tdediting == 1 && editing == 0){
//  var newval = $("."+table+" tr[id='"+editingtrid+"'] td[class='"+editingtdcol+"']").find(inputs).val(); // string by default
            var newval = $("table tr[id='"+editingtrid+"'] td[class='"+editingtdcol+"']").find('input').val();
// alert(editingtdcol+'\r\n'+newval+'\r\n'+editingtrid);
console.log('editingtdcol= '+editingtdcol+'\r\n newval= '+newval+'\r\n editingtrid= '+editingtrid);
//$("."+table+" tr[id='"+editingtrid+"'] td[class='"+editingtdcol+"']").html(newval);  // для тестирования: подстановка нового значения в ячейку, вместо тэга "Input"
//console.log(newval);

                if (current_tr_type == 'root_category') {
// console.log('current_tr_type == category');
                ajax(editingtdcol+"="+newval+"&rid="+editingtrid,"update_root_category_td");
// console.log('current_tr_type == category');
                }
                else if (current_tr_type == 'category') {
// console.log('current_tr_type == category');
                ajax(editingtdcol+"="+newval+"&rid="+editingtrid,"update_category_td");
// console.log('current_tr_type == category');
                } else if (current_tr_type == 'catalogue_item') {          
                ajax(editingtdcol+"="+newval+"&rid="+editingtrid,"updatetd");
// console.log('current_tr_type == catalogue_item');               
                }
            tdediting = 0;  // added by OD
            highlight_off_editing_TD();
            }
// console.log(id);
        else if (tdediting == 0 && editing == 1){
          $('a.ajaxUpdate').click()
          editing == 0;
          }
console.log('editing (in the end of function "ending editing mode by pressing the ENTER") = ' + editing);
console.log('tdediting (in the end of function "ending editing mode by pressing the ENTER") = ' + tdediting);          
        }  
    });
/////////////////end  added by od




    // td lost focus event

    $(document).on("blur","."+table+" td",function(e){
// console.log('tdediting = ' + tdediting);
// console.log('key_escape_up ' + key_escape_up);
//        if(tdediting == 1 && key_escape_up == 0){
//        if(tdediting == 1){ 
        if(tdediting == 1 && editing == 0){
            var newval = $("."+table+" tr[id='"+editingtrid+"'] td[class='"+editingtdcol+"']").find(inputs).val();
// alert(editingtdcol+'\r\n'+newval+'\r\n'+editingtrid);
//        $("."+table+" tr[id='"+editingtrid+"'] td[class='"+editingtdcol+"']").html(newval);  // для тестирования: подстановка нового значения в ячейку, вместо тэга "Input"
// console.log(newval); 
                if (current_tr_type == 'root_category') {
// console.log('current_tr_type == category');
                ajax(editingtdcol+"="+newval+"&rid="+editingtrid,"update_root_category_td");
// console.log('current_tr_type == category');
                }
                else if (current_tr_type == 'category') {
// console.log('current_tr_type == category');  
                ajax(editingtdcol+"="+newval+"&rid="+editingtrid,"update_category_td");                  
                } else if (current_tr_type == 'catalogue_item') {          
                ajax(editingtdcol+"="+newval+"&rid="+editingtrid,"updatetd");
// console.log('current_tr_type == catalogue_item');               
                }         
//            ajax(editingtdcol+"="+newval+"&rid="+editingtrid,"updatetd");
// alert(table+'\r\n'+editingtrid+'\r\n'+editingtdcol+'\r\n'+newval+'\r\n');
// alert ('on BLUR: key_escape_up = '+key_escape_up);
//            tdediting = 0;  // для тестирования: сброс флага редактирования
//            key_escape_up = "0";
            tdediting = 0;  // added by OD
            highlight_off_editing_TD();
        }
     // срабатываение для режима редактирования строки:   
//        else if (tdediting == 0 && editing == 1){
//          $('a.ajaxUpdate').click()
//          editing == 0;
//          }
//console.log('editing (in the end of function "td lost focus event") = ' + editing);
//console.log('tdediting (in the end of function "td lost focus event") = ' + tdediting);
    });





// Копирование строки  (Copying Row)

//$("."+copybutton).on("click",function(){              //Оригинал строки
    $(document).on("click","."+copybutton,function(){
//        var id = $(this).attr("id");  // string by default
        var this_tr = $(this).closest("tr");
//console.log('this_tr = '+ this_tr);         
        var current_tr_type = this_tr.attr("type");
//console.log('current_tr_type = '+ current_tr_type); 
//        var id = $(this).attr("id");
        var id = this_tr.attr("id");
//        console.log(id);
        if(id){
            
                if (current_tr_type == 'root_category') {
// console.log('current_tr_type == root_category');
                        ajax("rid="+id,"copying_root_category_row");
                }
                else if (current_tr_type == 'category') {
// console.log('current_tr_type == category');
                        ajax("rid="+id,"copying_category_row");
                } 
                else if (current_tr_type == 'catalogue_item') {
// console.log('current_tr_type == catalogue_item');                     
                        ajax("rid="+id,"copying_catalogue_row");
//                        ajax("rid="+id,"copyingRow");
                }   
//            ajax("rid="+id,"copyingRow");     // string by default
        }
    });











//  блок расширенного редактирования: получение (ЧТЕНИЕ)данных с сервера по клику на определенную иконку

    $(document).on("click","."+advanceeditbutton,function(){
// alert('pressed button "advanceeditbutton "')
        id = $(this).attr("id");
        if(id){
//			if(confirm("Do you really want to delete record ?"))
//				ajax("rid="+id,"del");
            ajax("rid="+id,"AdvanceEditingReading");
        }
//        show_alert(); //для отладки: вызов модального окна-уведомления
    });





//  блок расширенного редактирования: получение  (ЧТЕНИЕ) данных с сервера по клику определенной ячейки строки
//    $(document).on("click","table tr",function(){
// $("table tr td:nth-child(5)").click(function(){ // WORKING WELL STRING
// alert('pressed button "advanceeditbutton "')
// tr_number = $(this).closest("tr").find('td:eq(0)').text();
//  id = $(this).closest("tr").attr("id");  // ORIGINAL of STRING





    // $(document).on("click","table td.url",function(){
    $(document).on(click_evt,"table td.url",function(){

    data_type = $(this).closest("table").attr("data_type");
    current_row = $(this).closest("tr");
//                    console.log(current_row.prop('class'));
console.log(data_type);
    //console.log($(this).closest("table").attr("data_type")); 

    id = (current_row).attr("id"); 
    current_row_id = id;

    show_modal_content_page_prop();

    //  console.log (id);
     
    //        id = $(this).attr("id");  // stroke on default
                if (data_type == 'products') {
    if(0) {
                    if(id){
                            ajax("rid="+id,"AdvanceEditingReading");  // строка по умолчанию (версия 1)
                            
                            action = 'get_product_additional_images';
                            //ajax2(id,"get_product_additional_images");  //  (версия 2, + получение с сервера дополнительных картинок товара)
                            // "очистка" переменных после передачи в AJAX-запрос
                            action = '';
                      }
          };
                      
               } else if (data_type == 'content') {

                            ajax("rid="+id,"AdvanceEditingReadingContent");

               }



    //        show_alert(); //для отладки: вызов модального окна-уведомления
        });

    //return true;









    $(document).on(click_evt,"td.title",function(){

    data_type = $(this).closest("table").attr("data_type");
    current_row = $(this).closest("tr");
//                    console.log(current_row.prop('class'));
    //console.log($(this).closest("table").attr("data_type")); 

    id = (current_row).attr("id"); 
    current_row_id = id;
    
    show_modal_content_only_page_editing();

    //  console.log (id);
     
    //        id = $(this).attr("id");  // stroke on default
    if (data_type == 'products') {
                if(id){
            //          if(confirm("Do you really want to delete record ?"))
            //              ajax("rid="+id,"del");
                        ajax("rid="+id,"AdvanceEditingReading");  // строка по умолчанию (версия 1)
                        
                        action = 'get_product_additional_images';
                        ajax2(id,"get_product_additional_images");  //  (версия 2, + получение с сервера дополнительных картинок товара)
                        // "очистка" переменных после передачи в AJAX-запрос
                        action = '';
                  }
           } else if (data_type == 'content') {
                        $("div#content_only_page_editing input#content_id").val(id);
                        // ajax("rid="+id,"AdvanceEditingReadingContent");
                        action = 'get_content_html_only';
                        ajax2(id,"get_content_html_only");

           }
    //        show_alert(); //для отладки: вызов модального окна-уведомления
        });

    //return true;



// $(document).on(click_evt,"#block-content",function(){
// console.log(click_evt);
// alert(click_evt);

// });




























    // On-Off switch visible of Row
    $(document).on("change","input.checkbox1",function(){
// alert('нажата кнопка "')
var state = ( $(this).is(':checked') ) ? 1 : 0;
// console.log(state);
        var this_tr = $(this).closest("tr");
//console.log('this_tr = '+ this_tr);         
        var current_tr_type = this_tr.attr("type");
//console.log('current_tr_type = '+ current_tr_type); 
//        var id = $(this).attr("id");
        var id = this_tr.attr("id");
// console.log('current_tr_id = '+ id);
        
        if(id){
//			if(confirm("Do you really want to change visible ?"))
                if (current_tr_type == 'root_category') {
// console.log('current_tr_type == root_category');
                        ajax("rid="+id+"&state="+state,"set_visible_state_root_category_row");
//                        ajax("rid="+id," _root_category_row");
                }
                else if (current_tr_type == 'category') {
// console.log('current_tr_type == category');
                        ajax("rid="+id+"&state="+state,"set_visible_state_category_row");
//                        ajax("rid="+id," _category_row");
                } 
                else if (current_tr_type == 'catalogue_item') {
// console.log('current_tr_type == catalogue_item');                     
                        ajax("rid="+id+"&state="+state,"set_visible_state_catalogue_row");
                }   
//			if(confirm("Do you really want to delete record ?"))
//            ajax("rid="+id,"del");  // string by default
        }
    });






	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//  Content: блок сохранения формы расширенного редактирования: сохранение content'a (обновление) данных на сервере (в Базе Данных)

//    $(document).on("click","#Button15",function(){
       $(".save_data").click(function(e) {
// alert('pressed button "Button15 "')
//		var id = $(this).attr("id");

            // if($('#content_page_seo_editing').is(':visible')){


        if($('#add_new_content_page').css("visibility") != "hidden"){
console.log('#add_new_content_page is visible');
   
        var serialized = ($('#add_new_content_page form#form_1').serialize())
        var action = 'add_new_page';
//      alert(serialized);
//      console.log(serialized);
       ajax(serialized, action);
        
        } else if($('#content_page_seo_editing').css("visibility") != "hidden"){
console.log('#content_page_seo_editing is visible');

        // var id = $('form#content_html input[name="content_id"]').val();
        var id = $("#content_page_seo_editing input#content_id").val();

        // var id = response.id;

// console.log('id= ' + id);       
//        e.preventDefault();
//alert (id);       
        var serialized = ($('#content_page_seo_editing form#form_2').serialize())
        var action = 'save_edited_content';

//      alert(serialized);
//      console.log(serialized);
        
//          ajax(serialized,"extended_update_row");
//alert ('rid='+id)
       ajax(serialized, action);
   } else if($('#content_only_page_editing').css("visibility") != "hidden"){

        var id = $("#content_only_page_editing input#content_id").val();
        // var serialized = ($('#content_only_page_editing form#form_3').serialize())
        // var content = ($('#content_only_page_editing textarea').serialize());
        // var content = ($('#content_only_page_editing textarea').html());
        // var content = ($('#content_only_page_editing textarea').val());
        // var content = ($('#content_only_page_editing textarea').serialize());
        var content = ($('#content_only_page_editing textarea').val());
        // var content = serialize(content);

// console.log(content);
        var action = 'save_content_html_only';

        action = 'save_content_html_only';
        // ajax2(id,"save_content_html_only");
        ajax4(id,action,content);
        // ajax4(content);
        // data : params+"&action="+action+"&content="+content,
        var id = '';
        var content = '';

            } else {
                
console.log('#content_page_seo_editing is NOT visible');




if(1) {
        var id = $('form#content_html input[name="content_id"]').val();

console.log('id= ' + id);       
//        e.preventDefault();
//alert (id);       
        var serialized = ($('form#content_html').serialize())
        var action = 'save_edited_content';

//      alert(serialized);
//      console.log(serialized);
        
//          ajax(serialized,"extended_update_row");
//alert ('rid='+id)
       ajax(serialized, action);
//       ajax(serialized+"&rid="+id,"save_edited_content");  // work good
 } // end: if (0)
            } // end: else {
              
    return false;
    });
            






//  блок сохранения формы расширенного редактирования: сохранение (обновление) данных на сервере (в Базе Данных)

//    $(document).on("click","#Button15",function(){
       $("#Button15").click(function(e) {
// alert('pressed button "Button15 "')
//		var id = $(this).attr("id");
var id = $('textarea[name="products_id"]').val();
//        e.preventDefault();
//alert (id);       
        var serialized = ($('#form_2').serialize())

//		alert(serialized);
//      console.log(serialized);
        
//			ajax(serialized,"extended_update_row");
//alert ('rid='+id)

        ajax(serialized+"&rid="+id,"extended_update_row");
              
    return false;
    });




























//  блок удаления основного изображения товара
//    $(document).on("click","."+del_img,function(){
//      $('.del_img').click (function(){ 
   $(document).on('click', ".del_main_img", function() {              
// alert('нажата кнопка "удаления основной (базовой) картинки товара"')
        var id = $(this).attr("img_id");
        if(id){
//			if(confirm("Do you really want to delete record ?"))
// alert('нажата кнопка "удаления основной (базовой) картинки товара", id= '+id)
            ajax("rid="+id,"delete_main_image_product");
        }
    });







//  блок удаления Rollover -  изображения товара
//    $(document).on("click","."+del_img,function(){
//      $('.del_img').click (function(){ 
   $(document).on('click', ".del_rollover_img", function() {              
// alert('нажата кнопка "удаления основной (базовой) картинки товара"')
        var id = $(this).attr("img_rollover_id");
        if(id){
//			if(confirm("Do you really want to delete record ?"))
// alert('нажата кнопка "удаления основной (базовой) картинки товара", id= '+id)
            ajax("rid="+id,"delete_main_rollover_image");
        }
    });







//  блок удаления дополнительных изображений товара
//    $(document).on("click","."+del_img,function(){
//      $('.del_img').click (function(){ 
   $(document).on('click', ".del_img", function() {              
// alert('нажата кнопка "удаления дополнительных картинок товара"')
        var id = $(this).attr("img_id");
        if(id){
//			if(confirm("Do you really want to delete record ?"))
// alert('нажата кнопка "удаления дополнительных картинок товара", id= '+id)
            ajax("rid="+id,"del_additional_image_product");
        }
    });








    //  Экспериментальный блок: получние основного / Rolover- / и дополнительных изображений товара при загрузке страницы
//    first_row_id = ($("table.tableDemo>tbody>tr").eq(1).attr("id"));  
  
/*     
 console.log (first_row_id);
    ajax("rid="+first_row_id,"AdvanceEditingReading");
    ajax2(first_row_id,"get_product_additional_images");
*/





function GetAdvanceReading_product(id) {
    ajax("rid="+id,"AdvanceEditingReading");
    ajax2(id,"get_product_additional_images");
}
    

//  запуск блока из 2-х функций
//    ajax2(0,"get_main_table");    
//    GetAdvanceReading(first_row_id);




Main = {
    loadContentTable: function loadContentTable (page, per_page) {
                    $.ajax
                    ({
                        type: "POST",
                        url: "ajax/ajax2_get_html.php",
//                        data: "page="+page,
//                        data : 'rid='+id+'&action='+action,
//                        data : 'action=get_main_table&page='+page+'&per_page='+per_page,    // work good
                        data : 'action=get_main_content_table&page='+page+'&per_page='+per_page,
                        success: function(response)
                        {
                           // $("#container").ajaxComplete(function(event, request, settings)
                           // {
//                                loading_hide();
//                                $("#container").html(msg);
                                $("div#data_table_wrap").empty();
                                $("div#data_table_wrap").append(response);
                                radio1_check();
                                $('.checkbox1').checkator();

                                    
                           // });
   // при изменении страницы пагинации, определяем id первой строки таблицы                        
                               first_row = ($("table.tableDemo>tbody>tr").eq(1));
// console.log (first_row);
                                first_row_id = (first_row).attr("id"); 

                        }
                    });




    },
    
    saveBtnAnimate: function saveBtnOnRightAnimate () {
                       var save_btn = $('div#btn_left_2');
                        save_btn.animate({
                            right: "-" + 15 + "px"
                        }, function() {
                            save_btn.animate({ right: "0px" });
                        });
    }





}; // end: Main









Main.loadContentTable (page, per_page);




// Pagination block (start):
                function loading_show(){
                    $('#loading').html("<img src='../images/loading-2.gif'/>").fadeIn('fast');
                }
                function loading_hide(){
                    $('#loading').fadeOut('fast');
                }                
                function loadData(page, per_page){
                    // loading_show();                    
                    $.ajax
                    ({
                        type: "POST",
//                        url: "load_data-v2.php",
                        url: "ajax/ajax2_get_html.php",
//                        data: "page="+page,
//                        data : 'rid='+id+'&action='+action,
//                        data : 'action=get_main_table&page='+page+'&per_page='+per_page,    // work good
                        data : 'action=get_main_content_table&page='+page+'&per_page='+per_page,
                        success: function(response)
                        {
                           // $("#container").ajaxComplete(function(event, request, settings)
                           // {
                                loading_hide();
//                                $("#container").html(msg);
                                $("div#data_table_wrap").empty();
                                $("div#data_table_wrap").append(response);
                                radio1_check();
                                $('.checkbox1').checkator();

                                    
                           // });
   // при изменении страницы пагинации, определяем id первой строки таблицы                        
                               first_row = ($("table.tableDemo>tbody>tr").eq(1));
// console.log (first_row);
                                first_row_id = (first_row).attr("id"); 
// console.log ('first_row_id = ' + first_row_id);

//                                penultimate_row = ($("table.tableDemo>tbody>tr:last").prev());
//                                penultimate_row_id = (penultimate_row).attr("id");
// console.log ('penultimate_row_id = ' + penultimate_row_id);
// $("#layer_3").css({ "display":"block" });
//GetAdvanceReading_product(first_row_id);

 get_first_last_row_id ();
                        }
                    });
                }
 //               loadData(1, per_page);  // For first time page load default results
                
                // $('.pagination li.active').live('click',function(){  // orig string
                $(document).on('touchstart click','.pagination li.active',function(){
                 //   var page = $(this).attr('p');
                    page = $(this).attr('p');
                    // loadData(page, per_page);
                    Main.loadContentTable (page, per_page);
                    
                });           
                // $('#go_btn').live('click',function(){ // orig string
                $(document).on('touchstart click','#go_btn',function(){
                    var page = parseInt($('.goto').val());
                    var no_of_pages = parseInt($('.total').attr('a'));
                    if(page != 0 && page <= no_of_pages){
                        // loadData(page);
                        Main.loadContentTable (page, per_page);
                    }else{
                        alert('Enter a PAGE between 1 and '+no_of_pages);
                        $('.goto').val("").focus();
                        return false;
                    }
                    
                });
// Pagination block (End)

function get_first_last_row_id() {
    first_row = ($("table.tableDemo>tbody>tr").eq(1));
// console.log (first_row);
    first_row_id = (first_row).attr("id"); 
// console.log ('first_row_id = ' + first_row_id);
 
 current_row = first_row;
    current_row_id = first_row_id;
// console.log ('current_row_id = ' + current_row_id);

    penultimate_row = ($("table.tableDemo>tbody>tr:last").prev());
//    penultimate_row = ($("table.tableDemo>tbody>tr:last"));
//    penultimate_row = ($("table.tableDemo>tbody>tr").eq(-2));
// console.log ('penultimate_row = ' + penultimate_row);    
    penultimate_row_id = (penultimate_row).attr('id');
// console.log ('penultimate_row_id = ' + penultimate_row_id);
 
//    current_row_id = (current_row).attr("id");
    
}    
    

 $(document).keydown(function(e){
//    switch(e.which) {   // Original string
var v='';
    switch(v.which) {   // wrong string for temporary disable keydown function. (Remove this string, and uncomment right string above for correct work)      
        case $.ui.keyCode.LEFT:
        // your code here
console.log ('Left key pressed');
//        countKeyLeft()
    if ( current_row_id > first_row_id && current_row_id <= penultimate_row_id )
    {    
        current_row = (current_row).prev('tr');    
        current_row_id = (current_row).attr("id");
//        GetAdvanceReading (current_row_id);    
// console.log (current_row_id);
    }
// console.log (current_row_id);        
        break;

        case $.ui.keyCode.UP:
        // your code here
 console.log ('UP key pressed');        
        break;

        case $.ui.keyCode.RIGHT:
        // your code here
console.log ('RIGHT key pressed');
//        countKeyRight()
    if ( current_row_id >= first_row_id && current_row_id < penultimate_row_id )
    { 
    current_row = (current_row).next('tr');
//    current_row = ($("table.tableDemo>tbody>tr").next('tr'));    
    current_row_id = (current_row).attr("id");
//    GetAdvanceReading (current_row_id);    
// console.log (current_row_id); 
    }    
// console.log (current_row_id); 
        break;

        case $.ui.keyCode.DOWN:
        // your code here
 console.log ('DOWN key pressed');        
        break;

        default: return; // allow other keys to be handled
    }

    // prevent default action (eg. page moving up/down)
    // but consider accessibility (eg. user may want to use keys to choose a radio button)
    e.preventDefault();
});
    
    
 
    // отображение выдвижной панели настроек
    $("div#member-home").css({ "display":"block" });



});           // конец блока: " $(document).ready "

//current_tr_type = 'catalogue_item';


//createInput = function(i,str,td_width){
//createInput = function(i,str){    
// createInput = function(i,str,current_tr_type){
    function createInput(i,str,current_tr_type){
//console.log('current_tr_type = ' + current_tr_type);    
    str = typeof str !== 'undefined' ? str : null;
// alert(str);
// console.log(i);
// console.log(str);
input = '';


    if (current_tr_type == 'root_category') {
        if(root_category_inputType[i] == "text"){
            input = '<input type="'+root_category_inputType[i]+'" name="'+root_category_columns[i]+'" placeholder="'+root_category_placeholder[i]+'" value="'+str+'" >';                
        }
    }   // end condition: "else if (current_tr_type == 'root_category')"
    
    
    
    else if (current_tr_type == 'category') {
//        input = '<input type="'+category_inputType[i]+'" name="'+category_columns[i]+'" placeholder="'+category_placeholder[i]+'" value="'+str+'" >';
               if(category_inputType[i] == "text"){
//		input = '<input type='+inputType[i]+' name='+columns[i]+' placeholder="'+placeholder[i]+'" value='+str+' >';    //Строка по умолчанию
        input = '<input type="'+category_inputType[i]+'" name="'+category_columns[i]+'" placeholder="'+category_placeholder[i]+'" value="'+str+'" >';
// console.log(input);
                } 
                      
    }  // end condition: "else if (current_tr_type == 'category')"
    
    





    
    else if (current_tr_type == 'catalogue_item') {
//        input = '<input type="'+inputType[i]+'" name="'+columns[i]+'" placeholder="'+placeholder[i]+'" value="'+str+'" >';
        
                if(inputType[i] == "text"){
//		input = '<input type='+inputType[i]+' name='+columns[i]+' placeholder="'+placeholder[i]+'" value='+str+' >';    //Строка по умолчанию
                input = '<input type="'+inputType[i]+'" name="'+columns[i]+'" placeholder="'+placeholder[i]+'" value="'+str+'" >';  // нормально работающая строка
// console.log(input);
                }
                
                else if(inputType[i] == "textarea"){
//		input = '<textarea name='+columns[i]+' placeholder="'+placeholder[i]+'">'+str+'</textarea>';    //Строка по умолчанию
                input = '<textarea name='+columns[i]+' rows=2 placeholder="'+placeholder[i]+'">'+str+'</textarea>';
                }
                
                else if(inputType[i] == "select"){
                input = '<select name='+columns[i]+'>';
                for(i=0;i<selectOpt.length;i++){
//console.log(selectOpt[i]);
                selected = "";
                if(str == selectOpt[i])
//console.log(selectOpt[i]);
                selected = "selected";
                input += '<option value="'+selectOpt[i]+'" '+selected+'>'+selectOpt[i]+'</option>';
                }
                input += '</select>';
// console.log(str);
// console.log(input);
                }
                
                else if(inputType[i] == "select_2"){
                input = '<select name='+columns[i]+'>';
                for(i=0;i<selectOpt_2.length;i++){
//console.log(selectOpt[i]);
                selected = "";
                if(str == selectOpt[i])
//console.log(selectOpt[i]);
                selected = "selected";
                input += '<option value="'+selectOpt_2[i]+'" '+selected+'>'+selectOpt_2[i]+'</option>';
                }
                input += '</select>';
// console.log(str);
// console.log(input);
                }
              
    }   // end condition: "else if (current_tr_type == 'catalogue_item')"
    
    
        
    return input;
}















    // вторая по счету функция вызова модального окна - уведомления
    function show_alert_2(testv){
//	testv = '';
        new jBox('Notice', {
            content: testv,
            autoClose: 2000
//      autoClose: false
        });
        testv = '';
    }


function advance_edit_recieve(id_response){
// alert('pressed button "advanceeditbutton "')
//    id = $(this).attr("id");
    if(id_response){
//			if(confirm("Do you really want to delete record ?"))
//				ajax("rid="+id,"del");
        ajax("rid="+id,"AdvanceEditingReading");
    }else
    alert('переменная id_responce не была передана функции advance_edit_recieve')
//        show_alert(); //для отладки: вызов модального окна-уведомления
};












ajax = function (params,action){
    $.ajax({
        type: "POST",
        url: "ajax/ajax.php",
        data : params+"&action="+action,
        dataType: "json",
        success: function(response){
            switch(action){
                
// ==================  Section "Root Category" (start:) ==========================================================                 
                case "update_root_category_row":
                    $("."+cancelbutton).trigger("click");                    
//                    for(i=0;i<columns.length;i++){
//                        $("tr[id='"+response.id+"'] td[class='"+columns[i]+"']").html(response[columns[i]]);
//                    }
                    //added by od: если данные не были отправлены by AJAX - появится alert-уведомление.
                    if(response.success == 0){
                        alert ("данные не были обновлены!  (action: update_root_category_row)");
                    }
// обновление основной таблицы товаров

                    if (current_tr_type == 'root_category') {
// console.log('current_tr_type == category');
                            ajax2(0,"get_main_table_category");
// console.log('current_tr_type == category');
                } else if (current_tr_type == 'catalogue_item') {          
                        ajax2(0,"get_main_table");
// console.log('current_tr_type == catalogue_item');               
                }
                
//          ajax2(0,"get_main_table");
                    
                    break; 
                
                
                case "update_root_category_td":
                    $("."+cancelbutton).trigger("click");                    
//                    for(i=0;i<columns.length;i++){
//                        $("tr[id='"+response.id+"'] td[class='"+columns[i]+"']").html(response[columns[i]]);
//                    }
                    //added by od: если данные не были отправлены by AJAX - появится alert-уведомление.
                    if(response.success == 0){
                        alert ("данные не были обновлены!  (action: update_root_category_td)");
                    }
// обновление основной таблицы товаров

                    if (current_tr_type == 'root_category') {
// console.log('current_tr_type == category');
                            ajax2(0,"get_main_table_category");
// console.log('current_tr_type == category');
                } else if (current_tr_type == 'catalogue_item') {          
                        ajax2(0,"get_main_table");
// console.log('current_tr_type == catalogue_item');               
                }
                
//          ajax2(0,"get_main_table");
                    
                    break; 
                    



                    
                case "set_visible_state_root_category_row":
                    if(response.success == 1){
//      alert ("данные были отправлены успешно!  (action: updatetd)");
                    }

                    //added by od: если данные не были отправлены by AJAX - появится alert-уведомление.
                    if(response.success == 0){
//      alert (test_value);
//      alert ("данные не были отправлены!  (action: updatetd)");
                    }                
               ajax2(0,"get_main_table_category");                   
                    break;


                    
                    
                    

                case "del_root_category_row":
                    var seclastRow = $("."+table+" tr").length;
//  console.log(response.success);
                    if(response.success == 1){
//					$("."+table+" tr[id='"+response.id+"']").effect("highlight",{color: '#f4667b'},300,function(){
//                        $("."+table+" tr[id='"+response.id+"']").remove();
//					});
                    }

                    //added by od: если данные не были отправлены by AJAX - появится alert-уведомление.
                    if(response.success == 0){
                        alert ("данные не были обновлены!  (action: del_root_category_row)");
                    }
               ajax2(0,"get_main_table_category"); 
                    break;                        
                
// ==================  Section "Root Category" (End.) ==========================================================                 
                
                
                
                
                
                
                
                
                
                
                
                
                
// ==================  Section "Category" (start:) ==========================================================
                 
                case "update_category_row":
                    $("."+cancelbutton).trigger("click");                    
//                    for(i=0;i<columns.length;i++){
//                        $("tr[id='"+response.id+"'] td[class='"+columns[i]+"']").html(response[columns[i]]);
//                    }
                    //added by od: если данные не были отправлены by AJAX - появится alert-уведомление.
                    if(response.success == 0){
                        alert ("данные не были обновлены!  (action: update_category_row)");
                    }
// обновление основной таблицы товаров

                    if (current_tr_type == 'category') {
// console.log('current_tr_type == category');
                            ajax2(0,"get_main_table_category");
// console.log('current_tr_type == category');
                } else if (current_tr_type == 'catalogue_item') {          
                        ajax2(0,"get_main_table");
// console.log('current_tr_type == catalogue_item');               
                }
                
//          ajax2(0,"get_main_table");
                    
                    break;  
  
  
 
  
  
  
  
  
  
  
  
  
                                    
                case "update_category_td":
                    //$("."+cancelbutton).trigger("click");
                    var newval = $("."+table+" tr[id='"+editingtrid+"'] td[class='"+editingtdcol+"']").find(inputs).val();

//		alert($("."+table+" tr[id='"+editingtrid+"'] td[class='"+editingtdcol+"']").find(inputs).val());

//      temptd = $("."+table+" tr[id='"+editingtrid+"'] td[class='"+editingtdcol+"']").find(inputs).val("text");
                    temptd = $("."+table+" tr[id='"+editingtrid+"'] td[class='"+editingtdcol+"']").val();


                    $("."+table+" tr[id='"+editingtrid+"'] td[class='"+editingtdcol+"']").html(newval);

                    //$("."+table+" tr[id='"+editingtrid+"'] td[class='"+editingtdcol+"']").html(newval);

                    tdediting = 0;      // remove editing flag

                    if(response.success == 1){
//      alert ("данные были отправлены успешно!  (action: updatetd)");
                        $("."+table+" tr[id='"+editingtrid+"'] td[class='"+editingtdcol+"']").effect("highlight",{color: '#acfdaa'},1000);
                    }

                    //added by od: если данные не были отправлены by AJAX - появится alert-уведомление.
                    if(response.success == 0){
//      alert (test_value);
      alert ("данные не были обновлены!  (action: update_category_td)");
                        $("."+table+" tr[id='"+editingtrid+"'] td[class='"+editingtdcol+"']").html(test_value); //если respons.success=0, то заменяем редактируемую ячейку таблицы на первоначальные данные.
                        test_value = "";    //очистка переменной
                        $("."+table+" tr[id='"+editingtrid+"'] td[class='"+editingtdcol+"']").effect("highlight",{color: '#f4667b'},1000);
//      alert ('Переменная \"test_value\"=  '+test_value);
                    }
// обновление основной таблицы товаров
           ajax2(0,"get_main_table_category");                
//          ajax2(0,"get_main_table");                    
                    break;
                    
                    
                case "set_visible_state_category_row":
                    if(response.success == 1){
//      alert ("данные были отправлены успешно!  (action: updatetd)");
                    }

                    //added by od: если данные не были отправлены by AJAX - появится alert-уведомление.
                    if(response.success == 0){
//      alert (test_value);
//      alert ("данные не были отправлены!  (action: updatetd)");
                    }                
               ajax2(0,"get_main_table_category");                   
                    break;                    
                    
                    
                    

                case "del_category_row":
                    var seclastRow = $("."+table+" tr").length;
//  console.log(response.success);
                    if(response.success == 1){
//					$("."+table+" tr[id='"+response.id+"']").effect("highlight",{color: '#f4667b'},300,function(){
//                        $("."+table+" tr[id='"+response.id+"']").remove();
//					});
                    }

                    //added by od: если данные не были отправлены by AJAX - появится alert-уведомление.
                    if(response.success == 0){
                        alert ("данные не были обновлены!  (action: del_root_category_row)");
                    }
               ajax2(0,"get_main_table_category"); 
                    break;                     
                
                
// ==================  Section "Category" (End.) ==========================================================                 
                
                
                
                
                
                
// ==================  Section "Catalogue" (start:) ==========================================================             

                case "save":
                    var seclastRow = $("."+table+" tr").length;
//alert_value(seclastRow)
//                    alert(seclastRow)
                    if(response.success == 1){
// console.log(response.success);
                        var html = "";

                        html += "<td>"+parseInt(seclastRow - 1)+"</td>";
//alert_value(html)
                        for(i=0;i<columns.length;i++){
                            html +='<td class="'+columns[i]+'">'+response[columns[i]]+'</td>';
                        }
//                        alert(html);
                        // вставка пиктограмм "Edit", "delete"
                        html += '<td><a href="javascript:;" id="'+response["id"]+'" class="ajaxEdit"><img src="'+editImage+'"></a> <a href="javascript:;" id="'+response["id"]+'" class="'+deletebutton+'"><img src="'+deleteImage+'"></a></td>';
                        // Append new row as a second last row of a table
//                        alert(html);
//                        alert(response.id+response.title);
                        $("."+table+" tr").last().before('<tr id="'+response.id+'">'+html+'</tr>');

                        if(effect == "slide"){
                            // Little hack to animate TR element smoothly, wrap it in div and replace then again replace with td and tr's ;)
                            $("."+table+" tr:nth-child("+seclastRow+")").find('td')
                                .wrapInner('<div style="display: none;" />')
                                .parent()
                                .find('td > div')
                                .slideDown(700, function(){
                                    var $set = $(this);
                                    $set.replaceWith($set.contents());
                                });
                        }
                        else if(effect == "flash"){
                            $("."+table+" tr:nth-child("+seclastRow+")").effect("highlight",{color: '#acfdaa'},100);
                        }else
                            $("."+table+" tr:nth-child("+seclastRow+")").effect("highlight",{color: '#acfdaa'},1000);

                        // Blank input fields
                        $(document).find("."+table).find(inputs).filter(function() {
                            // check if input element is blank ??
                            this.value = "";
                            $(this).removeClass("success").removeClass("error");
                        });
                        //added by od start: при выборе поля select c именем "adress" исчезает значение "value". Добавляем исчезнувшее значение value:

                        name = $('select[name="brand_2"] option:selected').text();      // работает, текст определяется нормально!
//                console.log(name);
                        $('select[name="brand_2"] option:selected').val(name);      // работает, значение для "value" вставляется нормально!

                        //added by od end:
                    }
                    //added by od: если данные не были отправлены by AJAX - появится alert-уведомление.
                    if(response.success == 0){
                        alert ("данные не были отправлены!  (action: save)");
                    }
            ajax2(0,"get_main_table"); 
                    break;





                case "del_content_row":
                    // var seclastRow = $("."+table+" tr").length;
//  console.log(response.success);
                    if(response.success == 1){

                    // $("."+table+" tr[id='"+response.id+"']").effect("highlight",{color: '#f4667b'},300,function(){
                        // $("."+table+" tr[id='"+response.id+"']").remove();
                    // });
                            Main.saveBtnAnimate();
                            var timer_d = setTimeout(function(){ 
                                Main.loadContentTable (page, per_page); 
                                clearTimeout(timer_d);
                            }, 300);

                    }
                    //added by od: если данные не были отправлены by AJAX - появится alert-уведомление.
                    if(response.success == 0){
                        alert ("данные не были отправлены!  (action: del_content_row)");
                    }
                //ajax2(0,"get_main_table"); 
                    break;






                case "del_catalogue_row":
                    var seclastRow = $("."+table+" tr").length;
//  console.log(response.success);
                    if(response.success == 1){
					$("."+table+" tr[id='"+response.id+"']").effect("highlight",{color: '#f4667b'},300,function(){
                        $("."+table+" tr[id='"+response.id+"']").remove();
					});
                    }

                    //added by od: если данные не были отправлены by AJAX - появится alert-уведомление.
                    if(response.success == 0){
                        alert ("данные не были отправлены!  (action: del)");
                    }
                ajax2(0,"get_main_table"); 
                    break;









                case "copying_catalogue_row": // added by OD-start: для выполнения действия: копирование строки
                    var seclastRow = $("."+table+" tr").length;
//console.log(seclastRow);
                    if(response.success == 1){
// console.log(response.success);
                        var html = "";

                        html += "<td>"+parseInt(seclastRow - 1)+"</td>";
//console.log(html);
//alert_value(html)
//alert(seclastRow+'   '+html);
console.log(seclastRow+'   '+html);

                        html += '<td class="products_image" align="center" vertical-align="middle"><img src="http:///uploads_images/'+response.image_30+'"'+' style="width:auto; height:20px; margin:0 auto;"></td>';


                        for(i=0;i<columns.length;i++){
                            html +='<td class="'+columns[i]+'">'+response[columns[i]]+'</td>';
//console.log(html);                            
                        }
//console.log(html);

/*              // копирование с 4-й иконкой (расширенное получение данных с сервера)
                        html += '<td><a href="javascript:;" id="'+response.products_id+'" class="ajaxDelete"><img src="'+deleteImage+'" class="dimage"></a><a href="javascript:;" id="'+response.products_id+'" class="ajaxEdit"><img src="'+editImage+'" class="eimage"></a><a href="javascript:;" id="'+response.products_id+'" class="ajaxCopying"><img src="'+copyImage+'" class="cimage"></a> <a href="javascript:;" id="'+response.products_id+'" class="ajaxAdvanceEditing"><img src="'+AdvanEditImage+'" class="advedimage"></a></td>';
*/
            // копирование без 4-й иконкой (расширенное получение данных с сервера, эту фнкцию выполняет "click" по стол,w "title" таблицы)
                html += '<td><a href="javascript:;" id="'+response.products_id+'" class="ajaxDelete"><img src="'+deleteImage+'" class="dimage"></a><a href="javascript:;" id="'+response.products_id+'" class="ajaxEdit"><img src="'+editImage+'" class="eimage"></a><a href="javascript:;" id="'+response.products_id+'" class="ajaxCopying"><img src="'+copyImage+'" class="cimage"></a> </td>';




                        // Append new row as a second last row of a table

//					$("."+table+" tr").last().before('<tr id="'+(response.id+1)+'">'+html+'</tr>');      Строка по умолчанию
                        $("."+table+" tr").last().before('<tr id="'+response.products_id+'">'+html+'</tr>');

//					
                        if(effect == "slide"){
                            // Little hack to animate TR element smoothly, wrap it in div and replace then again replace with td and tr's ;)
                            $("."+table+" tr:nth-child("+seclastRow+")").find('td')
                                .wrapInner('<div style="display: none;" />')
                                .parent()
                                .find('td > div')
                                .slideDown(100, function(){
                                    var $set = $(this);
                                    $set.replaceWith($set.contents());
                                });
                            $("."+table+" tr:nth-child("+seclastRow+")").effect("highlight",{color: '#acfdaa'},1500);    
                        }
                        else if(effect == "flash"){
                            $("."+table+" tr:nth-child("+seclastRow+")").effect("highlight",{color: '#acfdaa'},1500);
                        }else
                            $("."+table+" tr:nth-child("+seclastRow+")").effect("highlight",{color: '#acfdaa'},1500);
// обновление основной таблицы товаров                
          ajax2(0,"get_main_table");
//
                    }
                    //added by od: если данные не были отправлены by AJAX - появится alert-уведомление.
                    if(response.success == 0){
                        alert ("данные не были отправлены!  (action: CopyRow)");
                    }


                    break;       // added by OD-end: для выполнения действия: копирование строки































                case "add_new_page": 
                
                    if(response.success == 1){

                            Main.saveBtnAnimate();
                            $('.modal').trigger('reveal:close');

                            var timer_d = setTimeout(function(){ 
                                Main.loadContentTable (page, per_page); 
                                clearTimeout(timer_d);
                            }, 300);


                    }
                    //added by od: если данные не были отправлены by AJAX - появится alert-уведомление.
                    if(response.success == 0){
                        alert ("данные не были отправлены!  (action: add_new_page)");
                    }


                    break;       // added by OD-end: для выполнения действия: расширенное редактирование





                case "AdvanceEditingReadingContent": 
                
                    if(response.success == 1){

                        $('#layer_1 textarea').val('');
                        $("#layer_1 textarea").val(response.wide_content);
                        $("form#content_html input").val(response.id);

                        $("#content_page_seo_editing input#content_id").val(response.id);
                        $("#content_page_seo_editing textarea#title").val(response.title);
                        // $("#content_page_seo_editing textarea[name='h1']").val(response.h1);
                        $("#content_page_seo_editing textarea#h1").val(response.h1);
                        $("#content_page_seo_editing textarea#url").val(response.url);
                        $("#content_page_seo_editing textarea#seo_description").val(response.seo_description);
                        $("#content_page_seo_editing textarea#content").val(response.wide_content);

                        if(response.visible == 1){
                            $("#content_page_seo_editing input#visible").prop('checked', true);
                        } else if (response.tov_link_on != 1){
                            $("#content_page_seo_editing input#visible").prop('checked', false);
                        }

                        if(response.show_in_menu == 1){
                            $("#content_page_seo_editing input#show_in_menu").prop('checked', true);
                        } else if (response.show_in_menu != 1){
                            $("#content_page_seo_editing input#show_in_menue").prop('checked', false);
                        }




                        // $("#content_page_seo_editing input#visible").val(response.visible);
                        // $("#content_page_seo_editing input#show_in_menu").val(response.show_in_menu);



                    }
                    //added by od: если данные не были отправлены by AJAX - появится alert-уведомление.
                    if(response.success == 0){
                        alert ("данные не были отправлены!  (action: AdvanceEditingReadingContent)");
                    }


                    break;       // added by OD-end: для выполнения действия: расширенное редактирование












                case "save_edited_content": 
                
                    if(response.success == 1){

 //                       $('#layer_1 textarea').val('');
 //                       $("#layer_1 textarea").val(response.wide_content);
 //						$("form#content_html input").val(response.id);
 //                       loadData(1, per_page); // not working
//                        setTimeout(function(){ $('#modal_admin_add_main_image_product').trigger('reveal:close'); }, 300);
//                        $('div#btn_left_2').animate({ right:'-10px' });
                        Main.saveBtnAnimate();
                        $('.modal').trigger('reveal:close');

                        var timer_d = setTimeout(function(){ 
                            Main.loadContentTable (page, per_page); 
                            clearTimeout(timer_d);
                        }, 300);

                    }
                    //added by od: если данные не были отправлены by AJAX - появится alert-уведомление.
                    if(response.success == 0){
                        alert ("данные не были отправлены!  (action: save_edited_content)");
                    }


                    break;     

































                case "AdvanceEditingReading": // added by OD-start: для выполнения действия: копирование строки
                
// $("#progress-bar").width('0%');

                    if(response.success == 1){
/*
                        $('html, body').animate({
                        scrollTop: $(document).height()},
                        1400,
                        "easeOutQuint"
                        );
*/


// очистка полей от старых данных:
// $(":textarea").val(''); //так не работает

// test_5 = ($('input[type=textarea]').length);
// test_5 = ($('textarea', $('#Layer1')).length); //так работает, - подсчитывает кол-во элементов
// alert (test_5);

// $('textarea', $('#Layer1')).each(function(){
//    $(this).val('');
//  });

                        $('textarea', $('#layer_3')).val('');


                        // вставка значений полученных в AJAX-ответе (response) из Базы Данных
                        $("#products_id_2, #product_id_main_image, #product_id_additional_image").val(response.products_id);
//                        $("#products_id_2, product_id_main_image").val(response.products_id);

                        $("#main_title_2").val(response.main_title); 
//                        $("#TextArea16").val(response.main_title);    // подстановка AJAX-ответа в форму в модальном окне

                        $("#title_2, #main_image_name_new").val(response.title);

                        $("#article_2").val(response.article);

                        $("#tovar_seo_link_2").val(response.tovar_seo_link);
                        
                        $("#seo_words_2").val(response.seo_words);
                        $("#seo_description_2").val(response.seo_description);
                        
                        $("#mini_description_2").val(response.mini_description);
                        $("#description_2").val(response.description);
                        
                        
                        $("#mini_features_2").val(response.mini_features);
                        $("#features_2").val(response.features);
                        
                        $("#div_type_tovara").html(response.type_tovara_rus);
                        $("#div_category").html(response.brand);
                        $("#div_subcategory").html(response.subcategory_name);
                        
                        $("#root_category_list").html(response.root_category_list);
                        $("#category_list").html(response.category_list);                  
                        
                        if(response.image_100.length > 0)
                        {
                        tovar_main_image = '<img id="main_image" src="../uploads_images/'+response.image_100+'">';
// console.log(tovar_main_image);                        
//                        $("#base_image").html(response.main_image);
                        
                        }else if (response.image_100.length == 0)
                        {
                        tovar_main_image = 'There is no main product image';
                        }
                        $("#targetLayer").html(tovar_main_image);
                        
//   установка rolloover - изображения в Admin-панель
//                        if(response.main_image_rollover_100.length > 0)
//                        {
//                        rollover_image_100 = '<img id="rollover_image" src="../uploads_images/rollover_images/'+response.main_image_rollover_100+'">';
// console.log(rollover_image_100);                        
//                        $("#base_image").html(response.main_image);
                        
//                        }else if (response.main_image_rollover_100.length == 0)
//                        {
//                        rollover_image_100 = '<p class="notes_3">There is no main rollover product image</p>';
//                        }				
//  console.log(rollover_image_100);   						
//						$("#targetLayer-rollover-image").html(rollover_image_100);

						// добавление красного крестика, если rollover-image существует (есть ссылка на rollover-image в БД
//						 $('#targetLayer-rollover-image').append('<a class="del_rollover_img" img_rollover_id="'+response.products_id+'"></a>');




                        
						
						
						
						
						
						
						
						
                        
//  проверка, что основное изображение загружено (добавление красн. крестика - для удаления картинки из БД):        
                       mainImage = $('#main_image');
                        //   check if the image is already on cache
                       if(mainImage.prop('complete')) {
//                        alert ('основное изображение товара загружено (from cache)');
                        $('#targetLayer').append('<a class="del_main_img" img_id="'+response.products_id+'"></a>');         
                       }else{
                        // call teh codes/ function after the image is loaded from internet
                        mainImage.on('load', function(){
//                            alert ('основное изображение товара загружено');
                        $('#targetLayer').append('<a class="del_main_img" img_id="'+response.products_id+'"></a>');
                        });
                       }
                        

//  проверка, что Rollover -  изображение загружено (добавление красн. крестика - для удаления картинки из БД):        
                       RolloverImage = $('#rollover_image');
                        //   check if the image is already on cache
                       if(RolloverImage.prop('complete')) {
//                        alert ('основное изображение товара загружено (from cache)');
						// добавление красного крестика, если rollover-image существует (есть ссылка на rollover-image в БД
						 $('#targetLayer-rollover-image').append('<a class="del_rollover_img" img_rollover_id="'+response.products_id+'"></a>');       
                       }else{
                        // call teh codes/ function after the image is loaded from internet
                        RolloverImage.on('load', function(){
//                            alert ('основное изображение товара загружено');
						 $('#targetLayer-rollover-image').append('<a class="del_rollover_img" img_rollover_id="'+response.products_id+'"></a>');     
                        });
                       }						
						
						
						
						
						
						
						
						
						
						
						
						
						
                        
                        
                        
                        // установка флага элемента "checkbox" в зависимости от значений полученных в AJAX-ответе (response) из Базы Данных
                        if(response.tov_link_on == 1){
// $('input[name=foo]').attr('checked', true);
                            $("#tov_link_on_2, #layer3").prop('checked', true);
// $("#Checkbox1, #Layer3").prop('1');
                        }
//	else if (response.tov_link_on == 0){	// если response.tov_link_on не содержит никакого значения, то в БД также не будет ничего занесено (изначально в БД нет значения "0"
//	else{	
                        else if (response.tov_link_on != 1){
                            $("#tov_link_on_2, #layer3").prop('checked', false);
// $("#Checkbox1, #Layer3").prop('0');
                        }

                        // установка флага элемента "chackbox" в зависимости от значений полученных в AJAX-ответе (response) из Базы Данных
                        if(response.visible == 1){
// $('input[name=foo]').attr('checked', true);
                            $("#visible_on_2, #layer3").prop('checked', true);
// $("#Checkbox2, #Layer1").val('1');
                        }
                        else if (response.visible != 1){
                            $("#visible_on_2, #layer3").attr('checked', false);
// $("#Checkbox2, #Layer1").val('0');
                        }
// обновление основной таблицы товаров                
//          ajax2(0,"get_main_table");

                    }
                    //added by od: если данные не были отправлены by AJAX - появится alert-уведомление.
                    if(response.success == 0){
                        alert ("данные не были отправлены!  (action: AdvanceEditing)");
                    }


                    break;       // added by OD-end: для выполнения действия: расширенное редактирование




                case "extended_update_row": // added by OD-start: для выполнения действия: расширенное сохранение формы

                    if(response.success == 1){
                show_alert_2('данные формы были успешно сохранены на сервере');
         // после успешного сохранения данных в БД, -> вызов функции "advance_edit_recieve" для повторной загрузки в форму из БД.
         // блок сделан для эксперемента. Повышает достоверность отображения того, что данные были сохранены в БД.
                advance_edit_recieve(response.id);
                    }
                    
                    if(response.success == 0){
         // в случае НЕ успешного сохранения данных в БД, -> вызов функции "advance_edit_recieve" для повторной загрузки в форму из БД.
         // блок сделан для эксперемента. Повышает достоверность отображения того, что данные НЕ были сохранены в БД.
                advance_edit_recieve(id);   //здесь переменная "id" предположительно берется из последнего AJAX запроса, но тем не менее все работает как надо!
                        alert ("данные НЕ были изменены!  (action: ExtendedUpdateRow)");

                    }
                
                break;





                case "update_Row":
                    $("."+cancelbutton).trigger("click");
                    for(i=0;i<columns.length;i++){
                        $("tr[id='"+response.id+"'] td[class='"+columns[i]+"']").html(response[columns[i]]);
                    }
                    //added by od: если данные не были отправлены by AJAX - появится alert-уведомление.
                    if(response.success == 0){
                        alert ("данные не были отправлены!  (action: update_Row)");
                    }
// обновление основной таблицы товаров                
          ajax2(0,"get_main_table");                    
                    break;
                    
                    
                    
                    
                case "updatetd":
                    //$("."+cancelbutton).trigger("click");
                    var newval = $("."+table+" tr[id='"+editingtrid+"'] td[class='"+editingtdcol+"']").find(inputs).val();

//		alert($("."+table+" tr[id='"+editingtrid+"'] td[class='"+editingtdcol+"']").find(inputs).val());

//      temptd = $("."+table+" tr[id='"+editingtrid+"'] td[class='"+editingtdcol+"']").find(inputs).val("text");
                    temptd = $("."+table+" tr[id='"+editingtrid+"'] td[class='"+editingtdcol+"']").val();


                    $("."+table+" tr[id='"+editingtrid+"'] td[class='"+editingtdcol+"']").html(newval);

                    //$("."+table+" tr[id='"+editingtrid+"'] td[class='"+editingtdcol+"']").html(newval);

                    tdediting = 0;      // remove editing flag

                    if(response.success == 1){
//      alert ("данные были отправлены успешно!  (action: updatetd)");
                        $("."+table+" tr[id='"+editingtrid+"'] td[class='"+editingtdcol+"']").effect("highlight",{color: '#acfdaa'},1000);
                    }

                    //added by od: если данные не были отправлены by AJAX - появится alert-уведомление.
                    if(response.success == 0){
//      alert (test_value);
//      alert ("данные не были отправлены!  (action: updatetd)");
                        $("."+table+" tr[id='"+editingtrid+"'] td[class='"+editingtdcol+"']").html(test_value); //если respons.success=0, то заменяем редактируемую ячейку таблицы на первоначальные данные.
                        test_value = "";    //очистка переменной
                        $("."+table+" tr[id='"+editingtrid+"'] td[class='"+editingtdcol+"']").effect("highlight",{color: '#f4667b'},1000);
//      alert ('Переменная \"test_value\"=  '+test_value);
                    }
// обновление основной таблицы товаров                
          ajax2(0,"get_main_table");                    
                    break;
                 
 






                     
                    
                case "set_visible_state_catalogue_row":
                    if(response.success == 1){
//      alert ("данные были отправлены успешно!  (action: updatetd)");
                    }

                    //added by od: если данные не были отправлены by AJAX - появится alert-уведомление.
                    if(response.success == 0){
//      alert (test_value);
//      alert ("данные не были отправлены!  (action: updatetd)");
                    }                
          ajax2(0,"get_main_table");                    
                    break;






 
                  case "delete_main_image_product": // added by OD-start: удаление основной картинки товара
                
//$("#progress-bar").width('0%');
        // если картинка была успешно удалена из БД, то запускается AJAX-запрос на получение (обновление) списка дополнительных картинок товара)
                    if((response.success == 1) && (response.action == 'del_main_image_product')){
//                    $("#del_"+response.id).fadeOut((300),function(){
                    $('#targetLayer').children().fadeOut((300),function(){    

                    ajax("rid="+response.id,"AdvanceEditingReading"); 
                    
                    });               
                    }
                    break;  
 
 
 
 
                   case "delete_main_rollover_image": // added by OD-start: удаление Rollover - картинки товара
        // если картинка была успешно удалена из БД, то запускается AJAX-запрос на получение (обновление) списка дополнительных картинок товара)
                    if((response.success == 1) && (response.action == 'delete_main_rollover_image')){
//                    $("#del_"+response.id).fadeOut((300),function(){
                    $('#targetLayer-rollover-image').children().fadeOut((300),function(){    

                    ajax("rid="+response.id,"AdvanceEditingReading"); 
                    
                    });               
                    }
                    break;  
 
 
 
 
 
 
 
                 
                 
                 case "del_additional_image_product": // added by OD-start: удаление дополнительных картинок товара                
//$("#progress-bar").width('0%');
        // если картинка была успешно удалена из БД, то запускается AJAX-запрос на получение (обновление) списка дополнительных картинок товара)
                    if((response.success == 1) && (response.action == 'del_additional_image_product')){
                        
//                   $("#del_"+response.id).fadeOut(300);  
                   $("#del_"+response.id).fadeOut((300),function(){
                        ajax2(id,"get_product_additional_images");
					});  
                   
                      
/* 
					$("."+table+" tr[id='"+response.id+"']").effect("highlight",{color: '#f4667b'},300,function(){
                        $("."+table+" tr[id='"+response.id+"']").remove();
					});
*/                        
                        
//                  ajax2(id,"get_product_additional_images");               
                    }
                    
                    break;    
// ==================  Section "Catalogue" (End.) ==========================================================                     
            }
        },
        error: function(){
            alert("AJAX function (AJAX-JSON function): Unexpected error, Please try again");
        }
    });
}








ajax2 = function (id, action){
    $.ajax({
        type: "POST",
        url: "ajax/ajax2_get_html.php",
//        data : "action="+action,
//        data : 'rid='+id+'&action='+action,
        data : 'rid='+id+'&action='+action+'&page='+page+'&per_page='+per_page,
        dataType: "html",
        success: function(response){
            switch(action){             
    case "get_main_table_category":
//                $("table.tableDemo.bordered").html(response);
//    $("table.tableDemo.bordered").empty();
//    $("table.tableDemo.bordered").append(response);               
    $("div#data_table_wrap").empty();
    $("div#data_table_wrap").append(response);
    
    if ($.cookie('category_block_1')=='hide'){    
    $("div#test_inner_1").hide();
    } else if ($.cookie('category_block_1')=='show'){    
    $("div#test_inner_1").show();
    }
    
    if ($.cookie('category_block_2')=='hide'){    
    $("div#admin_category_form").hide();
    } else if ($.cookie('category_block_2')=='show'){    
    $("div#admin_category_form").show();
    }
    
    if ($.cookie('category_table_1_2')=='hide'){    
    $("table.type_table, table.category_table").hide();
    } else if ($.cookie('category_table_1_2')=='show'){    
    $("table.type_table, table.category_table").show();
    }    
    
    radio1_check();
    $('.checkbox1').checkator();                // initionalisation Checkator plugin 
    $('select').selectBox({mobile: true});      // initionalisation selectBox plugin               
    
    break;




    case "get_content_html_only":
// alert(response);
    $("div#content_only_page_editing textarea").empty();
    // $("#form_3 textarea").append(response);
    $("div#content_only_page_editing textarea").val(response);

    break;







    case "get_main_table":
    //                $("table.tableDemo.bordered").html(response);
    //    $("table.tableDemo.bordered").empty();
    //    $("table.tableDemo.bordered").append(response);               
    $("div#data_table_wrap").empty();
    $("div#data_table_wrap").append(response);
    radio1_check();
    $('.checkbox1').checkator();                // initionalisation Checkator plugin                  
    
    break; 
         
    case "get_product_additional_images":
    // $("div.main_product_images").css({ "display":"block" });
    // $("div.main_product_images").css({ "display":"block" });
    $("div.main_product_images").fadeIn('slow');
    $("div#targetLayer_adiitional_images").html(response);

    break;                     


                                      
            }  
        },
        error: function(){
            alert("Unexpected error, Please try again");
        }
    });
}





// функция для сохранения категорий из 2-го (среднего) блока, на AJAX-странице категорий.
ajax3 = function (params,action){
    $.ajax({
        type: "POST",
        url: "ajax/ajax2_get_html.php",
//        data : "action="+action,
//        data : 'rid='+id+'&action='+action,
        data : params+"&action="+action,
//        dataType: "json",
        dataType: "html",
        success: function(response){
           ajax2(0,"get_main_table_category");              
//        $("div#add_categories_alerts").empty();
//        $("div#add_categories_alerts").append(response);     
                       
return false;            
            switch(action){             


                case "get_main_table":
//                $("table.tableDemo.bordered").html(response);
//    $("table.tableDemo.bordered").empty();
//    $("table.tableDemo.bordered").append(response);               
//    $("div#data_table_wrap").empty();
//    $("div#data_table_wrap").append(response);
//    radio1_check();                 
                    break; 
                         
                   
                                      
            }  
        },
        error: function(){
            alert("Unexpected error, Please try again");
        }
    });
}









// функция для сохранения категорий из 2-го (среднего) блока, на AJAX-странице категорий.
// ajax4 = function (params,action){
ajax4 = function (id, action, content){
    $.ajax({
        type: "POST",
        url: "ajax/ajax2_get_html.php",
//        data : "action="+action,
//        data : 'rid='+id+'&action='+action,
        data : "rid="+id+"&action="+action+"&content="+content,
        // data : "content="+content,
//        dataType: "json",
        dataType: "html",
        success: function(response){
//return false;            
            switch(action){             

                case "save_content_html_only": 
// console.log(response);
                    if(response == 1){
                        Main.saveBtnAnimate();
                        $('.modal').trigger('reveal:close');

                        // var timer_d = setTimeout(function(){ 
                        //     Main.loadContentTable (page, per_page); 
                        //     clearTimeout(timer_d);
                        // }, 300);

                    }
                    //added by od: если данные не были отправлены by AJAX - появится alert-уведомление.
                    else {
                        alert ("данные не были сохранены!  (action: get_content_html_only)");
                    }


                    break;     

                                      
            }  
        },
        error: function(){
            alert("Unexpected error, Please try again");
        }
    });
}











