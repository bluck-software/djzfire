jQuery(document).ready(function() {
    if (jQuery.browser.webkit) {
        jQuery('input').attr('autocomplete', 'off');
    }
});