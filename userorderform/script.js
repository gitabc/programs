function OrderFormController($scope){


	$scope.services = [
		{
			name: 'Web Development',
			price: 'Try Free',
			active:true
		},{
			name: 'Web Design',
			price: 'Try Free',
			active:false
		},{
			name: 'Web Interface',
			price:'Try Free',
			active:false
		},{
			name: 'Join Our Cloud',
			price: 'Try Free',
			active:false
		}
	];

	$scope.toggleActive = function(s){
		s.active = !s.active;
	};


	$scope.total = function(){

		var total = 0;


		angular.forEach($scope.services, function(s){
			if (s.active){
				//total+= s.price;
				//alert(total);
			}
		});

		return total;
	};
}
