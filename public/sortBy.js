// $(".sortBy").click(function(){
//     $(".")
// })

// $(".sort-rodeo ul li").click(function (){
//     $(".sortBy").html($(".sort-rodeo ul li")); 
// });

var myOptions = {
    val1 : 'Completed',
    val2 : 'Upcoming'
};
var mySelect = $('#myColors');
$.each(myOptions, function(val, text) {
    mySelect.append(
        $('<button></button>').val(val).html(text)
    );
});
