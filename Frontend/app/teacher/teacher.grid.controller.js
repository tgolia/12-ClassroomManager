(function() {
    'use strict';

    angular
        .module('app')
        .controller('TeacherGridController', TeacherGridController);

    TeacherGridController.$inject = ['dependencies'];

    /* @ngInject */
    function TeacherGridController(dependencies) {
        var vm = this;
        vm.title = 'TeacherGridController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();