angular.module('forcastingService',[])




	.factory('forcasting',['$http',function($http){
		return{
			get : function(){
				return $http.get('/api/forcast');
			}
		}
	}
	]);
