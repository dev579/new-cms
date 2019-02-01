<?php

IF(TRUE):
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
ENDIF;

define('myeshop', true);
require_once("../../include/db_connect.php");


class ajax_table {
     
   function update_root_category_row($mysqli, $data){
    
	if(count($data)){
		$id = $data['rid'];
		unset($data['rid']);
		$values = implode("','", array_values($data));
		$str = "";
		foreach($data as $key=>$val){
			$str .= $key."='".$val."',";
		}
        
		$str = substr($str,0,-1);
        
		$res = $mysqli->query("update category_root_type_tovara set $str where root_id = $id limit 1");

		if($mysqli->affected_rows == 1) {
		  return 1;
          } else
		  return 0;
	}
	else return 0;	
  }	
 
 
 
 
 
  
 
   function update_root_category_td($mysqli, $data){
	if(count($data)){
		$id = $data['rid'];
		unset($data['rid']);
		$res = $mysqli->query("update category_root_type_tovara set ".key($data)."='".$data[key($data)]."' where root_id = $id limit 1");
		if($mysqli->affected_rows == 1) {
		  return 1;
          } else
		  return 0;
		
	}	
  }





  function set_visible_state_root_category_row($mysqli, $data){
	if(count($data)){
		$id = $data['rid'];
        $visible_state = $data['state'];
		$res = $mysqli->query("update category_root_type_tovara set visible = '".$visible_state."' where root_id = $id limit 1");
		if($mysqli->affected_rows == 1) {
		  return 1;
          } else
		  return 0;
		
	}	
  }










  function del_root_category_row($mysqli, $id){
	 if($id){
		$mysqli->query("delete from category_root_type_tovara where root_id = $id limit 1");
        if($mysqli->affected_rows > 0) {
            return 1; 
        }else 
            return 0;
	 }
  }	



  function update_Category_Row($mysqli, $data){
    
	if(count($data)){
		$id = $data['rid'];
		unset($data['rid']);
		$values = implode("','", array_values($data));
		$str = "";
		foreach($data as $key=>$val){
			$str .= $key."='".$val."',";
		}
        
		$str = substr($str,0,-1);
		$res = $mysqli->query("update category set $str where id_brand = $id limit 1");
		
		if($mysqli->affected_rows == 1) {
		  return 1;
          } else
		  return 0;
	}
	else return 0;	
  }	 
 
 
 
 
 
 
 
 
 
 
 
   function update_category_td($mysqli, $data){
	if(count($data)){
		$id = $data['rid'];
		unset($data['rid']);
		$res = $mysqli->query("update category set ".key($data)."='".$data[key($data)]."' where id_brand = $id limit 1");
		if($mysqli->affected_rows == 1) {
		  return 1;
          } else
		  return 0;
		
	}	
  }
 
 
 

  function set_visible_state_category_row($mysqli, $data){
	if(count($data)){
		$id = $data['rid'];
        $visible_state = $data['state'];
		$res = $mysqli->query("update category set visible = '".$visible_state."' where id_brand = $id limit 1");
		if($mysqli->affected_rows == 1) {
		  return 1;
          } else
		  return 0;
		
	}	
  } 
 
 
 

  function del_category_row($mysqli, $id){
	 if($id){
		$mysqli->query("delete from category where id_brand = $id limit 1");
        if($mysqli->affected_rows > 0) {
            return 1; 
        }else 
            return 0;
	 }
  }	

 
  
   
  function getRecords($mysqli){
	$res = $mysqli->query("select * from table_products");
$records = array();
    
	if($res->num_rows > 0){
		while($result = mysqli_fetch_assoc($res)){
			$records[] = array_map('stripslashes', $result);
		}
		return $records;
	}
  }	



  function getRecords_and_get_resized_images($mysqli){ 
    $res2 = $mysqli->query("select * from image_resized_products, table_products"); // - так работает (но данные из малой таблицы добавляются в цикле)


	if($res2->num_rows > 0){
$records = array();	   
		while($row2 = mysqli_fetch_assoc($res2)){
		  unset($row2["products_id"]);              // удаляем из массива не нужный столбец
			$record = array_map('stripslashes', $row2);
			$records[] = $record; 
		}
		return $records;              //  string by default
	}

  }	 // end of function "getRecords_and_get_resized_images"

    
 

