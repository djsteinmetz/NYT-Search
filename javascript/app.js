// key be69431c492a4ed5ac4fc06c5f62ac03

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var searchTerm;

$(".btn").on("click", function() {
  searchTerm = $("#exampleFormControlInput1").val();
  console.log(searchTerm);

  url += '?' + $.param({
    'api-key': "be69431c492a4ed5ac4fc06c5f62ac03",
    'q': searchTerm
  });
  $.ajax({
    url: url,
    method: 'GET',
  }).then(function(result) {
    console.log(result);
    // for(var i = 0; i>5; i++) {
      console.log(result.response.docs[1].headline.main);
      var searchResult = result.response.docs[1].headline.main;
      console.log(searchResult);
      var resultsDiv = $("<div style='margin: 20px;'>");
      
      $("body").append(resultsDiv);
      resultsDiv.html("Results: " + searchResult);
    // }
  }).fail(function(err) {
    throw err;
  });
})

