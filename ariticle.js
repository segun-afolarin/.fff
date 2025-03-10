document.addEventListener("DOMContentLoaded", function () {
    // Select all "Read More" links
    const readMoreLinks = document.querySelectorAll(".read-more");
  
    readMoreLinks.forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link action
  
        // Find the article's extra content
        const article = this.closest("article");
        let extraContent = article.querySelector(".extra-content");
  
        // If extra content does not exist, create it dynamically
        if (!extraContent) {
          extraContent = document.createElement("div");
          extraContent.classList.add("extra-content");
          extraContent.style.display = "none";
          extraContent.innerHTML = `
            <p>More insights on this topic, including expert analysis, historical comparisons, and player interviews.</p>
            <p>Stay tuned for in-depth breakdowns and statistics that give you an edge in understanding modern football.</p>
          `;
          article.insertBefore(extraContent, this); // Insert before Read More link
        }
  
        // Toggle visibility of extra content
        if (extraContent.style.display === "none" || extraContent.style.display === "") {
          extraContent.style.display = "block";
          this.innerHTML = '<i class="fas fa-arrow-up"></i> Read Less';
        } else {
          extraContent.style.display = "none";
          this.innerHTML = '<i class="fas fa-arrow-right"></i> Read More';
        }
      });
    });
  });
  