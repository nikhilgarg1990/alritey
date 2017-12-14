
//single and multi select script
$(document).ready(function() {
    $('.js-example-basic-single').select2();
});
$(document).ready(function() {
    $('.js-example-basic-multiple').select2();
}); 

//single select placeholder 
$(document).ready(function() {
$(".js-example-placeholder-single.bn_i8").select2({
    placeholder: "Gender",
    allowClear: false
});
});
$(document).ready(function() {
$(".js-example-placeholder-single.bj_i8").select2({
    placeholder: "Month",
    allowClear: false
});
});

$(document).ready(function() {
$(".js-example-placeholder-single.cat_i8").select2({
    placeholder: "Categories",
    allowClear: false
});
});
$(document).ready(function() {
$(".js-example-placeholder-single.catt_i8").select2({
    placeholder: "Type your requirement",
    allowClear: false
});
});


//create business popup multi select script
    $(function(){
        $('#people').multiSelect();
        $('#line-wrap-example').multiSelect({
            positionMenuWithin: $('.position-menu-within')
        });
        $('#categories').multiSelect({
            noneText: 'More Services',
           
        })
    });



//time picker script
  $("#shw").focus(function(){
    $("#modal-container-405600").modal("show");
});

 function closeTimerModal(){ 
  var working_hours=$('timer1').val() + ' - ' + $('timer2').val(); 
$('#shw').val(working_hours); $('#modal-container-405600').modal('hide'); }
function closeTimerModal(){ 
  var working_hours=$('#timepicker').val() + ' - ' + $('#timepicker1').val(); 
  $('#shw').val(working_hours); $('#modal-container-405600').modal('hide'); } 



//pop show script

  $(document).on('click','body *',function(){
    //  $(this) = your current element that clicked.
    // additional code
  $("#modal-container-407050").css("z-index","");
    });
  function sub()
  {
    $(".owl-carousel.owl-loaded").find(".owl-item").hide();
    $("#modal-container-407050").modal("show");
    setTimeout(function () {
      console.log("owl-carousel images css");
        $(".owl-carousel.owl-loaded").find(".owl-item").show();
        }, 400);
   setTimeout(function () {
    $("#modal-container-557083").modal("show"); 
  $("#modal-container-407050").css("z-index","0");
     }, 1000);
   } 
 function opp()
  {
  $("#modal-container-407050").css("z-index","");
  }
  

 //create business popup day button css

  function setColor(e, btn, color) {
  var target = e.target,
      count = +target.dataset.count;
  
   target.style.backgroundColor = count === 1 ? "#CCCCCC" : '#4BB0E4';
   target.dataset.count = count === 1 ? 0 : 1;
}


//time picker one script

  $(document).ready(function(){
    $('#timepicker').mdtimepicker(); //Initializes the time picker
  });

 //time picker two script

  $(document).ready(function(){
    $('#timepicker1').mdtimepicker(); //Initializes the time picker
  }); 

 // script for input number not text
function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}    


 // script for phone number num limit
$("#numb").keyup(function() {
    $("#numb").val(this.value.match(/[0-9]*/));
});

// dashboard setting script for up down caret
 $('#click_advance').click(function() {
    $('#display_advance').slideToggle('150');
    $("i", this).toggleClass("fa-angle-up fa-angle-down");
   
}); 


//top header on scroll shadow script

  $(window).scroll(function() {     
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $(".top_bar").addClass("active");
    }
    else {
        $(".top_bar").removeClass("active");
    }
});


//text limit script browse task
function truncateText(selector, maxLength) {
    var element = document.querySelector(selector),
        truncated = element.innerText;

    if (truncated.length > maxLength) {
        truncated = truncated.substr(0,maxLength) + '...';
    }
    return truncated;
}

