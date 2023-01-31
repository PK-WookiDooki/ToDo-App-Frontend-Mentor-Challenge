const darkMood = document.getElementById("moonIcon");
const lightMood = document.getElementById("sunIcon");
let iGroup = document.querySelectorAll(".input-group");
let bgImage = document.querySelectorAll(".bgImage");
let toDoLists = document.querySelector(".toDoLists");

darkMood.onclick = () => {
  lightMood.classList.add("active");
  darkMood.classList.add("active");
  bgImage.forEach((image) => image.classList.add("active"));
  document.querySelector("body").classList.add("active");
};
lightMood.onclick = () => {
  lightMood.classList.remove("active");
  darkMood.classList.remove("active");
  bgImage.forEach((image) => image.classList.remove("active"));
  document.querySelector("body").classList.remove("active");
};

let listNumber = document.getElementById('listNumber');
let totalactiveLists = 6;

let fLinks = document.querySelector(".filterLinks");
window.onload = function () {
  fLinks.onclick = (link) => {
    if (link.target.classList.contains("flink")) {
      fLinks.querySelector(".active").classList.remove("active");
      link.target.classList.add("active");
    }
  };

  iGroup.forEach(group => {
    (group.querySelector('.circle')).onclick = function(){
      group.classList.toggle('active');
      if(group.classList.contains('active')){
        totalactiveLists -= 1;
      }
      else{
        totalactiveLists += 1;
      }
      listNumber.textContent = totalactiveLists;
    }
  });

  iGroup.forEach(group => {
    (group.querySelector('.text')).onclick = function(){
      group.classList.toggle('active');
      if(group.classList.contains('active')){
        totalactiveLists -= 1;
      }
      else{
        totalactiveLists += 1;
      }
      listNumber.textContent = totalactiveLists;
    }
  });

  iGroup.forEach(group => {
    group.querySelector('.closeBtn').onclick = function(){
      group.style.display = 'none';
      group.querySelector('.closeBtn').classList.add('active');
      if(group.classList.contains('active')){
        totalactiveLists = totalactiveLists;
      }
      else{
        totalactiveLists -= 1;
      }
      listNumber.textContent = totalactiveLists;
    }
  });
}


const addBtn = document.getElementById("addBtn");
let newInput = document.getElementById("textBox");
newInput.oninput = () => {
  addBtn.classList.add("active");
};
let listedItems = document.querySelector(".listedItems");
let listId = 0;
const forms = [];

addBtn.onclick = ()=> {
    if (newInput.value === "") {
        alert("You need to write something to make todo list!");
    }
    else{
        totalactiveLists += 1;
    listNumber.textContent = totalactiveLists;
    addBtn.classList.remove("active");

    let form = document.createElement("form");
    form.className = "input-group";
    listedItems.appendChild(form);

    let span = document.createElement('span');
    span.className = 'text';
    let inputText = newInput.value;
    span.textContent = inputText;
    form.appendChild(span);
    span.onclick = function(){
        form.classList.toggle('active');
        if(form.classList.contains('active')){
            totalactiveLists -= 1;
        }
        else{
            totalactiveLists += 1;
        }
        listNumber.textContent = totalactiveLists;
    }

    listId++;
    newInput.value = "";


    let circle = document.createElement("div");
    circle.className = "circle";
    form.appendChild(circle);

    circle.onclick = function(){
      form.classList.toggle('active');
      if(form.classList.contains('active')){
        totalactiveLists += 1;
      }
      else{
          totalactiveLists -= 1;
      }
      listNumber.textContent = totalactiveLists;
    }

    let tick = document.createElement("span");
    tick.className = "checkIcon";
    tick.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"> <path fill="none" stroke="#fff" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg>';
    form.appendChild(tick);


    let delBtn = document.createElement("span");
    delBtn.className = "closeBtn";
    delBtn.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>';
    form.appendChild(delBtn);
    delBtn.onclick = function(){
        delBtn.classList.add('active');
        this.parentElement.style.display = 'none';
        forms.pop(delBtn.parentElement);
        console.log(forms.length)
        if(delBtn.parentElement.classList.contains('active')){
            totalactiveLists = totalactiveLists;
          }
          else{
            totalactiveLists -= 1;
          }
          listNumber.textContent = totalactiveLists;
    }
    forms.push(form);
    console.log(forms.length)
    clear.onclick = function(){
        iGroup.forEach(group => {
          if(group.classList.contains('active')){
            group.style.display = 'none';
          }
          else{
            return;
          }
        })
        
        forms.forEach(form => {
          if(form.classList.contains('active')){
            form.style.display = 'none';
          }
          else{
              return;
          }
        })
      };
  
      allLists.onclick = () => {
        iGroup.forEach(group => {
          if(group.querySelector('.closeBtn').classList.contains('active')){
            group.style.display = 'none';
          }
          else{
            group.style.display = 'flex'
          }
      });
        forms.forEach(form => {
          if(delBtn.classList.contains('active')){
            form.style.display = 'none';
          }
          else{
            form.style.display = 'flex';
          }
        })
      }
  
      activeLists.onclick = function(){
        iGroup.forEach(group => {
          if(group.classList.contains('active') || group.querySelector('.closeBtn').classList.contains('active')){
            group.style.display = 'none';
          }
          else{
            group.style.display = 'flex'
          }
        });
  
        forms.forEach(form => {
          if(form.classList.contains('active') || delBtn.classList.contains('active')){
            form.style.display = 'none';
          }
          else{
            form.style.display = 'flex';
          }
        })
      }
  
      completedLists.onclick = function(){
        iGroup.forEach(group => {
          if(group.classList.contains('active') && group.querySelector('.closeBtn').classList.contains('active')){
            group.style.display = 'none';
          }
          else if(group.classList.contains('active')){
            group.style.display = 'flex';
          }
          else{
            group.style.display = 'none';
          }
        });
  
        forms.forEach(form => {
            if(form.classList.contains('active') && delBtn.classList.contains('active')){
              form.style.display = 'none';
            }
            else if(form.classList.contains('active')){
              form.style.display = 'flex';
            }
            else{
              form.style.display = 'none';
            }
          });
        
      }

    }
}


let allLists = document.getElementById('all');
allLists.onclick = () => {
  iGroup.forEach(group => {
      if(group.querySelector('.closeBtn').classList.contains('active')){
        group.style.display = 'none';
      }
      else{
        group.style.display = 'flex'
      }
  });
}

let activeLists = document.getElementById('activeLists');
activeLists.onclick = function(){
  iGroup.forEach(group => {
    if(group.classList.contains('active') || group.querySelector('.closeBtn').classList.contains('active')){
      group.style.display = 'none';
    }
    else{
      group.style.display = 'flex'
    }
  });
}

let completedLists = document.getElementById('completedLists');
completedLists.onclick = function(){
  iGroup.forEach(group => {
    if(group.classList.contains('active') && group.querySelector('.closeBtn').classList.contains('active')){
      group.style.display = 'none';
    }
    else if(group.classList.contains('active')){
      group.style.display = 'flex';
    }
    else{
      group.style.display = 'none';
    }
  });
}

let clear = document.getElementById('clear');
clear.onclick =  function(){
  clear.classList.toggle('active');
  iGroup.forEach(group => {
    if(group.classList.contains('active')){
      group.style.display = 'none';
    }
    else{
      return;
    }
  })
}