## In a JavaScript project, every dependency should be a devDependency...until it is not.

By default, the command `npm install package` will install the package as a production dependency. There's nothing 'wrong' with this, just that once the project grows and you've been also collecting some tools, the meaning of production dependencies and development dependencies is lost.

I'm sure there's plenty of projects out there with `@types/*` under production dependencies
