(function() {
    'use strict';

    angular
        .module('app')
        .controller('StudentDetailController', StudentDetailController);

    StudentDetailController.$inject = ['$stateParams','studentFactory'];

    /* @ngInject */
    function StudentDetailController($stateParams,studentFactory) {
        var vm = this;
        vm.title = 'StudentDetailController';

        vm.studentId = $stateParams.id;
        vm.currentStudent = [];
        vm.updateStudent = updateStudent;
        vm.isNewStudent = true;
        vm.createStudent = createStudent;

        activate();

        ////////////////

        function activate() {
            if (vm.studentId != null) {
                vm.newStudent = false;
                studentFactory
                    .getStudent(vm.studentId)
                    .then(function(response) {
                        vm.currentStudent = response.data;
                        console.log(vm.currentStudent);
                });
            } else {
                console.log("Add new student");
            }
        }

        function updateStudent(id, student) {
            studentFactory
                .updateStudent(id, student)
                .then(function(response) {
                    console.log("success");
                    //toastr.success("Save successful");
                })
                .catch(function(error) {
                    console.log("fail");
                    //toastr.error("Save NOT successful");
                })
        }

        function createStudent(student) {
            studentFactory
                .createStudent(student)
                .then(function(response) {
                    vm.newStudent = {};
                    console.log("successful add");
                    //toastr.success("Add successful");
                })
                .catch(function(error) {
                    console.log("add fail");
                    //toastr.error("Add NOT successful");
                });
        }
    }
})();