#!/usr/bin/env sh

set -e

npm run build

cd dist

echo 'sduduzog.com'

git init

git add -A

git commit -m 'release'

git push -f ssh://ubuntu@41.79.79.187/var/repo/sduduzog.git release

cd -