// src/App.tsx

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import cloudflareLogo from "./assets/Cloudflare_Logo.svg";
import honoLogo from "./assets/hono.svg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("unknown");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center gap-8 mb-8">
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="h-16 w-16 hover:drop-shadow-lg transition-all" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="h-16 w-16 hover:drop-shadow-lg transition-all animate-spin" alt="React logo" />
          </a>
          <a href="https://hono.dev/" target="_blank" rel="noopener noreferrer">
            <img src={honoLogo} className="h-16 w-16 hover:drop-shadow-lg transition-all" alt="Hono logo" />
          </a>
          <a href="https://workers.cloudflare.com/" target="_blank" rel="noopener noreferrer">
          <img
            src={cloudflareLogo}
            className="logo cloudflare"
            alt="Cloudflare logo"
          />
          </a>
        </div>
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">
            Cloudflare Fullstack Template
          </h1>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <Badge variant="default">React 19</Badge>
            <Badge variant="secondary">Vite</Badge>
            <Badge variant="outline">Hono</Badge>
            <Badge variant="secondary">Cloudflare</Badge>
            <Badge variant="default">shadcn/ui</Badge>
            <Badge variant="outline">Tailwind CSS</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            A modern fullstack template with React, Vite, Hono, and shadcn/ui
          </p>
        </div>
        
        <div className="flex flex-col items-center gap-6 max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Counter Demo</CardTitle>
              <CardDescription>
                Test the React state management with this interactive counter.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
              <Button
                onClick={() => setCount((count) => count + 1)}
                aria-label="increment"
                size="lg"
              >
                count is {count}
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                Edit <code className="bg-muted px-1 py-0.5 rounded">src/App.tsx</code> and save to test HMR
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>API Demo</CardTitle>
              <CardDescription>
                Test the Hono backend API running on Cloudflare Workers.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
              <Button
                onClick={() => {
                  fetch("/api/")
                    .then((res) => res.json() as Promise<{ name: string }>)
                    .then((data) => setName(data.name));
                }}
                aria-label="get name"
                variant="secondary"
                size="lg"
              >
                Name from API is: {name}
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                Edit <code className="bg-muted px-1 py-0.5 rounded">worker/index.ts</code> to change the name
              </p>
            </CardContent>
          </Card>
          
          <p className="text-sm text-muted-foreground text-center mt-4">
            Click on the logos to learn more
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
