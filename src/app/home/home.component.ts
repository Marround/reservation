import {Component, OnInit} from '@angular/core';
import {TransferHttpService} from '@shared/transfer-http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subscription} from 'rxjs/Subscription';
import {FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    value: FormControl = new FormControl('', [
        Validators.pattern(new RegExp(/^([\d]+)$/, 'i'))
    ]);
    inputValue: BehaviorSubject<string> = new BehaviorSubject<string>(null);
    inputValueSub: Subscription;
    constructor(private http: TransferHttpService) {
    }

    ngOnInit(): void {
        this.inputValueSub = this.inputValue.subscribe(value => {
            if (value && value.length > 2 && this.value.valid) {
                this.http.get('http://dph1.terminal.fastrack.bookinganalytics.com/api/reservation/provider/' + value).subscribe(
                    data => {
                        console.log(data);
                        this.goTo();
                        this.inputValueSub.unsubscribe();
                    },
                    error => {
                        console.log(error);
                    });
            }
        });
    }

    onEnter(event) {
        this.inputValue.next(event.target.value);
        console.log(event.target.value);
        // this.value.valid;
        this.validatorItem(this.value);
    }

    goTo() {
        console.log('OK');
    }

    validatorItem(item: FormControl): string {
        return item.hasError('pattern') ? 'Недопустимое значение' : '';
    }
}
