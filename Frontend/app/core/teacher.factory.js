(function() {
    'use strict';

    angular
        .module('app')
        .factory('teacherFactory', teacherFactory);

    teacherFactory.$inject = ['$http'];

    function teacherFactory($http) {
        var vm = this;
        var service = {
            createTeacher   :   createTeacher,
            getTeachers     :   getTeachers,
            getTeacher      :   getTeacher,
            updateTeacher   :   updateTeacher,
            removeTeacher   :   removeTeacher
        };


        return service;

        ///////////////////

        function createTeacher(teacher) {
            return $http.post('http://localhost:65238/api/teachers', teacher);
        }

        function getTeachers() {
            return $http.get('http://localhost:65238/api/teachers');
        }


        function getTeacher(id) {
            return $http.get('http://localhost:65238/api/teachers/'+id);
        }

        function updateTeacher(id, teacher) {
            return $http.put('http://localhost:65238/api/teachers/'+id, teacher);
        }

        function removeTeacher(id) {
            return $http.delete('http://localhost:65238/api/teachers/'+id); 
        }
    }
})();