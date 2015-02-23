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
				$(form).addClass("hide");
				$(".thank-you").removeClass("hide");
			},
			error: function(xhr, thrownError) {
				console.log(xhr.responseText, thrownError);
			}
		});
    }

    function addPerson(element) {
    	// Get the preceding sibling LABELS - slice limits to 2
    	// Jquery reverses the returned elements,
    	// so we fix that with reverse method og Array.
    	var prevLabels = Array.prototype.reverse.call( $(element).prevAll("label").slice(0, 2) );

    	// Loop labels - get children name attributes
    	// Clone labels and give them new attributes
    	for (var i=0; i<prevLabels.length; i++) {
    		var attribute = $(prevLabels[i]).children("[name]").attr("name");
			var newLabel = $(prevLabels[i]).clone();

			var getNumbers = attribute.match(/\d+/g);
			var getLastNumber = getNumbers[getNumbers.length-1];
			// Increment number
			getLastNumber++;
			// Find second number in attribute string 'workshop[0][0]xxx'
			// and replace it with the new incremented number
    		var newAttribute = attribute.replace(/^(.*\[[0-9]+\].*)(\[[0-9]+\])(.*)$/, '$1[' + getLastNumber + ']$3');
    		// Add the new attribute to the cloned label child
            var child = newLabel.children("[name]").attr("name", newAttribute).val("");
            
    		// Add new label right before the ADD PERSON link.
			$(element).before(newLabel);
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

        	// set up events
        	$form.on("submit", function(event) {
				event.preventDefault();
        		submitHandler($form);
        	});
        	checkboxes.on("click", function(event) {
        		expandGroup(this);
        	});
        	addPersonLink.on("click", function(event) {
        		event.preventDefault();
        		addPerson(this);
        	});
        }
	};
})(window, document, jQuery, S);

S.Workshop.init();
