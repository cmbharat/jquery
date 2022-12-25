// $("#para1").html("<h1>using jsquery</h1>");
$("#para1").html("<h1>using jsquery</h1>");
$("#para2").css({
  color: "red",
  fontSize: "100px",
});

$("body").css("backgroundColor", "red");

// $("div").css({
//   width: "100px",
//   height: "100px",
//   backgroundColor: "cyan",
// });

$("#btn").click(fetchResults);

function fetchResults() {
  var xhrRequests = new XMLHttpRequest();

  xhrRequests.onload = function () {
    console.log(xhrRequests.response);
    var responseJson = JSON.parse(xhrRequests.response);
    var imageUrl = responseJson.message;
    $("#dog-image").attr("src", imageUrl);
  };
  xhrRequests.open("get", "https://dog.ceo/api/breeds/image/random", true);
  xhrRequests.send();
}
