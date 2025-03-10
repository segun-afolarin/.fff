document.addEventListener("DOMContentLoaded", function () {
  // Select all "Read More" links
  const readMoreLinks = document.querySelectorAll(".read-more");

  readMoreLinks.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link action

      const parentArticle = this.closest("article");
      let extraContent = parentArticle.querySelector(".extra-content");

      // If extra content does not exist, create it
      if (!extraContent) {
        extraContent = document.createElement("p");
        extraContent.classList.add("extra-content");

        // Define additional text for each section
        if (parentArticle.querySelector("h3").textContent.includes("Major Upset")) {
          extraContent.innerHTML = "The match was full of surprises as the underdog team fought back from 2-0 down to snatch a dramatic win!";
        } else if (parentArticle.querySelector("h3").textContent.includes("Rising Star")) {
          extraContent.innerHTML = "Scouts from top clubs are keeping a close eye on this young player, who continues to impress with incredible performances.";
        } else if (parentArticle.querySelector("h3").textContent.includes("Championship Race")) {
          extraContent.innerHTML = "With only a few matches remaining, every game is crucial in determining who lifts the trophy at the end of the season.";
        }

        parentArticle.appendChild(extraContent);
        this.innerHTML = '<i class="fas fa-chevron-up"></i> Show Less';
      } else {
        // If content exists, remove it
        extraContent.remove();
        this.innerHTML = '<i class="fas fa-arrow-right"></i> Read More';
      }
    });
  });

  // Adding "Learn More" buttons to video sections
  const videoItems = document.querySelectorAll(".video-item");

  videoItems.forEach(video => {
    let learnMoreBtn = document.createElement("button");
    learnMoreBtn.classList.add("learn-more");
    learnMoreBtn.innerHTML = '<i class="fas fa-plus"></i> Learn More';

    video.appendChild(learnMoreBtn);

    learnMoreBtn.addEventListener("click", function () {
      let extraContent = video.querySelector(".extra-content");

      if (!extraContent) {
        extraContent = document.createElement("p");
        extraContent.classList.add("extra-content");

        // Define additional text for each video
        if (video.querySelector("h3").textContent.includes("Match Highlights")) {
          extraContent.innerHTML = "Relive the thrilling moments from this game, including last-minute goals and incredible saves.";
        } else if (video.querySelector("h3").textContent.includes("Exclusive Interview")) {
          extraContent.innerHTML = "Hear from the star player about his training, challenges, and future ambitions in this exclusive chat.";
        } else if (video.querySelector("h3").textContent.includes("Top 10 Goals")) {
          extraContent.innerHTML = "Check out some of the most stunning goals from around the world, featuring amazing skills and long-range strikes.";
        }

        video.appendChild(extraContent);
        this.innerHTML = '<i class="fas fa-chevron-up"></i> Show Less';
      } else {
        extraContent.remove();
        this.innerHTML = '<i class="fas fa-plus"></i> Learn More';
      }
    });
  });
});
