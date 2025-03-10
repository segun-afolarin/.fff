document.addEventListener("DOMContentLoaded", function () {
    // Show welcome alert before displaying the page
    setTimeout(() => {
      alert("Welcome to Afolarin's Football Hub! ⚽🔥 Enjoy exclusive football content.");
    }, 500); // Delay the alert slightly for a smooth experience
  
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
            <p> ⚽ 🏆 🥅 🎯 Football 
"March was packed with action! Some key moments include dramatic Champions League knockout matches, intense league title races heating up, and standout performances from top players."</p>
 <p>🌍 General News 
"March had several key moments, including major political events, tech advancements, and global discussions on AI, climate, and economy."</p>
<p>🎭 Entertainment 
"March saw big movie releases, trending music albums, and viral internet moments that took over social media."</p>
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
  