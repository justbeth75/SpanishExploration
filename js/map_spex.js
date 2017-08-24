// JavaScript Document


<!--this is the code for the sliding callout panels-->
<!--need to determine how to get an open slider to close-->

<script type="text/javascript">
	$(document).ready(function(){
	    $(".triggerblue").click(function(){
	        $(".panel_01").toggle("fast");
        	$(this).toggleClass("active");
	        return false;
		});
	});
	$(document).ready(function(){
	    $(".triggerpurple").click(function(){
	        $(".panel_02").toggle("fast");
        	$(this).toggleClass("active");
	        return false;
	    });
	});
	$(document).ready(function(){
	    $(".triggergreen").click(function(){
	        $(".panel_03").toggle("fast");
        	$(this).toggleClass("active");
	        return false;
	    });
	});
	$(document).ready(function(){
	    $(".triggerred").click(function(){
	        $(".panel_04").toggle("fast");
        	$(this).toggleClass("active");
	        return false;
	    });
	});
	$(document).ready(function(){
	    $(".triggerorange").click(function(){
	        $(".panel_05").toggle("fast");
        	$(this).toggleClass("active");
	        return false;
	    });
	});
</script>

<!--script to toggle the spanish claimed lands map when btn in legend is clicked-->
<script type="text/javascript">
	$(document).ready(function(){
	    $(".triggerlands").click(function(){
	        $("#claimedMap").toggle("slow");
        	$(this).toggleClass("active");
	        return false;
	    });
	});
</script>
