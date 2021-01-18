# dos-script
A denial of service script, now with the new and (not)improved parallel execution. I have not tested this, only on a localhost server(and google.com).

#### Running the thing
Please just follow these steps and don't venture into the world of nodejs commands

`node index.js <ip> <requests>`

#### Installing the modules
`npm install`

#### Plz explain how it works
Look at the code dumbass, it basically introduces a something named parallel execution, and it makes it go boom and faster, it's not the most efficient, i tried messing with multithreading, but to no success.

It can go up to 350 requests per second or something, with little to no errors. For example, i managed to send `5000` requests in 14 seconds
