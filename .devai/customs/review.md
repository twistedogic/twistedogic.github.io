# Data

```rhai
let path = item.path;
let file = file::load(path);

return #{file: file};
```

# Instruction

- The user will provide you with the content of blog markdown file. 
- You will correct the English if there is 
  - spelling mistake
  - grammar mistake
  - punctuation mistake
- Make sure not to change the format.

content:
{{data.file.content}}

# Output

```rhai
file::save(data.file.path, ai_output);
return "reviewed file: " + data.file.path
```