  function add_new_page($mysqli, $data){
      function rus2translit($string) {
          $converter = array(
              'а' => 'a',   'б' => 'b',   'в' => 'v',
              'г' => 'g',   'д' => 'd',   'е' => 'e',
              'ё' => 'e',   'ж' => 'zh',  'з' => 'z',
              'и' => 'i',   'й' => 'y',   'к' => 'k',
              'л' => 'l',   'м' => 'm',   'н' => 'n',
              'о' => 'o',   'п' => 'p',   'р' => 'r',
              'с' => 's',   'т' => 't',   'у' => 'u',
              'ф' => 'f',   'х' => 'h',   'ц' => 'c',
              'ч' => 'ch',  'ш' => 'sh',  'щ' => 'sch',
              'ь' => '',  'ы' => 'y',   'ъ' => '',
              'э' => 'e',   'ю' => 'yu',  'я' => 'ya',
              
              'А' => 'A',   'Б' => 'B',   'В' => 'V',
              'Г' => 'G',   'Д' => 'D',   'Е' => 'E',
              'Ё' => 'E',   'Ж' => 'Zh',  'З' => 'Z',
              'И' => 'I',   'Й' => 'Y',   'К' => 'K',
              'Л' => 'L',   'М' => 'M',   'Н' => 'N',
              'О' => 'O',   'П' => 'P',   'Р' => 'R',
              'С' => 'S',   'Т' => 'T',   'У' => 'U',
              'Ф' => 'F',   'Х' => 'H',   'Ц' => 'C',
              'Ч' => 'Ch',  'Ш' => 'Sh',  'Щ' => 'Sch',
              'Ь' => '',  'Ы' => 'Y',   'Ъ' => '',
              'Э' => 'E',   'Ю' => 'Yu',  'Я' => 'Ya',
          );
          return strtr($string, $converter);
      }

function str2url($str) {
    // переводим в транслит
    $str = rus2translit($str);
    // в нижний регистр
    $str = strtolower($str);
    // заменям все ненужное нам на "-"
    $str = preg_replace('~[^-a-z0-9_]+~u', '-', $str);
    // удаляем начальные и конечные '-'
    $str = trim($str, "-");
    return $str;
}      
      
      
      
      
      
	if(count($data)){
        
        if (!$data['url']) {
        $data['url'] = str2url($data['h1']);
        }
        if(!isset($data['visible'])){
            $data['visible'] = 0;
        }
        if(!isset($data['show_in_menu'])){
            $data['show_in_menu'] = 0;
        }
            
		$data['url'] = '/' . $data['url'];
        
		$values = implode("','", array_values($data));
        
if(0):         
    echo("<pre>");
    print_r ($data['url']);
    echo("</pre>");        
endif;         

if(1):         
        $mysqli->query("insert into table_content (".implode(",",array_keys($data)).") values ('".$values."')");
        if($mysqli->affected_rows > 0) {
            $result = $mysqli->query("SELECT content_id FROM table_content ORDER BY content_id DESC LIMIT 1");
            $data2 = mysqli_fetch_assoc($result);
if(0):         
    echo("<pre>");
    print_r ($data);
    echo("</pre>");        
endif;
            
        if ( !isset($data['visible']) ) {
            $data['visible'] = 0;
        }
        $mysqli->query("insert into table_content_menu (content_id, name, url, visible) values ('{$data2['content_id']}', '{$data['h1']}', '{$data['url']}', '{$data['visible']}')");
        

if(1):        
		if($mysqli->affected_rows > 0) {
		return 1;
        }
	 else {return 0;}	
endif;
        
        }
endif;
        
    }
  }	

    
    
  function save($mysqli, $data){
	if(count($data)){
		$values = implode("','", array_values($data));
		$mysqli->query("insert into table_products (".implode(",",array_keys($data)).") values ('".$values."')");
		
		if($mysqli->insert_id) { 
		return 1;
        }
	}
	else return 0;	
  }	

    
    
    
    
    
  function del_content_row($mysqli, $id){
	 if($id){
		$mysqli->query("delete from table_content where content_id = $id limit 1");
        if($mysqli->affected_rows > 0) {
		    $mysqli->query("delete from table_content_menu where content_id = $id limit 1");
            return 1; 
// echo mysql_affected_rows();         // для отладки 
        }else 
            return 0;
	 }
  }	
      
    
    
