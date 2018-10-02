$(document).ready(function(){
 
    $(document).on('click', '.create-entry-button', function(){
        var create_entry_html="";
 
        create_entry_html+="<div id='go-back' class='btn btn-primary pull-right m-b-15px go-back-button'>";
            create_entry_html+="<span class='glyphicon glyphicon-list'></span> Go Back";
        create_entry_html+="</div>";

        create_entry_html+="<form id='create-entry-form' action='#' method='post' border='0'>";
            create_entry_html+="<table class='table table-hover table-responsive table-bordered'>";
        
                // name field
                create_entry_html+="<tr>";
                    create_entry_html+="<td>Phone Number</td>";
                    create_entry_html+="<td><input type='text' min='10' name='phone_number' class='form-control' required /></td>";
                create_entry_html+="</tr>";
        
                // price field
                create_entry_html+="<tr>";
                    create_entry_html+="<td>First Name</td>";
                    create_entry_html+="<td><input type='text' name='f_name' class='form-control' required /></td>";
                create_entry_html+="</tr>";
        
                // description field
                create_entry_html+="<tr>";
                    create_entry_html+="<td>Last Name</td>";
                    create_entry_html+="<td><input type='text' name='l_name' class='form-control' required /></td>";
                create_entry_html+="</tr>";
        
                // categories 'select' field
                create_entry_html+="<tr>";
                    create_entry_html+="<td>Voicemail Type</td>";
                    create_entry_html+="<td><input type='text' name='number_type' class='form-control' required /></td>";
                create_entry_html+="</tr>";
        
                // button to submit form
                create_entry_html+="<tr>";
                    create_entry_html+="<td></td>";
                    create_entry_html+="<td>";
                        create_entry_html+="<button type='submit' class='btn btn-primary'>";
                            create_entry_html+="<span class='glyphicon glyphicon-plus'></span> Create Entry";
                        create_entry_html+="</button>";
                    create_entry_html+="</td>";
                create_entry_html+="</tr>";
 
            create_entry_html+="</table>";
        create_entry_html+="</form>";

        $("#page-content").html(create_entry_html);
 
        changePageTitle("New Entry");
    });
 
    $(document).on('submit', '#create-entry-form', function(e){
        
        var form_data=JSON.stringify($(this).serializeObject());

        $.ajax({
            url: "http://localhost/PhoneSuppressionSystem/app/api/contact/create.php",
            type : "POST",
            contentType : 'application/json',
            dataType: "json",
            data : form_data,
            success : function(result) {
                showTable();
            },
            error: function(xhr, resp, text) {
                console.log(xhr, resp, text);
            }
        });
    });

    $(document).on('click', '.go-back-button', function(){
        showTable();
    })
});