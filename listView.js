function ListView(){

	var html;

	function init(){
        html = $('<div class="container main"><div class="row">\n' +
            '\t\t\t\t<div class="col-lg-4 col-md-4 col-sm-12 col-lg-offset-2 col-md-offset-2 col-sm-offset-0">\n' +
            '\t\t\t\t\t<div class="card">\n' +
            '\t\t\t\t\t\t<div class="card-title alert alert-info text-success">\n' +
            '\t\t\t\t\t\t\tTodo List App\n' +
            '\t\t\t\t\t\t</div>\n' +
            '\t\t\t\t\t\t<div class="card-body">\n' +
            '\t\t\t\t\t\t\t\t<div class="input-group">\n' +
            '\t\t\t\t\t\t\t\t\t<div class="input-group-prepend">\n' +
            '\t\t\t\t\t\t\t\t\t\t<span class="input-group-text fa fa-tasks" id="task"></span>\n' +
            '\t\t\t\t\t\t\t\t\t</div>\n' +
            '\t\t\t\t\t\t\t\t\t<input id="taskinput" name="task" type="text" class="form-control" placeholder="Add new task" aria-describedby="task" required>\n' +
            '\t\t\t\t\t\t\t\t\t<div class="invalid-feedback">\n' +
            '\t\t\t\t\t\t\t\t\t\tplease Enter the task\n' +
            '\t\t\t\t\t\t\t\t\t</div>\n' +
            '\t\t\t\t\t\t\t\t</div>\n' +
            '\t\t\t\t\t\t\t\t<br>\n' +
            '\t\t\t\t\t\t\t\t<button id="submittask"  type="submit" class="btn btn-primary pull-right fa fa-plus">&nbsp;Add</button>\n' +
            '\t\t\t\t\t\t</div>\n' +
            '\t\t\t\t\t</div>\n' +
            '\t\t\t\t</div>\n' +
            '\t\t\t\t<div class="col-md-8 col-sm-12">\n' +
            '\t\t\t\t\t<div class="card">\n' +
            '\t\t\t\t\t\t<div class="card-title alert alert-info text-success text-capitalize">\n' +
            '\t\t\t\t\t\t\t<i class="fa fa-tasks"></i> Your todo list\n' +
            '\t\t\t\t\t\t</div>\n' +
            '\t\t\t\t\t</div>\n' +
            '\t\t\t\t\t<ul class="list-group" id="tasklist">\n' +
            '\t\t\t\t\t</ul>\n' +
            '\t\t\t\t</div>\n' +
            '\t\t\t</div></div>');
	}
	var public = {
		getHtml: function(){
			return html;
		},
		addCreateTaskHandler: function(handler){
			html.find("#submittask").click(function(){
				var newTaskTitle = html.find("#taskinput").val();
				html.find("#taskinput").val("");
				handler(newTaskTitle);
			});
		},
		addTask: function(taskView){
			html.find("#tasklist").append(taskView.getHtml());
		}
	};

	init();
	return public;
}