// ==UserScript==
// @name         Google AI Studio Chat Trimmer
// @namespace    https://github.com/amirhosseinghanipour
// @version      0.2
// @description  Keeps only the last 3 chat turns (prompt, thinking, response) to improve performance
// @author       Amirhossein Ghanipour
// @match        https://aistudio.google.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function trimChatTurns() {
        const chatTurns = document.querySelectorAll('ms-autoscroll-container ms-chat-turn');
        const maxTurns = 3;

        if (chatTurns.length > maxTurns) {
            const turnsToRemove = Array.from(chatTurns).slice(0, chatTurns.length - maxTurns);
            turnsToRemove.forEach(turn => turn.remove());
            console.log(`Trimmed ${chatTurns.length - maxTurns} chat turns`);
        }
    }

    window.addEventListener('load', () => trimChatTurns());
    setInterval(() => trimChatTurns(), 30000);

    const observer = new MutationObserver(() => trimChatTurns());
    const targetNode = document.querySelector('ms-autoscroll-container');
    if (targetNode) {
        observer.observe(targetNode, { childList: true, subtree: true });
    }
})();
