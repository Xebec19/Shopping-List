var input = document.getElementById("userInput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");
//var deleteBtns = document.getElementsByClassName("delete")
function Length()
{
	return input.value.length;
}
//From StackOverflow
function removeParent(evt){
	evt.target.removeEventListener("click",removeParent,false);
	evt.target.parentNode.remove();
}
function AddValue()
{
	var btn = document.createElement("button");
	btn.innerHTML = "Delete";
	btn.classList.add("btn-outline-primary");
	btn.classList.add("btn-sm");
	btn.onclick = removeParent;

	var li = document.createElement("li");	
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML += '&nbsp&nbsp&nbsp&nbsp';
	li.classList.add("list-group-item");
	li.appendChild(btn);	
	ul.appendChild(li);
	input.value="";
}
function CallAddValue()
{	if(Length() > 0)
	{	
		AddValue();	
	}
}
function CallAddValueForKeyPress(event)
{	if(Length() > 0 && eventKeyCode === 13)
	{	
		AddValue();	
	}
}
button.addEventListener("click",CallAddValue);	
input.addEventListener("enterpress",CallAddValueForKeyPress);
