var	Flux=require('../lib/flux/Flux.js');
var AppDispatcher=new Flux.Dispatcher();
	ActionCreator={
		AppDispatcher:AppDispatcher,
		addAComment:function(comment){
			this.AppDispatcher.dispatch({
			    eventName: 'commentAdd',
			    newItem: { content:comment}    
			});
		}
	}
module.exports=ActionCreator;