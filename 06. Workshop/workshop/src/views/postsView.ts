import { services } from "../services/serviceInstances";
import type { Post } from "../types/Post";
import { HtmlRenderer } from "../utils/htmlRenderer";

function singlePostTemplate(post: Post) {
  return `
    <li>
        <h3>${post.title}</h3>
        <p>${post.body}</p>
    </li>
    `;
}

export async function postsTemplate(): Promise<void> {
  const res = await services.postsService.getAll();

  const template = `
    <h1>Posts</h1>
    <ul>
        ${res.map((p) => singlePostTemplate(p)).join("")}
    </ul>`;

  HtmlRenderer.render(template);
}
