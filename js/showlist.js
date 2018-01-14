function showlist(){
    var new_position = $(sortable1).sortable('toArray');
    day1=[];
    var ind=0;
    for (var j=0;j<new_position.length;j++){
    	var load=document.getElementById(new_position[j]);
     	var divs=load.getElementsByTagName("input");
		//for(var i=0;i<divs.length;i++){
        //alert(divs[i].value);
        	var temp=new Spot();
        	temp.name=divs[0].value;
        	temp.location=divs[1].value;
        	temp.link=divs[2].value;
        	day1[ind]=temp;
        	alert(day1[ind].location);
        	ind+=1;

     	//}

    }
    day2=[];
    new_position = $(sortable2).sortable('toArray');
   	ind=0;
    for (var j=0;j<new_position.length;j++){
    	var load=document.getElementById(new_position[j]);
     	var divs=load.getElementsByTagName("input");
		//for(var i=0;i<divs.length;i++){
        //alert(divs[i].value);
        	var temp=new Spot();
        	temp.name=divs[0].value;
        	temp.location=divs[1].value;
        	temp.link=divs[2].value;
        	day2[ind]=temp;
        	alert(day2[ind].location);
        	ind+=1;

     	//}

    }

}
