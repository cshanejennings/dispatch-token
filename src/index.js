module.exports = function (testAPI) {
    testAPI = testAPI || {};
    var eventListeners = {};
    function addEventListener(event, func) {
        if (typeof func === "function") {
            eventListeners[event] = eventListeners[event] || [];
            eventListeners[event].push(func);
        }
    }
    testAPI.getListeners = function () { return eventListeners; };
    function removeEventListener(event, func) {
        var listeners = eventListeners[event] || [],
            i,
            len = listeners.length;
        for (i = 0; i < len; i += 1) {
            if (listeners[i] === func) {
                listeners.splice(i, 1);
                break;
            }
        }
    }
    function dispatchEvent(event) {
        var eventType = event.type,
            listeners = eventListeners[eventType] || [],
            j,
            len = listeners.length,
            loop = listeners.concat();
        function getFunction(callback) {
            if (typeof callback === "function") {
                return callback;
            }
            return function () { return; };
        }
        for (j = 0; j < len; j += 1) {
            getFunction(loop[j])(event);
        }
    }
    if (testAPI) { testAPI.eventListeners = eventListeners; }
    return {
        addEventListener : addEventListener,
        removeEventListener : removeEventListener,
        dispatchEvent : dispatchEvent
    };
};