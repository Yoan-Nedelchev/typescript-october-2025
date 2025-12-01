import { services } from "../services/serviceInstances";
import type { User } from "../types/User";
import { HtmlRenderer } from "../utils/htmlRenderer";

function singleUserTemplate(user: User) {
  return `
    <li>
        <h3>${user.name}</h3>
        <p>${user.company.name}</p>
    </li>
    `;
}

export async function usersTemplate(): Promise<void> {
  const res = await services.usersService.getAll();

  const template = `
    <h1>Users</h1>
    <ul>
        ${res.map((u) => singleUserTemplate(u)).join("")}
    </ul>`;

  HtmlRenderer.render(template);
}
