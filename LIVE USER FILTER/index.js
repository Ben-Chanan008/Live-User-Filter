const result = document.getElementById('result');
const search = document.getElementById('search')
const listItems = [];

search.addEventListener('input', (e) => filterData(e.target.value))

getData()

async function getData(){
    const res = await fetch('https://randomuser.me/api?results=50');
    const data = await res.json();
    console.log(data)


    result.innerHTML = ''

    data.results.forEach(user => {
        // console.log(user)
        const list = document.createElement('li');
        
        listItems.push(list)
        
        list.innerHTML = `
            <img src="${user.picture.large}" alt="pic" />
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `
        result.appendChild(list)
    });
}

function filterData(searchTerm){
    listItems.forEach((item) => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
            item.classList.remove('hide')
        } else{
            item.classList.add('hide')
        }
    })
    console.log(searchTerm)
}


