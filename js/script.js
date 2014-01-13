/*
 ******* Resizers
 */
resizers = function (){
    //get life-block width
    wid_life_block = $(".life-block").width();
    
    $('.life-sphere').css({'width' : wid_life_block + "px"});
    $('.life-sphere').css({'height' : wid_life_block + "px"});
    
};
$(window).resize(function(){
    resizers();
});




/*
 ******** / Resizers
 */

/*
 ******** Animate Background
 */
$(document).ready(function(){ //Start Ready Function
    resizers();
        animate_bg  = function (){
        $('.animate-bg').animate({'background-position':'+=10%'}, 10000, 'linear' , function (){animate_bg();});
        };
        
        animate_bg();
        
        
/*
 ******** / Animate Background
 */

/*
 ******** Apply Cufon font
 */
Cufon.replace('.rezland_logotype_font', { fontFamily: 'Rezland Logotype Font', hover: true }); 
Cufon.replace('.vag_handwritten', { fontFamily: 'VAG-HandWritten', hover: true }); 
/*
 ******** / Apply Cufon font
 */
 
/*
 ******** Add sound 
 */
    $.ionSound({
    sounds: [                       // set needed sounds names
        "beer_can_opening",
        "bell_ring:0.3",            // :0.3 - individual volume
        "branch_break",
        "metal_plate",
        "pop_cork:0.8",             // :0.8 - individual volume
        "staple_gun",
        "button_click",
        "ambient_sci_fi_loop_5",
        "button_tiny",
        "water_droplet:0.4"         // :0.4 - individual volume
    ],
    path: "sounds/",                // set path to sounds
    multiPlay: true,               // playing only 1 sound at once
    volume: "0.5"
    
});
/*
 ******** / Sounds
 */

/*
 ******** Animate Top panel
 */
count_awesome = 0;
$("#projects").mouseover(function (){
    $.ionSound.play("ambient_sci_fi_loop_5");
});
$("#awesomeness").mouseover(function (){
    $.ionSound.play("button_tiny");
});
$("#awesomeness").click(function (){
    
    
    if(count_awesome ===1){ //collapse the panel
        $.ionSound.play("button_click");
    $("#awesomepanel").animate({'height': '0px'},function(){count_awesome = 0;});
    }else{
    $.ionSound.play("button_click");    
    $("#awesomepanel").animate({'height': '200px'},function(){count_awesome = 1;});
    }
    
});
/*
******** / Top Panel
 */
 
 /*
******** Block and Sphere Animation
  */
  
$(".life-sphere").on('click',function asp(){
$(".life-sphere").unbind("click",asp);//Unbind click from other sphere elements
 a = $(this);
 b = $('.life-block-root').not(this);

function tosphere(arg_lb){
    //
    arg_lb.addClass('life-sphere',1000,function(){
        resizers(); //call resizers to resize the spheres
        arg_lb.removeClass('life-block-root',1000); //remove class
    });//add class
}

function toblock(arg_ls){
    $('.animate-bg').stop();
    tosphere(b);
    arg_ls.removeClass('life-sphere',1000,function(){ // removes class from the sphere
        
        arg_ls.addClass('life-block-root',1000,function(){
            
            $('.life-block-root').animate({'height' : '100%'},function(){//this function loads data after animation completes
                $(".wrap-circle").load("ajax.html");
            }); //animate block height
                    setTimeout(function(){$(".life-sphere").bind("click",asp);},1000); //rebind the event to spheres
            animate_bg();
        }); //add class
    
    });//remove class
}
toblock(a); //this function initiates the transformation 
});

/*
******** / Block and Sphere
 */
 
 /*
 ******** Load Data in div
 */
 


 /*
 ********
 */
 });//Document Ready Function Ends H