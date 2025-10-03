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

## 🖥️ **Integration with Popular MCP Clients**

### **Cline (VS Code Extension)**

1. **Install Cline Extension** in VS Code
2. **Configure MCP Settings**:
   - Open VS Code Command Palette (`Ctrl+Shift+P`)
   - Search for "Cline: Open MCP Settings"
   - Add to the JSON configuration:

```json
{
  "mcpServers": {
    "neuronwriter": {
      "command": "node",
      "args": ["/absolute/path/to/neuronwriter-mcp-server/build/index.js"],
      "env": {
        "NEURONWRITER_API_KEY": "your-api-key-here"
      },
      "disabled": false,
      "timeout": 30000
    }
  }
}
```

3. **Restart VS Code** - Cline will automatically load the NEURONwriter tools.

### **Kilo Code (AI-First IDE)**

1. **Kilo Code has built-in MCP support** - no additional extension needed
2. **Locate MCP Settings**:
   - Go to Settings → AI → MCP
   - Or find the config file at: `~/Library/Application Support/kilocode/settings/mcp_settings.json` (macOS) or equivalent Windows path

3. **Add Server Configuration**:
```json
{
  "mcpServers": {
    "neuronwriter": {
      "type": "stdio", 
      "command": "node",
      "args": ["/path/to/neuronwriter-mcp-server/build/index.js"],
      "env": {
        "NEURONWRITER_API_KEY": "your-api-key-here"
      },
      "disabled": false,
      "alwaysAllow": ["list_projects", "get_query"],
      "disabledTools": []
    }
  }
}
```

4. **Restart Kilo Code** to activate the server.

### **Roo Code (VS Code Extension)**

1. **Install Roo Code Extension** from VS Code marketplace
2. **Configure MCP**:
   - Open VS Code settings
   - Search for "Roo Code MCP"
   - Add server configuration:

```json
{
  "roo-code.mcp.servers": {
    "neuronwriter": {
      "command": "node",
      "args": ["/path/to/neuronwriter-mcp-server/build/index.js"], 
      "env": {
        "NEURONWRITER_API_KEY": "your-api-key-here"
      },
      "disabled": false
    }
  }
}
```

3. **Reload VS Code** - Roo Code will detect and load the NEURONwriter MCP server.

### **VS Code (with Kilo-Code Extension)**

1. **Install the MCP Server**:
```bash
git clone https://github.com/yourusername/neuronwriter-mcp-server.git
cd neuronwriter-mcp-server
npm install && npm run build
```

2. **Configure MCP Settings**:
   - Open VS Code
   - Go to Settings → Extensions → Kilo-Code
   - Find the MCP settings file path
   - Edit `mcp_settings.json` and add:

```json
{
  "mcpServers": {
    "neuronwriter": {
      "type": "stdio",
      "command": "node",
      "args": ["/path/to/neuronwriter-mcp-server/build/index.js"],
      "env": {
        "NEURONWRITER_API_KEY": "your-api-key-here"
      },
      "disabled": false,
      "alwaysAllow": [],
      "disabledTools": []
    }
  }
}
```

3. **Restart VS Code** and the server will be available.

### **Claude Code (Anthropic)**

1. **Install Claude Code**:
```bash
npm install -g @anthropic/claude-code
```

2. **Configure MCP**:
   - Create or edit `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS)
   - Or `%APPDATA%/Claude/claude_desktop_config.json` (Windows)
   - Add the server configuration:

```json
{
  "mcpServers": {
    "neuronwriter": {
      "command": "node",
      "args": ["/path/to/neuronwriter-mcp-server/build/index.js"],
      "env": {
        "NEURONWRITER_API_KEY": "your-api-key-here"
      }
    }
  }
}
```

3. **Restart Claude Desktop** to load the server.

### **Cursor (AI Code Editor)**

1. **Install the MCP Server** (same as above)

2. **Configure Cursor MCP**:
   - Open Cursor settings
   - Go to MCP → Servers
   - Add new server:
     - **Name**: NEURONwriter
     - **Type**: Command
     - **Command**: `node /path/to/neuronwriter-mcp-server/build/index.js`
     - **Environment Variables**:
       - `NEURONWRITER_API_KEY=your-api-key-here`

3. **Save and restart** Cursor.

### **Windsurf (Code Editor with MCP)**

1. **Install Server** (same as above)

2. **Configure in Windsurf**:
   - Open settings
   - Navigate to AI → MCP Servers
   - Add server:
```json
{
  "name": "neuronwriter",
  "command": "node",
  "args": ["/path/to/neuronwriter-mcp-server/build/index.js"],
  "env": {
    "NEURONWRITER_API_KEY": "your-api-key-here"
  }
}
```

### **Other MCP Clients (Cline, Roo Code, etc.)**

For other MCP-compatible clients:

1. **Build the server** as above
2. **Add to client config** following their MCP setup guide
3. **Use the same configuration format**:
```json
{
  "mcpServers": {
    "neuronwriter": {
      "command": "node",
      "args": ["path/to/build/index.js"],
      "env": {
        "NEURONWRITER_API_KEY": "your-key"
      }
    }
  }
}
```

## 🔧 **Environment Setup**

### **Get Your NEURONwriter API Key**

1. Go to [NEURONwriter](https://neuronwriter.com)
2. Sign up/Login to your account
3. Navigate to Profile → "NEURON API access" tab
4. Copy your API key

### **NEURONwriter Lifetime Deal**

**NEURON writer lifetime deal is still available** - get unlimited access!
👉 **[Get Lifetime Deal](https://softreviewed.com/neuronwriter-ltd)**

## 🤖 **Automation Integrations**

### Make.com Integration
Set up automation using the **neuron writer modules** for Make.com:
👉 **[NEURONwriter API for Make.com](https://softreviewed.com/product/custom-app-neuronwriter-api-for-make-com/)**

### Boost.space Integration  
For **Boost space modules**, integrate NEURONwriter seamlessly:
👉 **[NEURONwriter API for Boost.space](https://softreviewed.com/product/custom-app-neuronwriter-api-for-boostspace/)**

## 🎯 **Available Tools**

### Content Analysis
- `list_projects` - Get your NEURONwriter projects
- `new_query` - Create content analysis queries
- `get_query` - Retrieve SEO recommendations
- `list_queries` - Filter and find queries

### Content Management  
- `get_content` - Export optimized content
- `import_content` - Import content for analysis
- `evaluate_content` - Score content quality

## 📊 **Example Usage**

```javascript
// Create a content analysis query
const result = await neuronwriter.new_query({
  project: "your-project-id",
  keyword: "pictory coupon code",
  engine: "google.com",
  language: "English"
});

// Get SEO recommendations
const analysis = await neuronwriter.get_query({
  query: result.query
});
```

## 🧪 **Testing the Integration**

Once configured, test with:

```bash
# List your projects
neuronwriter.list_projects()

# Create a test query  
neuronwriter.new_query({
  project: "your-project-id",
  keyword: "test keyword",
  engine: "google.com", 
  language: "English"
})
```

## 📝 **License**

MIT License - Free to use, modify, and distribute.

## 🤝 **Contributing**

Contributions welcome! Fork and submit PRs.

## 📞 **Support**

- NEURONwriter Official: [neuronwriter.com](https://neuronwriter.com)
- Lifetime Deals: [softreviewed.com/neuronwriter-ltd](https://softreviewed.com/neuronwriter-ltd)
- API Documentation: [NeuronWriter API Docs](https://app.neuronwriter.com)

---

**Ready to supercharge your content creation?** Get the **NEURONwriter lifetime deal** today and start automating with this MCP server! 🚀