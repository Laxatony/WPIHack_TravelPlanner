function addItem(){

    var ul = document.getElementById("sortable1");
    
    var candidate = document.getElementById("candidate");
    var li = document.createElement("li");
    li.setAttribute('id',candidate.value);
    li.appendChild(document.createTextNode(candidate.value));

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
  


    li.appendChild(div1);
    li.appendChild(input1);
    li.appendChild(div2);
    li.appendChild(input2);
    li.appendChild(div3);
    li.appendChild(input3);
    ul.appendChild(li);
    


}

function removeItem(){
    var ul = document.getElementById("sortable1");
    var candidate = document.getElementById("candidate");
    var item = document.getElementById(candidate.value);
    ul.removeChild(item);
}