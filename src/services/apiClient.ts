import { Octokit } from "@octokit/rest";
import { SearchResponse } from "../common/types";
import { Repository, User } from "../contexts/types";

export class ApiClient {
  octokitClient: Octokit;

  constructor() {
    this.octokitClient = new Octokit({
      auth: process.env.REACT_APP_NOT_GITHUB_TOKEN,
    });
  }

  async searchUsers(
    query: string,
    limit: number = 5,
    page: number = 1
  ): Promise<SearchResponse<User>> {
    return await this.octokitClient
      .request("GET /search/users", {
        q: `${query}+in:name`,
        per_page: limit,
        page,
      })
      .then((result) => {
        const { items, total_count, incomplete_results } = result.data;
        const users = items.map((item) => {
          const html_url = new URL(item.html_url);
          return {
            id: item.id,
            node_id: item.node_id,
            avatar_url: item.avatar_url,
            name: html_url.pathname.slice(1),
          };
        });
        return {
          total_count,
          incomplete_results,
          items: users,
        } as SearchResponse<User>;
      });
  }
  async getRepositoriesByUsername(
    username: string,
    limit: number = 10,
    page: number = 1
  ): Promise<Repository[]> {
    return await this.octokitClient
      .request(`GET /users/{username}/repos`, {
        username,
        per_page: limit,
        page,
      })
      .then((result) =>
        result.data.map((item) => {
          const repository: Repository = {
            id: item.id,
            node_id: item.node_id,
            name: item.name,
            description: item.description || "",
            stargazers_count: item.stargazers_count || 0,
          };
          return repository;
        })
      );
  }
}
