create-react-app myapp

git init

npm i redux react-redux immutable remote-redux-devtools --save

npm i eslint --save
node_modules/.bin/eslint --init
# Airbnb style

# add to .eslintrc.js
"env": { "browser": true, "node": true }

node_modules/.bin/eslint src --fix

# create .editorconfig file
# create .eslintignore

npm install husky@next --save-dev
