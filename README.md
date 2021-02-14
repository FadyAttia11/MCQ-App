# MCQ App

## About The Project

MCQ App is a web trivia app that you can answer questions on it and then see your score.

You can go directly to the deployed version from here to [try the website now](https://example.com)

Here's some of it's features:

- it has 10 questions and every time you are asked 5 random questions from them.
- you cannot get the same question twice on the same quiz.
- the answers for every questions shuffles every time to make memorizing answers harder.

Also you have to enter your name at the beginning, and after answering the questions you will get to know the score you gets with your name appearing there.

### Scalability isn't an issue

we built this web app with scalability in mind, so this web app can scale to as many questions as you want without any issue, here is how:

- Backend is optimized to give just 5 questions to the client-side, not the entire questions database, so this is handled server-side immediately.
- Even server-side, the server do NOT get the entire questions from the database to randomize them and choose 5, then dumb the rest. the server chooses five of them randomly DIRECTLY from the database.

## Getting Started

First you need to Clone the repo

```sh
git clone https://github.com/FadyAttia11/MCQ-App.git
```

then you can choose one of the upcoming three options to install dependencies & run the app

we recommend the first option, to install the front&back end with one command, and also start both of them with just one command.

### 1. install and start both frontend & backend with one command (the RECOMMENDED option):

after cloning this repository, you can install all packages with:

```bash
npm run install-all
```

this will run two scripts concurrently to install the dependencies for client & server side.

after installing all the dependencies for client & server side, you can run both sides also with just one command:

```bash
npm run all
```

### 2. install and run frontend ONLY:

if you just want to install frontend dependencies you can do it from:

```sh
npm run client-install
```

and if you want to run just the frontend now you can do it from:

```sh
npm run client
```

### 3. install and run backend ONLY:

if you just want to install backend dependencies you can do it from:

```sh
npm run server-install
```

and if you want to run just the backend now you can do it from:

```sh
npm run server
```

## Backend Usage

You can use postman to do the CRUD operations on the backend DIRECTLY through the available endpoints:

### get all questions:

make a GET request to

```sh
 http://localhost:5000/api/questions/all
```

this request will retrieve all the questions on the database

### get 5 random questions:

make a GET request to

```sh
 http://localhost:5000/api/questions/random5
```

this request will retrieve 5 random questions from the database

### add new questions:

make a POST request to

```sh
 http://localhost:5000/api/questions/new
```

with a JSON body like that:

```json
{
  "title": "How many valves does the heart have?",
  "answers": ["Two", "Four", "Six", "Eight"],
  "solution": "Four"
}
```

and then a new question will be added to the database

## Contact

Fady Attia - [@my_linkedin](https://www.linkedin.com/in/fady-attia-01) - fadyattia11@gmail.com

Project Link: [https://github.com/FadyAttia11/MCQ-App](https://github.com/FadyAttia11/MCQ-App)

============================================================
