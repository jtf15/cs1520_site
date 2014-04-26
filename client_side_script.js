var items = [
  "announcements",
  "schedule",
  "assignments",
  "policies",
  "other"
];
/*

When I was working on projects going over the examples, it was annoying when I would go back and it would 
close all the tabs and I had to open and scroll down again. Just added trackers to keep them open in local storage.
Also messed around with colors.

*/
function toggleItem(itemName)
{
	var item = document.getElementById(itemName);
	var itemtoggle = document.getElementById(itemName.concat("toggle"));
	if(item.style.display == "none")
	{
		item.style.display = "";
		itemtoggle.innerHTML = "&#8722";
		
		if(typeof(Storage) !== "undefined"){
			localStorage[itemName] = '1'; //set it to open so it will remember
		}
	}
	else
	{
		item.style.display = "none";
		itemtoggle.innerHTML = "+";
		
		if(typeof(Storage) !== "undefined"){
			localStorage[itemName] = '0' ; //remember if it's closed
		}
	}
}


function loadContent()
{
	for(var i in items)
	{
		if(items.hasOwnProperty(i))
		{
			var item = document.getElementById(items[i]);
			var itemtoggle = document.getElementById(items[i].concat("toggle"));
			//item.style.display = "none";
			if(typeof(Storage) !== "undefined"){
				if(localStorage[items[i]] == '1'){
					item.style.display = "";
					itemtoggle.innerHTML = "&#8722";
				}else if(localStorage[items[i]] == '0'){
					item.style.display = "none";
					itemtoggle.innerHTML = "+";
				}
			
			}else{
				item.style.display = "none" ;
			}
		}
	}
}
