(function() {
    'use strict';

    angular
        .module('app')
        .controller('TeacherGridController', TeacherGridController);

    TeacherGridController.$inject = ['teacherFactory','toastr'];

    /* @ngInject */
    function TeacherGridController(teacherFactory,toastr) {
        var vm = this;
        vm.title = 'TeacherGridController';

        vm.teachers = [];

        vm.removeTeacher = removeTeacher;

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

        function removeTeacher(teacher) {
            teacherFactory
                .removeTeacher(teacher.teacherId)
                .then(function(response) {
                    var index = vm.teachers.indexOf(teacher);
                    vm.teachers.splice(index, 1);
                    console.log("successful deletion");
                    //toastr.success("Delete successful");
                })
                .catch(function(error) {
                    console.log("failed deletion");
                    //toastr.error("(idiot), Delete NOT successful");
                })
        }
    }
})();