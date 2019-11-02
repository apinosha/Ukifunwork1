SC.initialize({
 client_id: '340f063c670272fac27cfa67bffcafc4'
});
$(document).ready(function() {
 SC.stream('/tracks/338385046',function(sound){
      $("#start1").click(function(e) {
             e.preventDefault();
             sound.start();
            });
      $("#stop1").click(function(e) {
                e.preventDefault();
                sound.stop();
              });
});
});

$(document).ready(function() {
 SC.stream('/tracks/398600970',function(sound){
      $("#start2").click(function(e) {
             e.preventDefault();
             sound.start();
            });
      $("#stop2").click(function(e) {
                e.preventDefault();
                sound.stop();
              });
});
});

$(document).ready(function() {
 SC.stream('/tracks/265321642',function(sound){
      $("#start3").click(function(e) {
             e.preventDefault();
             sound.start();
            });
      $("#stop3").click(function(e) {
                e.preventDefault();
                sound.stop();
              });
});
});
$(document).ready(function() {
 SC.stream('/tracks/343963381',function(sound){
      $("#start4").click(function(e) {
             e.preventDefault();
             sound.start();
            });
      $("#stop4").click(function(e) {
                e.preventDefault();
                sound.stop();
              });
});
});
