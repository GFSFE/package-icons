<!DOCTYPE html>
<html>
<head>
	<title>icon preview</title>
	<style type="text/css">
		body {
			margin: 0;
			padding: 0;
			background: #F7F7F7;
			font-family: sans-serif;
		}
		.container {
			margin: 50px auto;
			max-width: 1120px;
			display: flex;
			flex-wrap: wrap;
		}
		.item-wrapper {
			width: 118px;
			display: flex;
			flex-direction: column;
			border: 1px solid #AEAEAE;
			color: #666666;
			text-align: center;
			float: left;
			margin: 10px;
			background: #FFFFFF;
		}
		.item-wrapper i {
			font-size: 60px;
			margin: 10px;
			transition: transform 0.3s;
			color: #333333;
		}
		.item-wrapper .item-class, .item-wrapper .item-code {
			font-size: 14px;
			line-height: 24px;
			border-top: 1px solid #AEAEAE;
		}
		.item-wrapper .item-class {
			color: #CB3837;
		}

	</style>
	<link rel="stylesheet" type="text/css" href="./icon.css">
</head>
<body>
	<div class="container">
		{{mainContent}}
	</div>
</body>
</html>
