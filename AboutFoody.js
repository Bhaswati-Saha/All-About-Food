var home=document.querySelectorAll(".nav-link");
for(var i=0;i<(home.length-1);i++)
{
	home[i].addEventListener("click",function(){
         home[0].removeAttribute("id","content2");
         home[1].removeAttribute("id","content2");
         home[2].removeAttribute("id","content2");
         home[3].removeAttribute("id","content2");
         home[4].removeAttribute("id","content2");
         this.setAttribute("id","content2");

         /*if(this.textContent==="Services")
         {
         	var s=document.querySelectorAll(".dropdown-item");
         	for(var j=0;j<s.length;i++)
         	{
         		s[i].addEventListener("click",function(){

                    s[0].removeAttribute("id","content2");
                    s[1].removeAttribute("id","content2");
                    s[2].removeAttribute("id","content2");
                    this.setAttribute("id","content2");
         		});
         	}

         }*/


	});
}
