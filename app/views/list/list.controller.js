'use strict';

app.controller('ListCtrl', [
	'ProjectsListDict',
	function(ProjectsListDict) {
		this.projects = ProjectsListDict.get();
	}
]);
