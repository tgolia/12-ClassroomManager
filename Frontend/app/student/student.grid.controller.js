(function() {
    'use strict';

    angular
        .module('app')
        .controller('StudentGridController', StudentGridController);

    StudentGridController.$inject = ['studentFactory','$stateParams'];

    /* @ngInject */
    function StudentGridController(studentFactory, $stateParams) {
        var vm = this;
        vm.title = 'StudentGridController';

        vm.students = [];

        activate();

        ////////////////

               function activate() {
            studentFactory
                .getStudents()
                .then(function(response) {
                    vm.students = response.data;
                    console.log(vm.students);
                });
        }
    }
})();