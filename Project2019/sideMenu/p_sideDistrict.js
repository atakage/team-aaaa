
             
              $(document).ready(function(){
                 
                  $(".columnSideDistrictMenu").click(function(){
                      var submenu = $(this).next("div");
           
                     
                      if( submenu.is(":visible") ){
                          submenu.slideUp();
                      }else{
                          submenu.slideDown();
                      }
                  });


                  $(".columnSideProvinceMenu").click(function(){
                      var submenu = $(this).next("div");
           
                     
                      if( submenu.is(":visible") ){
                          submenu.slideUp();
                      }else{
                          submenu.slideDown();
                      }
                  });


              });
       