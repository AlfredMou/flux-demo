var React = require("react"),
	commentList = require("../commentList/commentList.js"),
	commentInput=require("../commentInput/commentInput.js"),
	comentCss=require('./commentSys.less')
	CommentList=commentList.commentList,
	CommentInput=commentInput.commentInput;
//评论模块
var CommentSys=React.createClass({
	render:function(){

		return(
			<div className="comment-sys">
				<CommentList></CommentList>
				<CommentInput></CommentInput>
			</div>
			)
	}
});

module.exports={commentSys:CommentSys};