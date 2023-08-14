# React + TypeScript + Vite
---
**To use @/**
1. Install types/node: npm i types/node
2. Go to vite.config :  import path from ‘path’ & add below code into config
```
resolve: {
        alias: [{find:"@", replacement: path.resolve(__dirname, 'src')}]
    }
```
	
3. Go to ts.config : add below code into compilerOptions:
```
	"paths": {
      "@/*": ["./src/*"]
    },
```
