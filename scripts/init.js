import * as util from './util.js';

util.listen();
//util.bindSidebarButtons();
util.bindNavigationButtons();
util.bindContentButtons();
setTimeout(util.setBackgroundImage(), 1000);
