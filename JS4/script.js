
const fruits = [
    'Apple',
    'Banana',
    'Orange',
    'Grape',
    'Strawberry',
    'Watermelon',
    'Peach',
    'Pineapple',
    'Kiwi',
    'Mango',
    'Blueberry',
    'Raspberry',
    'Cherry',
    'Lemon',
    'Lime'
];


const searchInput = document.getElementById('searchInput');
const fruitList = document.getElementById('fruitList');
const noResults = document.getElementById('noResults');
const resultCount = document.getElementById('resultCount');

function renderFruits() {
    fruitList.innerHTML = '';
    
    fruits.forEach(fruit => {
        const li = document.createElement('li');
        li.textContent = fruit;
        li.setAttribute('data-fruit', fruit.toLowerCase());
        fruitList.appendChild(li);
    });
}


function filterFruits() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const items = fruitList.querySelectorAll('li');
    let visibleCount = 0;
    
    items.forEach(item => {
        const fruitName = item.getAttribute('data-fruit');
        
        if (fruitName.includes(searchTerm)) {
            item.classList.remove('hidden');
            visibleCount++;
        } else {
            item.classList.add('hidden');
        }
    });
    

    if (searchTerm === '') {
        resultCount.textContent = 'Showing all fruits';
    } else {
        resultCount.textContent = `Found ${visibleCount} fruit${visibleCount !== 1 ? 's' : ''}`;
    }
    

    if (visibleCount === 0) {
        noResults.style.display = 'block';
        fruitList.style.display = 'none';
    } else {
        noResults.style.display = 'none';
        fruitList.style.display = 'block';
    }
}


renderFruits();


searchInput.addEventListener('input', filterFruits);