  function del_catalogue_row($mysqli, $id){
	 if($id){
		$mysqli->query("delete from table_products where products_id = $id limit 1");
        if($mysqli->affected_rows > 0) {
            return 1; 
// echo mysql_affected_rows();         // для отладки 
        }else 
            return 0;
	 }
  }	
  
  
  
  
  
//    функция удаления основного изображения товара
    function del_main_image_product($mysqli, $id){
	 if($id){
// ===== start: блок для проверки: если в БД осталось только 1-уникальное изображение, то физическое удаление файлов разрешено, 

// определение "Основного-изображения" товара при заданном "products_id"
$result = $mysqli->query("SELECT image FROM table_products WHERE products_id = $id limit 1");
$data = mysqli_fetch_assoc($result);
$image = ($data['image']);

// проверка сколько одинаковых "Основных-изображений" товара в БД
$result = $mysqli->query("SELECT * FROM table_products WHERE image = '$image'");
$count = ($result->num_rows);
// ===== End: блок для проверки: если в БД осталось только 1-уникальное изображение


$result = $mysqli->query("SELECT image, image_30, image_50, image_100, image_300, image_500, image_700 FROM table_products WHERE products_id = $id limit 1");
$data = mysqli_fetch_assoc($result);

// удаляем ненужные столбцы выборки из БД
//unset($data["id"]);
//unset($data["products_id"]);
 
foreach($data as $key=>$val){

// удаление файлов происходит, если в БД осталась 1-уникальная ссылка на "Основное-изображение" товара (если $count == 1 )
if ($val > 0 && $count == 1){
$filepath = '../../uploads_images/'.$val;
//if (file_exists($filepath))
// echo $filepath;

unlink($filepath);

}
}
  
       $querynew = "image='', image_30='', image_50='', image_100='', image_300='', image_500='', image_700=''";
           
       $update = $mysqli->query("UPDATE table_products SET $querynew WHERE products_id = '$id'");         
	 
if($mysqli->affected_rows==1) {
            return 1; 
// echo mysql_affected_rows();         // для отладки 
        }else 
            return 0;   
	 }
  }	
  
  
  
  
  
     //    функция удаления Rollover- изображения товара
    function delete_main_rollover_image($mysqli, $id){
	 if($id){

// определение "Rollover-image" при заданном "products_id"
$result = $mysqli->query("SELECT image_rollover FROM table_products WHERE products_id = $id limit 1");
$data = mysqli_fetch_assoc($result);
$image = ($data[image_rollover]);

// проверка сколько одинаковы "Rollover-images" в БД
$result = $mysqli->query("SELECT * FROM table_products WHERE image_rollover = '$image'");
$count = ($result->num_rows);

// IF(FALSE):  // запрет работы блока удаления самих файлов и запрет удаления ссылок на них из БД
 IF(TRUE):


$result = $mysqli->query("SELECT image_rollover, image_rollover_100 FROM table_products WHERE products_id = $id limit 1");
$data = mysqli_fetch_assoc($result);

foreach($data as $key=>$val){
// удаление файлов происходит, если в БД осталась 1-уникальная ссылка на "Rollover-image" (если $count == 1 )
if ($val > 0 && $count == 1){
$filepath = '../../uploads_images/rollover_images/'.$val;
//if (file_exists($filepath))

unlink($filepath);

}
}
  
       $querynew = "image_rollover='', image_rollover_100=''";
           
       $update = $mysqli->query("UPDATE table_products SET $querynew WHERE products_id = '$id'");         
	 
if($mysqli->affected_rows==1) {
            return 1; 
// echo mysql_affected_rows();         // для отладки 
        }else 
            return 0;   

ENDIF;
	 }
  } 

  
  
  
  
  
  
  
  
  
  //    функция удаления дополнительных изображений товара
    function del_additional_image_product($mysqli, $id){
	 if($id){


$result = $mysqli->query("SELECT * FROM uploads_images_additional WHERE id = $id");
$data = mysqli_fetch_assoc($result);

// удаляем ненужные столбцы выборки из БД
unset($data["id"]);
unset($data["products_id"]);
 
foreach($data as $key=>$val){
$filepath = '../../uploads_images_additional/'.$val;

if (file_exists($filepath))
{

$do = unlink($filepath);

IF(FALSE):
if($do=="1"){ 
//    echo "The file was deleted successfully."; 
} else { 
//    echo "There was an error trying to delete the file."; 
//    echo "Была ошибка при попытке удалить файл";     
    } 
ENDIF;

IF(FALSE):
// IF(TRUE):
if (file_exists($filepath))
{
    echo "Была ошибка при попытке удалить файл </br>"; 
}
ENDIF;
}
}

		$mysqli->query("delete from uploads_images_additional where id = $id limit 1");
	 
if($mysqli->affected_rows==1) {
            return 1; 
// echo mysql_affected_rows();         // для отладки 
        }else 
            return 0;   
	 }
  }	
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  function copying_catalogue_row($mysqli, $id){
	 if($id){

$mysqli->query("CREATE TEMPORARY TABLE tmptable_1 SELECT * FROM table_products WHERE products_id = $id limit 1");

$mysqli->query("UPDATE tmptable_1 SET products_id = NULL");

$mysqli->query("INSERT INTO table_products SELECT * FROM tmptable_1");

//return mysqli_affected_rows();
if($mysqli->affected_rows==1) {
            return 1; 
// echo mysql_affected_rows();         // для отладки 
        }else 
            return 0;

$mysqli->query("DROP TEMPORARY TABLE IF EXISTS tmptable_1");
	 }
  }	

