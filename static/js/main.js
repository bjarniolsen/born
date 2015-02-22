var S = S || {};

S.Workshop = (function(win, doc, $) {

    function submitHandler(form) {
		// get array of posted values
		$.ajax({
			url: "subscribe.php",
			type: "POST",
			data: form.serializeArray(),
			success: function(res) {
				console.log(res);
			},
			error: function(xhr, thrownError) {
				console.log(xhr.responseText, thrownError);
			}
		});
    }

    function addPerson(element) {
    	console.log(element);
    }

    function expandGroup(element) {
    	if ($(element).is(":checked")) {
    		$(element).parent().addClass("selected");
    	} else {
    		$(element).parent().removeClass("selected");
    	}
    }

    return {
        init: function() {
        	// cache dom
        	var $form = $("form"),
				checkboxes = $form.find('input[type="checkbox"]'),
				addPersonLink = $form.find(".add-person");

        	// set up events
        	$form.on("submit", function(event) {
				event.preventDefault();
        		submitHandler($form);
        	});
        	checkboxes.on("click", function(event) {
        		expandGroup(this);
        	});
        	addPersonLink.on("click", function(event) {
        		addPerson(this);
        	});
        }
	};
})(window, document, jQuery, S);

S.Workshop.init();
