# Data

```rhai
let path = item.path;
let file = file::load(path);

return #{file: file};
```

# Instruction

- The user will provide you with the content of blog markdown file. 
- Please summarise, comment and critique on the content

```markdown
{{data.file.content}}
```

# Output

```rhai
return ai_output 
```
