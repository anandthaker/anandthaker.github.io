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
              var card = '<div class="card"><a href="' + item.link + '" target="_blank">' +
                           '<h2>' + item.title + '</h2>';
              
              if (item.enclosure.link) {
                card += '<img style="width: 130px; border-radius: 0.25rem; display: block;" size src="' + item.enclosure.link + '" alt="Image">';
              }

              card += '<p>' + item.description + '</p>' +
                      '</a></div>';
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
