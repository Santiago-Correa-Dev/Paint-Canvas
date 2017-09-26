const width1 = $( '#input_width');
const height1 = $( '#input_height')
const table = $('#pixel_canvas');
const submit = $('#submit');
const color = $('#colorPicker');

$('.reset').hide();
//Height is determined by table row and width is determined by td
function makeGrid() {
    submit.click(function(event){ // If user clicks on submit we are going to do the following
        event.preventDefault(); //We are going to stop the user from actually submitting anything

        table.empty(); // And if the user has clicked on submit we are not going to let them append more items to the current table that was created. Instead they would create a new grid each time.

        for(let j = 0 ; j < height1.val() ; j++) { // for loop to create a <tr> which is used for height of the canvas
            table.append('<tr></tr>');
        }
        for(let i = 0 ; i < width1.val() ; i++) { // for loop to create a <td> to <tr> which is used for width of the canvas
            $('tr').append('<td></td>');
        }

        $('td').on({  //When user clicks on a td it will trigger a background-color
            click:function(){
                $(this).each(function() {
                    $(this).css('background-color', color.val());
                });
            }
        });


        if(table.length > 0) { //If table length is greater than 0 we will show a reset button to reset whole canvas
            $('.reset').show().click(function(){
                $('td').removeAttr('style');
            });
        }
    });

} makeGrid();





