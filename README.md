# Advanced Node

This repo contains my practices of the [Pluralsight's Advanced Node](https://app.pluralsight.com/library/courses/nodejs-advanced/table-of-contents) course.

## Tasks app

Practicing communication between a Node client and server using an Event-driven Architecture.

## Chat app

Playing with sockets and networking by developing a basic chat app.

## Webserver

Create a very basic webserver with JSON and HTML responses. It has default 404 and a redirect, too!

## Debugging

### Debug the app in console

```sh
node debug index.js
```

* `help` - see available commands
* `sb(12)` - set breakpoint on line 12
* `repl` - inspect anything that is accessable at that point
* `watch('variableName')` - see the value of the `variableName` as it changes
* `cont` - continue execution

### Debug the app in Chrome devtools

```sh
node --inspect --debug-brk index.js
```

## Child processes

Use `spawn` to run commands; pipe `stdin` and `stdout`s.

### Fork

Create a fork for a heavy task to not block the main thread.

### Cluster

Create an http load balancer, where we create a fork for each CPU. This is a "cloning" scalability strategy. (Other strategies are: decomposing (= micro services) and splitting).
