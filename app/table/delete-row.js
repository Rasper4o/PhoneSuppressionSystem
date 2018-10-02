$(document).ready(function() {

    $(document).on('click', '.delete-entry-button', function(){
        var id = $(this).attr('data-id');
        if(confirm("Are you sure you want to delete this entry? ID="+id)) {
            $.ajax({
                url: "http://localhost/PhoneSuppressionSystem/app/api/contact/delete.php",
                type: POST,
                dataType: 'json',
                data: JSON.stringify({ id: id }),
                success: function(result){
                    showTable();
                },
                error: function(xhr, resp, text){
                    console.log(xhr, resp, text);
                }
            });
        }
    });
});