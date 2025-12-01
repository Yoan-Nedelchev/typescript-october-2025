import "./style.css";
import { Router } from "./utils/router";
import { createPostTemplate } from "./views/createPost";
import { postsTemplate } from "./views/postsView";
import { usersTemplate } from "./views/usersView";

const router = new Router({
  "/posts": postsTemplate,
  "/posts/create": createPostTemplate,
  "/users": usersTemplate
})

function setupLinks() {
  const allLinks = document.querySelectorAll("nav a");

  allLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      router.navigate((link as HTMLAnchorElement).pathname)
    })
  })
}

setupLinks()