const messages = {
    1: [
      { sender: 'John Doe', text: 'I’m finding JavaScript basics a bit confusing. Can you help?', time: '10:30 AM' },
      { sender: 'You', text: 'Sure, what exactly are you struggling with?', time: '10:31 AM' },
      { sender: 'John Doe', text: 'The “this” keyword and promises. Any tips?', time: '10:32 AM' },
      { sender: 'You', text: 'The “this” keyword can be tricky! Try practicing with examples.', time: '10:33 AM' },
      { sender: 'John Doe', text: 'Got it! And promises?', time: '10:34 AM' },
      { sender: 'You', text: 'Promises are used for async operations. Check MDN Docs for examples.', time: '10:35 AM' },
      { sender: 'John Doe', text: 'Thanks! Will do.', time: '10:36 AM' },
      { sender: 'You', text: 'Let me know if you need more help!', time: '10:37 AM' },
      { sender: 'John Doe', text: 'I will, thank you so much.', time: '10:38 AM' },
      { sender: 'You', text: 'No problem! Keep practicing.', time: '10:39 AM' },
      { sender: 'John Doe', text: 'I’ll keep at it!', time: '10:40 AM' },
      { sender: 'You', text: 'Awesome, you got this!', time: '10:41 AM' },
      { sender: 'John Doe', text: 'Just watched a video on promises. It’s clearer now.', time: '10:42 AM' },
      { sender: 'You', text: 'Great! That should help a lot.', time: '10:43 AM' },
      { sender: 'John Doe', text: 'I’ll dive deeper into callbacks too.', time: '10:44 AM' },
      { sender: 'You', text: 'That’s a good idea. Let me know how it goes.', time: '10:45 AM' },
      { sender: 'John Doe', text: 'Thanks for all your help!', time: '10:46 AM' },
      { sender: 'You', text: 'Anytime! I’m here if you need more help.', time: '10:47 AM' },
      { sender: 'John Doe', text: 'I will, for sure.', time: '10:48 AM' },
      { sender: 'You', text: 'Good luck with your coding!', time: '10:49 AM' },
    ],
    2: [
      { sender: 'Jane Smith', text: 'Do you know any good Python courses?', time: '09:45 AM' },
      { sender: 'You', text: 'Check out Codecademy and freeCodeCamp. They’re great!', time: '09:46 AM' },
      { sender: 'Jane Smith', text: 'Thanks! Any other recommendations?', time: '09:47 AM' },
      { sender: 'You', text: 'You could try Real Python as well.', time: '09:48 AM' },
      { sender: 'Jane Smith', text: 'I’ll check them out!', time: '09:49 AM' },
      { sender: 'You', text: 'Let me know how it goes.', time: '09:50 AM' },
      { sender: 'Jane Smith', text: 'I will, thanks again!', time: '09:51 AM' },
      { sender: 'You', text: 'No worries, happy learning!', time: '09:52 AM' },
      { sender: 'Jane Smith', text: 'I’ll start with Codecademy.', time: '09:53 AM' },
      { sender: 'You', text: 'Good choice, their Python track is solid.', time: '09:54 AM' },
      { sender: 'Jane Smith', text: 'I’ll let you know how it goes!', time: '09:55 AM' },
      { sender: 'You', text: 'I’m sure you’ll do great!', time: '09:56 AM' },
      { sender: 'Jane Smith', text: 'Thanks! I hope so.', time: '09:57 AM' },
      { sender: 'You', text: 'It’s all about practice!', time: '09:58 AM' },
      { sender: 'Jane Smith', text: 'That’s true! I’ll keep practicing.', time: '09:59 AM' },
      { sender: 'You', text: 'Keep at it, you’ll improve quickly.', time: '10:00 AM' },
      { sender: 'Jane Smith', text: 'I’m excited to dive deeper into Python.', time: '10:01 AM' },
      { sender: 'You', text: 'That’s the spirit!', time: '10:02 AM' },
      { sender: 'Jane Smith', text: 'Thanks for the help!', time: '10:03 AM' },
      { sender: 'You', text: 'Anytime! Enjoy your coding journey.', time: '10:04 AM' },
    ],
    4: [
        { sender: 'Lisa Johnson', text: 'How’s the web dev course going for you?', time: '07:50 AM' },
        { sender: 'You', text: 'It’s pretty good. How about you?', time: '07:51 AM' },
        { sender: 'Lisa Johnson', text: 'I’m stuck on the CSS part. Any advice?', time: '07:52 AM' },
        { sender: 'You', text: 'Have you tried Flexbox Froggy or Grid Garden?', time: '07:53 AM' },
        { sender: 'Lisa Johnson', text: 'Not yet. I’ll give them a shot.', time: '07:54 AM' },
        { sender: 'You', text: 'Let me know how it goes!', time: '07:55 AM' },
        { sender: 'Lisa Johnson', text: 'I’m having trouble with positioning elements. Flexbox is confusing me a bit.', time: '07:56 AM' },
        { sender: 'You', text: 'Try starting with simple examples and practicing them. Flexbox can get easier with time.', time: '07:57 AM' },
        { sender: 'Lisa Johnson', text: 'Good idea! I’ll check out some tutorials too.', time: '07:58 AM' },
        { sender: 'You', text: 'Let me know if you need a hand with anything!', time: '07:59 AM' },
        { sender: 'Lisa Johnson', text: 'Thanks, I will! I’m also trying to figure out how to make a responsive navbar.', time: '08:00 AM' },
        { sender: 'You', text: 'For a responsive navbar, consider using media queries to change the layout for smaller screens.', time: '08:01 AM' },
        { sender: 'Lisa Johnson', text: 'I’ve heard of media queries but haven’t used them much. Can you explain how they work?', time: '08:02 AM' },
        { sender: 'You', text: 'Sure! Media queries let you apply different styles depending on the screen size. You can specify breakpoints for when the layout should change.', time: '08:03 AM' },
        { sender: 'Lisa Johnson', text: 'Got it! I’ll play around with them today.', time: '08:04 AM' },
        { sender: 'You', text: 'You should also check out CSS Grid. It’s great for layouts too!', time: '08:05 AM' },
        { sender: 'Lisa Johnson', text: 'I’ve heard of CSS Grid, but I haven’t used it yet. Is it similar to Flexbox?', time: '08:06 AM' },
        { sender: 'You', text: 'CSS Grid is more powerful for two-dimensional layouts, while Flexbox is great for one-dimensional layouts like rows or columns.', time: '08:07 AM' },
        { sender: 'Lisa Johnson', text: 'I’ll look into it. Thanks for the advice!', time: '08:08 AM' },
        { sender: 'You', text: 'You’re welcome! Let me know if you want to compare Flexbox and Grid examples.', time: '08:09 AM' },
        { sender: 'Lisa Johnson', text: 'I might take you up on that offer. It’s helpful to see examples in action.', time: '08:10 AM' },
        { sender: 'You', text: 'Definitely! Seeing the code in action is the best way to learn.', time: '08:11 AM' },
        { sender: 'Lisa Johnson', text: 'I also need some advice on responsive images. I’m not sure how to make them resize properly.', time: '08:12 AM' },
        { sender: 'You', text: 'You can use the `max-width: 100%` CSS rule for images. That way, they resize to fit their container.', time: '08:13 AM' },
        { sender: 'Lisa Johnson', text: 'I’ll try that. I think it’ll help a lot!', time: '08:14 AM' },
        // Repeat similar messages to make 20 messages in total
      ],      
    3: [
      { sender: 'Chris Brown', text: 'What are the best React tutorials?', time: '08:15 AM' },
      { sender: 'You', text: 'I’d recommend checking out the official React documentation first.', time: '08:16 AM' },
      { sender: 'Chris Brown', text: 'Okay, what about YouTube tutorials?', time: '08:17 AM' },
      { sender: 'You', text: 'Try Net Ninja or Academind. They’re awesome!', time: '08:18 AM' },
      { sender: 'Chris Brown', text: 'Got it! Thanks!', time: '08:19 AM' },
      { sender: 'You', text: 'No problem, happy learning!', time: '08:20 AM' },
      { sender: 'Chris Brown', text: 'I’m diving into the official docs now!', time: '08:21 AM' },
      { sender: 'You', text: 'That’s great! Let me know if you get stuck.', time: '08:22 AM' },
      { sender: 'Chris Brown', text: 'I will, thanks!', time: '08:23 AM' },
      { sender: 'You', text: 'You got this!', time: '08:24 AM' },
      { sender: 'Chris Brown', text: 'I’ll try those YouTube channels soon too.', time: '08:25 AM' },
      { sender: 'You', text: 'Good plan, they’re really helpful.', time: '08:26 AM' },
      { sender: 'Chris Brown', text: 'I’m feeling more confident now!', time: '08:27 AM' },
      { sender: 'You', text: 'That’s awesome! Keep going!', time: '08:28 AM' },
      { sender: 'Chris Brown', text: 'I’ll keep practicing.', time: '08:29 AM' },
      { sender: 'You', text: 'Perfect! Keep at it, and you’ll master it.', time: '08:30 AM' },
      { sender: 'Chris Brown', text: 'Thanks for the support!', time: '08:31 AM' },
      { sender: 'You', text: 'You’re welcome! I’m always here if you need help.', time: '08:32 AM' },
      { sender: 'Chris Brown', text: 'I’ll definitely reach out if I need anything.', time: '08:33 AM' },
      { sender: 'You', text: 'Great! Keep up the good work.', time: '08:34 AM' },
    ],
    // Continue similarly for the other friends to ensure 20 messages each
    5: [
        { sender: 'Mike Lee', text: 'I’ve finished my Django project!', time: '06:30 AM' },
        { sender: 'You', text: 'That’s awesome! How did it go?', time: '06:31 AM' },
        { sender: 'Mike Lee', text: 'It went well! The project is a blog site. What do you think of Django?', time: '06:32 AM' },
        { sender: 'You', text: 'I love it. It’s great for building web apps quickly.', time: '06:33 AM' },
        { sender: 'Mike Lee', text: 'Totally agree! I’m thinking of building a REST API next.', time: '06:34 AM' },
        { sender: 'You', text: 'Nice! You could use Django REST Framework for that.', time: '06:35 AM' },
        { sender: 'Mike Lee', text: 'I’ll check it out. Thanks for the tip!', time: '06:36 AM' },
        { sender: 'You', text: 'Anytime! Let me know if you need help.', time: '06:37 AM' },
        { sender: 'Mike Lee', text: 'Will do! Thanks again.', time: '06:38 AM' },
        { sender: 'You', text: 'No problem! Keep me updated on your progress.', time: '06:39 AM' },
        // Repeat similar messages to make 20 messages in total
      ],
      6: [
        { sender: 'Emily Davis', text: 'I’m having issues with database setup...', time: '06:00 AM' },
        { sender: 'You', text: 'What kind of issues are you facing?', time: '06:01 AM' },
        { sender: 'Emily Davis', text: 'I’m using PostgreSQL, but it keeps giving me a connection error.', time: '06:02 AM' },
        { sender: 'You', text: 'Check if your database credentials are correct, and ensure PostgreSQL is running.', time: '06:03 AM' },
        { sender: 'Emily Davis', text: 'I’ll double-check. Thanks for the advice!', time: '06:04 AM' },
        { sender: 'You', text: 'No worries! Let me know if you need more help.', time: '06:05 AM' },
        { sender: 'Emily Davis', text: 'I got it working! Now I’m having issues with migrations.', time: '06:06 AM' },
        { sender: 'You', text: 'Make sure your migration files are correct and try running them with the --verbosity flag for more info.', time: '06:07 AM' },
        { sender: 'Emily Davis', text: 'Got it! Thanks again.', time: '06:08 AM' },
        { sender: 'You', text: 'Glad to hear that! Let me know if something else comes up.', time: '06:09 AM' },
        // Repeat similar messages to make 20 messages in total
      ],
      7: [
        { sender: 'David Wilson', text: 'Can we discuss CSS grids?', time: '05:45 AM' },
        { sender: 'You', text: 'Sure! What do you need help with?', time: '05:46 AM' },
        { sender: 'David Wilson', text: 'I’m having trouble aligning items in a grid container.', time: '05:47 AM' },
        { sender: 'You', text: 'Try using the `place-items` property to align both the rows and columns in one go.', time: '05:48 AM' },
        { sender: 'David Wilson', text: 'Oh, that’s much easier! Thanks!', time: '05:49 AM' },
        { sender: 'You', text: 'No problem! CSS Grid is super powerful once you get the hang of it.', time: '05:50 AM' },
        { sender: 'David Wilson', text: 'Definitely! I’m also experimenting with `grid-template-areas`.', time: '05:51 AM' },
        { sender: 'You', text: 'That’s a great choice! It makes it easier to manage layouts.', time: '05:52 AM' },
        { sender: 'David Wilson', text: 'I’ll play around with it more. Thanks for the tips!', time: '05:53 AM' },
        { sender: 'You', text: 'Anytime! Let me know if you need anything else.', time: '05:54 AM' },
        // Repeat similar messages to make 20 messages in total
      ],
      8: [
        { sender: 'Sophia Turner', text: 'Loving the TailwindCSS course!', time: '05:00 AM' },
        { sender: 'You', text: 'I’m glad to hear that! How are you finding the utility-first approach?', time: '05:01 AM' },
        { sender: 'Sophia Turner', text: 'It’s amazing! I love how quickly I can build layouts.', time: '05:02 AM' },
        { sender: 'You', text: 'Tailwind definitely speeds up the development process.', time: '05:03 AM' },
        { sender: 'Sophia Turner', text: 'Totally! I’m thinking of using it for my next project.', time: '05:04 AM' },
        { sender: 'You', text: 'Great idea! It’s perfect for rapid prototyping.', time: '05:05 AM' },
        { sender: 'Sophia Turner', text: 'I’ll give it a try. I also like the customizability of Tailwind.', time: '05:06 AM' },
        { sender: 'You', text: 'Yeah, the configuration file is so flexible.', time: '05:07 AM' },
        { sender: 'Sophia Turner', text: 'Exactly! I’m excited to use it more.', time: '05:08 AM' },
        { sender: 'You', text: 'Enjoy! Tailwind will definitely help you improve your workflow.', time: '05:09 AM' },
        // Repeat similar messages to make 20 messages in total
      ],
      9: [
        { sender: 'Oliver Martinez', text: 'Any good Java tutorials?', time: '04:30 AM' },
        { sender: 'You', text: 'I’d recommend checking out the official Oracle docs or CodeAcademy.', time: '04:31 AM' },
        { sender: 'Oliver Martinez', text: 'Thanks! I’ll check them out.', time: '04:32 AM' },
        { sender: 'You', text: 'You might also want to try out Udemy for some great video courses.', time: '04:33 AM' },
        { sender: 'Oliver Martinez', text: 'Sounds good. I’m also looking for some advanced tutorials.', time: '04:34 AM' },
        { sender: 'You', text: 'In that case, look into “Effective Java” by Joshua Bloch. It’s really detailed.', time: '04:35 AM' },
        { sender: 'Oliver Martinez', text: 'I’ve heard about that book. I’ll give it a try!', time: '04:36 AM' },
        { sender: 'You', text: 'It’s a great read for sure. Let me know how it goes.', time: '04:37 AM' },
        { sender: 'Oliver Martinez', text: 'Will do! Thanks for the recommendations!', time: '04:38 AM' },
        { sender: 'You', text: 'Glad to help! Let me know if you need more suggestions.', time: '04:39 AM' },
        // Repeat similar messages to make 20 messages in total
      ],
      10: [
        { sender: 'Emma Garcia', text: 'Best practices for APIs?', time: '04:00 AM' },
        { sender: 'You', text: 'Make sure you use proper REST principles and document your endpoints clearly.', time: '04:01 AM' },
        { sender: 'Emma Garcia', text: 'Got it! Any specific libraries you recommend?', time: '04:02 AM' },
        { sender: 'You', text: 'You could try Express.js or Flask for building APIs. Both are great choices.', time: '04:03 AM' },
        { sender: 'Emma Garcia', text: 'I’m thinking of using Flask. What do you think?', time: '04:04 AM' },
        { sender: 'You', text: 'Flask is awesome for smaller projects and quick prototypes.', time: '04:05 AM' },
        { sender: 'Emma Garcia', text: 'I’ll go with Flask then. Thanks!', time: '04:06 AM' },
        { sender: 'You', text: 'You’re welcome! Let me know if you need help setting it up.', time: '04:07 AM' },
        { sender: 'Emma Garcia', text: 'I will, thanks again!', time: '04:08 AM' },
        { sender: 'You', text: 'No problem! Enjoy working with Flask!', time: '04:09 AM' },
        // Repeat similar messages to make 20 messages in total
      ],
      11: [
        { sender: 'Lucas Robinson', text: 'Debugging issues in PHP...', time: '03:45 AM' },
        { sender: 'You', text: 'What’s the issue? Maybe I can help.', time: '03:46 AM' },
        { sender: 'Lucas Robinson', text: 'I’m getting an undefined variable error.', time: '03:47 AM' },
        { sender: 'You', text: 'Check if the variable is properly defined before using it.', time: '03:48 AM' },
        { sender: 'Lucas Robinson', text: 'I’ll check that. Thanks for the tip!', time: '03:49 AM' },
        { sender: 'You', text: 'No problem! Let me know if you find something.', time: '03:50 AM' },
        { sender: 'Lucas Robinson', text: 'Found it! I missed defining the variable in the scope.', time: '03:51 AM' },
        { sender: 'You', text: 'Glad you found the issue. Good job!', time: '03:52 AM' },
        { sender: 'Lucas Robinson', text: 'Thanks! I’ll double-check everything next time.', time: '03:53 AM' },
        { sender: 'You', text: 'That’s the way! Happy debugging!', time: '03:54 AM' },
        // Repeat similar messages to make 20 messages in total
      ],
      12: [
        { sender: 'Mia Walker', text: 'Struggling with Node.js...', time: '03:15 AM' },
        { sender: 'You', text: 'What’s the issue with Node.js?', time: '03:16 AM' },
        { sender: 'Mia Walker', text: 'I’m having trouble setting up routes and handling requests.', time: '03:17 AM' },
        { sender: 'You', text: 'Check if you’re using `express.Router()` to handle routes.', time: '03:18 AM' },
        { sender: 'Mia Walker', text: 'I’ll try that! Thanks for the suggestion!', time: '03:19 AM' },
        { sender: 'You', text: 'Let me know if you need any more help with Node.js.', time: '03:20 AM' },
        { sender: 'Mia Walker', text: 'I’ll keep you updated! Thanks again!', time: '03:21 AM' },
        { sender: 'You', text: 'You’re welcome! Good luck with your Node.js setup!', time: '03:22 AM' },
        { sender: 'Mia Walker', text: 'Thanks! I’m feeling more confident now.', time: '03:23 AM' },
        { sender: 'You', text: 'That’s awesome! Keep up the good work!', time: '03:24 AM' },
        // Repeat similar messages to make 20 messages in total
      ],
      13: [
        { sender: 'Charlotte Harris', text: 'I’m learning React hooks!', time: '02:30 AM' },
        { sender: 'You', text: 'Nice! Hooks make functional components so much more powerful.', time: '02:31 AM' },
        { sender: 'Charlotte Harris', text: 'I’m really liking the useState hook. It’s so simple!', time: '02:32 AM' },
        { sender: 'You', text: 'Yeah, it’s perfect for managing state in functional components.', time: '02:33 AM' },
        { sender: 'Charlotte Harris', text: 'I’m also trying out useEffect for side effects.', time: '02:34 AM' },
        { sender: 'You', text: 'That’s a great choice! useEffect is great for fetching data and subscriptions.', time: '02:35 AM' },
        { sender: 'Charlotte Harris', text: 'I’m using it to fetch data from an API.', time: '02:36 AM' },
        { sender: 'You', text: 'That’s a common use case. Just make sure to handle cleanup properly in the return function.', time: '02:37 AM' },
        { sender: 'Charlotte Harris', text: 'Good point! I’ll make sure to do that.', time: '02:38 AM' },
        { sender: 'You', text: 'Awesome! Let me know if you run into any issues.', time: '02:39 AM' },
        // Repeat similar messages to make 20 messages in total
      ],
      14: [
        { sender: 'Jack Evans', text: 'I’m trying to optimize my SQL queries.', time: '02:00 AM' },
        { sender: 'You', text: 'What’s your issue with the queries?', time: '02:01 AM' },
        { sender: 'Jack Evans', text: 'They’re running slowly with a lot of data.', time: '02:02 AM' },
        { sender: 'You', text: 'You should consider adding indexes to frequently queried columns.', time: '02:03 AM' },
        { sender: 'Jack Evans', text: 'I’ll try that. Thanks for the suggestion!', time: '02:04 AM' },
        { sender: 'You', text: 'Another tip is to make sure your queries are using joins efficiently.', time: '02:05 AM' },
        { sender: 'Jack Evans', text: 'I’ve been using subqueries a lot, so that might be the issue.', time: '02:06 AM' },
        { sender: 'You', text: 'Try to replace subqueries with joins when possible. It can improve performance.', time: '02:07 AM' },
        { sender: 'Jack Evans', text: 'Got it! I’ll make those changes and test the performance.', time: '02:08 AM' },
        { sender: 'You', text: 'Great! Let me know how it goes.', time: '02:09 AM' },
        // Repeat similar messages to make 20 messages in total
      ],
      15: [
        { sender: 'Amelia Clark', text: 'Do you have any tips for debugging in Python?', time: '01:30 AM' },
        { sender: 'You', text: 'Use `pdb` to set breakpoints and inspect variables in your code.', time: '01:31 AM' },
        { sender: 'Amelia Clark', text: 'That’s a great idea! I usually just print everything out.', time: '01:32 AM' },
        { sender: 'You', text: '`pdb` is definitely more efficient for larger projects. It lets you pause the program and inspect it interactively.', time: '01:33 AM' },
        { sender: 'Amelia Clark', text: 'I’ll try it next time. Any other tips?', time: '01:34 AM' },
        { sender: 'You', text: 'Try using `logging` instead of print statements. It’s more flexible and can be configured to log different levels of information.', time: '01:35 AM' },
        { sender: 'Amelia Clark', text: 'I’ll start using logging. That sounds much better.', time: '01:36 AM' },
        { sender: 'You', text: 'You’ll love it. It’s a game changer for debugging.', time: '01:37 AM' },
        { sender: 'Amelia Clark', text: 'Thanks for the tips! I’ll let you know if I run into any issues.', time: '01:38 AM' },
        { sender: 'You', text: 'You’re welcome! Happy coding!', time: '01:39 AM' },
        // Repeat similar messages to make 20 messages in total
      ],
      16: [
        { sender: 'Benjamin Moore', text: 'How do you manage state in large React apps?', time: '01:00 AM' },
        { sender: 'You', text: 'I use Redux for state management in large apps.', time: '01:01 AM' },
        { sender: 'Benjamin Moore', text: 'I’ve heard of Redux, but I’m not sure how to get started with it.', time: '01:02 AM' },
        { sender: 'You', text: 'You can start by installing the `redux` and `react-redux` packages, then create your actions and reducers.', time: '01:03 AM' },
        { sender: 'Benjamin Moore', text: 'That sounds simple enough. I’ll give it a shot!', time: '01:04 AM' },
        { sender: 'You', text: 'Make sure to wrap your app with the `Provider` from `react-redux` to give components access to the store.', time: '01:05 AM' },
        { sender: 'Benjamin Moore', text: 'I’ll do that. Any other tips for managing large state?', time: '01:06 AM' },
        { sender: 'You', text: 'For large state, consider breaking it down into multiple reducers and using `combineReducers` to combine them into a single root reducer.', time: '01:07 AM' },
        { sender: 'Benjamin Moore', text: 'Got it! I’ll keep that in mind.', time: '01:08 AM' },
        { sender: 'You', text: 'Good luck! Let me know if you need more help with Redux.', time: '01:09 AM' },
        // Repeat similar messages to make 20 messages in total
      ],
  };
  
  export default messages;