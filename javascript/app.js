// key be69431c492a4ed5ac4fc06c5f62ac03

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var searchTerm;

url += '?' + $.param({
  'api-key': "be69431c492a4ed5ac4fc06c5f62ac03",
  'q': searchTerm
});
$.ajax({
  url: url,
  method: 'GET',
}).then(function(result) {
  console.log(result);
  console.log(result.response.docs[2].headline);
}).fail(function(err) {
  throw err;
});