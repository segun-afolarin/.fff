document.addEventListener("DOMContentLoaded", () => {
    // Animate header text
    const headerText = document.querySelector("header h1");
    headerText.style.opacity = "0";
    headerText.style.transform = "translateY(-20px)";
    setTimeout(() => {
        headerText.style.transition = "opacity 1.5s ease, transform 1.5s ease";
        headerText.style.opacity = "1";
        headerText.style.transform = "translateY(0)";
    }, 500);

    // Profile Image Hover Effect
    const profilePic = document.querySelector(".profile-pic");
    profilePic.addEventListener("mouseover", () => {
        profilePic.style.transform = "rotate(5deg) scale(1.1)";
    });

    profilePic.addEventListener("mouseout", () => {
        profilePic.style.transform = "rotate(0) scale(1)";
    });

    // Animate list items one by one
    const listItems = document.querySelectorAll(".about ul li");
    listItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "translateX(0)";
        }, (index + 1) * 400);
    });

    // Button Hover Effects
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.1)";
        });
        button.addEventListener("mouseout", () => {
            button.style.transform = "scale(1)";
        });
    });

    // Smooth Scroll on Page Load
    window.scrollTo({ top: 0, behavior: "smooth" });
});
