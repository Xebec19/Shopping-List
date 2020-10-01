var input = document.getElementById("userInput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");
function Length()
{
	return input.value.length;
}
function AddValue()
{
	var li = document.createElement("li");	
	li.appendChild(document.createTextNode(input.value));
	 li.classList.add("list-group-item");	
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
