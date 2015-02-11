# SockPuppet controller experiment

![Youtube Preview](http://i.imgur.com/TXog9o7.png)

### [>>> Check out a video of this project in action! <<<](https://www.youtube.com/watch?v=-ihExyT1u5Y)

## Background
After seeing the incredible ["Sock Puppet" WebGL demo by myp"](www.mediosyproyectos.com/puppetic/)
and having tons of fun acting it out via keyboard and mouse, I immediately dreamt
of implementing some kind of Jim Henson style "Waldo" out of spare parts and
streaming the data to the web page somewhat as I'd done for @MakerSylvia's
[DML 2012 demo](https://github.com/techninja/DML2012).

But immediately I said to myself... why would I do that if I can access the gyro
data immediately available in a web ready device in my pocket! And so my lunch
break was spent hacking this little test.

## Installation
The intent is that you have (at least) two devices on the same WiFi network:
 * **A:** computer/tablet/mobile device to run the server and display the puppet
on. Technically you can run the server on one computer, but display the puppet
on a third computer/device.
 * **B:** mobile device capable of accessing its gyroscope data via web browser

 0. Make sure you have [node.js & NPM](http://nodejs.org/) installed on computer
A. They usually install together and you should be in good shape.
 0. Clone/download this code to a handy folder, then in a command/terminal
window, navigate to said folder, and run `npm install`, this will
download/install express and socket.io
 0. From this same window, run `node sockpuppet`, and our server should be
running.
 0. From this same computer (or some third computer), pull up the IP
address/hostname of the server computer, at the port **3883** (this can be changed
in `sockpuppet.js`) in a modern WebGL capable web browser. If on the same
computer, this would be `http://localhost:3883`
 0. You should see our happy green puppet guy. Now for the controller:
 0. On your mobile device on the same WiFi network, enter the IP
address/hostname of the server into the browser, eg:
`http://192.168.10.42/control`
 0. This should give you a simple white page that will immediately start
streaming gyro data and controlling our sock puppet :)

## How's it work?
Node.js acts as a simple webserver, also allowing us to stream data quickly to
all clients via websockets. There's _**very little**_ to this thanks to
socket.io. The web page on the mobile device uses the
[gyro.js](https://github.com/tomgco/gyro.js) library to poll for rotational data
and this is cleaned and pushed directly to the server, where it simply bounces
it back to all connected clients.

In the Puppet WebGL experiment, I've added the socket.io client library, and
simply trigger manipulation of the bones as the keyboard and mouse controls
would be doing, but when gyro or tap data is received. Super easy!

## Now What?
Feel free and have fun and hack. This could easily be improved in many ways with
more hand controls for facial expressions, and likely some kind of
tween/smoothing for the often quite noisy gyroscope data.


Code by TechNinja; MIT Licensed.
Original code for WebGL demo by [myp"](www.mediosyproyectos.com/).
