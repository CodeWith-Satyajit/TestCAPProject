sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'fe01/test/integration/FirstJourney',
		'fe01/test/integration/pages/TestList',
		'fe01/test/integration/pages/TestObjectPage'
    ],
    function(JourneyRunner, opaJourney, TestList, TestObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('fe01') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTestList: TestList,
					onTheTestObjectPage: TestObjectPage
                }
            },
            opaJourney.run
        );
    }
);