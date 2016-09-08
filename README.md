# Angular2 Typescript Course

Demo app built while taking: https://www.udemy.com/angular-2-tutorial-for-beginners

Note 1: angular2-cli was mentioned as way to bootstrap the app.

Elvis operator:

In code:
```thing = {title:'example', user:null }```

In template
```
<span class='user'>{{ thing.user?.name }}</span>
```

elvis operator stops the crash

ng-content:

in templates;

```
// outer template
<bs-panel><div class='title'>TITLE</div><div class='body'>BODY</div></bspanel>

// inner template
<div>
<stuff>
<ng-content select=".title"></ng-content>
</stuff>
</div>
<more-stuff>
<ng-content select=".body"></ng-content>
</more-stuff>
```
