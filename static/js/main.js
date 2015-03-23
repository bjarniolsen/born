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
    	// so we fix that with reverse method of Array.
    	var prevLabels = Array.prototype.reverse.call( $(element).prevAll("label").slice(0, 2) );

    	var newLabels = [];

    	// Loop labels - get children name attributes
    	// Clone labels and give them new attributes
    	for (var i=0; i<prevLabels.length; i++) {
    		var attribute = $(prevLabels[i]).children("[name]").attr("name");
			var newLabel = $(prevLabels[i]).clone().addClass("new-person");

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

			// push new label elements into this, so we can remove them later
			newLabels.push(newLabel);

            // revalidate form
    		validate($("form"), true);
    	}

		// Add a delete link before ADD PERSON link
		var deleteLink = $('<a href="#" class="delete-person new-person">Fjern igen</a>').on("click", function(event) {
			event.preventDefault();
			// loop and remove newly created label elements
			$.each(newLabels, function(i, item) {
				item.remove();
			});
			// ...and remove DELETE link again
			$(event.target).remove();
		}).insertBefore(element);
    }

    function expandGroup(element) {
    	var parentElement = $(element).parent();

    	parentElement.next(".form-group").find("input, select, a").each(function() {
    		if ($(element).is(":checked")) {
    			if ($(this).is("input")) {
    				// support < IE9
    				var that = $(this);
    				setTimeout(function() {
    					that.focus().removeClass("error");
    				}, 0);
    			}
    			if ($(this).hasClass("add-person") || $(this).hasClass("delete-person")) {
    				$(this).removeAttr("tabindex");
    			} else {
    				$(this).prop("disabled", false);
    			}
    			parentElement.addClass("selected");
    		} else {
    			$(element).parent().removeClass("selected");
    			if ($(this).hasClass("add-person") || $(this).hasClass("delete-person")) {
    				$(this).attr("tabindex", -1);
    			} else {
    				$(this).prop("disabled", true);
    			}
    		}
    	});

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

	function galleryHandler(gallery) {
		var imageLink = $(gallery).find("a.image-wrap"),
			image = imageLink.find("img"),
			thumbs = $(gallery).find(".thumbs a");

		$.each(thumbs, function(index, link) {
			$(this).on("click", function(event) {
				event.preventDefault();
				image[0].src = link.href;
				imageLink[0].href = link.href.replace(/MEDIUM/g, "LARGE");
			});
		});

		imageLink.on("click", function(event) {
			event.preventDefault();
			imageLink.href = image[0].src;
			$("body").append('<div class="modal"><span class="close">Luk</span><img src="' + imageLink[0].href + '"/></div><div class="overlay"></div>');
			var modal = $(".modal").css("top", $(window).scrollTop() + 30),
				overlay = $(".overlay").height($("body").height());
			modal.find(".close").on("click", function(event) {
				modal.remove();
				overlay.remove();
			});
		});
	}

    return {
        init: function() {
        	// cache dom
        	var $form = $("form"),
				checkboxes = $form.find('input[type="checkbox"]'),
				formGroups = $form.find(".form-group"),
				addPersonLink = formGroups.find(".add-person"),
				errorMessageBox = $(".error-message"),
				galleries = $(".gallery");

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

        	// gallery
        	$.each(galleries, function(index, gallery) {
        		galleryHandler(gallery);
        	});
        }
	};
})(window, document, jQuery, S);

S.Workshop.init();
