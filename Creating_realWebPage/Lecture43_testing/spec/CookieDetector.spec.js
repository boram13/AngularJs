describe("CookieDetector", function() {
  var itemsWithoutCookies;
  var itemsWithCookies;

  beforeEach(function() {
    itemsWithoutCookies = ['apples', 'pears', 'bananas'];
    itemsWithCookies = ['bread', 'milk', 'Cookies'];
  });

  it("should be able to detect no cookies", function() {
    var result = detectCookie(itemsWithoutCookies);
    //here we gonna use expect function from jasmnin, will pass the result to it 
    //and say not to be true
    expect(result).not.toBe(true);
  });

  it("should be able to detect cookies", function() {
    var result = detectCookie(itemsWithCookies);
    expect(result).toBe(true);
  });
});
