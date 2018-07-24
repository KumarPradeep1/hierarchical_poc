$(function () {
    $.jstree.defaults.core.themes.variant = "large";
    let data = [
       'Provider 1 (0)',
       {
         'text' : 'Provider 2 (50)',
         'state' : {
           'opened' : false,
           'selected' : false
         },
         'children' : [
           { 'text' : 'Provider 2.1 (30)' },
           { 'text' : 'Provider 2.2 (20)' }
         ]
      },
      {
         'text' : 'Provider 3 (198)',
         'children' : [
           { 'text' : 'Provider 3.1 (197)' },
           { 'text' : 'Provider 3.2 (1)' }
         ]
      }
    ]

   $("#jstree").jstree({ 'core' : {
    'data' : data
   } });
  });