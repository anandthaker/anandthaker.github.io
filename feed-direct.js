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

            var date = new Date(item.pubDate);
            var months = Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
            var strDate = months[date.getMonth()] + ", "+ date.getDate() + " " + date.getFullYear()
            
              var card = '<div style="font-family: font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji; margin-bottom:15px; margin-bottom: 15px;">' +
                              '<a style="text-decoration: none; color: black;" href="' + item.link + '" target="_blank">' +
                                  '<div style="font-weight: 700; font-size: 1.125rem; line-height: 1.75rem;">' + item.title + '</div>' + 
                                  '<img style="float: left; margin: 0 15px 0 0; width: 200px; border-radius: 0.5rem; display: block; " src="' + item.enclosure.link + '" alt="Image">' + 
                                  '<p style="font-weight: 100;color: #707070;line-height: 1.5rem;">' + item.description + '</p>' +
                                  '<p style="font-weight: 100;color: #707070;line-height: 1.5rem;">' + strDate + '</p>' +
                              '</a>' + 
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
