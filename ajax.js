$(document).ready(function () {

  $('#run-to-root').on('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      // data: 'html',
      dataType: 'html'
    }).done(function() {
      console.log("done");
    }).fail(function() {
      console.log("error");
    }).always(function() {
      console.log("always");
    });
  });

  $('#run-to-pingPong').on('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      dataType: 'html',
    }).done(function(data) {
      console.log("done: " + data);
      $('section#step3456').append(data)
    }).fail(function() {
      console.log("error");
      $('section#step3456').append("ERROR! try harder next time ")
    }).always(function() {
      console.log("Request finished!");
    });
  });

  $('#run-to-count').on('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'GET',
      dataType: 'html',
    }).done(function(data) {
      console.log("done: " + data);
      $('section#step7').append(data)
    }).fail(function() {
      console.log("error");
      $('section#step7').append("ERROR! try harder next time ")
    }).always(function() {
      console.log("Request finished!");
    });
  });

  $('#run-to-time').on('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time',
      method: 'GET',
      dataType: 'html',
      data: {food: 'pancakes', quantity: 6, type: 'blueberry', timezone: 'America/Mexico_City'}
    }).done(function(data) {
      console.log("done: " + data);
      $('section#step8').append(data)
    }).fail(function() {
      console.log("error");
      $('section#step8').append("ERROR! try harder next time ")
    }).always(function() {
      console.log("Request finished!");
    });
  });

  $('#run-to-car').on('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/a_car',
      method: 'GET',
      dataType: 'html',
    }).done(function(data) {
      console.log("done: " + data);
      $('#car-list').append(data)
    }).fail(function() {
      console.log("error");
      $('section#step9').append("ERROR! try harder next time ")
    }).always(function() {
      console.log("Request finished!");
    });
  });

});
