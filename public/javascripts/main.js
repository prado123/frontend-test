// your code

// JSON TO JQUERY
$(document).ready( function() {
 $.getJSON("fazenda.json", function(data){
       $.each(data.data, function(){
	         $("#ranking").append("<ul class='list-group-item'><li><figure><div class='round-container'><img src='"+this['picture']+"'></div></figure></li><li><strong>"+this['name']+"</strong></li><li><p>"+this['description']+"</p></li><li><table class='votacao'><span class='seta'></span><tr><td><b>Gostam</b></td><td><b>Não Gostam</b></td></tr><tr><td><span>"+this['positive']+"</span></td><td><span>"+this['negative']+"</span></td></tr></table></li></ul>");   
 	   });
 });
});
