const subject = document.getElementById('subject');
const priority = document.getElementById('priority');
const date = document.getElementById('date');
const status = document.getElementById('status');
const percentage = document.getElementById('percentage');
const submit = document.getElementById('submit');
const list = document.getElementById('list');
const alertMsg = document.getElementById('alert')
 
document.getElementById('submit').addEventListener('click', function(e){
    e.preventDefault()
  });
submit.addEventListener('click', createList);
// resetinu inputo fieldus po submito
submit.addEventListener('click', reset);
function reset(){
    // id reset uzdejau ant formos
    document.getElementById('reset').reset(); 
}

function createList() {
    if((subject.value) && (priority.value)  && (status.value) && (percentage.value) ) {
    const row = document.createElement('tr');
    list.appendChild(row);
    
    const addCheck = document.createElement('td');
    const check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    row.appendChild(addCheck);
    addCheck.appendChild(check);
    check.addEventListener('click', crossingOut);
    function crossingOut(){
        console.log(row);
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
        if(priority.value == 'low') {
            b.classList.add('text-success');
            if(priority.value == 'normal') {
                b.classList.add('text-primary');
            }
        } else {
            b.classList.add('text-danger');
        }
            
     row.appendChild(b);

     const c = document.createElement('td');
     c.innerHTML = date.value;
     row.appendChild(c);

     const d = document.createElement('td');
     d.innerHTML = status.value;
     row.appendChild(d);

     const e = document.createElement('td');
     const value = percentage.value;
     console.log(value);
     switch (value) {
         case '25%':
        e.innerHTML = `<div class="progress">
     <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
   </div>`; 
        break;
        case '50%':
            e.innerHTML = `<div class="progress">
     <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
   </div>`; 
        break;
        case '75%':
            e.innerHTML = `<div class="progress">
     <div class="progress-bar" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
   </div>`; 
        break;
        case '100%':
            e.innerHTML = `<div class="progress">
     <div class="progress-bar" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
   </div>`; 
        break;
        default:
            e.innerHTML = percentage.value;
     }
     row.appendChild(e);

     const deleteBtn = document.createElement('td');
     const delete1 = document.createElement('input');
     delete1.setAttribute('type', 'button');
     delete1.setAttribute('value', 'Delete');
     row.appendChild(deleteBtn);
     deleteBtn.appendChild(delete1);

     delete1.addEventListener('click', e => e.preventDefault());
     delete1.addEventListener('click', function(){
         console.log(list);
         list.removeChild(list.childNodes[0]);
     });

     
    } else  {
        alert('Fill all Fields')
        return;
    }
}