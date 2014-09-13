jest.dontMock('../client/stores/IroningJobStore');

describe('IroningJobStore', function() {

  var IroningJobStore = require('../client/stores/IroningJobStore');
  
  describe('get()', function(){
    it('should return the current job',function() {
      expect(IroningJobStore.get()).not.toBeUndefined();
    });
  });
});

