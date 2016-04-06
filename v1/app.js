function scrollNav() {
   $('.nav a').click(function() {
      //Toggle Class
      $(".active").removeClass("active");
      $(this).closest('li').addClass("active");
      var theClass = $(this).attr("class");
      $('.' + theClass).parent('li').addClass('active');
      //Animate
      $('html, body').stop().animate({
         scrollTop: $($(this).attr('href')).offset().top - 50
      }, 900);
      return false;
   });
   $('.scrollTop a').scrollTop();
}
scrollNav();

var portfolio = [];
var PortfolioItem = function(short_title, full_title, contributions, skills, refUrl, imgPrevUrl) {
   this.short_title = short_title;
   this.full_title = full_title;
   this.contributions = contributions;
   this.skills = skills;
   this.refUrl = refUrl;
   this.imgPrevUrl = imgPrevUrl;
   portfolio.push(this);
};
// short_title {String} used to generate element id
// full_title {String} used in #previewDesc .clients-info h3
// contributions {Array} of actions taken and goals accomplished
// skills {Array} of Skills Demonstrated in this project
// refUrl {String} url to generate <a href=" " > tag for full-view destination
// imgPrevUrl {String} url to generate previewItem <img> tag;

/* 'http://www.freecodecamp.com/modulei','http://huney.co/wp-content/uploads/Lavender-Wreaths-1600x.jpg'*/

var algorithms = new PortfolioItem(
   'algorithms',
   'Algorithms',
   [ // contributions {Array} of actions taken and goals accomplished
      'Self-instructed',
      'Utilized Read-Search-Ask methods'
   ], [ // skills {Array} of Skills Demonstrated in this project
      'JavaScript',
      'Logical Thinking',
      'Debugging',
      'Unit Tests'
   ], 'http://www.freecodecamp.com/modulei','http://modulei.systems/img/algorithms.png');

var pomodoro = new PortfolioItem(
   'pomodoro', // short_title {String} used to generate element id
   'Pomodoro Timer', // full_title {String} used in #previewDesc .clients-info h3
   [ // contributions {Array} of actions taken and goals accomplished
      'Self-instructed',
      'Utilized Read-Search-Ask methods'
   ], [ // skills {Array} of Skills Demonstrated in this project
      'JavaScript',
      'JQuery',
      'JSON API',
      'Direct DOM manipulation',
      'Timers',
      'Animation',
   ], 'http://codepen.io/modulei/full/PZzVVg/','http://modulei.systems/img/pomodoro.png');

var quotes = new PortfolioItem(
   'quotes', // short_title {String} used to generate element id
   'Random Quote Generator', // full_title {String} used in #previewDesc .clients-info h3
   [ // contributions {Array} of actions taken and goals accomplished
      'Self-instructed',
      'Utilized Read-Search-Ask methods'
   ], [ // skills {Array} of Skills Demonstrated in this project
      'JavaScript',
      'Logical Thinking',
      'Debugging',
      'Unit Tests'
   ], 'http://codepen.io/modulei/full/MKyqdY','http://modulei.systems/img/quotes.png');

var weather = new PortfolioItem(
   'weather', // short_title {String} used to generate element id
   'Display Local Weather', // full_title {String} used in #previewDesc .clients-info h3
   [ // contributions {Array} of actions taken and goals accomplished
      'Self-instructed',
      'Utilized Read-Search-Ask methods'
   ], [ // skills {Array} of Skills Demonstrated in this project
      'JavaScript',
      'Localization',
      'JSON API',
      'Object Manipulation',
      'Artistic CSS layout'
   ], 'http://codepen.io/modulei/full/QygOzz','http://modulei.systems/img/weather.png')

var jsonapi = new PortfolioItem(
   'jsonapi', // short_title {String} used to generate element id
   'Twitch.TV Current Streams', // full_title {String} used in #previewDesc .clients-info h3
   [ // contributions {Array} of actions taken and goals accomplished
      'Self-instructed',
      'Utilized Read-Search-Ask methods'
   ], [ // skills {Array} of Skills Demonstrated in this project
      'JavaScript',
      'Localization',
      'JSON API',
      'Object Manipulation',
      'Artistic CSS layout'
   ], 'http://codepen.io/modulei/full/wMRgXW','http://modulei.systems/img/twitchtv.png')

var calculator = new PortfolioItem(
   'calculator', // short_title {String} used to generate element id
   'Calculator', // full_title {String} used in #previewDesc .clients-info h3
   [ // contributions {Array} of actions taken and goals accomplished
      'Self-instructed',
      'Utilized Read-Search-Ask methods'
   ], [ // skills {Array} of Skills Demonstrated in this project
      'JavaScript',
      'Localization',
      'JSON API',
      'Object Manipulation',
      'Artistic CSS layout'
   ], 'http://codepen.io/modulei/full/NxbENZ','')

var wikiSearch = new PortfolioItem(
   'wikiSearch', // short_title {String} used to generate element id
   'Wikipedia Search Portal', // full_title {String} used in #previewDesc .clients-info h3
   [ // contributions {Array} of actions taken and goals accomplished
      'Self-instructed',
      'App Design & Development',
      'Completion of required User Stories and specifications',
   ], [ // skills {Array} of Skills Demonstrated in this project
      'JavaScript',
      'Auto-complete search preview',
      'JSON API and WikiMedia API',
      'Object Manipulation',
   ], 'http://codepen.io/modulei/full/obPWxP','')

