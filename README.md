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

## 🖥️ **Quick Setup for Popular MCP Clients**

### **Cline, Kilo Code, Roo Code**
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

### **VS Code (Kilo-Code Extension)**
```json
{
  "mcpServers": {
    "neuronwriter": {
      "type": "stdio",
      "command": "node",
      "args": ["/path/to/neuronwriter-mcp-server/build/index.js"],
      "env": {
        "NEURONWRITER_API_KEY": "your-api-key-here"
      }
    }
  }
}
```

## 🎯 **Available Tools**
- `list_projects` - Get NEURONwriter projects
- `new_query` - Create content analysis
- `get_query` - Get SEO recommendations
- `list_queries` - Filter queries
- `get_content` - Export content
- `import_content` - Import for analysis
- `evaluate_content` - Score content

## 🤖 **Automation Integrations**
- **Make.com**: [NEURONwriter API for Make.com](https://softreviewed.com/product/custom-app-neuronwriter-api-for-make-com/)
- **Boost.space**: [NEURONwriter API for Boost.space](https://softreviewed.com/product/custom-app-neuronwriter-api-for-boostspace/)

## 📊 **Example Usage**
```javascript
// Create analysis query
const result = await neuronwriter.new_query({
  project: "your-project-id",
  keyword: "pictory coupon code",
  engine: "google.com",
  language: "English"
});

// Get recommendations
const analysis = await neuronwriter.get_query({
  query: result.query
});
```

## 📝 **License**
MIT License - Free to use, modify, and distribute.

---

**Get the NEURONwriter lifetime deal today!** 🚀