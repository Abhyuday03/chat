

// app.get("/compose",function(req,res)
// {
//   res.render("compose");
// });

// app.post("/compose",function(req,res)
// {
  
//   let publishcontent =
//   {
//     head: req.body.title,
//     content: req.body.BODY
//   }
//   posts.push(publishcontent);
//   res.redirect("/");
 
// });


// app.get("/posts/:postname",function(req,res)
// {
//   const requested=lodash.lowerCase(req.params.postname);
//   posts.forEach(function(key)
//   {
//     const stored= lodash.lowerCase(key.head);
//     if (stored=== requested)
//     {
//       res.render("post",
//       {
//         request: key.head,
//         data: key.content
//       });
//     }

//   });

// });
