# GitHub Repositories Explorer

This project allows user to search for up to 5 users with a username similar to the value entered in text input and then on click, display repositories (no limit on displayed repositories amount) for selected GitHub user. Github REST api is integrated.

Demo: https://github-explore-test.vercel.app/

## How To Run

Create a Github personal access token and insert it into `.env` file. see [Creating a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

`REACT_APP_GITHUB_TOKEN=YOUR-TOKEN`

```
git clone https://github.com/Superstar-IT/github-explore-test
cd github-explore-test
cp .env.example .env
npm install
npm start (for development)
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

To learn Github REST API, check out the [Github REST API document](https://docs.github.com/en/rest?apiVersion=2022-11-28)