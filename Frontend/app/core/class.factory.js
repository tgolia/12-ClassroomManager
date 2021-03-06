(function() {
    'use strict';

    angular
        .module('app')
        .factory('classFactory', classFactory);

    classFactory.$inject = ['$http'];

    function classFactory($http) {
        var vm = this;
        var service = {
            createClass             :   createClass,
            getClasses              :   getClasses,
            getClass                :   getClass,
            updateClass             :   updateClass,
            removeClass             :   removeClass,
            addStudentToClass       :   addStudentToClass,
            removeStudentFromClass  :   removeStudentFromClass
        };


        return service;

        ///////////////////

        function createClass(_class) {
            return $http.post('http://localhost:65238/api/classes', _class);
        }

        function getClasses() {
            return $http.get('http://localhost:65238/api/classes');
        }


        function getClass(id) {
            return $http.get('http://localhost:65238/api/classes/'+id);
        }

        function updateClass(id, _class) {
            return $http.put('http://localhost:65238/api/classes/'+id, _class);
        }

        function removeClass(id) {
            return $http.delete('http://localhost:65238/api/classes/'+id); 
        }

        function addStudentToClass(classId, studentId) {
            return $http.post('http://localhost:65238/api/classes/'+classId+'/students/'+studentId);
        }

        function removeStudentFromClass(classId, studentId) {
            return $http.delete('http://localhost:65238/api/classes/'+classId+'/students/'+studentId);
        }
    }
})();