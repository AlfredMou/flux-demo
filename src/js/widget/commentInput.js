var React = require("react");
var inputCss=require("./commentInput.css")
var commentInput=React.createClass({
	render:function(){
		return(
			<p class="comment-input">这是评论输入部分</p>
			)
	}
});
module.exports={commentInput:commentInput};