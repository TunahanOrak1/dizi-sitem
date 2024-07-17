document.addEventListener('DOMContentLoaded', (event) => {
    let searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            searchH2();
        }
    });
});

function searchH2() {
    let searchTerm = document.getElementById('searchInput').value.toLowerCase();
    let contentDiv = document.querySelector('.content');
    let divElements = contentDiv.getElementsByTagName('div');
    let resultsDiv = document.getElementById('results');
    
    resultsDiv.innerHTML = '';
    let hasResults = false;

    for (let div of divElements) {
        let h2 = div.querySelector('h2');
        if (h2 && h2.innerText.toLowerCase().includes(searchTerm)) {
            hasResults = true;
            resultsDiv.appendChild(div.cloneNode(true));
        }
    }

    if (!hasResults) {
        resultsDiv.innerText = 'Sonuç bulunamadı.';
    }


    contentDiv.classList.add('hidden');
    resultsDiv.classList.remove('hidden');
}

function resetSearch() {
    document.getElementById('searchInput').value = '';
    document.querySelector('.content').classList.remove('hidden');
    document.getElementById('results').classList.add('hidden');
    document.getElementById('results').innerHTML = '';
}

const btn = document.querySelector("#btn");
const nav = document.querySelector("#nav");

btn.addEventListener("click", () => {
  nav.classList.toggle("active");
  btn.classList.toggle("active");
});

