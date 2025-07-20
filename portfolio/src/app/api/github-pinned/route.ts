import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // Debug: print the env variable
    console.log("DEBUG: GITHUB_GRAPHQL_TOKEN=", process.env.GITHUB_GRAPHQL_TOKEN);
    const token = process.env.GITHUB_GRAPHQL_TOKEN;
    if (!token) {
      console.error("GitHub token not found in environment variables");
      return new Response(JSON.stringify({ error: "GitHub token not found in environment variables" }), { 
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }

    const query = `{
      user(login: \"Ebi-Tech\") {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              id
              name
              description
              url
              homepageUrl
              stargazerCount
              forkCount
              primaryLanguage { name }
              languages(first: 5) { nodes { name } }
            }
          }
        }
      }
    }`;

    console.log("Making request to GitHub GraphQL API...");
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ query }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("GitHub API error:", res.status, errorText);
      return new Response(JSON.stringify({ 
        error: "Failed to fetch from GitHub", 
        details: errorText,
        status: res.status 
      }), { 
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }

    const data = await res.json();
    console.log("GitHub API response received");
    
    if (data.errors) {
      console.error("GraphQL errors:", data.errors);
      return new Response(JSON.stringify({ 
        error: "GraphQL errors", 
        details: data.errors 
      }), { 
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }

    return new Response(JSON.stringify(data.data.user.pinnedItems.nodes), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("API route error:", error);
    return new Response(JSON.stringify({ 
      error: "Internal server error", 
      details: error instanceof Error ? error.message : "Unknown error" 
    }), { 
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
} 