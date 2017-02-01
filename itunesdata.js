$(function() {
  $("#search").on("click", function() {
    var searchTerm = $("#searchTerm").val();
    var url = "https://itunes.apple.com/search?term="+ searchTerm +"&format=json&callback=?";
    $.ajax({
      url: url,
      type:'GET',
      dataType: 'json',
      data: function(data, status, jqXHR) {
        console.log(data)
      },
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
