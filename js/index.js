$(document).ready(function(){
    $(".design").click(function() {
      $("#design").toggle("slow");
    });
    $("#design").click(function() {
      $(".design").toggle("slow");
    });
    $(".development").click(function() {
      $("#development").toggle("slow");
    });
    $("#development").click(function() {
      $(".development").toggle("slow");
    });
    $(".product").click(function() {
      $("#product").toggle("slow");
    });
    $("#product").click(function() {
      $(".product").toggle("slow");
    });
    $('#work1').mouseover(function() {
      $('.write1').show();
    }).mouseout(function() {
      $('.write1').hide();
    });
    $("#work2").mouseenter(function() {
      $(".write2").show();
    }).mouseleave(function() {
      $(".write2").hide();
    });
    $("#work3").mouseenter(function() {
      $(".write3").show();
    }).mouseleave(function() {
      $(".write3").hide();
    });
    $("#work4").mouseenter(function() {
      $(".write4").show();
    }).mouseleave(function() {
      $(".write4").hide();
    });
    $("#work5").mouseenter(function() {
      $(".write5").show();
    }).mouseleave(function() {
      $(".write5").hide();
    });
    $(".#work6").mouseenter(function() {
      $(".write6").show();
    }).mouseleave(function() {
      $(".write6").hide();
    });
    $("#work7").mouseenter(function() {
      $(".write7").show();
    }).mouseleave(function() {
      $(".write7").hide();
    });
    $("#work8").mouseenter(function() {
      $(".write8").show();
    }).mouseleave(function() {
      $(".write8").hide();
    });
  
})
$(`#work1`).hover(function() {
  $(`.write1`).show(400);
},
() => {
  $(`#write1`).hide(400);
}
)

$(`#work2`).hover(function() {
  $(`.write2`).show(400);
},
() => {
  $(`.write2`).hide(400);
}
)

$(`#work3`).hover(function() {
  $(`.write3`).show(400);
},
() => {
  $(`.write3`).hide(400);
}
)

$(`#work4`).hover(function() {
  $(`.write4`).show(400);
},
() => {
  $(`.write4`).hide(400);
}
)

$(`#work5`).hover(function() {
  $(`.write5`).show(400);
},
() => {
  $(`.write5`).hide(400);
}
)

$(`#work6`).hover(function() {
  $(`.write6`).show(400);
},
() => {
  $(`.write6`).hide(400);
}
)

$(`#work7`).hover(function() {
  $(`.write7`).show(400);
},
() => {
  $(`.write7`).hide(400);
}
)

$(`#work8`).hover(function() {
  $(`.write8`).show(400);
},
() => {
  $(`.write8`).hide(400);
}
)
let formValidation = () => {
  if ($(`#name`).val() == ``) {
      alert(`Fill in your Name`);
  } else if ($(`#email`).val() == ``) {
      alert(`Provide your E-mail address`)
  } else if ($(`#message`).val() == ``) {
      alert(`Please provide your feedback so that we can serve you better.`)
  } else {
      userName = $(`#name`).val();
      alert(userName + ` we have received your feedback. This will help us serve you better`)
  }
}