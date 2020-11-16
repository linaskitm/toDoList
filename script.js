const subject = document.getElementById('subject');
const priority = document.getElementById('priority');
const date = document.getElementById('date');
const status = document.getElementById('status');
const percentage = document.getElementById('percentage');
const submit = document.getElementById('submit');
const list = document.getElementById('list');
 
document.getElementById('submit').addEventListener('click', function(e){
    e.preventDefault()
  });
submit.addEventListener('click', createList);

function createList() {
    if((subject.value) && (priority.value)  && (status.value) && (percentage.value) ) {
    const row = document.createElement('tr');
    list.appendChild(row);
    
    const addCheck = document.createElement('td');
    const check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    row.appendChild(addCheck);
    addCheck.appendChild(check);
    check.addEventListener("click", crossingOut);
    function crossingOut(){
        console.log("checked")
        if(check.checked){
            row.classList.add('checked');
        } else {
            row.classList.remove('checked');
        }
    }

     const a = document.createElement('td');
     a.innerText = subject.value;
     row.appendChild(a);

     const b = document.createElement('td');
     b.innerHTML = priority.value;
     row.appendChild(b);

     const c = document.createElement('td');
     c.innerHTML = date.value;
     row.appendChild(c);

     const d = document.createElement('td');
     d.innerHTML = status.value;
     row.appendChild(d);

     const e = document.createElement('td');
     e.innerHTML = percentage.value;
     row.appendChild(e);
     
    } else  {
        alert("Fill All Fields");
        return;
    }
}