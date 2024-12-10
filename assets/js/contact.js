emailjs.init("dReT0uoi1imugpyga");


const form = document.querySelector(".form"); // Ensure the correct form is selected
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form behavior

    const formData = new FormData(form);
    const params = {
        from_name: formData.get("fullname"),
        reply_to: formData.get("email"),
        message: formData.get("message"),
    };

    emailjs.send("service_8pw4c9j", "template_myar2ko", params)
        .then(
            function (response) {
                console.log("SUCCESS!", response.status, response.text);
                alert("Your message has been sent successfully!");
                form.reset(); // Clear the form on success
            },
            function (error) {
                console.error("FAILED...", error);
                alert("Failed to send the message. Please try again.");
            }
        );
});
