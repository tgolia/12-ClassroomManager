(function() {
    'use strict';

    angular
        .module('app')
        .factory('studentFactory', studentFactory);

    studentFactory.$inject = ['$http'];

    function studentFactory($http) {
        var vm = this;
        var service = {
            createStudent   :   createStudent,
            getStudents     :   getStudents,
            getStudent      :   getStudent,
            updateStudent   :   updateStudent,
            removeStudent   :   removeStudent
        };


        return service;

        ///////////////////

        function createStudent(student) {
            return $http.post('http://localhost:65238/api/students', student);
        }

        function getStudents() {
            return $http.get('http://localhost:65238/api/students');
        }


        function getStudent(id) {
            return $http.get('http://localhost:65238/api/students/'+id);
        }

        function updateStudent(id, student) {
            return $http.put('http://localhost:65238/api/students/'+id, student);
        }

        function removeStudent(id) {
            return $http.delete('http://localhost:65238/api/students/'+id); 
        }
    }
})();