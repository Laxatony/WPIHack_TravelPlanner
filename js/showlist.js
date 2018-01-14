function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function showlist(){
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
        	//alert(day1[ind].location);
        	ind+=1;

     	//}
		if (j>0) {
			spoti = day1[j];
			spoti1 = day1[j-1];
			var load2 = document.getElementById(new_position[j-1]);

			GetDirections(spoti1.location, spoti.location, function (ret) {
				spoti1.nextduration = ret.duration;
				var upd = load2.getElementsByTagName("div");
				upd[3].textContent = ret.duration;
                
				console.log(upd[3].textContent);
                console.log(j);
			}); 
		}
        await sleep(500);
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
        	//alert(day2[ind].location);
        	ind+=1;

		 //}
		 if (j>0) {
			spoti = day2[j];
			spoti1 = day2[j-1];
			var load2 = document.getElementById(new_position[j-1]);
			GetDirections(spoti1.location, spoti.location, function (ret) {
				spoti1.nextduration = ret.duration;
				var upd = load2.getElementsByTagName("div");
				upd[3].textContent = ret.duration;
				console.log(upd[3].textContent);
			}); 
		}
        await sleep(300);
    }

}
