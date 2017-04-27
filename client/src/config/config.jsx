var env = 'local',
config = {
		local: {
			protocol : 'http',
			rootApi : 'localhost:8085/api',
			rootApp : 'localhost:8080'
			},
		qa: {
			protocol : 'https',
			rootApi : 'glacial-inlet-83305.herokuapp.com/api',
			rootApp : 'localhost:8080'
			},
		uat: {
			protocol : 'https',
			rootApi : 'glacial-inlet-83305.herokuapp.com/api',
			rootApp : 'localhost:8080'
			},
		live: {
				protocol: 'https',
				rootApi: 'glacial-inlet-83305.herokuapp.com/api',
				rootApp : 'localhost:8080'
			}
	};

module.exports = {
	
	getBaseServiceURL : function(webService){
		return config[env].protocol + '://' + config[env].rootApi + '/' + webService;
	 },
	 
	getParameter : function(key)
	{
		return config[env][key];
	}	

}
