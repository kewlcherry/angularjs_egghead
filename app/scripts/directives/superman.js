'use strict';

angular.module('angularjsApp')
  .directive('superman', function () {
    return {
      restrict: 'A',
      link: function(){
	alert("I'm working stronger")
      }
    };
  });
