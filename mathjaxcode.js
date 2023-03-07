MathJax={
    loader: {load: ['[tex]/color','[tex]/cancel','[tex]/enclose']},
    tex: {
       inlineMath: [['$', '$'],['\\(','\\)']],
       packages: {'[+]': ['color','cancel','enclose']},
       macros: {
          degree: "{^\\circ}",
          dmn: "\\ \\middle\\vert\\ "
       }
    },
    options:{
       skipHtmlTags: ["script","noscript","style","textarea","pre","code"]
    }
 };