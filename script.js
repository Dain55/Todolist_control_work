let people = document.querySelector('.info-people')
let searchInp = document.querySelector("#search");
let inps = document.querySelectorAll('#inpTodo')
let btn_add = document.querySelector('#btnAdd')
let allHuman = document.querySelector('#allHuman')
let goodJob = document.querySelector('#Good_Job')
let money = document.querySelector('#UpMoney')
let h1 = document.querySelector('#value')

let form = document.forms.todos


let GoodJob = []

let arr =  [
    { name: 'Сохиб Курбон', salary: 800, increase: false, rise: true, id: 1 },
    { name: 'Шахзод Хамидов', salary: 3000, increase: true, rise: false, id: 2 },
    { name: 'Далер Шарифкулов', salary: 5000, increase: false, rise: false, id: 3 },
    { name: 'Бекзод Хамидов', salary: 5000, increase: false, rise: false, id: 4 },
    { name: 'Алишер Мардиев', salary: 5000, increase: false, rise: false, id: 5 },
    { name: 'Мухаммад', salary: 5000, increase: false, rise: false, id: 6 },
    { name: 'Сабина Яковлева', salary: 5000, increase: false, rise: false, id: 7 },
    { name: 'Руфина', salary: 5000, increase: false, rise: false, id: 8 },
    { name: 'Хуршида', salary: 5000, increase: false, rise: false, id: 9 },
    { name: 'Дилшод Муртазоев', salary: 5000, increase: false, rise: false, id: 10 },
    { name: 'Ориф', salary: 5000, increase: false, rise: false, id: 11 },
    { name: 'Улугбек', salary: 5000, increase: false, rise: false, id: 12 },
    { name: 'Влад Цой', salary: 5000, increase: false, rise: false, id: 13 },
    { name: 'Алина', salary: 5000, increase: false, rise: false, id: 14 },
]

searchInp.oninput = () => {
  let searchkey = searchInp.value.trim().toLowerCase();

  let filtered = arr.filter((item) => {
    let title = item.name.trim().toLowerCase();

    if (title.includes(searchkey)) {
      return item;
    }
  });
  reload(filtered, searchkey)
}



btn_add.onclick = (e) => {
    let value = 0
    e.preventDefault()
    inps.forEach(inp => {
        if (inp.value.length === 0) {
            value++
        } 
    })
    if (value > 0) {
        console.log("error");
    } else {
        submit()
    }
}
console.log(arr);

function submit(e) {
    let todo = {
       id:Math.random(),
       increase: false, 
       rise: false,
    };

    let fm = new FormData(form);
  
    fm.forEach((value, key) => {
      todo[key] = value;
    });
    arr.push(todo)
    reload(arr)
}

function reload(arr) {
    people.innerHTML = "";
    for(let item of arr) {
        let div = document.createElement('div')
        let span = document.createElement('span')
        let input = document.createElement('input')
        let btn_good = document.createElement('img')
        let btn_delete = document.createElement('img')
        let btn_star = document.createElement('i')

        div.classList.add('list_item')
        span.classList.add('list_item_text')
        input.classList.add('list_item_input')
        btn_good.classList.add('img-item')
        btn_delete.classList.add('img-item')
        btn_star.classList.add('img-item')

        span.innerHTML = `${item.name}`
        input.value = `${item.salary}$`
        
        btn_good.src ='./icons/cookies.png'
        btn_delete.src = '/icons/delete.png'
  

        people.append(div)
        div.append(span,input,btn_good,btn_delete,btn_star)


        btn_delete.onclick = () => {
          arr = arr.filter((el) => el.id !== item.id);
          reload(arr, people);
        };
        span.onclick = () => {

        }

        btn_good.onclick = () => {
          if (GoodJob.includes(item.id)) {
          span.style.color =''
          input.style.color = ''
          GoodJob = GoodJob.filter(id => id !== item.id)
    
          } else {
            span.style.color ='#E09F3E'
            input.style.color = '#E09F3E'
           
            GoodJob.push(item.id)
          }   
    
          h1.innerHTML = `Премию получат: ${GoodJob.length}`
        }
   
        }
    }


reload(arr)