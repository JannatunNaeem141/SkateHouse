import React from 'react';

const Blogs = () => {
    return (
        <div className='max-w-7xl mx-auto py-16'>
            <div>
                <div>
                    <h4 className='font-bold text-xl text-primary'>1. How will you improve the performance of a React Application?</h4>
                    <p className='font-bold'>Using Immutable Data Structures</p>
                    <p>Data immutability is not an architecture or design pattern, it's an opinionated way of writing code. This forces you to think about how you structure your application data flow. In my opinion, data immutability is a practice that revolves around a strict unidirectional data flow.</p>
                    <p className='font-bold'>Function/Stateless Components and React.PureComponent</p>
                    <p>In React, function components and PureComponent provide two different ways of optimizing React apps at the component level.</p>
                    <p className='font-bold'>Multiple Chunk Files</p>
                    <p>Your application always begins with a few components. You start adding new features and dependencies, and before you know it, you end up with a huge production file.</p>
                    <p className='font-bold'>Using Production Mode Flag in Webpack</p>
                    <p>If you are using webpack 4 as a module bundler for your app, you can consider setting the mode option to production. This basically tells webpack to use the built-in optimization.</p>
                    <p className='font-bold'>Dependency optimization</p>
                    <p>When considering optimizing the application bundle size, it's worth checking how much code you are actually utilizing from dependencies. For example, you could be using Moment.js which includes localized files for multi-language support. If you don't need to support multiple languages, then you can consider using moment-locales-webpack-plugin to remove unused locales for your final bundle.</p>
                    <p className='font-bold'>Avoid Inline Function Definition in the Render Function</p>
                    <p>Since functions are objects in JavaScript, the inline function will always fail the prop diff when React does a diff check. Also, an arrow function will create a new instance of the function on each render if it's used in a JSX property. This might create a lot of work for the garbage collector.</p>
                    <p>Function components prevent constructing class instances while reducing the overall bundle size as it minifies better than classes.</p>
                    <p>On the other hand, in order to optimize UI updates, we can consider converting function components to a PureComponent class.</p>
                </div>
                <div>
                    <h4 className='font-bold text-xl text-primary mt-5'>2. What are the different ways to manage a state in a React application?</h4>
                    <p>There are four different ways to manage a state in a React application.</p>
                    <p className='font-bold'>Use useReducer for Complex State</p>
                    <p>Sometimes the useState hook won't cut it, especially when dealing with complex state behavior that may involve large objects. The useReducer hook is a powerful provided React hook for dealing with complex state management that doesn't require third-party dependencies. Also, it reduces the amount of data recreated with each render.</p>
                    <p className='font-bold'>Custom Hooks FTW (i.e., for the win)</p>
                    <p>When using React hooks, you can sometimes end up with incredibly complex state logic within one component that utilizes multiple types of hooks to achieve one purpose.</p>
                    <p>Thankfully, we can make custom React hooks to encompass complex logic into a single accessible hook. This can come in handy for forms, toggles, asynchronous behavior, and anything else where you end up with a mess of hooks in your component.</p>
                    <p className='font-bold'>Global State Management</p>
                    <p>In most cases, you don't need a state management library. Only in larger applications that are dealing with complex states should you bring in an external library to manage it.</p>
                    <p>Even then, reconsider if you can't just use the provided Context API to share data between components.</p>
                    <p className='font-bold'>Use Data Fetching Libraries</p>
                    <p>Pulling data from external APIs is a seemingly simple problem, but can get pretty complicated once you start needing to cache the data in memory (to reduce the number of API calls), update it, and access it in multiple places.</p>
                    <p>Thankfully, there are modern data fetching libraries like React Query for effectively fetching, caching, invalidating, and refreshing data from external sources. They can also be used for sending data to some external client and truly encompassing the whole workflow of interacting with a server.</p>
                </div>
                <div>
                    <h4 className='font-bold text-xl text-primary mt-5'>3. How does prototypical inheritance work??</h4>
                    <p>Everything in Javascript is an object. Even when creating a Class is an Object via an Object Literal or Constructor Function. This is how Javascript does class-based programming as to other traditional Object-Oriented Programming languages where they use the keyword 'class' and 'inheritance'.</p>
                    <p>Javascript's version of class-based programming and other traditional class-based programming languages work with the same concept but does not work exactly similar. There are differences in its keyword, syntax, and how it works. There are also debates regarding pros and cons of Javascript's version of class-based programming, but for simplicity's sake and learning purposes, I do not want to go over those issues.</p>
                    <p>So, the core idea of Prototypal Inheritance is that an object can point to another object and inherit all its properties. The main purpose is to allow multiple instances of an object to share common properties, hence, the Singleton Pattern.</p>
                </div>
                <div>
                    <h4 className='font-bold text-xl text-primary mt-5'>4. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?</h4>
                    <p>One should never update the state directly because of the following reasons:</p>
                    <p>i. If I update it directly, calling the setState() afterward may just replace the update I made.</p>
                    <p>ii. When I directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.</p>
                    <p>iii. I will lose control of the state across all components.</p>
                </div>
                <div>
                    <h4 className='font-bold text-xl text-primary mt-5'>5. What is a unit test? Why should write unit tests?</h4>
                    <p className='font-bold'>Unit test:</p>
                    <p>Unit testing is a type of software testing where individual units or software components are tested. Its purpose is to validate that each unit of code performs as expected. A unit can be anything you want it to be — a line of code, a method, or a class.</p>
                    <p>Generally, smaller tests are better as they give a more granular view of your code's performance. Also, when you test very small units, your tests can run fast, like a thousand tests in a second fast.</p>
                    <p>There are two types of unit testing:</p>
                    <p><span className='font-bold'>Manual:</span> As the name implies, unit tests are run manually to verify the correctness of your code. This is done before writing automated tests. Its drawback is that you have to manually test your functions/classes whenever you make changes to them. </p>
                    <p><span className='font-bold'>Automated:</span>This is the preferred unit testing method as it can be carried out by simply running a script. Automated tests also make it easier to run tests when your application scales. </p>
                    <p className='font-bold mt-5'>Why Do We Need Unit Testing?</p>
                    <p>To justify any effort in business, there must be a positive impact on the bottom line. Here are a few benefits to writing unit tests:</p>
                    <p>Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could've been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system.</p>
                    <p>Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the</p>
                    <p>It simplifies the debugging process.</p>
                    <p>Unit testing is an integral part of extreme programming. Extreme programming is basically a “test-everything-that-can-possibly-break” programming strategy.</p>
                    <p>Unit tests make code reuse easier. If you want to reuse existing code in a new project, you can simply migrate both the code and tests to your new project, then run your tests to make sure you have the desired results.</p>
                    <p>Unit testing improves code coverage. A debatable topic is to have 100% code coverage across your application.</p>
                    <p>In the testing pyramid, unit tests are faster than integration and end-to-end. They are more assertive and return quick feedback. </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;