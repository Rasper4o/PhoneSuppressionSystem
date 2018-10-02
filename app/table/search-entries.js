$(document).ready(function() {

    $(document).on('submit', '#search-entries-form', function(){

        var keywords = $(this).find(":input[name='keywords']").val();

        $.getJSON("http://localhost/PhoneSuppressionSystem/app/api/contact/search.php?s="+keywords, function(data){

            readAllEntries(data, keywords);

            changePageTitle("Search entries: "+keywords);

        });

        return false;
        
    });
});