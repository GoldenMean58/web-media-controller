'use strict';

/* global connector */

chrome.runtime.onMessage.addListener((message) => {
    if (message.sender !== 'vkpc-proxy') {
        return;
    }
    switch (message.command) {
    case 'reconnect':
        connector.onReconnect();
        break;
    default:
        connector.onMessage(_(message).pick('command', 'argument'));
    }
});
