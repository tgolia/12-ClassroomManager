(function() {
    'use strict';

    angular
        .module('app')
        .controller('StudentDetailController', StudentDetailController);

    StudentDetailController.$inject = ['$stateParams'];

    /* @ngInject */
    function StudentDetailController($stateParams) {
        var vm = this;
        vm.title = 'StudentDetailController';

        vm.studentId = $stateParams.id;

        activate();

        ////////////////

        function activate() {
        }
    }
})();