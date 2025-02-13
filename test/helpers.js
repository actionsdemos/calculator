var supertest = require('supertest');
var chai = require('chai');
var app = require('../server');

global.app = app;
global.expect = chai.expect;
global.request = supertest(app);
#include <iostream>
using namespace std;

int main() {
    int a = 5, b = 3, sum;
    sum = a + b;
    cout << "Sum of " << a << " and " << b << " is: " << sum << endl;
    return 0;
}
