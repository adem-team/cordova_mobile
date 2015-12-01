$(function()
{ //Sama jika menggunakan $(document).ready(function(){
 
	 $("#check-all").click(function()
	 {
	 
	    if ( (this).checked == true )
	    {
	 
	       $('.checkbox-all').prop('checked', true);
	 
	    } 
	    else 
	    {
	 
	       $('.checkbox-all').prop('checked', false);
	 
	    }
	 
	 });
 
});