var S = S || {};

S.Workshop = (function(win, doc, $) {

    function submitHandler(form) {
		// get array of posted values
		console.log(form.serializeArray());
    }

    function addPerson(element) {
    	console.log(element);
    }

    function expandGroup(element) {
    	console.log(element);
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
