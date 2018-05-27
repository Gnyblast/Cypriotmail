$(document).ready(function(){
  var tremble = 0;
  var w_width = $('body').width();
  var w_height = $('body').height();

if(w_width > 550){
  var nw = w_width/100;
  nw = Math.floor(nw);
  var nh = w_height/100;
  nh = Math.floor(nh);
  var nwm = (w_width%100);
  var nhm = (w_height%100);
  nwm = ((nwm+100)/(nw-1))/2;
  nhm = ((nhm+100)/(nh-1))/2;
  var n = (nh-1)*(nw-1);
  n = Math.floor(n);
} else {
	var nw = w_width/50;
  	nw = Math.floor(nw);
  	var nh = w_height/50;
  	nh = Math.floor(nh);
  	var nwm = (w_width%50);
  	var nhm = (w_height%50);
  	nwm = ((nwm+50)/(nw-1))/2;
  	nhm = ((nhm+60)/(nh-2))/2;
  	var n = (nh-2)*(nw-1);
  	n = Math.floor(n);
}
  for(x=0; x<n; x++){
    var n_element = document.createElement('div');
    if(tremble == 0){
    $(n_element).attr('class','effect');
      tremble = 1;
    } else {
      $(n_element).attr('class','effect2');
      tremble = 0;
    }
    $(n_element).css({'margin':nhm+'px'+' '+nwm+'px'+' '+nhm+'px'+' '+nwm+'px'});
    $('body').append(n_element);
  }
  
  $('.inputsubmit').click(function(e){
	e.preventDefault();
	$.ajax({
		url:"/php/submit_form.php",
		type:"POST",
		data:$('form').serialize(),
		success: function(data){
			$('#resp').slideDown();
			$('#resp').text(data);
			if(data === "Form submitted"){
			$('form').trigger('reset');
			}
			setTimeout(function(){
				$('#resp').slideUp();
			},3000);
		}
	});
  });
  
});