$(document).ready(function() {

  $.ajax({
    type: "GET",
    url: "https://myapi.profstream.com/api/2ec930/wines",
    success: function(wine) {
      console.log(wine);

      //"[name] ([year]) is a [grapes] from the [region] region of [country] priced at [price]. [description].
      console.log(wine[0].name + ", " + wine[0].year + "," + " is a " + wine[0].grapes + " from the " + wine[0].region + " region of " + wine[0].country + " priced at $" + wine[0].price + "." + " " + wine[0].description);

      console.log(wine[1].name + ", " + wine[1].year + "," + " is a " + wine[1].grapes + " from the " + wine[1].region + " region of " + wine[1].country + " priced at $" + wine[1].price + "." + " " + wine[1].description);

      console.log(wine[2].name + ", " + wine[2].year + "," + " is a $" + wine[2].grapes + " from the " + wine[2].region + " region of " + wine[2].country + " priced at $" + wine[2].price + "." + " " + wine[2].description);

      console.log(wine[3].name + ", " + wine[3].year + "," + " is a $" + wine[3].grapes + " from the " + wine[3].region + " region of " + wine[3].country + " priced at $" + wine[3].price + "." + " " + wine[3].description);

      console.log(wine[4].name + ", " + wine[4].year + "," + " is a " + wine[4].grapes + " from the " + wine[4].region + " region of " + wine[4].country + " priced at $" + wine[4].price + "." + " " + wine[4].description);

      console.log(wine[5].name + ", " + wine[5].year + "," + " is a " + wine[5].grapes + " from the " + wine[5].region + " region of " + wine[5].country + " priced at $" + wine[5].price + "." + " " + wine[5].description);

      console.log(wine[6].name + ", " + wine[6].year + "," + " is a " + wine[6].grapes + " from the " + wine[6].region + " region of " + wine[6].country + " priced at $" + wine[6].price + "." + " " + wine[6].description);

      console.log(wine[7].name + ", " + wine[7].year + "," + " is a " + wine[7].grapes + " from the " + wine[7].region + " region of " + wine[7].country + " priced at $" + wine[7].price + "." + " " + wine[7].description);

    },
    error: function() {
      alert("Error getting data");
    }
  });

});
