document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submitBtn').addEventListener('click', function (event) {
        event.preventDefault();
        // Form doğrulama kodları buraya
        alert('Form gönderildi!');
    });

    document.getElementById('resetBtn').addEventListener('click', function () {
        // Formu temizleme kodları buraya
        document.getElementById('contactForm').reset();
        alert('Form temizlendi!');
    });
});
