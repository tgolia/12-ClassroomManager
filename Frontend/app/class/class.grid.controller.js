(function() {
    'use strict';

    angular
        .module('app')
        .controller('ClassGridController', ClassGridController);

    ClassGridController.$inject = ['classFactory','$stateParams','toastr'];

    /* @ngInject */
    function ClassGridController(classFactory,$stateParams,toastr) {
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
                    console.log(vm.classes)
                });
        }

        function removeClass(_class) {
            classFactory
                .removeClass(_class.classId)
                .then(function(response) {
                    var index = vm.classes.indexOf(_class);
                    vm.classes.splice(index, 1);
                    toastr.success("Delete successful");
                    console.log('success');
                })
                .catch(function(error) {
                    toastr.error("(idiot), Delete NOT successful");
                })
        }

        // function create() {
        //     if (vm.newTodo.priority == null) {
        //         toastr.error("Please enter a priority");
        //     } else {
        //         classFactory
        //             .create(vm.newTodo)
        //             .then(function(response) {
        //                 vm.todoes.push(response.data);
        //                 vm.newTodo = {};
        //                 toastr.success("Add successful");
        //             })
        //             .catch(function(error) {
        //                 toastr.error("Add NOT successful");
        //             })
        //     }
        // }

    }
})();