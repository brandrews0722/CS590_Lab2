//var NewsApp = angular.module('NewsApp', []);


angular.module('NewsApp')
    .controller('NewsAppController', ['$scope', '$http', '$window', function ($scope, $http, $window) {
        var baseUrl = "http://newsapi.org/v2/everything?";
        var apiKey = "&apiKey=648a6fdc6855460eaf511dc5bf3b6b42";
        $scope.showNews = false;

        $scope.openArticle = function (url) {
            $window.open(url, '_blank');
        }

        $scope.getNews = function () {

            var inputs = document.getElementsByClassName("newsInputs");
            var searchTerm = inputs[0].value;
            var sourceTerm = inputs[1].value;

            var url = createUrl(searchTerm, sourceTerm);

            if (url == "")
                return;

            /*$.ajax({
                 type: "GET",
                 dataType: 'json',
                 url: url
             }).done(function (data) {
                 $scope.news  = data.articles;
             })
     */
            $http.get(url)
                .then(function (response) {
                    $scope.news = [];
                    $scope.showNews = true;
                    $scope.news = response.data.articles;
                });
        }


        var createUrl = function (search, source) {
            var searchTermHasValue = search != null && search != "";
            var sourceTermHasValue = source != null && source != "";
            var tempUrl = "";
            var sourceUrl = "http://newsapi.org/v2/sources?";

            if (sourceTermHasValue && searchTermHasValue) {
                tempUrl = baseUrl + "q=" + search + "&" + "sources=" + source + apiKey;
            }
            else if (sourceTermHasValue) {
                tempUrl = baseUrl + "sources=" + source + apiKey;
            }
            else if (searchTermHasValue) {
                tempUrl = baseUrl + "q=" + search + apiKey;
            }

            return tempUrl;
        };


    }]);