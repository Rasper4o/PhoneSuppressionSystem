$(document).ready(function(){
    
    showTable();
    
});
function showTable() {
    $.getJSON("http://localhost/PhoneSuppressionSystem/app/api/contact/read.php", function(data){
        var read_data_html="";

        //Search button
        read_data_html+="<form id='search-form' action='#' method='post'>";
            read_data_html+="<div class='input-group pull-left w-30-pct'>";
 
                read_data_html+="<input type='text' name='keywords' class='form-control search-keywords' placeholder='Search...' />";
        
                read_data_html+="<span class='input-group-btn'>";
                    read_data_html+="<button type='submit' class='btn btn-default' type='button'>";
                        read_data_html+="<span class='glyphicon glyphicon-search'></span>";
                    read_data_html+="</button>";
                read_data_html+="</span>";
 
            read_data_html+="</div>";
        read_data_html+="</form>";

        read_data_html+="<div id='create-row' class='btn btn-primary pull-right m-b-15px create-entry-button'>";
            read_data_html+="<span class='glyphicon glyphicon-plus'></span> Create Row";
        read_data_html+="</div>";

        // start table
        read_data_html+="<table class='table table-bordered table-hover'>";
        
            // creating our table heading
            read_data_html+="<tr>";
                read_data_html+="<th class='w-10-pct'>ID</th>";
                read_data_html+="<th class='w-15-pct'>Phone Number</th>";
                read_data_html+="<th class='w-15-pct'>First Name</th>";
                read_data_html+="<th class='w-15-pct'>Last Name</th>";
                read_data_html+="<th class='w-10-pct'>Type</th>";
                read_data_html+="<th class='w-25-pct text-align-center'>Action</th>";
            read_data_html+="</tr>";
            
            // rows here, need to know format of data
            $.each(data.records, function(key, val) {
    
                // creating new table row per record
                read_data_html+="<tr>";
                    
                    // DATA HERE
                    read_data_html+="<td>" + val.id + "</td>";
                    read_data_html+="<td>" + val.phone_number + "</td>";
                    read_data_html+="<td>" + val.f_name + "</td>";
                    read_data_html+="<td>" + val.l_name + "</td>";
                    read_data_html+="<td>" + val.number_type + "</td>";
                    // 'action' buttons
                    read_data_html+="<td>";
                        read_data_html+="<button class='btn btn-primary m-r-10px read-one-button'>";
                            read_data_html+="<span class='glyphicon glyphicon-eye-open'></span> Read";
                        read_data_html+="</button>";
            
                        read_data_html+="<button class='btn btn-info m-r-10px update-button'>";
                            read_data_html+="<span class='glyphicon glyphicon-edit'></span> Edit";
                        read_data_html+="</button>";
            
                        read_data_html+="<button class='btn btn-danger delete-entry-button'>";
                            read_data_html+="<span class='glyphicon glyphicon-remove'></span> Delete";
                        read_data_html+="</button>";
                    read_data_html+="</td>";
            
                read_data_html+="</tr>";
            
            });
        // end table
        read_data_html+="</table>";
        $("#page-content").html(read_data_html);
        changePageTitle("Phone Suppression Table");

    });
}