
angular.module('app', []);

angular.module('app')
.controller("contadorCtrl", contadorCtrl);

contadorCtrl.$inject = ['$scope'];

angular.module('app')
.controller("tarefasCtrl", tarefasCtrl);

tarefasCtrl.$inject = ['$scope'];

function contadorCtrl($scope) {
    $scope.valorOperado = 1;
    $scope.contador = 0;
    $scope.contando = contando;
    
    function contando ($parametro) {
        if ($parametro == 'add') {
            $scope.contador += $scope.valorOperado;
        } else {
            $scope.contador -= $scope.valorOperado;
        }
    }
}

function tarefasCtrl($scope) {
    $scope.tarefas = [
        {nome: "1 Semana - AngularJS", 
        feito: false, 
        subTarefas: 
            [
            {nome: "Assistir live Dia 05", feito: true},
            {nome: "Assistir live Dia 06", feito: true},
            {nome: "Assistir live Dia 07", feito: false},
            {nome: "Assistir live Dia 08", feito: false},
            {nome: "Assistir live Dia 09", feito: false},
            {nome: "Desafio Semanal Dia 10", feito: false}
            ] 
        },
        {nome: "2 Semana - JAVA", 
        feito: false, 
        subTarefas: 
            [
            {nome: "Assistir live Dia 13", feito: false},
            {nome: "Assistir live Dia 14", feito: false},
            {nome: "Assistir live Dia 15", feito: false},
            {nome: "Assistir live Dia 16", feito: false},
            {nome: "Desafio Semanal Dia 17", feito: false}
            ] 
        },
        {nome: "3 Semana - Cloud", 
        feito: false, 
        subTarefas: 
            [
            {nome: "Assistir live Dia 19", feito: false},
            {nome: "Assistir live Dia 20", feito: false},
            {nome: "Assistir live Dia 21", feito: false},
            {nome: "Assistir live Dia 22", feito: false},
            {nome: "Assistir live Dia 23", feito: false},
            {nome: "Desafio Semanal Dia 24", feito: false}
            ] 
        },
        {nome: "Desafio Final dia 27",
        feito: false,
        subTarefas:[]}
    ];
}