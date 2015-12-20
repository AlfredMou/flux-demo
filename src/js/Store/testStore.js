var EventTarget=require('../lib/MicroEvent.js'),
	Action=require('../action/commentAction.js');
var TestStore = {
		items:[],
		getAll:function(){
			return this.items;
		},
		get
	};
MicroEvent.mixin(TestStore);
Action.AppDispatcher.register( function( payload ) {
  switch( payload.eventName ) {
    case 'get-data':
      TestStore.items.push(payload.newItem );
      TestStore.trigger( 'change' );
      break;
  }
  return true;
}); 
module.exports={
	Store
}