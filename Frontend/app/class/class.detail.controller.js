(function() {
    'use strict';

    angular
        .module('app')
        .controller('ClassDetailController', ClassDetailController);

    ClassDetailController.$inject = ['$stateParams','classFactory','teacherFactory','studentFactory'];

    /* @ngInject */
    function ClassDetailController($stateParams,classFactory,teacherFactory,studentFactory) {
        var vm = this;
        vm.title = 'ClassDetailController';

        vm.classId = $stateParams.id;
        vm.currentClass = [];
        vm.updateClass = updateClass;
        vm.isNewClass = true;
        vm.createClass = createClass;
        vm.teachers = [];
        vm.students = [];
        vm.addStudentToClass = addStudentToClass;
        vm.newStudentId = "";
        vm.removeStudentFromClass = removeStudentFromClass;

        activate();

        ////////////////

        function activate() {
            if (vm.classId != null) {
                vm.isNewClass = false;
                console.log("Edit existing class");
                classFactory
                    .getClass(vm.classId)
                    .then(function(response) {
                        vm.currentClass = response.data;
                        //console.log(vm.currentClass);
                    });
                teacherFactory
                    .getTeachers()
                    .then(function(response) {
                        vm.teachers = response.data;
                        //console.log(vm.teachers);
                    });
                studentFactory
                    .getStudents()
                    .then(function(response) {
                        vm.students = response.data;
                        //console.log(vm.students);
                    });
            } else {
                teacherFactory
                    .getTeachers()
                    .then(function(response) {
                        vm.teachers = response.data;
                        //console.log(vm.teachers);
                    });
                console.log("Add new class");
            }
        }

        function updateClass(id, _class) {
            console.log(_class);
            classFactory
                .updateClass(id, _class)
                .then(function(response) {
                    console.log("class updated");
                    //toastr.success("Save successful");
                })
                .catch(function(error) {
                    console.log("class not updated");
                    //toastr.error("Save NOT successful");
                })
        }

        function createClass(_class) {
            classFactory
                .createClass(_class)
                .then(function(response) {
                    vm.newClass = {};
                    console.log("successful class add");
                    //toastr.success("Add successful");
                })
                .catch(function(error) {
                    console.log("class add fail");
                    //toastr.error("Add NOT successful");
                });
        }

        function addStudentToClass(classId, studentId) {
            classFactory
                .addStudentToClass(classId, studentId)
                .then(function(response) {
                    vm.newStudentId = "";
                    console.log("successful student add");
                })
                .catch(function(error) {
                    console.log("student add fail");
                });
            setTimeout(function(){
                classFactory
                .getClass(classId)
                .then(function(response) {
                vm.currentClass = response.data;
                console.log("reloading students post-addition");
                //console.log(vm.currentClass);
                });}
                , 500);
        }

        function removeStudentFromClass(classId, studentId) {
            classFactory
                .removeStudentFromClass(classId, studentId)
                .then(function(response) {
                    console.log("successful student removal");
                })
                .catch(function(error) {
                    console.log("student removal fail");
                });
            setTimeout(function() {
                classFactory
                .getClass(classId)
                .then(function(response) {
                vm.currentClass = response.data;
                console.log("reloading students post-removal");
                //console.log(vm.currentClass);
                });}
                , 750);

        }

    }
})();