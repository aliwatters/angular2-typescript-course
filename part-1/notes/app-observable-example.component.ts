import {Component} from 'angular2/core';
import {ControlGroup, FormBuilder} from 'angular2/common';
import {Observable} from 'rxjs/Observable';

// Note: working on date 9/10/2016

// observables - $ ls node_modules/rxjs/add/observable/*.ts
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/fromArray';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/throw';

// operators - $ ls node_modules/rxjs/add/operator/*.ts
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/timeout';

@Component({
  selector: 'my-app',
  template: `
    <form [ngFormModel]="form">
      <input tye="text" ngControl="search" class="form-control">
    </form>
    `
})

export class AppComponent {

  form: ControlGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      search: []
    })

    var search = this.form.find('search');
    search.valueChanges
      .debounceTime(400)
      .map(str => (<string>str).replace(/ /g, '-'))
      .subscribe(x => console.log(x));

    var startDates = [];
    var startDate = new Date();
    for (var day = -2; day <= 2; day++) {
      var date = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate() + day
      );
      startDates.push(date);
    }

    Observable
      .fromArray(startDates)
      .map(date => {
        console.log('Getting deals for date ' + date);
        return [1, 2, 3];
      })
      .subscribe(x => console.log('from', x));

    Observable
      .of([1, 2, 3])
      .subscribe(x => console.log('of', x));

    Observable
      .range(1, 5)
      .subscribe(x => console.log('range', x));


    // Polling - commenting as noisey
    // var observable = Observable.interval(1000);
    // observable
    //   .mergeMap(x => {
    //     console.log('call the server to get latest news');
    //     return Observable.of(['a','b','c']);
    //   })
    //   .subscribe(news => console.log('news', news));


    // combining observable streams

    var userStream = Observable.of({
      userId: 1, username: 'ali'
    }).delay(2000);
    var tweetStream = Observable.of([1, 2, 3]).delay(1500);

    Observable
      .forkJoin(userStream, tweetStream)
      .map(joined => new Object({ user: joined[0], tweets: joined[1] }))
      .subscribe(result => console.log('forkJoin', result));


    // errors
    var errObserv = Observable.throw(new Error('something failed'))
    errObserv.subscribe(x => console.log(x), err => console.error(err));


    // retrying errors

    var counter = 0;
    var ajaxCall = Observable.of('url')
      .mergeMap(() => {
        // change <2 to <5 to see error handled
        if (++counter < 2) return Observable.throw(new Error("Request Failed"));
        return Observable.of([1, 2, 3]);
      });
    ajaxCall
      .retry(3)
      .subscribe(
      x => console.log('ajaxCall', counter, x),
      err => console.error('ajaxCall', counter, err)
      );


    // remote fail - return local

    // toggle from error to value to see behavior
    var remoteDataStream = Observable.throw(new Error("Remote Failed"));
    // var remoteDataStream = Observable.of([4,5,6]);
    remoteDataStream
      .catch(err => {
        var localDataStream = Observable.of([1, 2, 3]);
        return localDataStream;
      })
      .subscribe(x => console.log('remote/local', x))


    // timeout slow responses
    var remoteSlowStream = Observable.of([1, 2, 3]).delay(5000);
    remoteSlowStream
      .timeout(2000)
      .subscribe(
      x => console.log('remoteSlowStream', x),
      err => console.error('remoteSlowStream', err)
      );

    // complete - third subscribe arg.
    var obs1 = Observable.throw(new Error('error'));
    // var obs1 = Observable.of([1,2,3]);

    obs1.subscribe(
      x => console.log('complete example', x),
      err => console.log('complete example', err),
      () => console.log('complete example', 'Completed')
    );
  }
}
