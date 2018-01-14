function addItem2(){

    var ul = document.getElementById("sortable2");
    
    var candidate = document.getElementById(itemindex);
    var li = document.createElement("li");
    li.setAttribute('id',itemindex);
    li.appendChild(document.createTextNode(itemindex));
    itemindex+=1;

    var div1=document.createElement("div");
    div1.setAttribute('id',"des1");
    div1.append(document.createTextNode("Place"));

    var input1=document.createElement("input");
    input1.type="text";
    input1.className = "css-class-name";

    var div2=document.createElement("div");
    div2.setAttribute('id',"des2");
    div2.append(document.createTextNode("Address"));

    var input2=document.createElement("input");
    input2.type="text";
    input2.className = "css-class-name";

    var div3=document.createElement("div");
    div3.setAttribute('id',"des3");
    div3.append(document.createTextNode("Link"));

    var input3=document.createElement("input");
    input3.type="text";
    input3.className = "css-class-name";

    var div4=document.createElement("div");
    div4.setAttribute('id',"des4");
    div4.append(document.createTextNode(""));
  


    li.appendChild(div1);
    li.appendChild(input1);
    li.appendChild(div2);
    li.appendChild(input2);
    li.appendChild(div3);
    li.appendChild(input3);
    li.appendChild(div4);
    ul.appendChild(li);
    


}

function removeItem2(){
    
    var ul = document.getElementById("sortable2");
    var candidate2 = document.getElementById("candidate2");
    var item = document.getElementById(candidate2.value);
    ul.removeChild(item);
    

}