document.querySelector('#cv_u7').innerText = truncateText('#cv_u7', 120);
document.querySelector('#cv_u77').innerText = truncateText('#cv_u77', 120);
document.querySelector('#cv_u76').innerText = truncateText('#cv_u76', 120);
document.querySelector('#cv_u78').innerText = truncateText('#cv_u78', 120);
document.querySelector('#cv_u79').innerText = truncateText('#cv_u79', 120);
document.querySelector('#cv_u70').innerText = truncateText('#cv_u70', 120);
document.querySelector('#cv_u71').innerText = truncateText('#cv_u71', 120);
document.querySelector('#cv_u72').innerText = truncateText('#cv_u72', 120);
document.querySelector('#cv_u73').innerText = truncateText('#cv_u73', 120);
document.querySelector('#cv_u74').innerText = truncateText('#cv_u74', 120);




 // browse task map button, width script 

 $(document).ready(function(){
    $(window).resize(function(){
         var width = $(window).width();
		 if(width > 991){
           $(".hgh").css('width', "100%");
		   if ($('.vbg').css('display') == 'block') {   
		      $(".hgh").css('width', '50%');
               			  
			  if ($('#btn_two').css('display') != 'none') {
			     $(".vbg").addClass("ghj");
                 $(".hgh").addClass("cvd");
			  }
		   } 
		 }
		  if(width < 991){
		  if ($('.vbg').css('display') == 'block') {
			   $(".hgh").css('display', "none"); 
			   $(".col-md-6.vbg").removeClass("ghj");
               $(".col-md-6.hgh").removeClass("cvd");
		      }
             else{	
               	$('.hgh').css('display','block');
		        }
		  }
    });
});
  $(document).ready(function(){
	  
	  var width = $(window).width();
	  if(width<991){
		   
       $(".hgh").hide();
       $("#btn_show_map").hide();
       $("#btn_two").show();
	   
	 
	   }
	 
	 
	 
	    $("#btn_one").click(function(){
          
          if(width>991){
	      $(".col-md-6.hgh .col-sm-4").css('width', 'auto');
        $(".col-md-6.hgh").show();
        $(".col-md-6.vbg").addClass("ghj");
        $(".col-md-6.hgh").addClass("cvd");
		    $("#btn_hide").css("display","none");
        $("#btn_one").hide();
        $("#btn_two").show();


		  }
    });

      

     $("#btn_one").click(function(){
        
        $(".need_a_cleaner").css("padding","0px");
        $(".search_bar").css("padding","0px");
      });

      $("#btn_two").click(function(){
	   var width = $(window).width();
       if(width>991){
		   $(".col-md-6.hgh .col-sm-4").css('width', '50%');
       $(".col-md-6.hgh").removeClass("cvd");
       $(".col-md-6.vbg").removeClass("ghj");
	     $("#btn_hide").show();
       $("#btn_two").hide();
       $("#btn_one").show();

	   }

    });
	   
	   	 
	      $("#btn_two").click(function(){
          var width = $(window).width();
          if(width<991){
			 
        $(".col-md-6.vbg").hide();
        $(".col-md-6.hgh").show();
        $("#btn_one").hide();
        //$("#btn_two").show();
        $("#btn_show_map").css("display","block");
        $(".col-md-6.hgh .col-sm-4").css("width","33%");
        
       }
      });
   
          $("#btn_show_map").click(function(){
          var width = $(window).width();
          if(width<991){
          //$("#btn_hide").hide();
		   $(".hgh").hide();
          $("#btn_two").show();
          $(".col-md-6 vbg").show();
    
     }
    });

          //map hide button and map show script
        $("#btn_hide").click(function(){
        $(".vbg").hide();
        $(".hgh").css("width","100%");
        $(".col-md-6.hgh .col-sm-4").css("width","33%");
        $("#btn_hide").css("display","none");
        $("#btn_one").css("display","none");
        $(".bhn.show_map button").css("display","block");
        $(".need_a_cleaner").css("padding","0px 60px");
        $(".search_bar").css("padding","0 60px");

        

        });

        $(".bhn.show_map button").click(function(){
        $(".vbg").show();
        $(".hgh").css("width","50%");
        $(".col-md-6.hgh .col-sm-4").css('width', '50%');
        $("#btn_hide").css("display","block");
        $("#btn_one").css("display","block");
        $(".bhn.show_map button").css("display","none");
        $(".need_a_cleaner").css("padding","0px");
        $(".search_bar").css("padding","0px");
        });

        //end map hide button and map show script

        	 
              
        	  
           
        });



//create popup location map script

  // This example displays an address form, using the autocomplete feature
      // of the Google Places API to help users fill in the information.

      // This example requires the Places library. Include the libraries=places
      // parameter when you first load the API. For example:
      // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

      var placeSearch, autocomplete;
     var componentForm = {
        street_number: 'short_name',
        route: 'long_name',
        locality: 'long_name',
        administrative_area_level_1: 'short_name',
        country: 'long_name',
        postal_code: 'short_name'
      };

      function initAutocomplete() {
        // Create the autocomplete object, restricting the search to geographical
        // location types.
        autocomplete = new google.maps.places.Autocomplete(
            /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')));

        // When the user selects an address from the dropdown, populate the address
        // fields in the form.
        autocomplete.addListener('place_changed', fillInAddress);
      }

      function fillInAddress() {
        // Get the place details from the autocomplete object.
        var place = autocomplete.getPlace();

        for (var component in componentForm) {
          document.getElementById(component).value = '';
          document.getElementById(component).disabled = false;
        }

        // Get each component of the address from the place details
        // and fill the corresponding field on the form.
        for (var i = 0; i < place.address_components.length; i++) {
          var addressType = place.address_components[i].types[0];
          if (componentForm[addressType]) {
            var val = place.address_components[i][componentForm[addressType]];
            document.getElementById(addressType).value = val;
          }
        }
      }

      // Bias the autocomplete object to the user's geographical location,
      // as supplied by the browser's 'navigator.geolocation' object.
      function geolocate() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var geolocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            var circle = new google.maps.Circle({
              center: geolocation,
              radius: position.coords.accuracy
            });
            autocomplete.setBounds(circle.getBounds());
          });
        }
      }






