$(document).ready(function (){
   //########################################################################### 
   var me={
     name:"Manish Sharma" ,
     tagline:"Senior App Developer",
     img_src:'assets/images/manish-sharma.jpg',
     img_alt:'Manish Sharma',
     email:'mansha99@gmail.com',
     contact:'+91 9893 407 889',
     website:'mansha99.github.io',
     linked:'manish-sharma-017708b',
     github:'mansha99.github.io',
     twitter:'mansha99'
     
   };
   populateMe(me);
   //########################################################################### 
});
function populateMe(me){
    $("#me_name").html(me.name);
    $("#me_tagline").html(me.tagline);
    $("#me_img").attr("src",me.img_src);
    $("#me_img").attr("alt",me.img_alt);
    $("#me_email").attr("href","mailto:"+me.email);
    $("#me_email").html(me.email);
    $("#me_contact").attr("href","tel:"+me.contact);
    $("#me_contact").html(me.contact);
    $("#me_website").html(me.website);
    $("#me_website").attr("href","http://"+me.website);
    $("#me_linked").html(me.linked);
    $("#me_linked").attr("href","https://in.linkedin.com/in/"+me.linked);
    $("#me_github").html(me.github);
    $("#me_github").attr("href","http://"+me.github);
    $("#me_twitter").html(me.twitter);
    $("#me_twitter").attr("href","https://twitter.com/"+me.twitter);
    
}