var stylizerss = new PortfolioItem(
   'stylizerss', // short_title {String} used to generate element id
   'A Stylized RSS Feed', // full_title {String} used in #previewDesc .clients-info h3
   [ // contributions {Array} of actions taken and goals accomplished
      'Self-instructed',
      'App Design & Development',
      'Completion of required User Stories and specifications',
   ], [ // skills {Array} of Skills Demonstrated in this project
      'JavaScript',
      'JQuery',
      'JSON API',
      'Object Manipulation',
   ], 'http://codepen.io/modulei/full/VezLRZ','')

var tictactoe = new PortfolioItem(
   'tictactoe', // short_title {String} used to generate element id
   'Tic Tac Toe', // full_title {String} used in #previewDesc .clients-info h3
   [ // contributions {Array} of actions taken and goals accomplished
      'Self-instructed',
      'App Design & Development',
      'Completion of required User Stories and specifications',
   ], [ // skills {Array} of Skills Demonstrated in this project
      'JavaScript',
      'JQuery',
      'callbacks',
      'closures',
      'state management',
   ], 'http://codepen.io/modulei/full/eJbEKo','')

var dogdaddy = new PortfolioItem(
   'dogdaddy', // short_title {String} used to generate element id
   'DogDaddy, Inc.', // full_title {String} used in #previewDesc .clients-info h3
   [ // contributions {Array} of actions taken and goals accomplished
      'Multi-site (Network) WordPress Implementation',
      'Server, Host, Domain, Database Migration and Administration',
      'BugFixes in Plugins',
      'Custom Plugins',
   ], [ // skills {Array} of Skills Demonstrated in this project
      'JavaScript',
      'PHP',
      'SQL',
      'Server Security',
   ], 'http://www.dogdaddy.org','')

var mechanart = new PortfolioItem(
   'mechanart', // short_title {String} used to generate element id
   'MechanArt, Inc.', // full_title {String} used in #previewDesc .clients-info h3
   [ // contributions {Array} of actions taken and goals accomplished
      'Designed layout and developed site',
      'Server, Host, Domain, Database Migration and Administration',
   ], [ // skills {Array} of Skills Demonstrated in this project
      'JavaScript',
      'Bootstrap 3.5',
      'Photography',
      'Adobe Photoshop',
      'CSS',
      'HTML5',
      'Web Design'
   ], 'http://mechanart.modulei.systems','')

var healthcare = new PortfolioItem(
   'healthcare', // short_title {String} used to generate element id
   'TBA', // full_title {String} used in #previewDesc .clients-info h3
   [ // contributions {Array} of actions taken and goals accomplished
      'Site Development',
      'Server, Host, Domain, Database Migration and Administration',
      'Continued UX/UI Testing',
   ], [ // skills {Array} of Skills Demonstrated in this project
      'JavaScript',
      'Bootstrap 3.5',
      'Photography',
      'Adobe Photoshop',
      'Adobe Illustrator',
      'CSS3',
      'HTML5',
      'Web Design'
   ], '#','')

var illustrations = new PortfolioItem(
   'illustrations', // short_title {String} used to generate element id
   'Illustration Gallery', // full_title {String} used in #previewDesc .clients-info h3
   [ // contributions {Array} of actions taken and goals accomplished
      'Created by me',
   ], [ // skills {Array} of Skills Demonstrated in this project
      'Photography',
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Ink',
      'Watercolor',
      'Sewing'
   ], '#','');




function fillPortfolio(portfolio) {
   for (var item in portfolio) {
      var el =
         ' <div class="col-md-4 portfolio-item" id="' + portfolio[item].short_title + '"> ' +
         ' <div class="previewItem"> ' +
         ' <a href="' + portfolio[item].refUrl + '" target="_blank"> ' +
         ' <img class="img-responsive img-rounded img-thumbnail" src="' + portfolio[item].imgPrevUrl + '" alt="' + portfolio[item].short_title + ' project screenshot"> </a> ' +
         ' </div> <div class="previewDescription"> ' +
         ' <h4>' + portfolio[item].full_title + '</h4>' +
         '  <h5> Contributions </h5> ' +
         '  <ul> ';
      for (var contrib in portfolio[item].contributions) {
         el += ' <li> ' + portfolio[item].contributions[contrib] + '</li>'
      };
      el += '</ul><h5> Skills Demonstrated </h5> ';
      el += ' <ul> ';
      for (var skill in portfolio[item].skills) {
         el += '<li>' + portfolio[item].skills[skill] + '</li>';
      };
      el += ' </ul> </div></div> ';

      $('#portfolioItemsSection').append(el);
   };
}
function fillCards(portfolio){
   for (var item in portfolio) {
      var el = '<div class="col-md-4 card" id="' + portfolio[item].short_title + '" >'
              + ' <a href="' + portfolio[item].refUrl + '" target="_blank"> '
              +         '<div class="card-image" style="background-image: url(' + portfolio[item].imgPrevUrl + ');"  alt="' + portfolio[item].short_title + ' project screenshot">'
              +         '</div>'
              +     '<h3>' + portfolio[item].full_title + '</h3>'
              +   '</a>'
              +     '<h4> Contributions </h4>'
              +          '<ul> ';

      for (var contrib in portfolio[item].contributions) {
          el +=           '<li> ' + portfolio[item].contributions[contrib] + '</li>' };
          el +=          '</ul><h4> Skills Demonstrated </h4> ';
          el +=           '<ul>';
      for (var skill in portfolio[item].skills) {
         el +=             '<li>' + portfolio[item].skills[skill] + '</li>';
      };
      el +=              ' </ul></div></div></div> ';
      elem = '#'+portfolio[item].short_title;
      $(elem).css('background-image', 'url(' +  portfolio[item].imgPrevUrl + ')');
      $('#portfolioItemsSection').append(el);
   };
}
$(document).ready(function() {
   $("h1").addClass("animated bounce");
   fillCards(portfolio);
});
