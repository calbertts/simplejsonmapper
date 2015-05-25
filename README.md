# Simple JSON Mapper 

How to run:

```bash
$ npm install
```

```bash
$ npm run start
```

***

Example:

If you copy this on Structure:

```json
{
"name": "Root",
  "children": [
    {
      "name": "Node 1"
    },
    {
      "name": "Node 2",
      "children": [
        {
          "name": "SubNode 2"
        }
      ]
    }
  ]
}
```

You will get this:

```json
{
  "Node 1": "String",
  "Node 2": {
    "SubNode 2": "String"
  }
}
```

**Arrays aren't supported**
