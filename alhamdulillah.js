
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const mainNav = document.getElementById('mainNav');
    
    navToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
    });

    initialMessages.forEach(msg => {
        addMessageCard(msg.name, msg.date, msg.message);
    });
    

    function addMessageCard(name, date, message) {
        const messageCard = document.createElement('div');
        messageCard.className = 'message-card';
        
        const messageHTML = `
            <div class="message-header">
                <span class="message-name">${name}</span>
                <span class="message-date">${date}</span>
            </div>
            <div class="message-body">
                <p>${message}</p>
            </div>
        `;
        
        messageCard.innerHTML = messageHTML;
        messagesContainer.prepend(messageCard);
    }
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
