// See: http://stackoverflow.com/questions/9724921/using-underscore-js-with-asp-net
_.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g,      // print value: {{ value_name }}
    evaluate: /\{%([\s\S]+?)%\}/g,      // excute code: {% code_to_execute %}
    escape: /\{%-([\s\S]+?)%\}/g        // excape HTML: {%- <script> %} prints &lt;script&gt %};
};


Common = (function () {
    return {
        RootUrl:'/js/'
    };
})();