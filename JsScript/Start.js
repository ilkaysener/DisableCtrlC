$(parent.document).ready(function() {
    parent.document.body.oncopy = function(e) {
        e.preventDefault();
    }
});
