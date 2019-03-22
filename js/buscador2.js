var consulta = $("#searchTable").DataTable();

$("#inputBusqueda").keyup(function(){
	consulta.search($(this).val()).draw();

	$("header").css({
		"height": "100vh",
		"background": "rgba(21,113,68,.5)",
	})

	if ($("#inputBusqueda").val() == ""){
		$("header").css({
			"height": "auto",
			"background": "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiP…dpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==),#68b468",
		    "background": "-moz-linear-gradient(315deg, #58b28d, #79b743),#68b468",
		    "background-image": "linear-gradient(135deg, rgb(88, 178, 141), rgb(121, 183, 67)), initial",
		    "background-position-x":" initial, initial",
		    "background-position-y": "initial, initial",
		    "background-size": "initial, initial",
		    "background-repeat-x": "initial, initial",
		    "background-repeat-y": "initial, initial",
		    "background-attachment": "initial, initial",
		    "background-origin": "initial, initial",
		    "background-clip": "initial, initial",
		    "background-color": "rgb(104, 180, 104)",
		    "background": "-webkit-linear-gradient(315deg, #58b28d, #79b743),#68b468",
		    "background": "linear-gradient(135deg, #58b28d, #79b743),#68b468",
		})

		$("#search").hide()

	} else {
		$("#search").fadeIn("fast");
		$(document).click(function(){
				$('header').css({
				"height": "auto",
				"background": "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiP…dpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==),#68b468",
			    "background": "-moz-linear-gradient(315deg, #58b28d, #79b743),#68b468",
			    "background-image": "linear-gradient(135deg, rgb(88, 178, 141), rgb(121, 183, 67)), initial",
			    "background-position-x":" initial, initial",
			    "background-position-y": "initial, initial",
			    "background-size": "initial, initial",
			    "background-repeat-x": "initial, initial",
			    "background-repeat-y": "initial, initial",
			    "background-attachment": "initial, initial",
			    "background-origin": "initial, initial",
			    "background-clip": "initial, initial",
			    "background-color": "rgb(104, 180, 104)",
			    "background": "-webkit-linear-gradient(315deg, #58b28d, #79b743),#68b468",
			    "background": "linear-gradient(135deg, #58b28d, #79b743),#68b468",
			   
			});
			$("#search").hide()
		});
	}

})