 function get_last_row_array($mysqli){ 
  $result = $mysqli->query("SELECT * FROM table_products ORDER BY products_id DESC LIMIT 1");
 $data = mysqli_fetch_assoc($result);
 return $data;
}  
    
    
    
    
  function advanced_editing_reading_content ($mysqli, $id){			
	 if($id){
$result = $mysqli->query("SELECT * FROM table_content WHERE content_id = $id");

 $data = mysqli_fetch_assoc($result);
		return $data; 


IF(FALSE):
// IF(TRUE):
echo("<pre>");
// print_r ($root_list);
// print_r ($root_list_array);
print_r ($category_list);
echo("<pre>");
 ENDIF;  

// IF(TRUE):
 IF(FALSE):
echo("<br><pre>");
print_r ($data);
echo("<pre>");
 ENDIF;  
 return $data;  
     }
  }	

function save_edited_content($mysqli, $data){
	if(count($data)){
		$id = $data['content_id'];
		unset($data['content_id']);
        
        if(!isset($data['visible'])){
            $data['visible'] = 0;
        }
        if(!isset($data['show_in_menu'])){
            $data['show_in_menu'] = 0;
        }

	
		$values = implode("','", array_values($data));
		$str = "";
		
		foreach($data as $key=>$val){
			$str .= $key."='".$val."',";
		}
        
		$str = substr($str,0,-1);


   // для отладки:
if(0):   
	echo("<pre>");
	print_r ($str);
	echo("<pre>");
endif;      
	  
		$res_1 = $mysqli->query("update table_content set $str where content_id = $id limit 1");


IF(0):
        if(!$res) {
//        if(!$str) {            
            return 0;      
        }else 
            return 1;
endif;            	


IF(1):
        if($mysqli->affected_rows > 0) {
            
    if( isset($data['h1']) && isset($data['url']) && isset($data['show_in_menu']) ) {     
       		$res_2 = $mysqli->query("update table_content_menu set name = '".$data['h1']."', url = '".$data['url']."', visible = '".$data['show_in_menu']."' where content_id = $id limit 1");     
    }
        }
        
        if(($res_1) || ($mysqli->affected_rows > 0)) {
            return 1; 
        }else 
            return 0;
        
        
endif;

if(0):   
	echo("<pre>");
	print_r ($mysqli->affected_rows);
	echo("<pre>");
endif;      

        }	
        }


