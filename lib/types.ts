export interface SearchQuery {
  query: string;
}

export interface SearchResponse {
  response: string;
  codeSnippets?: string[];
  references?: string[];
}