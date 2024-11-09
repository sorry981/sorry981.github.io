$( document ).ready(function() {
    
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    
    envelope.click( function() {
        open();
    });
    btn_open.click( function() {
        open();
    });
    btn_reset.click( function() {
        close();
    });

    function open() {
        envelope.addClass("open")
           .removeClass("close");
    }
    function close() {
        envelope.addClass("close")
           .removeClass("open");
    }
   $(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });
});

$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var sorryMessage = $('#sorryMessage'); // Select the message element

    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });

    function open() {
        envelope.addClass("open").removeClass("close");
        // Show the sorry message
        setTimeout(function() {
            sorryMessage.fadeIn(500); // Fade in the message for a smooth effect
        }, 500); // Delay to open the envelope first
    }

    function close() {
        envelope.addClass("close").removeClass("open");
        sorryMessage.hide(); // Hide the message when resetting
    }
});

});