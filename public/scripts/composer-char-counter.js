$(function() {
  //Check the length of text and add class "red" if more than 140
  $("#tweet-text").on("keyup", function() {
    let charLen = this.value.length;
    let remain = 140 - charLen;
    const counter = $(this).parent().find(".counter");
    if (remain < 0) {
      counter.addClass("red");
    }
    if (remain >= 0) {
      counter.removeClass("red");
    }
    counter.val(remain);
  });
});
