var kbValues = {
	projectName: 'kittenbook',
	versionNumber: '0.0.1'
};
var currentDate = new Date();

var currentTime = currentDate.getFullYear() + '-' + 
                  (currentDate.getMonth() + 1)+ '-' +
                  currentDate.getDate() + ' at ' +
                  currentDate.getHours() + ':' +
                  currentDate.getMinutes() + ':' +
                  currentDate.getSeconds();

kbValues.currentTime = currentTime;
 
