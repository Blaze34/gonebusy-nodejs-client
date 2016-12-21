describe('Controller Bookings', function() {
    var specs = require(testPath + '/support/controllers/bookings');
    var names = ['getBookings', 'createBooking', 'cancelBookingById', 'updateBookingById', 'getBookingById'];

    _.each(names, function(name) {
        describe('#' + name, function() {
            var spec = specs[name];

            beforeEach('nock requests', spec.nockRequest);

            it('resolve promise', spec.promiseResolved);
            it('resolve correct response', spec.correctInstance);
            it('resolve correct content', spec.correctContent);
        });
    });
});