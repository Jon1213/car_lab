// this syntax (seperate variables with comma and remove the following var
//is common when you have more than one variable being declared at a time

var Car = require('../src/car.js'),
expect = require('chai').expect;

describe('Car', function(){
  var mobile;
  var date = new Date("October 8, 2014 21:21:00");

  beforeEach(function(){
    mobile = new Car("Ford", "Corolla", 2014, "red");
  });

  describe('#year', function(){
    //think about using the new Date() and getFullYear functions
    it('should be the current year', function(){
      expect(date.getFullYear()).to.eql(mobile.year);
    });
  });

  describe('#state', function(){
    it('should initially be off', function(){
      expect(mobile.state).to.eql(false);
    });
  });

  describe('#previous_owners', function(){
    it('should initially be empty', function(){
      expect(mobile.previous_owners.length).to.equal(0);
    });
  });

  describe('#current_owner', function(){
    it('should initially be manufacturer', function(){
      expect(mobile.current_owner).to.eql("manufacturer");
    });
  });

  describe('#passengers', function(){
    it('should initially be empty', function(){
      expect(mobile.passengers).to.eql([]);
    });
  });

  describe('#sale', function(){
    
    it('should move current_owner to previous_owners array', function(){
      mobile.sale("Howard");
      expect(mobile.previous_owners).to.eql(["manufacturer"]);
    });

    it('should update current_owner with the new owner', function(){
      mobile.sale("Howard");
      expect(mobile.current_owner).to.eql("Howard");
    });
  });

  describe('#paint', function(){
    it('should update the color of myCar', function(){
      mobile.paint("fuchsia");
      expect(mobile.color).to.eql("fuchsia");
    });
  });

  describe('#start', function(){
    it('should update the state to on', function(){
      mobile.start();
      expect(mobile.state).to.eql(true);
    });
  });

  describe('#off', function(){
    it('should update the state to off', function(){
      mobile.off();
      expect(mobile.state).to.eql(false);
    });
  });

  describe('#park', function(){
    it('should make sure to only work when the car is off', function(){
      mobile.off();
      expect(mobile.park()).to.eql(true);
    });

  });

  describe('#driveTo', function(){
    it('should log a destination and return true', function(){
      mobile.start();
      expect(mobile.driveTo()).to.eql(true);
    });

  });

  describe('#pickUp', function(){
    it('should add the passenger to the passengers array if car is on', function(){
      mobile.start();
      mobile.pickUp("Sandy");
      expect(mobile.passengers).to.eql(["Sandy"]);
    });
    
    it('should not modify the passengers array if car is off', function(){
      mobile.start();
      mobile.pickUp("Sandy");
      mobile.off();
      mobile.pickUp("Roger");
      expect(mobile.passengers).to.eql(["Sandy"]);
    });
  });

  describe('#dropOff', function(){
    
    it('should remove passenger from the passengers array if car is on', function(){
      mobile.start();
      mobile.pickUp("Sherman");
      mobile.dropOff("Sherman");
      expect(mobile.passengers).to.eql([]);
    });
    
    it('should leave passenger in the passengers array if car is off', function(){
      mobile.start();
      mobile.pickUp("Sherman");
      mobile.dropOff("Sherman");
      mobile.pickUp("Rick");
      mobile.off();
      mobile.dropOff("Rick");
      expect(mobile.passengers).to.eql(["Rick"]);
    });
  });

});


