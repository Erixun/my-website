#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn run build

# navigate into the build output directory
cd dist

# provide identity
git config user.email "erik.sund.berg20@hotmail.se"
git config user.name "Erik Sundberg"

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:erixun/my-website.git main:gh-pages
cd -