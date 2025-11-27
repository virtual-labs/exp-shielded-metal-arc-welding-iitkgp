$(document).ready(()=>{
    $("#wes1").hide();
    $("#wes2").hide();
    $("#wes3").hide(); 
    $("#wes4").hide();
});

function adit(ak){
if(ak==1){
    $("#wes1").show();
    $("#wes2").hide();
    $("#wes3").hide();
    $("#wes4").hide();
}
else if(ak==2){
    $("#wes2").show();
    $("#wes1").hide();
    $("#wes3").hide();
    $("#wes4").hide();
}
else if(ak==3){
    $("#wes3").show();
    $("#wes1").hide();
    $("#wes2").hide();
    $("#wes4").hide();
}
else if(ak==4){
    $("#wes4").show();
    $("#wes1").hide();
    $("#wes2").hide();
    $("#wes3").hide();
}
};