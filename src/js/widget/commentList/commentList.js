var React = require("react");
var inputCss=require("./commentList.less");
var CommentStore=require('../../Store/commentStore');

var CommentList=React.createClass({
	componentDidMount:function(){
		var self=this;
		CommentStore.bind('commentsAdd',function(){
			var newComments=this.getAll();
			self.setState({comments:newComments})
		})
	},
	getInitialState: function() {
	    return {
	    	comments:CommentStore.getAll()
	    };
	  },
	render:function(){
		return(
			<div className="comment-list">
				<h3>评论列表</h3>
				{this.state.comments.map(function(item){
					return 	<div className='comments'>
								<div className='comment'>
									{item.content}
								</div>
							</div>
				})}
			</div>
		)
	}
})

module.exports={commentList:CommentList};