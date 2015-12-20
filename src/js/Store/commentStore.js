var EventTarget=require('../lib/MicroEvent.js'),
	CommentAction=require('../action/commentAction.js');

var commentStore={
	comments: [
	    		{content:"我是第一条评论"},
	    		{content:"我是第二条评论"}
    		],
	getAll:function(){
		return this.comments;
	}
}
EventTarget.mixin(commentStore);
CommentAction.AppDispatcher.register(function(payload){
	switch(payload.eventName){
		case 'commentAdd':
			commentStore.comments.push(payload.newItem);
			commentStore.trigger('commentsAdd');
			break;
		default:
			break;
	}
});
module.exports=commentStore;