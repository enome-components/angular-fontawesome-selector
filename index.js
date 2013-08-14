var icons = require('./icons');

var mod = window.angular.module('angular-fontawesome-selector', []);

mod.directive('fontawesomeSelector', function () {

  return {
    restrict: 'E',
    template: require('./template'),
    scope: { selected: '=' },
    link: function (scope, element, attributes) {

      /* Scroll to item */

      if (scope.selected) {
        var icons = require('./icons');

        var i;

        for (i = 0; i < icons.length; i += 1) {
          if (scope.selected === icons[i].id) {
            break;
          }
        }

        var row = parseInt(i / 10, 10);
        var top = row * 36;

        setTimeout(function () {
          element.find('ul')[0].scrollTop = top - 200;
        }, 100);
      }


    },
    controller: function ($scope) {

      var icons = require('./icons');
      $scope.search = '';
      $scope.icons = [];

      $scope.select = function (icon) {
        $scope.selected = $scope.selected === icon.id ? '' : icon.id;
      };

      $scope.css = function (icon) {
        return icon.id === $scope.selected ? 'selected' : '';
      };

      $scope.$watch('search', function (v) {

        var i;
        var re = new RegExp(v + '.*');

        $scope.icons.length = 0;

        for (i = 0; i < icons.length; i += 1) {
          if (re.test(icons[i].id)) {
            $scope.icons.push(icons[i]);
          }
        }

      });

    }
  };

});

module.exports = 'angular-fontawesome-selector';
