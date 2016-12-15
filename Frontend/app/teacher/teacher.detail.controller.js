(function() {
    'use strict';

    angular
        .module('app')
        .controller('TeacherDetailController', TeacherDetailController);

    TeacherDetailController.$inject = ['$stateParams','teacherFactory'];

    /* @ngInject */
    function TeacherDetailController($stateParams,teacherFactory) {
        var vm = this;
        vm.title = 'TeacherDetailController';

        vm.teacherId = $stateParams.id;
        vm.currentTeacher = [];
        vm.updateTeacher = updateTeacher;
        vm.isNewTeacher = true;
        vm.createTeacher = createTeacher;

        activate();

        ////////////////

        function activate() {
            if (vm.teacherId != null) {
                vm.isNewTeacher = false;
                console.log("Edit existing teacher");
                teacherFactory
                    .getTeacher(vm.teacherId)
                    .then(function(response) {
                        vm.currentTeacher = response.data;
                        console.log(vm.currentTeacher);
                });
            } else {
                console.log("Add new teacher");
            }
        }

        function updateTeacher(id, teacher) {
            teacherFactory
                .updateTeacher(id, teacher)
                .then(function(response) {
                    console.log("teacher updated");
                    //toastr.success("Save successful");
                })
                .catch(function(error) {
                    console.log("teacher not updated");
                    //toastr.error("Save NOT successful");
                })
        }

        function createTeacher(teacher) {
            teacherFactory
                .createTeacher(teacher)
                .then(function(response) {
                    vm.newTeacher = {};
                    console.log("successful teacher add");
                    //toastr.success("Add successful");
                })
                .catch(function(error) {
                    console.log("teacher add fail");
                    //toastr.error("Add NOT successful");
                });
        }
    }
})();