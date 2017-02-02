$(function() {
    $("#search").on("click", function() {
    	var searchTerm = $("#searchTerm").val();
		var url = "https://itunes.apple.com/search?limit=10&term="+ searchTerm;
		$.ajax({
			url: url,
			type: 'get',
			contentType: "jsonp",
			async: false,
        	dataType: "jsonp",
        	success: function(data, status, jqXHL) {
            console.log(data);
            }
          })
      .done(function() {
        console.log("success");
      })
      .fail(function() {
        console.log("error");
      })
      .always(function() {
        console.log("complete");
    });
  });
});
