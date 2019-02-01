<?php
header('Content-Type: text/html; charset=UTF-8');


 if(TRUE):
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
endif;

	require_once("ajax_table.class.php");
	$obj = new ajax_table();

	if(isset($_POST) && count($_POST)){
		


		$action = $_POST['action'];
		unset($_POST['action']);







            if($action == "update_root_category_row"){

                $escapedPost = array_map('rawurldecode', $_POST);                    
                $res = $obj->update_root_category_row($mysqli, $escapedPost);
        if($res){
            $escapedPost["success"] = "1";
            $escapedPost["id"] = $res;
            echo json_encode($escapedPost);
        }
        else
            echo $obj->error("update_root_category_row");       
            }







            else if($action == "update_root_category_td"){
                $escapedPost = array_map('rawurldecode', $_POST);

                $id = $obj->update_root_category_td($mysqli, $escapedPost);
                if($id)
                    echo json_encode(array_merge(array("success" => "1","id" => $id),$escapedPost));
                else
                    echo $obj->error("update_root_category_td");
            }



			
            else if($action == "set_visible_state_root_category_row"){

                $escapedPost = array_map('rawurldecode', $_POST);

                $res = $obj->set_visible_state_root_category_row($mysqli, $escapedPost);
                if($res==1) {
                    echo json_encode(array("success" => "1"));
                    } else
                    echo $obj->error("set_visible_state_root_category_row");
            } 
 
 





            else if($action == "del_root_category_row"){
                $id = $_POST['rid'];
                $res = $obj->del_root_category_row($mysqli, $id);
                if($res)
                    echo json_encode(array("success" => "1","id" => $id));
                else
                    echo $obj->error("del_root_category_row");
            }



			else if($action == "update_category_row"){
                $escapedPost = array_map('rawurldecode', $_POST);                    
                $res = $obj->update_Category_Row($mysqli, $escapedPost);
        if($res){
            $escapedPost["success"] = "1";
            $escapedPost["id"] = $res;
            echo json_encode($escapedPost);
        }
        else
            echo $obj->error("update_Category_Row");       
            }









			
           else if($action == "update_category_td"){

                $escapedPost = array_map('rawurldecode', $_POST);

                $id = $obj->update_category_td($mysqli, $escapedPost);
                if($id)
                    echo json_encode(array_merge(array("success" => "1","id" => $id),$escapedPost));
                else
                    echo $obj->error("update_category_td");
            }



			
            else if($action == "set_visible_state_category_row"){

                $escapedPost = array_map('rawurldecode', $_POST);

                $res = $obj->set_visible_state_category_row($mysqli, $escapedPost);
                if($res==1) {
                    echo json_encode(array("success" => "1"));
                    } else
                    echo $obj->error("set_visible_state_category_row");
            } 
 
 





            else if($action == "del_category_row"){
                $id = $_POST['rid'];
                $res = $obj->del_category_row($mysqli, $id);
                if($res)
                    echo json_encode(array("success" => "1","id" => $id));
                else
                    echo $obj->error("del_category_row");
            }

        
        


		else if($action == "add_new_page"){		

			$escapedPost = array_map('rawurldecode', $_POST);
				
			$res = $obj->add_new_page($mysqli, $escapedPost);
			
        if($res){
            $escapedPost["success"] = "1";
            echo json_encode($escapedPost);
        }
        else
            echo $obj->error("add_new_page");
        }
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        






		else if($action == "save"){		

			$escapedPost = array_map('rawurldecode', $_POST);
				
			$res = $obj->save($mysqli, $escapedPost);
			
        if($res){
            $escapedPost["success"] = "1";
            $escapedPost["id"] = $res;
            echo json_encode($escapedPost);
        }
        else
            echo $obj->error("save");
        }
        
        
        
        
            else if($action == "del_content_row"){
                $id = $_POST['rid'];
                $res = $obj->del_content_row($mysqli, $id);
                if($res)
                    echo json_encode(array("success" => "1","id" => $id));
                else
                    echo $obj->error("del_content_row");
            }
			
	
            
            else if($action == "del_catalogue_row"){
                $id = $_POST['rid'];
                $res = $obj->del_catalogue_row($mysqli, $id);
                if($res)
                    echo json_encode(array("success" => "1","id" => $id));
                else
                    echo $obj->error("del_catalogue_row");
            }
			
	
    
    
    
    		
			else if($action == "copying_catalogue_row"){//    action for row copy
                $id = $_POST['rid'];
                $res = $obj->copying_catalogue_row($mysqli, $id);
                $array = $obj->get_last_row_array($mysqli);    
                if($res) 
                      echo json_encode(array(
                      "success" => "1","id" => $id,
                      "image_30"=>$array['image_30'],                      
                      "products_id"=>$array['products_id'], 
                      "main_title"=>$array['main_title'],                      
                      "title"=>$array['title'],
                      "article"=>$array['article'],
                      "price"=>$array['price'],
                      "brand_2"=>$array['brand_2']
                      ));  
                else
                    echo $obj->error("copyingRow");
            }														                    // End: action for row copy
			
	
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        

	else if($action == "AdvanceEditingReadingContent"){	
                $id = $_POST['rid'];
                $res = $obj->advanced_editing_reading_content($mysqli, $id);
                

                if($res) {

IF(1):                        
                    echo json_encode(array(
                      "success" => "1",
                      "id" => $id, 
                      "content_id"=>$res['content_id'],
                      "title"=>$res['title'],
                      "url"=>$res['url'],
                      "visible"=>$res['visible'],
                      "show_in_menu"=>$res['show_in_menu'],
                      "h1"=>$res['h1'],
                      "seo_description"=>$res['seo_description'],
                      "wide_content"=>$res['content']

                      ),JSON_UNESCAPED_UNICODE);  
endif;
                    
if(0):
                        echo json_encode(array(
                      "success" => "1",
                      "id" => $id, 
                      "products_id"=>$res['products_id'],
                      "title"=>$res['title'],
                      "title"=>$res['content']
                      )); 
ENDIF;

                }    
                else
                    echo $obj->error("AdvanceEditing");
            }			

   
        
        
        
        
        
        
        
        
        
        
        
        
       


            else if($action == "save_edited_content"){
                $escapedPost = array_map('rawurldecode', $_POST);

                $res = $obj->save_edited_content($mysqli, $escapedPost);
                if($res == 1){
                    echo json_encode(array_merge(array("success" => "1"),$escapedPost));        //Оригинал строки
                }else
                    echo $obj->error("save_content");
            }





        
        
        
        

	else if($action == "AdvanceEditingReading"){		
                $id = $_POST['rid'];
                $res = $obj->advanced_editing_row_record($mysqli, $id);
                if($res) {
IF(TRUE):                        
                    echo json_encode(array(
                      "success" => "1",
                      "id" => $id, 
                      "products_id"=>$res['products_id'],
                      "main_title"=>$res['main_title'],
                      "title"=>$res['title'],
                      "article"=>$res['article'],
                      "price"=>$res['price'],
                      "visible"=>$res['visible'],
                      "main_image"=>$res['image'],
//                      "main_image_rollover"=>$res['image_rollover'],
//                      "main_image_rollover_100"=>$res['image_rollover_100'],                      					  
                      "image_700"=>$res['image_700'],
                      "image_500"=>$res['image_500'],
                      "image_300"=>$res['image_300'],
                      "image_100"=>$res['image_100'],
                      "image_50"=>$res['image_50'],
                      "image_30"=>$res['image_30'],
                      "brand_2"=>$res['brand_2'],
                      "type_id"=>$res['type_id'],
                      "type_tovara_rus"=>$res['type_tovara_rus'],
                      "brand_id"=>$res['brand_id'],
                      "brand"=>$res['brand'],
                      "subcategory_id"=>$res['subcategory_id'],
                      "subcategory_name"=>$res['subcategory_name'],
                      "seo_words"=>$res['seo_words'],
                      "tovar_seo_link"=>$res['tovar_seo_link'],
                      "tov_link_on"=>$res['tov_link_on'],
                      "seo_description"=>$res['seo_description'],
                      "mini_description"=>$res['mini_description'],
                      "description"=>$res['description'],
                      "mini_features"=>$res['mini_features'],
                      "features"=>$res['features'],
                      "root_category_list"=>$res['root_category_list'],
                      "category_list"=>$res['category_list']
                      ),JSON_UNESCAPED_UNICODE);  
endif;
if(FALSE):
                        echo json_encode(array(
                      "success" => "1",
                      "id" => $id, 
                      "products_id"=>$res['products_id'],
                      "title"=>$res['title']
                      )); 
ENDIF;

                }    
                else
                    echo $obj->error("AdvanceEditing");
            }			

	else if($action == "get_product_additional_images"){	
                $id = $_POST['rid'];
                $res = $obj->get_product_additional_images($mysqli, $id);
                if($res) 
                        echo json_encode(array(
                      "success" => "1",
                      "id" => $id, 
                      "products_id"=>$res['products_id'],
                      "main_title"=>$res['main_title'],
                      "title"=>$res['title'],
                      "article"=>$res['article'],
                      "price"=>$res['price'],
                      "visible"=>$res['visible'],
                      "main_image"=>$res['image'],                  
                      "image_700"=>$res['image_700'],
                      "image_500"=>$res['image_500'],
                      "image_300"=>$res['image_300'],
                      "image_100"=>$res['image_100'],
                      "image_50"=>$res['image_50'],
                      "image_30"=>$res['image_30'],                    
                      "brand_2"=>$res['brand_2'],
                      "seo_words"=>$res['seo_words'],
                      "tovar_seo_link"=>$res['tovar_seo_link'],
                      "tov_link_on"=>$res['tov_link_on'],
                      "seo_description"=>$res['seo_description'],
                      "mini_description"=>$res['mini_description'],
                      "description"=>$res['description'],
                      "mini_features"=>$res['mini_features'],
                      "features"=>$res['features']
                      ));  

                    
                else
                    echo $obj->error("AdvanceEditing");
            }			


            else if($action == "extended_update_row"){
                $escapedPost = array_map('rawurldecode', $_POST);
                $res = $obj->update_record_extended($mysqli, $escapedPost);
                if($res == 1){
                echo json_encode(array_merge(array("success" => "1","id" => $escapedPost["products_id"])));

                }else
                    echo $obj->error("extended_update_row");
            }

 
 
 
 
            else if($action == "update"){

                $escapedPost = array_map('mysql_real_escape_string', $_POST);
                $escapedPost = array_map('rawurldecode', $escapedPost);

                $id = $obj->update_record($mysqli, $escapedPost);
                if($id)
                echo json_encode(array_merge(array("success" => "1","id" => $id)));
                else
                    echo $obj->error("update");
            }
			
			
			else if($action == "update_Row"){
                $escapedPost = array_map('rawurldecode', $_POST);
IF(FALSE):  //  временно заблокированный блок (вместо него блок ниже)
                $id = $obj->update_Row($mysqli, $escapedPost);
                if($id)
                echo json_encode(array_merge(array("success" => "1","id" => $id)));
                else
                    echo $obj->error("update");
                    
ENDIF;                    
                    
                $res = $obj->update_Row($mysqli, $escapedPost);
			
        if($res){
            $escapedPost["success"] = "1";
            $escapedPost["id"] = $res;
            echo json_encode($escapedPost);
        }
        else
            echo $obj->error("update_Row");    
                    
            }
			
			
			
            else if($action == "updatetd"){
                $escapedPost = array_map('rawurldecode', $_POST);
                $id = $obj->update_td($mysqli, $escapedPost);
                if($id)
                    echo json_encode(array_merge(array("success" => "1","id" => $id),$escapedPost));
                else
                    echo $obj->error("updatetd");
            }
 
 
			
            else if($action == "set_visible_state_catalogue_row"){
                $escapedPost = array_map('rawurldecode', $_POST);

                $id = $obj->set_visible_state_catalogue_row($mysqli, $escapedPost);
                if($id==1) {
                    echo json_encode(array("success" => "1"));
                    } else
                    echo $obj->error("set_visible_state_catalogue_row");
            } 
 
 
 
 
 
             // удаление основной картиноки товара
            else if($action == "delete_main_image_product"){

                $id = $_POST['rid'];
                $res = $obj->del_main_image_product($mysqli, $id);
                if($res == 1)
                
                echo json_encode(array(
                      "success" => "1",
                      "action" => "del_main_image_product",
                      "id" => $id 
                ));
                else
                    echo $obj->error("delete_main_image_product");
            } 
 
 
 
 
              // удаление Rollover-картинки товара
            else if($action == "delete_main_rollover_image"){

                $id = $_POST['rid'];
                $res = $obj->delete_main_rollover_image($mysqli, $id);
                if($res == 1)
                
                echo json_encode(array(
                      "success" => "1",
                      "action" => "delete_main_rollover_image",
                      "id" => $id 
                ));
                else
                    echo $obj->error("delete_main_rollover_image");
            } 
 
 
 
            
            // удаление дополнительных картинок товара
            else if($action == "del_additional_image_product"){

                $id = $_POST['rid'];
                $res = $obj->del_additional_image_product($mysqli, $id);
                if($res)
                echo json_encode(array(
                      "success" => "1",
                      "action" => "del_additional_image_product",
                      "id" => $id 
                ));
                else
                    echo $obj->error("delete_adiitional_image");
            } 
            
            
            
        }
?>