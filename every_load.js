/* 

every_load
---------

Author: @colinyoung
Description:

Turbolinks (https://github.com/rails/turbolinks) is an awesome substitute
for pjax, but you've probably coded all your frontend javascript
to fire on $(document).ready()--

TODO: With every_load, the default $() method, when used to fire code on reload,
is rewritten...

For now: Just continue to use page:change and it'll be fired for you on $(document).ready().
            
*/

jQuery(document).ready(function() {
  $(document).trigger('page:change');
});