document.getElementById('ticketForm').addEventListener('submit', async function(e) {
    e.preventDefault(); // Ngăn gửi form mặc định

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Dữ liệu gửi đến API
    const data = {
        name: name,
        email: email,
        subject: subject,
        message: message,
        ip: "127.0.0.1" // Thay bằng IP của người gửi nếu cần
    };

    try {
        const response = await fetch('http://your-osticket-domain/api/tickets.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': 'YOUR_API_KEY' // Thay bằng API Key
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('Ticket submitted successfully!');
        } else {
            alert('Failed to submit ticket. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
});
