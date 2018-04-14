import { Injectable } from '@angular/core';

export class CounterService {
  toInactive = 0;
  toActive = 0;

  incrementToInactive() {
    this.toInactive++;
    console.log('Counting Inactivation' + ' >' + ' ' + this.toInactive);
  }

  incrementToActive() {
    this.toActive++;
    console.log('Counting Activation' + ' >' + ' ' + this.toActive);
  }
}
