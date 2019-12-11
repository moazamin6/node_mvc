"use strict";


require('./kernel/core');

const Bootstrap = use('Kernel/Bootstrap');

let boot = new Bootstrap();

boot.initTemplating()
    .initRouting()
    .fireHttpServer();


