var S = S || {};

S.Workshop = (function(win, doc, $) {

    function submitHandler(form) {
		// get array of posted values
		$.ajax({
			url: "subscribe.php",
			type: "POST",
			data: form.serializeArray(),
			success: function(res) {
				$(form).addClass("hide");
				if (res === "error") {
					$(".error-message").removeClass("hide");
				} else {
					$(".thank-you").removeClass("hide").find("p").html(res.split("\n").join("<br />"));
				}
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

            // revalidate form
    		validate($("form"), true);
    	}
    }

    function expandGroup(element) {
    	if ($(element).is(":checked")) {
    		var parentElement = $(element).parent();
    		parentElement.next(".form-group").find("input, select, a").each(function() {
    			if ($(this).is("input")) {
    				setTimeout(function() {
    					$(this).focus().removeClass("error");
    				}.bind($(this)), 0);
    			}
    			if ($(this).hasClass("add-person")) {
    				$(this).removeAttr("tabindex");
    			} else {
    				$(this).prop("disabled", false);
    			}
    		});
    		parentElement.addClass("selected");
    	} else {
    		$(element).parent().removeClass("selected");
    	}

        // revalidate form
    	validate($("form"), true);
    }

    function validate(form, checkFields) {
		$(form).find("input").each(function() {
			if(checkFields) {
				if($(this).val() === "") {
					$(this).addClass("error").attr("placeholder", "Udfyld venligst dette felt");
    				//$(form).find('input[type="submit"]').prop("disabled", true).addClass("disabled");
				} else {
					$(this).removeClass("error");
    				//$(form).find('input[type="submit"]').prop("disabled", false).removeClass("disabled");
				}
			}
			$(this).on("blur", function() {
				if($(this).val() === "") {
					$(this).addClass("error").attr("placeholder", "Udfyld venligst dette felt");
    				//$(form).find('input[type="submit"]').prop("disabled", false).addClass("disabled");
				} else {
					$(this).removeClass("error");
				}
			}).on("keyup", function() {
				if($(this).val() !== "") {
					$(this).removeClass("error");
    				//$(form).find('input[type="submit"]').prop("disabled", true).removeClass("disabled");
				}
			});
		});
    }

	function errorBox(errorMessageBox, form) {
		errorMessageBox.addClass("hide");
		form.removeClass("hide");
	}

    return {
        init: function() {
        	// cache dom
        	var $form = $("form"),
				checkboxes = $form.find('input[type="checkbox"]'),
				formGroups = $form.find(".form-group"),
				addPersonLink = formGroups.find(".add-person"),
				errorMessageBox = $(".error-message");

			// set up validation on form fields
			validate($form, false);

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
        	errorMessageBox.find("button").on("click", function(event) {
        		event.preventDefault();
        		errorBox(errorMessageBox, $form);
        	});
        }
	};
})(window, document, jQuery, S);

S.Workshop.init();
