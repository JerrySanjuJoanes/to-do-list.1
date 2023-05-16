document.querySelector('#add').onclick= function(){
    if ( document.querySelector('#newtask').value.length ==0){
        alert("task can not be empty")
    }
    else{
        document.querySelector('#task').innerHTML += `
        <div class="flex flex-row pt-3 pl-2 ">
          <button class="w-full bg-slate-400 rounded-full pt-3 pl-2 pr-2" id='taskname' >
             ${document.querySelector('#newtask').value}
          </button>
        </div>`
        
        
        };
var delete_ = document.querySelectorAll('#taskname');
for(var i=0;i<delete_.length;i++){
    delete_[i].ondblclick=function(){
        this.parentNode.remove();
    }

}

var delete_ = document.querySelectorAll('#taskname');
for(var i=0;i<delete_.length;i++){
    delete_[i].onclick=function(){
        this.parentNode.value.stricke();
    }

}

}