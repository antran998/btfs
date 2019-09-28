$(document).ready( function () {
	var heightT = 220;
    $('.member--tab,#invest--tab,.wallet--tab').DataTable({
    	responsive: true,
	  	searching: false, 
	  	paging: false, 
	  	info: false,
	  	scrollY: heightT,
    	scroller: true,
    	order: [[2, 'asc']],
   		columnDefs: [{
	      	targets: "_all",
	      	orderable: false
   		}]
    });   
});