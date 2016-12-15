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

        vm.removeStudent = removeStudent;

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

        function removeStudent(student) {
            studentFactory
                .removeStudent(student.studentId)
                .then(function(response) {
                    var index = vm.students.indexOf(student);
                    vm.students.splice(index, 1);
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