	    function initializeViz() {
	        var placeholderDiv = document.getElementById("tableauViz");

	        var url = "https://tableau.wellsfargo.com/views/CashDriftSummary/Dashboard1";
	        var options = {
	            hideTabs: true,
	            hideToolbar: true,
	            onFirstInteractive: function () {
	                workbook = viz.getWorkbook();
	                activeSheet = workbook.getActiveSheet();
	                initializeViz2();
        //          filterSingleValue();
	            }
	        };
	        viz = new tableau.Viz(placeholderDiv, url, options);
	/*        viz.addEventListener('marksselection', function () {
	         //   alert('the user selected marks');
	        }); */
	    }
        
    		        function exportToExcel() {

	        activeSheet.getWorksheets().get("Cash Drift Data").applyFilterAsync(
                "c.TurnExportOn",
				"True",
              tableau.FilterUpdateType.REPLACE).then(

            viz.showExportCrossTabDialog("Cash Drift Data"));

}

// IS Risk Index Script Start //

	    function initializeViz2() {
	        var placeholderDiv = document.getElementById("tableauViz2");

	        var url = "https://tableauprod.wellsfargo.com/views/PesRiskIndexScorecard/Dashboard1?";
	        var options = {
	            hideTabs: true,
	            hideToolbar: true,
	            onFirstInteractive: function () {
	                workbook2 = viz2.getWorkbook();
	                activeSheet2 = workbook2.getActiveSheet();
                    filterSingleValue();
	            }
	        };
	        viz2 = new tableau.Viz(placeholderDiv, url, options);
	    }
        
	    function filterSingleValue() {
	        activeSheet2.getWorksheets().get("Info/QuickFilter").selectMarksAsync(
                "selectme",
                "1",
              tableau.SelectionUpdateType.REPLACE);
	    }   
// IS Risk Index Script end //