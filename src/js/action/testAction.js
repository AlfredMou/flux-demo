define(function (){
　　var AppDispatcher = new Flux.Dispatcher();
	var dataFromWeb="I'm data from web server";

	var ActionCreator = {
		AppDispatcher:AppDispatcher,
		getDataFromWeb:function(item){
			setTimeout(function(){
		 		AppDispatcher.dispatch({
				    eventName: 'get-data',
				    newItem: { name: dataFromWeb}    
				});
			},1000)
		}
	};
	return ActionCreator;
});

