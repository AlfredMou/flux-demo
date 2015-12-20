var React = require("react"),
    inputCss=require("./commentInput.less"),
    commentAction=require('../../action/commentAction');


var CommentInput=React.createClass({
	addComment:function(){
		var inputValue=this.refs.commentInput.getDOMNode().value;
		this.refs.commentInput.getDOMNode().value='';
		commentAction.addAComment(inputValue);
	},
	render:function(){
		return(
			<div>
				<textarea ref='commentInput' className="comment-input">
				</textarea>
				<p className="add-comment">
					<button onClick={this.addComment}>
					提交
					</button>
				</p>
			</div>
		)
	}
})

module.exports={commentInput:CommentInput};