(function() {
    'use strict';

    angular
        .module('app')
        .controller('ClassGridController', ClassGridController);

    ClassGridController.$inject = ['classFactory','toastr'];

    /* @ngInject */
    function ClassGridController(classFactory,toastr) {
        var vm = this;
        vm.title = 'ClassGridController';

        vm.classes = [];

        vm.removeClass = removeClass;

        activate();

        ////////////////

       function activate() {
            classFactory
                .getClasses()
                .then(function(response) {
                    vm.classes = response.data;
                    console.log(vm.classes);
                });
        }

        function removeClass(_class) {
            classFactory
                .removeClass(_class.classId)
                .then(function(response) {
                    var index = vm.classes.indexOf(_class);
                    vm.classes.splice(index, 1);
                    //toastr.success("Delete successful");
                    console.log('successful class deletion');
                })
                .catch(function(error) {
                    //toastr.error("(idiot), Delete NOT successful");
                    console.log('successful class deletion');
                })
        }
    }
})();