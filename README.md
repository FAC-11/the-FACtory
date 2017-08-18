# the FACtory :bulb:
Share your ideas and find devs in the FACtory

## Why?
### User Story

Abdullah is such a creative guy but sometimes his mind goes blank and he is stressing out because in 2 weeks from now we will all be pitching for ideas.

Bart, as a qualified programmer, is looking for some projects where he could implement his skills.
And Constantina, a business woman is looking for developers and idea that will make her rich.

Let's join all of them! The FACtory is a platform that will help you get ideas for projects and connect you with developers to implement your super cool idea. After this, Abdullah, Bart and Constantina will be much happier.

 ![](https://media.giphy.com/media/Ri4kcfTLQbcv6/giphy.gif)


### As a user I can:

- [x] Visit the website and see a landing page with two buttons (Have an idea and got skills)

- [x] Click on __"got an idea?"__ which will direct me to the submit idea page, where I can fill in a form to submit my idea.
    - [x] Enter information into a simple form to explain the idea
    - [ ] Be able to comment on the idea

- [x] Click on __"got skills?"__ where I can see a list of submitted app ideas.
    - [x] See a small amount of information about the ideas
    - [x] See the most recently posted ideas at the top of the page
    - [x] See more detail for the ideas when clicking

- [ ] Specify if interested in working on an idea through commenting

- [ ] Upvote an idea using lightbuld icon.
- [ ] __*Stretch:*__ Filter ideas based on requirements (e.g Front-end, Back-end, UX, etc)

## What

A platform that connects people who have app ideas with people with skills to build it.

![](https://media.giphy.com/media/3o6UBhjHobLFgEmrJu/giphy.gif)



## Database Schema
#### Users
| Column | Types | Modifiers |
| -------- | -------- | -------- |
|  id  | serial     |   PRIMARY KEY   |
|  name  | VARCHAR(100) |   NOT NULL  |
|  email  | VARCHAR(100) |   NOT NULL UNIQUE  |


#### Ideas

| Column | Types | Modifiers |
| -------- | -------- | -------- |
|  id  | serial     |   PRIMARY KEY   |
|  userid  | REFERENCES |   users(id)  |
|  dateadded  | TIMESTAMP |   NOT NULL UNIQUE  |
|  ideatitle  | VARCHAR(100) |   NOT NULL  |
|  ideadesc  | TEXT |   NOT NULL  |


### Learning outcomes

1. Parties on Thursdays are not a good idea

![](https://media.giphy.com/media/X3Yj4XXXieKYM/giphy.gif)
![](https://media.giphy.com/media/HKh3Z5L4UU2yY/giphy.gif)

2. Rebeca will become a singer soon
![](https://media.giphy.com/media/uLKUuSJR0cbLO/giphy.gif)

3. Promises are cool!
 ![](https://media.giphy.com/media/GFtJhEvG3681y/giphy.gif)
