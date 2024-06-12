document.getElementById('showMoreBtn').addEventListener('click', function() {
    const cardContainer = document.getElementById('cardContainer');
    
    const newCards = [
        {text: 'MANGSHO', img: 'https://via.placeholder.com/485', price: '$70.00'},
        {text: 'KALAVUNA', img: 'https://via.placeholder.com/485', price: '$80.00'},
        {text: 'TEHRI', img: 'https://via.placeholder.com/485', price: '$90.00'},
        {text: 'BIRIYANI', img: 'https://via.placeholder.com/485', price: '$100.00'},
        {text: 'POROTA', img: 'https://via.placeholder.com/485', price: '$110.00'},
        {text: 'MONGLAI', img: 'https://via.placeholder.com/485', price: '$120.00'}
    ];

    newCards.forEach(cardData => {
        const card = document.createElement('div');
        card.className = 'card';
        
        const img = document.createElement('img');
        img.src = cardData.img;
        img.alt = 'Placeholder Image';
        
        const cardContent = document.createElement('div');
        cardContent.className = 'card-content';

        const title = document.createElement('p');
        title.className = 'card-title';
        title.textContent = cardData.text;
        
        const price = document.createElement('p');
        price.className = 'card-price';
        price.textContent = cardData.price;
        
        const button = document.createElement('button');
        button.className = 'add-to-cart';
        button.textContent = 'Add to Cart';
        
        cardContent.appendChild(title);
        cardContent.appendChild(price);
        cardContent.appendChild(button);

        card.appendChild(img);
        card.appendChild(cardContent);
        
        cardContainer.appendChild(card);
    });

    this.style.display = 'none';  // Hide the "Show More" button after clicking
    document.getElementById('showLessBtn').style.display = 'inline'; // Show the "Show Less" button
});

document.getElementById('showLessBtn').addEventListener('click', function() {
    const cardContainer = document.getElementById('cardContainer');
    
    // Remove the last 6 cards
    for (let i = 0; i < 6; i++) {
        cardContainer.removeChild(cardContainer.lastElementChild);
    }

    this.style.display = 'none';  // Hide the "Show Less" button after clicking
    document.getElementById('showMoreBtn').style.display = 'inline'; // Show the "Show More" button
});
document.getElementById('subscribeBtn').addEventListener('click', function() {
    const emailInput = document.getElementById('emailInput');
    const message = document.getElementById('message');
  
    if (emailInput.value === '') {
      message.textContent = 'Please enter your email address';
      message.style.display = 'block';
    } else {
      // Simulating submission to a server
      setTimeout(function() {
        message.textContent = 'Registered successfully!';
        message.style.display = 'block';
        emailInput.value = ''; // Clear the input after successful registration
      }, 1000);
    }
  });
  