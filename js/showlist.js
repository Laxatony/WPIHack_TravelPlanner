function showlist(mysort){
    var new_position = $(mysort).sortable('toArray');
    var load=document.getElementById(new_position[0]);
     var divs=load.getElementsByTagName("input");
     for(var i=0;i<divs.length;i++){
        alert(divs[i].value);
     }
}