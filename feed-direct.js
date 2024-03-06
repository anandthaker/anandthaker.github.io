    $(document).ready(function() {
      var feedUrl = 'https://anandthakergtm.substack.com/feed';

      $.ajax({
        url: 'https://api.rss2json.com/v1/api.json',
        method: 'GET',
        dataType: 'json',
        data: {
          rss_url: feedUrl
        },
        success: function(data) {
          if (data.status === 'ok') {
            // Parse and display feed content
            var feedContainer = $('#feed-container');
            data.items.forEach(function(item) {
              var card = '<div class="card">' +
                           '<h2>' + item.title + 'asdfasfa' + item.enclosure.link + 'asfasdf</h2>';
              
              if (item.enclosure.link) {
                card += '<img src="' + item.enclosure.link + '" alt="Image">';
              }

              card += '<p>' + item.description + '</p>' +
                      '<a href="' + item.link + '" target="_blank">Read more</a>' +
                      '</div>';
              feedContainer.append(card);
            });
          } else {
            console.error('Error fetching feed:', data.message);
          }
        },
        error: function(xhr, status, error) {
          console.error('Error fetching feed:', error);
        }
      });
    });
