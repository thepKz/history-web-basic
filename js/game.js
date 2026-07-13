(function () {
  'use strict';

  var rounds = [
    { hint: 'Gợi ý: Sự kiện diễn ra sau ngày 30/4/1975.' },
    { hint: 'Gợi ý: Nhiệm vụ cấp bách sau khi chiến tranh kết thúc.' },
    { hint: 'Gợi ý: Con đường phát triển mà Đảng xác định sau năm 1975.' },
    { hint: 'Gợi ý: Xuất hiện vào đầu những năm 1980. Biểu hiện qua lạm phát cao, thiếu lương thực, hàng hóa và đời sống khó khăn.' },
    { hint: 'Gợi ý: Diễn ra trong bối cảnh Việt Nam vừa thống nhất vừa phải bảo vệ lãnh thổ.' },
    { hint: 'Gợi ý: Là chủ trương được thúc đẩy mạnh vào năm 1985. Nhằm thay thế cơ chế quản lý tập trung, quan liêu bằng cơ chế hạch toán kinh doanh.' },
    { hint: 'Gợi ý: Là một bước đột phá trong nông nghiệp trước thời kỳ Đổi mới. Gắn với Chỉ thị 100 năm 1981.' },
    { hint: 'Gợi ý: Chủ trương mở rộng quan hệ đối ngoại với các nước trên thế giới.' },
    { hint: 'Gợi ý: Thay thế dần cơ chế tập trung quan liêu, bao cấp trước đây. Cho phép sản xuất, kinh doanh vận hành theo quy luật thị trường.' },
    { hint: 'Gợi ý: Diễn ra từ ngày 15-18/12/1986 tại Hà Nội.' },
    { hint: 'Gợi ý: Không chỉ thay đổi về kinh tế mà còn về chính trị, xã hội và đối ngoại.' }
  ];

  var game = document.querySelector('[data-guess-game]');
  if (!game) return;

  var image = game.querySelector('[data-guess-image]');
  var count = game.querySelector('.guess-game__count');
  var hint = game.querySelector('[data-guess-hint]');
  var hintCopy = game.querySelector('[data-guess-hint-copy]');
  var previous = game.querySelector('[data-guess-previous]');
  var next = game.querySelector('[data-guess-next]');
  var current = 0;

  function renderRound() {
    var round = rounds[current];
    image.src = '../images/bat' + (current + 1) + '.png';
    image.alt = 'Hình minh họa cho câu đố ' + (current + 1);
    count.textContent = 'Hình ' + (current + 1) + ' / ' + rounds.length;
    hintCopy.textContent = round.hint;
    hint.open = false;
    previous.disabled = current === 0;
    next.disabled = current === rounds.length - 1;
  }

  previous.addEventListener('click', function () {
    if (current === 0) return;
    current -= 1;
    renderRound();
  });

  next.addEventListener('click', function () {
    if (current === rounds.length - 1) return;
    current += 1;
    renderRound();
  });
}());