 function advanced_editing_row_record($mysqli, $id){			// start added by OD:    action for row copy
	 if($id){
$result = $mysqli->query("SELECT * FROM table_products WHERE products_id = $id");

 $data = mysqli_fetch_assoc($result);
    $data_unit = $data['type_tovara_rus']; 
    $data_unit_brand = $data['brand']; 

  $cat = $mysqli->query("SELECT DISTINCT type_tovara_rus FROM table_products
  UNION
  SELECT DISTINCT type_name_rus FROM category_root_type_tovara
  ");
  

  
  if(!$cat) exit("Ошибка корневой категории - ".mysql_error());

      if($cat->num_rows > 0)
      {
// инициализация переменных        
$root_list = '';        
          while($root_category = mysqli_fetch_array($cat))
          {

          $root_unit = $root_category['type_tovara_rus'];
          $root_list .= '<option';
          if ($data_unit == $root_unit) $root_list .= ' selected';
          $root_list .= ' value="'.$root_unit.'">'.$root_unit.'</option>';
          }
      }
      else
//          echo "в корневой категории нет записей";          
          $root_list = 'в корневой категории нет записей';





$root_list_array = array(); // создание пустого массива
$root_list_array['root_category_list'] = $root_list;  //добавление в пустой массив списка корневой категории, с ключем "root_category_list"

  // start:     1.2 Блок получения списка категорий   
$cache_id="db_UNION_categories_for_select_list_admin_cache__";
$login_user='root';//Для каждого юзера будет хранится свой кэш
$cache_file = '../../cache_files/'.$cache_id.'_'.md5($cache_id).sha1($login_user).'.txt';

 if (DB_CATEGORY_CACHING == 1) 
//{$cache_time = "259200";}   //время актуальности кэш-файла  (259200 = 72 часа = 3 суток)
{$cache_time = "30";}
else {
      $cache_time = "0";
     }
    
    
if ( file_exists( $cache_file ) && (time() - filemtime($cache_file)) < $cache_time)
    {
        $getcache=file_get_contents($cache_file);
        $category_list = ($getcache);     // - для проверки-без декодирования
    }

    else{
        
        
        
        




    $cat = $mysqli->query("SELECT DISTINCT brand FROM table_products
    UNION
    SELECT DISTINCT brand FROM category
    ");

  if(!$cat) exit("Ошибка получения списка категорий товаров - ".mysql_error());

      if($cat->num_rows > 0)
      {
$category_list = '';
          while($category = mysqli_fetch_array($cat))
          {
          $category_unit = $category['brand'];

          $category_list .= '<option';
          if ($data_unit_brand == $category_unit) $category_list .= ' selected';
          $category_list .= ' value="'.$category_unit.'">'.$category_unit.'</option>';
          }
      }
      else
          $category_list = 'в корневой категории нет записей';

}   // конец условия "else", если файл кэша не существует, или файл кэша устарел
$category_list_array = array();
$category_list_array['category_list'] = $category_list;



$data = array_merge($data, $root_list_array, $category_list_array); 

IF(FALSE):
// IF(TRUE):
echo("<pre>");
// print_r ($root_list);
// print_r ($root_list_array);
print_r ($category_list);
echo("<pre>");
 ENDIF;  

// IF(TRUE):
 IF(FALSE):
echo("<br><pre>");
print_r ($data);
echo("<pre>");
 ENDIF;  

//		return mysql_affected_rows(); 

 return $data;  
     }
  }	




function get_product_additional_images ($mysqli, $id){			// start added by OD:    action for row copy
	 if($id){

$result = $mysqli->query("SELECT * FROM uploads_images WHERE products_id = $id");

 $data = mysqli_fetch_assoc($result);
echo("<pre>");
print_r ($data);
echo("<pre>");
	 
     }
  }	




function update_record_extended($mysqli, $data){
    if ($data['visible']<1) {$data['visible']=0;}             //для поля "visible" (опубликован/ не опубликован)
    if ((!isset($data['tov_link_on'])) || ($data['tov_link_on']<1)) {$data['tov_link_on']=0;}     //для поля "tov_link_on" (есть SEO ссылка в БД/ нет SEO ссылки в БД)
   
    
	if(count($data)){
		$id = $data['rid'];
		unset($data['rid']);
		$values = implode("','", array_values($data));
		$str = "";
		foreach($data as $key=>$val){
			$str .= $key."='".$val."',";
		}
        
		$str = substr($str,0,-1);

		$res = $mysqli->query("update table_products set $str where products_id = $id limit 1");

//IF(TRUE):
IF(FALSE):
        if(!$res) {
//        if(!$str) {            
            return 0;      
        }else 
            return 1;
endif;            	


IF(TRUE):
//IF(FALSE):
        if($mysqli->affected_rows==1) {
    
            return 1; 
// echo mysql_affected_rows();         // для отладки 
        }else 
            return 0;

endif;



        }	
        }


  function update_Row($mysqli, $data){
    
	if(count($data)){
		$id = $data['rid'];
		unset($data['rid']);
		$values = implode("','", array_values($data));
		$str = "";
		foreach($data as $key=>$val){
			$str .= $key."='".$val."',";
		}
        
		$str = substr($str,0,-1);
        
		$res = $mysqli->query("update table_products set $str where products_id = $id limit 1");
		
		if($mysqli->affected_rows == 1) {
		  return 1;
          } else
		  return 0;
	}
	else return 0;	
  }	

  function update_td($mysqli, $data){
	if(count($data)){
		$id = $data['rid'];
		unset($data['rid']);

		$res = $mysqli->query("update table_products set ".key($data)."='".$data[key($data)]."' where products_id = $id limit 1");
		if($mysqli->affected_rows == 1) {
		  return 1;
          } else
		  return 0;
		
	}	
  }




  function set_visible_state_catalogue_row($mysqli, $data){
	if(count($data)){
		$id = $data['rid'];
        $visible_state = $data['state'];
		$res = $mysqli->query("update table_products set visible = '".$visible_state."' where products_id = $id limit 1");
		if($mysqli->affected_rows == 1) {
		  return 1;
          } else
		  return 0;
		
	}	
  }









  function error($act){
	 return json_encode(array("success" => "0","action" => $act));
  }

}
?>