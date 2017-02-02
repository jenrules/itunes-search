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
        	success: function(songs) {
            $("#output").html();
        		for (var i = 0; i < songs.results.length; i++){
        			$("#output").prepend("<div><div class='well'><a href=" + songs.results[i] + "><h2>" + songs.results[i].trackName + "</h2>" + " <p>" + songs.results[i].artistName + "</p> </a></div></div>");
            }
          }
       })
    });
  });
