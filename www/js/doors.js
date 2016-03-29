var customer = function($scope) {
  ['$scope', function($scope) {
    $scope.profile = {
      userName:"user",
      CuserCompanyName: "",
      userBranchID: "",
      address: { 
          userCompanyAddress1: "",
          userCompanyAddress2: "",
          userCity: "",
          userState: "",
          userZip: "",
          userCountry: "",
      },
      userEmail: "",
      userCellP: "",
      userOfficeP: "",
    };

    $scope.projectInfo = {
      customerName:"",
      jobNumber: "",
      districtNumber: "",
      siteAddress: { 
        	siteAddress1:"",
      	  	siteAddress2:"",
          	siteCity: "",
          	siteState: "",
          	siteZip: "",
          	siteCountry: "",
      	},
     };


  }];
 
}


var list=[],
	$ins =$('userName, CuserCompanyName, userBranchID, userCompanyAddress1, userCompanyAddress2, userCity, userState, userZip, userCountry, userEmail, userCellP,  userOfficeP'),
	counter = {
		userName: {},
      	CuserCompanyName: {},
      	userBranchID: {},
      	userCompanyAddress1: {},
        userCompanyAddress2: {},
        userCity: {},
        userState: {},
        userZip: {},
        userCountry: {},
      	userEmail: {},
      	userCellP: {},
      	userOfficeP: {},
	};
$('#add').click(function(){
	var obj = {},
		valid = true;
	$ins.each(function() {
		var val = this.value.trim();
		if (val) {
			obj[this.id] = val;
		} else {
			var name = this.previousSibling.nodeValue.trim();
			alert(name.substring(0, name.length - 1) + ' cannot be blank');
			this.focus();
			valid = false;
			return false;
		}
	});
	if (valid) {
		list.push(obj);
		$ins.val('');

		$.each(obj, function(key, value){
			var count = counter [key] [value] || 0;
			counter [key][value] = count + 1;
		});
	}
});

$('#print').click(function() {
	$('pre').text(JSON.stringify(list)+ '\n\n');
	$('pre').append(document.createTextNode(JSON.stringify(counter)));
})
