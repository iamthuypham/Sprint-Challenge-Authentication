<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
There are mutiple type of "middleware" in mongoose:
- `pre`
- local middleware function
- methods

`bcrypt` is a library to help protecting sensitive information by converting to hash

`jwt` is a library to help tracking users' authentication by storing token on front end

2.  What does bcrypt do in order to prevent attacks?

`bcrypt` allows a backend app to store passwords as a hash string in database instead of the actual password
Then whenever users log in, `bcrypt` compares the input password with the hash string 

3.  What are the three parts of the JSON Web Token?
- Header: storing type of encode
- Payload: includes issued date, expired date, and users data 
- Signature: the hash which is the result of Header, Payload and key (after encoding)
