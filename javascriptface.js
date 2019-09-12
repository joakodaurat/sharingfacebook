function submitAndShare()
{
  // get the selected answer
  var playerName = 'George L.';
  var val = '';
  var form = document.getElementById('star_trek_quiz');
  var answers = form.elements['answer'];
  
  for(var i=0; i<answers.length; i++)
  {
    if(answers[i].checked)
    {
      val = answers[i].value;
      break;
    }
  }
  
  var title = '';
  var description = '';
  var image = '';
  switch(val)
  {
    case 'Tiberius':
        title = playerName + ' is wise like Yoda!';
        description = 'Congratulations! ' + playerName + ' is the champion of the StarTrek geekhood - and nobody can beat him. Or ... ? Click to play and prove to the ' + playerName + ' that you are as good as  him!';
        image = 'http://drib.tech/fbsharetest/quiz_yoda.jpg';
      break;
    default:
        title = playerName + ' is wise like Jar Jar Binks!';
        description = playerName + 'is the champion of the StarTrek geekhood - NOT! Click to play and prove to the ' + playerName + ' that anybody is better then him!';
        image = 'http://drib.tech/fbsharetest/quiz_jar_jar_binks.jpg';
      break;
  }
  
  
  // and finally share it
  
  shareOverrideOGMeta(window.location.href,
            title,
            description,
            image);
  
  return false;
}
 
function shareOverrideOGMeta(overrideLink, overrideTitle, overrideDescription, overrideImage)
{
  FB.ui({
    method: 'share_open_graph',
    action_type: 'og.likes',
    action_properties: JSON.stringify({
      object: {
        'og:url': overrideLink,
        'og:title': overrideTitle,
        'og:description': overrideDescription,
        'og:image': overrideImage
      }
    })
  },
  function (response) {
  // Action after response
  });
}
 
function shareOriginal()
{
  $('meta[property="og:title"]').replaceWith('<meta property="og:title" content="New Title">');

FB.api('post', { id: 'https://joakodaurat.github.io/sharingfacebook/',scrape:true }, function(response) {
  if (!response || response.error) {
    alert('Error occured');
  } else {
    alert('Post ID: ' + response.id);
  }
});

  FB.ui({
    method: 'share',
    href: window.location.href
  },
  function (response) {
  // Action after response
  });
  
  return false;
}
