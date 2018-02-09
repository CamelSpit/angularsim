angular.module('triviaApp').service('questSrvc', function( $http ) {
    this.getQuestions = function(){
        $http.get('https://practiceapi.devmountain.com/api/trivia/questions').then(results=>{
            console.log('api results', results);
           return results.data
        }           
        )
    }
  })