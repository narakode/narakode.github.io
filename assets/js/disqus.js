var disqus_config = function () {
  // Here is an example,
  // this.page.url = "https://poanchen.github.io/blog/2017/07/27/how-to-add-disqus-to-your-jekyll-site";
  this.page.url = "http://narakode.com{{ page.url }}";
  this.page.identifier = "{{ page.url }}";
};

// You should be able to get the following lines of code from your Disqus admin.
// https://disqus.com/admin/universalcode
(function() { // DON'T EDIT BELOW THIS LINE
  var d = document, s = d.createElement('script');
  s.src = '//narakode.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
})();