angular.module('triviaApp').component('questions', {
    templateUrl: 'app/components/questions/questions.html',
    controllerAs: 'questCtrl',
    controller: function (questSrvc){
            console.log("hitting controller", questSrvc.getQuestions());
            var ahhhhhhhhhh = questSrvc.getQuestions()
            console.log(ahhhhhhhhhh)
        }
})