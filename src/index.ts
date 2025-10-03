#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";
import axios from 'axios';

const API_KEY = process.env.NEURONWRITER_API_KEY;
if (!API_KEY) {
  throw new Error('NEURONWRITER_API_KEY environment variable is required');
}

const API_ENDPOINT = 'https://app.neuronwriter.com/neuron-api/0.5/writer';

// Create axios instance
const apiClient = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    'X-API-KEY': API_KEY,
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

// Define tools
const tools = [
  {
    name: "list_projects",
    description: "Retrieves a list of projects within the used account.",
    inputSchema: {
      type: "object",
      properties: {},
    },
  },
  {
    name: "new_query",
    description: "Creates a new content writer query for a given keyword, language and search engine.",
    inputSchema: {
      type: "object",
      properties: {
        project: { type: "string", description: "The ID of your project taken from project's URL" },
        keyword: { type: "string", description: "The keyword you want to generate a query for" },
        engine: { type: "string", description: "Preferred search engine" },
        language: { type: "string", description: "Content language" },
        additional_keywords: { type: "array", items: { type: "string" }, description: "Additional supporting keywords" },
        competitors_mode: { type: "string", enum: ["top10", "top30", "top-intent"], description: "Affects how competitors are selected" },
      },
      required: ["project", "keyword", "engine", "language"],
    },
  },
  {
    name: "get_query",
    description: "Retrieves content recommendations for a given query.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "The ID of your query" },
      },
      required: ["query"],
    },
  },
  {
    name: "list_queries",
    description: "Retrieves queries within a project matching your criteria.",
    inputSchema: {
      type: "object",
      properties: {
        project: { type: "string", description: "The ID of your project" },
        status: { type: "string", enum: ["waiting", "in progress", "ready"], description: "Query status" },
        source: { type: "string", enum: ["neuron", "neuron-api"], description: "How was the query created" },
        created: { type: "string", description: "Creation date" },
        updated: { type: "string", description: "Query update date" },
        keyword: { type: "string", description: "Main keyword" },
        language: { type: "string", description: "Language used" },
        engine: { type: "string", description: "Search engine used" },
        tags: { type: "string", description: "Tags to filter by" },
      },
      required: ["project"],
    },
  },
  {
    name: "get_content",
    description: "Retrieves the last content revision saved for a given query.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "The ID of your query" },
        revision_type: { type: "string", enum: ["manual", "all"], description: "Whether autosave revisions should be considered" },
      },
      required: ["query"],
    },
  },
  {
    name: "import_content",
    description: "Allows you to update the editor content via API for a given query.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "The ID of your query" },
        html: { type: "string", description: "HTML content to import" },
        title: { type: "string", description: "Title of the article" },
        description: { type: "string", description: "Meta description" },
        url: { type: "string", description: "URL to auto-import content from" },
        id: { type: "string", description: "ID of container for URL import" },
        class: { type: "string", description: "Class of container for URL import" },
      },
      required: ["query"],
    },
  },
  {
    name: "evaluate_content",
    description: "Evaluates the content score without saving.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "The ID of your query" },
        html: { type: "string", description: "HTML content to evaluate" },
        title: { type: "string", description: "Title of the article" },
        description: { type: "string", description: "Meta description" },
        url: { type: "string", description: "URL to auto-import content from" },
        id: { type: "string", description: "ID of container for URL import" },
        class: { type: "string", description: "Class of container for URL import" },
      },
      required: ["query"],
    },
  },
];

// Create an MCP server
const server = new Server({
  name: "neuronwriter-server",
  version: "0.1.0",
}, {
  capabilities: {
    tools: {},
  },
});

// Define tool functions
const toolFunctions: Record<string, (args: any) => Promise<any>> = {
  list_projects: async () => {
    const response = await apiClient.post('/list-projects');
    return response.data;
  },
  new_query: async (args: any) => {
    const response = await apiClient.post('/new-query', args);
    return response.data;
  },
  get_query: async (args: any) => {
    const response = await apiClient.post('/get-query', args);
    return response.data;
  },
  list_queries: async (args: any) => {
    const response = await apiClient.post('/list-queries', args);
    return response.data;
  },
  get_content: async (args: any) => {
    const response = await apiClient.post('/get-content', args);
    return response.data;
  },
  import_content: async (args: any) => {
    const response = await apiClient.post('/import-content', args);
    return response.data;
  },
  evaluate_content: async (args: any) => {
    const response = await apiClient.post('/evaluate-content', args);
    return response.data;
  },
};

// Set request handlers
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return { tools };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;
  try {
    const result = await toolFunctions[name](args);
    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(result, null, 2),
        },
      ],
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        content: [
          {
            type: "text",
            text: `API error: ${error.response?.data?.message ?? error.message}`,
          },
        ],
        isError: true,
      };
    }
    throw error;
  }
});

// Start the server
const transport = new StdioServerTransport();
await server.connect(transport);
console.error('NeuronWriter MCP server running on stdio');
