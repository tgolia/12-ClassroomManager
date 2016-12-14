(function() {
    'use strict';

    angular
        .module('app')
        .controller('TeacherGridController', TeacherGridController);

    TeacherGridController.$inject = ['teacherFactory','$stateParams'];

    /* @ngInject */
    function TeacherGridController(teacherFactory,$stateParams) {
        var vm = this;
        vm.title = 'TeacherGridController';

        vm.teachers = [];

        activate();

        ////////////////

        function activate() {
            teacherFactory
                .getTeachers()
                .then(function(response) {
                    vm.teachers = response.data;
                    console.log(vm.teachers)
                });
        }
    }
})();