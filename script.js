document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting the default way

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    // Optionally: Add email format validation
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // You can send the data to a backend or third-party service here
    console.log("Form submitted:", { name, email, message });

    // Clear the form and show a success message
    form.reset();
    alert("Thank you! Your message has been sent.");
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
});
