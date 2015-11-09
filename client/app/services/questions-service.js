angular.module('knowitall.services.questions', [])
.service('QuestionsService', function ($http, $q) {
  var service = this;
  var questions;

  service.addNewQuestion = function (question) {
    return $http({
      method: 'POST',
      url: '/api/questions',
      data: question
    });
  };

  service.showAllQuestions = function () {
    return $http({
      method: 'GET',
      url: 'api/questions'
    })
    .then(function (resp) {
      return resp.data;
    });
  };

});