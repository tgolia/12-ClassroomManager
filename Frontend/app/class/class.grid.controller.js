(function() {
    'use strict';

    angular
        .module('app')
        .controller('ClassGridController', ClassGridController);

    ClassGridController.$inject = ['classFactory','$stateParams'];

    /* @ngInject */
    function ClassGridController(classFactory,$stateParams) {
        var vm = this;
        vm.title = 'ClassGridController';

        vm.classes = [];

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

        // function update(todo) {
        //     classFactory
        //         .update(todo.todoId, todo)
        //         .then(function(response) {
        //             toastr.success("Save successful");
        //         })
        //         .catch(function(error) {
        //             toastr.error("Save NOT successful");
        //         })
        // }

        // function remove(todo) {
        //     classFactory
        //         .remove(todo.todoId)
        //         .then(function(response) {
        //             var index = vm.todoes.indexOf(todo);
        //             vm.todoes.splice(index, 1);
        //             toastr.success("Delete successful");
        //         })
        //         .catch(function(error) {
        //             toastr.error("Delete NOT successful");
        //         })
        // }

    }
})();