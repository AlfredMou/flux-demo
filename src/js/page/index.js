var React = require("react"),
	commentSys = require("../widget/commentSys/commentSys.js"),
	commentList = require("../widget/commentList/commentList.js"),
    testExmple=document.getElementById("example");
var CommentSys=commentSys.commentSys;
React.render(<CommentSys/>,testExmple);
