(function ($) {
    /**
     * Remove class by mask
     *
     * @param {string} mask Mask (regular expression)
     *
     * @return {jQuery}
     *
     * @type {function}
     *
     * @version 2019-06-24
     * @author  DimNS <dimns@dimns.ru>
     */
    $.fn.removeClassByMask = function (mask) {
        return $(this).removeClass(function (index, cls) {
            var re = mask.replace(/\*/g, '\\S+');

            return (cls.match(new RegExp('\\b' + re + '', 'g')) || []).join(' ');
        });
    };
})(jQuery);