  // Sample data
  const cardData = [
    {
      imageUrl: '/new/src/html.png',
      title: 'HTML5',
      description: 'This is Card 1',
    },
    {
      imageUrl: '/new/src/css.png',
      title: 'CSS3',
      description: 'This is Card 2',
    },
  ];

  // Function to create and append cards to the container
  function createCard(data) {
    const cardContainer = document.getElementById('card-container');

    data.forEach((item) => {
      const card = document.createElement('div');
      card.classList.add('card', 'shadow-lg', 'rounded-lg','md:flex-col','flex-wrap', 'bg-white','p-2','flex','justify-center','items-center','overflow-hidden');
      card.innerHTML = `
        <img src="${item.imageUrl}" alt="${item.title}" class="w-full h-auto">
        <div class="p-4">
       
          <p class="text-gray-100">${item.description}</p>
          
        </div>
      `;

      cardContainer.appendChild(card);
    });
  }

  // Call the createCard function with the data
  createCard(cardData);