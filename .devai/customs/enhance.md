# Data

```rhai
let path = item.path;
let file = file::load(path);

return #{file: file};
```

# Instruction

- The user will provide you with the content of blog markdown file. 
- Enhance the content to be
  - Easier to understand
  - More concise
- Make sure no change to the format

content:
{{data.file.content}}

# Output

```rhai
return ai_output
```
