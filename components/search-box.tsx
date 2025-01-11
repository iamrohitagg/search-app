"use client";

import { useState } from "react";
import { useToast } from "../hooks/use-toast";
import { SearchForm } from "./search-form";
import { ResponseCard } from "./response-card";

export function SearchBox() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResponse("");

    if (!query.trim()) {
      setError("Please enter a search query");
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch("/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });
      console.log("data is ", res);

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to get response");
      }

      setResponse(data.response);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "An unexpected error occurred";
      console.log(message);
      setError(message);
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-8">
      <SearchForm
        query={query}
        isLoading={isLoading}
        onQueryChange={setQuery}
        onSubmit={handleSearch}
      />
      {error && (
        <div className="p-4 rounded-lg bg-destructive/10 text-destructive">
          <p>{error}</p>
        </div>
      )}
      <ResponseCard response={response} />
    </div>
  );
}
