# MCQ App

## About The Project

MCQ App is a web trivia app that you can answer questions on it and then see your score.

You can go directly to the deployed version from here to [try the website now](https://fadyattia-mcq-client.netlify.app/)

Here's some of it's features:

- it has 10 questions and every time you are asked 5 random questions from them.
- you cannot get the same question twice on the same quiz.
- the answers for every question shuffles every time to make memorizing answers harder.

Also you have to enter your name at the beginning, and after answering the questions you will get to know the score you gets with your name appearing there.

### Scalability isn't an issue

We built this web app with scalability in mind, so this web app can scale to as many questions as you want without any issue, here is how:

- Backend is optimized to give just 5 questions to the client-side, not the entire questions database, so this is handled server-side immediately.
- Even server-side, the server do NOT get the entire questions from the database to randomize them and choose 5, then dumb the rest. the server chooses five of them randomly DIRECTLY from the database.

## Getting Started

First you need to Clone this repo

```sh
git clone https://github.com/FadyAttia11/MCQ-App.git
```

Then you need to cd to the root of the project by writing

```sh
cd MCQ-App
```

After that you need to install the dependencies for Frontend & Backend then run the entire App

### 1. install and start Frontend & Backend :

Note: All the commands are written from the root directory of the project.

After cloning this repository, and cd to the root directory of the project, you can install Frontend & Backend dependencies from:

```bash
npm run client-install
```

and

```bash
npm run server-install
```

This will run two scripts to install the dependencies for client & server side.

After installing all the dependencies for client & server side, you can run both sides with just ONE command:

```bash
npm run all
```

### 2. Run JUST Frontend or Backend ONLY: (NOT RECOMMENDED)

if you just want to run only Frontend or Backend, you can do it from:

```sh
npm run client
```

or

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
