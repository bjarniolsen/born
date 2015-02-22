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

    function prepareLabels(formGroups) {
		$.each(formGroups, function(index, group) {
			var name = $(group).find("label").children("[name]").attr("name");
			console.log(group, name);
		});
    }

    function addPerson(element) {
    	var workshopID = $(element).parent().attr("id");
    	for (var i=0; i<labels.length; i++) {
    		var name = $(labels[i]).children("[name]").attr("name");
    	}
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
				formGroups = $form.find(".form-group"),
				addPersonLink = formGroups.find(".add-person");

			prepareLabels(formGroups);

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
