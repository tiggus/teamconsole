/**
 * Created by Kevin on 6/12/2015.
 */

var background = chrome.extension.getBackgroundPage();

// Update status to let user know options were saved.
var statusdiv = document.getElementById('status');
var server = document.getElementById('server');
var port = document.getElementById('port');
var password = document.getElementById('password');

function saveOptions() {
    background.teamconsole.settings.server = server.value;
    background.teamconsole.settings.port = port.value;
    background.teamconsole.settings.password = password.value;
    background.teamconsole.saveOptions(function() {
        statusdiv.innerHTML = '<b>Options saved.</b>';
        setTimeout(function() {
            statusdiv.innerHTML = '';
        }, 750);
    });
}

function fillValues() {
    server.value = background.teamconsole.server;
    port.value = background.teamconsole.port;
    password.value = background.teamconsole.password;
}

document.addEventListener('DOMContentLoaded', fillValues);
document.getElementById('save').addEventListener('click',
    saveOptions);
