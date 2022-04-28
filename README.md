# tema-boilerplate
**T**ypeScript + **E**xpress + **M**ongo + **A**dminJS backend boilerplate

## Prerequisites
- Install [Node JS, NPM](https://nodejs.org/), [Yarn](https://yarnpkg.com/)
- Install [MongoDB](https://www.mongodb.com/) and run it. I am using free [MongoDB Community Server](https://www.mongodb.com/try/download/community).

## Getting started
### 1. Installing requirements.
- Clone this repo, delete `.git` folder and install dependencies:
```
git clone git@github.com:etomarat/tema-boilerplate.git && cd tema-boilerplate
rm -rf .git
yarn
```
### 2. Setting up config file.
- Copy example settings
```
cp .env.example .env
```
- Edit `.env` file with your data. For example:
```
COMPANY_NAME="Example company" # for AdminJS title
DB_NAME="default" # mongodb databese
PORT=8000 # nodejs port
SECRET='unsafe password' # WARNING! Must be random string for security reasone
SESSION_SECRET='unsafe password' # WARNING! Must be random string for security reasone
ADMIN_SECRET='unsafe password' # WARNING! Must be random string for security reasone
```

### 3. Let's run it!
- Start dev server
```
yarn dev
```
- Build JS (for deploy)
```
yarn build
```
- Start production server (need to build before)
```
yarn build
```

### 4. Add admin user.
```
yarn addAdmin your_login your_password
```

### 5. That's all. Thank you for your attention!