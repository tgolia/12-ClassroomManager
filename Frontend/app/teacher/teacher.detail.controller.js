(function() {
    'use strict';

    angular
        .module('app')
        .controller('TeacherDetailController', TeacherDetailController);

    TeacherDetailController.$inject = ['$stateParams'];

    /* @ngInject */
    function TeacherDetailController($stateParams) {
        var vm = this;
        vm.title = 'TeacherDetailController';

        vm.teacherId = $stateParams.id;

        activate();

        ////////////////

        function activate() {
        }
    }
})();