console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        const imagesContainer = document.getElementById('dog-image-container');
        data.message.forEach(imageUrl => {
          const img = document.createElement('img');
          img.src = imageUrl;
          imagesContainer.appendChild(img);
        });
      })
      .catch(error => console.error('Error fetching images:', error));
  });

  document.addEventListener('DOMContentLoaded', function() {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    function fetchAndAddBreeds() {
      fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
          const breedsUl = document.getElementById('dog-breeds');
          breedsUl.innerHTML = "";
          for (const breed in data.message) {
            const breedItem = document.createElement('li');
            breedItem.textContent = breed;
            breedsUl.appendChild(breedItem);
          }
        })
        .catch(error => console.error('Error fetching breeds:', error));
    }
    fetchAndAddBreeds();
  });

  document.addEventListener('DOMContentLoaded', function() {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
  
    function fetchAndAddBreeds() {
      fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
          const breedsUl = document.getElementById('dog-breeds');
          breedsUl.innerHTML = "";
          for (const breed in data.message) {
            const breedItem = document.createElement('li');
            breedItem.textContent = breed;
            breedsUl.appendChild(breedItem);
            breedItem.addEventListener('click', function() {
              breedItem.style.color = 'blue';
            });
          }
        })
        .catch(error => console.error('Error fetching breeds:', error));
    }
    fetchAndAddBreeds();
  });

  document.addEventListener('DOMContentLoaded', function() {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
  
    function fetchAndAddBreeds() {
      fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
          const breedsUl = document.getElementById('dog-breeds');
          breedsUl.innerHTML = "";
          for (const breed in data.message) {
            const breedItem = document.createElement('li');
            breedItem.textContent = breed;
            breedsUl.appendChild(breedItem);
          }
        })
        .catch(error => console.error('Error fetching breeds:', error));
    }
    function filterBreedsByLetter(letter) {
      const breeds = document.getElementById('dog-breeds').getElementsByTagName('li');
      for (let breed of breeds) {
        if (breed.textContent.startsWith(letter)) {
          breed.style.display = 'block'; 
        } else {
          breed.style.display = 'none'; 
        }
      }
    }
  
    fetchAndAddBreeds();
    const dropdown = document.getElementById('breed-dropdown');
    dropdown.addEventListener('change', function() {
      const selectedLetter = dropdown.value;
      filterBreedsByLetter(selectedLetter);
    });
  });
  