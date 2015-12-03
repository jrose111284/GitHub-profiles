describe('GitHub profile finder', function() {

  var searchBox = element(by.model('searchCtrl.searchTerm'))
  var searchButton = element(by.className('btn'))

  beforeEach(function(){
      browser.get('http://localhost:8080');
  })

  it('has a title', function(){
    expect(browser.getTitle()).toEqual('Github user search');
  });

  it('finds profile', function(){
    searchBox.sendKeys('spike01');
    searchButton.click();
    var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items')).last();
    expect(profiles.getText()).toEqual('spike01');
  });

  it('counts amount of spikes', function() {
    searchBox.sendKeys('spike');
    searchButton.click();
    var list = element.all(by.repeater('user in searchCtrl.searchResult.items'));
    expect(list.count()).toBe(30);
  });


});
