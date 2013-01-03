var _final = {
  'name':false,
  'email':false,
  'password':false
};


$(function(){

   $('input:password').dPassword();
   $(':input[name="password_"]').hide();
   
   
   $('#nickname').focus(function(){
       $(this).removeClass('gray1');
       $('#err_name').html(PKINFO.defText.def_name_msg);
       $('#err_name').fadeIn();
       if($(this).val() == PKINFO.defText.nickname){
           $(this).val('');
           
       }

   });
   
   $('#nickname').blur(function(){
       $(this).addClass('gray1');
       
       if($(this).val().length<4){
          
          $('#err_name').html(PKINFO.eCode.A00401);
          _final.name = false;
          
       }else{
          
          checkUser(this);

       }
       if($(this).val() == ''){

          $(this).val(PKINFO.defText.nickname);
          
       }
   });
   
   
   $('#email').focus(function(){
       $(this).removeClass('gray1');
       
       $('#err_email').html(PKINFO.defText.def_email_msg);
       $('#err_email').fadeIn();
                  
       if($(this).val() == PKINFO.defText.email){
           
           $(this).val('');
           
       }

   });
   
   $('#email').blur(function(){
        $(this).addClass('gray1');
        
        if(!$(this).val().match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)){
            $('#err_email').html(PKINFO.eCode.A00101);
             _final.email = false;
        }else{
            checkEmail(this);
        }
        
        if($(this).val() == ''){
            
            $(this).val(PKINFO.defText.email);

        }
   });
   
   $('#n_password').focus(function(){
       
       $('#err_password').html(PKINFO.defText.def_psd_msg);
       $('#err_password').fadeIn();
       
       $(':input[name="password_"]').removeClass('gray1');
       if($(this).val() == PKINFO.defText.password || $(this).val()==''){
           $(this).val('')
           $(this).hide();
           $(':input[name="password_"]').show().focus();
       }

   });
   
   $(':input[name="password_"]').focus(function(){
       $('#err_password').html(PKINFO.defText.def_psd_msg);
       $('#err_password').fadeIn();
       $(this).removeClass('gray1');
   })
   
   $(':input[name="password_"]').blur(function(){

        if($('#password').val().trim().length < 6||$('#password').val().trim().length > 20){
            $('#err_password').html(PKINFO.eCode.A02410);
            _final.password = false;
            
        }else{
            _final.password = true;
            $('#err_password').fadeOut(); 
        }
       
       
        $(this).addClass('gray1');
        if($(this).val() == ''){
            $(this).hide();
            $('#n_password').show(); 
            $('#n_password').val(PKINFO.defText.password);

        }
   });
   
   
   $('#register_btn').click(function(){
       if(!_final.name || !_final.email || !_final.password){
           return false;
       }else{
           
         $('#read').attr('checked', true);
           //api/reg/reg post: email,passwd,uname 
         var params = {
           'uname':$('#nickname').val(),
           'email':$('#email').val(),
           'passwd':$('#password').val()
         };
         
            $.post("/api/reg/reg",params,function(rs){
                if(rs.code=="A00000"){
                    location.href = rs.data.redirect;
                }else if(rs.code=="A00302"){
                    $('#err_password').html(rs.data.msg);
                    $('#err_password').fadeIn();
                    _final.password = false;
                    
                }else if(rs.code=='A00301'){
                    $('#err_email').html(rs.data.msg);
                    $('#err_email').fadeIn();
                    _final.email = false;
                }else if(rs.code=='A00303'){
                    $('#err_nickname').html(rs.data.msg);
                    $('#err_nickname').fadeIn();
                    _final.nickname = false;
                }
            },'json');
         
       }
   });
   
    
});



function checkUser(obj){

   var params = {'uname':$(obj).val()};
   $.post("/api/reg/checkuname",params,function(rs){
    if(rs.code!="A00000"){
            $('#err_name').html(PKINFO.eCode.A01003);
            $('#err_name').fadeIn();
            _final.name = false;
        }else{
            _final.name = true;
            $('#err_name').fadeOut();
        }
    },'json');
}


function checkEmail(obj){
    var params = {'email':$(obj).val()};
   $.post("/api/reg/checkemail",params,function(rs){
    if(rs.code!="A00000"){
            $('#err_email').html(PKINFO.eCode.A00203);
            $('#err_email').fadeIn();
            _final.email = false;
        }else{
            _final.email = true;
            $('#err_email').fadeOut();
        }
    },'json');
}