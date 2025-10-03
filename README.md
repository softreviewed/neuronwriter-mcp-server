# NEURONwriter MCP Server - Lifetime Deal Integration

**NEURONwriter MCP Server** - Access NEURON writer SEO content analysis and recommendations programmatically. Perfect for Neuron writer lifetime deal owners looking to automate content creation.

## 🚀 **NEURONwriter Lifetime Deal Available**

**NEURON writer lifetime deal is still available** if you have not yet purchased. Get the license and API key to start using this powerful MCP server!

👉 **[Get Your NEURONwriter Lifetime Deal](https://softreviewed.com/neuronwriter-ltd)**

## ✨ **Why NEURONwriter MCP Server?**

For **Neuron writer lifetime deal** owners, this MCP server unlocks:
- **Automated Content Analysis** - Get SEO recommendations instantly
- **Competitor Intelligence** - Access top 30 competitor data
- **Content Scoring** - Evaluate content quality programmatically
- **Bulk Processing** - Handle multiple queries at scale

## 💡 **Use Cases & Automation Workflows**

This MCP server allows you to integrate NEURONwriter's powerful SEO analysis into any automated workflow. Here are some examples of what you can build:

### **1. Programmatic Content Brief Generation**

Automate the creation of detailed content briefs for your writing team without ever opening the NEURONwriter UI.

*   **When to use:** When you have a list of keywords and need to generate briefs quickly.
*   **How it works:**
    1.  Use `list_projects` to get your project ID.
    2.  Loop through your keyword list and call `new_query` for each one.
    3.  Poll the `get_query` tool until the `status` is "ready".
    4.  Extract the `terms`, `competitors`, and `ideas` from the `get_query` response.
    5.  Format this data into a structured content brief (e.g., a Markdown file or a Trello card).

### **2. Bulk Content Scoring & Auditing**

Quickly evaluate the SEO score of hundreds of existing articles on your website.

*   **When to use:** For a site-wide content audit or to check if old content meets new SEO standards.
*   **How it works:**
    1.  Create a query for each article's target keyword using `new_query`.
    2.  Use a web scraper (or another MCP tool like `fetch-mcp`) to get the HTML of each live article.
    3.  Call the `evaluate_content` tool with the query ID and the article's HTML.
    4.  Log the `content_score` for each article into a spreadsheet to identify which pages need optimization.

### **3. AI-Powered Content Drafting Workflow**

Combine NEURONwriter with a large language model (like the one you're using now) to draft SEO-optimized articles automatically.

*   **When to use:** To scale content production for blogs, affiliate sites, or content marketing.
*   **How it works:**
    1.  Create a query with `new_query`.
    2.  Get the SEO recommendations from `get_query`.
    3.  Feed the recommended `terms`, `h1`/`h2` suggestions, and `content_questions` into a prompt for an AI model.
    4.  Instruct the AI to write an article that naturally incorporates these elements.
    5.  (Optional) Use `evaluate_content` to check the AI's draft and have it revise until the score is high enough.
    6.  Finally, use `import_content` to save the final draft in the NEURONwriter editor.

### **4. Integrating with Headless CMS**

Update your CMS with SEO recommendations directly.

*   **When to use:** If you use a headless CMS (like Contentful, Sanity, or Strapi) and want to provide writers with SEO guidance directly within their editing environment.
*   **How it works:**
    1.  When a new draft is created in your CMS, trigger a webhook.
    2.  The webhook runs a script that calls `new_query` and `get_query`.
    3.  The script then pushes the recommended terms and competitor data back to custom fields in your CMS via its API.

These are just a few examples. With these tools, you can build custom scripts and integrations to fit your exact SEO and content workflow needs.

## 🖥️ **Installation & Configuration**

### **Step 1: Install the Server**

First, you need to clone the repository and build the server on your local machine.

```bash
# 1. Clone the repository from GitHub
git clone https://github.com/softreviewed/neuronwriter-mcp-server.git

# 2. Navigate into the new directory
cd neuronwriter-mcp-server

# 3. Install all necessary dependencies
npm install

# 4. Build the server from the TypeScript source
npm run build
```

After this, you will have a `build/index.js` file inside the `neuronwriter-mcp-server` directory. You will need the **full, absolute path** to this file for the next step.

### **Step 2: Get Your NEURONwriter API Key**

1.  Go to **[NEURONwriter (via softreviewed.com)](https://softreviewed.com/neuronwriter-ltd)**
2.  Sign up or log in to your account.
3.  Navigate to **Profile → "NEURON API access"** tab.
4.  Copy your API key.

### **Step 3: Configure Your MCP Client**

#### **For VS Code Extensions (Kilo Code, Cline, Roo Code)**

Since Kilo Code, Cline, and Roo Code are all VS Code extensions, you configure them by editing a specific JSON file. The file location varies by extension.

**1. Find Your MCP Settings File:**

*   **For Kilo Code:**
    `C:\Users\[YourUsername]\AppData\Roaming\Code\User\globalStorage\kilocode.kilo-code\settings\mcp_settings.json`

*   **For Cline:**
    `C:\Users\[YourUsername]\AppData\Roaming\Code\User\globalStorage\saoudrizwan.claude-dev\settings\cline_mcp_settings.json`

*   **For Roo Code:**
    Check the extension's settings within VS Code to find the path to its MCP configuration file.

**2. Add the Server Configuration:**

Open the correct JSON file for your extension and add the `neuronwriter` server to the `mcpServers` object.

**Important:** Replace `"C:/path/to/your/project/neuronwriter-mcp-server/build/index.js"` with the actual **absolute path** to the `index.js` file you built in Step 1.

```json
{
  "mcpServers": {
    // ... other servers might be here ...
    "neuronwriter": {
      "type": "stdio",
      "command": "node",
      "args": [
        "C:/path/to/your/project/neuronwriter-mcp-server/build/index.js"
      ],
      "env": {
        "NEURONWRITER_API_KEY": "your-api-key-here"
      },
      "disabled": false,
      "alwaysAllow": [
        "list_projects",
        "get_query",
        "list_queries",
        "get_content",
        "import_content",
        "evaluate_content"
      ]
    }
  }
}
```

**3. Restart VS Code:**

Completely close and reopen VS Code to ensure the new MCP server is loaded correctly.

#### **For Standalone Clients (Claude Desktop, Cursor)**

For standalone clients, find their specific MCP configuration file and add the same JSON block from above, ensuring the `args` path is correct.

*   **Claude Desktop:** The configuration is usually at `%APPDATA%\Claude\claude_desktop_config.json` on Windows or `~/Library/Application Support/Claude/claude_desktop_config.json` on macOS.
*   **Cursor:** Find the MCP settings within the application's main settings/preferences menu.

You will add the same `neuronwriter` server block to the `mcpServers` object in their respective configuration files.


## 🤖 **Automation Integrations**

### Make.com Integration
Set up automation using the **neuron writer modules** for Make.com:
👉 **[NEURONwriter API for Make.com](https://softreviewed.com/product/custom-app-neuronwriter-api-for-make-com/)**

### Boost.space Integration
For **Boost space modules**, integrate NEURONwriter seamlessly:
👉 **[NEURONwriter API for Boost.space](https://softreviewed.com/product/custom-app-neuronwriter-api-for-boostspace/)**

## 🎯 **Available Tools**

*   **`list_projects`**: Get your NEURONwriter projects.
*   **`new_query`**: Create a new content analysis query.
*   **`get_query`**: Retrieve SEO recommendations for a query.
*   **`list_queries`**: Filter and find existing queries.
*   **`get_content`**: Export optimized content from the editor.
*   **`import_content`**: Import your own content for analysis.
*   **`evaluate_content`**: Score content quality without saving.


## 📝 **License**

MIT License - Free to use, modify, and distribute.

## 🤝 **Contributing**

Contributions are welcome! Please fork the repository and submit a pull request.

## 📞 **Support**

*   **NEURONwriter Official:** [neuronwriter.com](https://neuronwriter.com)
*   **Lifetime Deals:** [softreviewed.com/neuronwriter-ltd](https://softreviewed.com/neuronwriter-ltd)
*   **API Documentation:** [NeuronWriter API Docs](https://app.neuronwriter.com)

---

**Ready to supercharge your content creation?** Get the **NEURONwriter lifetime deal** today and start automating with this MCP server! 🚀