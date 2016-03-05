![Angular2 logo](/src/Angular2/content/images/angular2_logo.png)

[Project setup documentation](https://github.com/gediadeepak/Angular2-Beta/blob/master/docs/Angular2_Project_Setup.docx)

[Angular2 - New featuer documentation](https://github.com/gediadeepak/Angular2-Beta/blob/master/docs/Angular2_Documentation.docx)

##Before to start Angular2
1. Developer should have basic hands on knowledge on Angular Js
2. Should know basic fundamentals of Type script
3. MVC pattern.

##Pre-requisites for Angular2 development
1. Visual Studio 2015 (Enterprise, pro or Community version)
2. .NET Framework 4.5.2
3. Angular2 - beta version
4. Pre installed Node.js and bower
5. IIS 7(optional)

##How to Setup - Angular 2 project
1. Download project from [Github](https://github.com/gediadeepak/Angular2-Beta)
2. Now need to install TSD(typescript compiler) and setup typings for the project
   * Npm install –g tsd - This command installs TSD  compiler globally
3. Open the solution >> right click >> properties >> Web – tab >> Servers >> select local IIS >> and click Create virtual directory(Make sure virtual directory name should be ‘Angular2-Beta’)
4. Rebuild your solution and type url in browser. http://localhost/angular2-beta


##What are the New changes in Angular2 ?

1. AtScript
AtScript is a superset of ES6 and its being used to develop Angular 2.0. It’s processed by the Traceur compiler (along with ES6) to produce ES5 code and uses TypeScript’s type syntax to generate runtime type assertions instead of compile time checks. However, AtScript isn’t compulsory—you will still be able to use plain JavaScript/ES5 code instead of AtScript to write Angular apps.

2. Improved Dependency Injection (DI)
Dependency injection (a software design pattern in which an object is passed its dependencies, rather than creating them itself) was one of the factors that initially differentiated Angular from its competitors. It is particularly beneficial in terms of modular development and component isolation, yet its implementation was plagued with problems in Angular 1.x. Angular 2.0 will will address these issues, as well as adding missing features such as child injectors and lifetime/scope control.

3. Annotations
AtScript provides tools for associating metadata with functions. This facilitates the construction of object instances by providing the required information to the DI library (which will check for associated metadata when calling a function or creating an instance of a class). It will be also easy to override parameter data by supplying an Inject annotation.

4. Child Injectors
A child injector inherits all the services of its parent with the capability of overriding them at the child level. According to requirement, different types of objects can be called out and automatically overridden in various scopes.

5. Instance Scope
The improved DI library will feature instance scope control, which will become even more powerful when used with child injectors and your own scope identifiers.

6. Templating and Data Binding
Let’s take a look at templating and data binding as they go hand in hand when developing apps.

7. Dynamic Loading
This is a feature which is missing from the current version of Angular. It will be addressed by Angular 2.0, which will let developers add new directives or controllers on the fly.

8. Directives
In Angular 2.0 there will be three kinds of directive:

* Component Directives - These will create reusable components by encapsulating logic in JavaScript, HTML or an optional CSS style sheet.

* Decorator Directive - These directives will be used to decorate elements (for example adding a tooltip, or showing/hiding elements using ng-show/ng-hide).

* Template Directive - These will turn HTML into a reusable template. The instantiating of the template and its insertion into the DOM can be fully controlled by the directive author. Examples include ng-if and ng-repeat.

9. Routing Solution
The initial Angular router was designed to handle just a few simple cases, yet as the framework grew, more and more features were bolted on. The router in Angular 2.0 has been reworked to be simple, yet extensible. It will include the following basic features:
  * Simple JSON-based Route Config
  *	Optional Convention over Configuration
  *	Static, Parameterized and Splat Route Patterns
  *	URL Resolver
  *	Query String Support
  *	Use Push State or Hashchange	
  *	Navigation Model (For Generating a Navigation UI)
  *	Document Title Updates
  *	404 Route Handling
  *	Location Service
  *	History Manipulation

10. Child Router
The child router will convert each component of the application into a smaller application by providing it with its own router. It will help encapsulate entire feature sets of an application.

11. Logging
Angular2.0 will contain a logging service called diary.js a super useful feature which measures where time is spent in your application (thus enabling you to identify bottlenecks in your own code).

12. Scope
$scope will be removed in Angular 2.0 in favour of ES6 classes.

for more code walk through follow the [documentation](https://github.com/gediadeepak/Angular2-Beta/tree/master/docs)

