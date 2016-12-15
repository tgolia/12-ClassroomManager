(function() {
    'use strict';

    angular
        .module('app')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['classFactory','studentFactory','teacherFactory'];

    /* @ngInject */
    function DashboardController(classFactory,studentFactory,teacherFactory) {
        var vm = this;
        vm.title = 'DashboardController';

        vm.classes = [];
        vm.students = [];
        vm.teachers = [];
        vm.classesCount = 0;
        vm.studentsCount = 0;
        vm.teachersCount = 0;


        activate();

        ////////////////

        function activate() {
            classFactory
                .getClasses()
                .then(function(response) {
                    vm.classes = response.data;
                    vm.classesCount = vm.classes.length;
                    console.log(vm.classes);
                })
                .catch(function(error) {
                    console.log("fail");
                    //toastr.error("Save NOT successful");
                });
            studentFactory
                .getStudents()
                .then(function(response) {
                    vm.students = response.data;
                    vm.studentsCount = vm.students.length;
                    //console.log(vm.students);
                })
                .catch(function(error) {
                    console.log("fail");
                    //toastr.error("Save NOT successful");
                });
            teacherFactory
                .getTeachers()
                .then(function(response) {
                    vm.teachers = response.data;
                    vm.teachersCount = vm.teachers.length;
                    //console.log(vm.teachers);
                })
                .catch(function(error) {
                    console.log("fail");
                    //toastr.error("Save NOT successful");
                });                               

        }
    }
})();