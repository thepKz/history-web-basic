(function () {
  'use strict';

  var rounds = [
    {
      answer: 'Khôi phục kinh tế',
      image: 'bat2.png',
      hint: 'Gợi ý: Nhiệm vụ cấp bách sau khi chiến tranh kết thúc.'
    },
    {
      answer: 'Xây dựng chủ nghĩa xã hội',
      image: 'bat3.png',
      hint: 'Gợi ý: Con đường phát triển mà Đảng xác định sau năm 1975.'
    },
    {
      answer: 'Xóa bỏ bao cấp',
      image: 'bat6.png',
      hint: 'Gợi ý: Là chủ trương được thúc đẩy mạnh vào năm 1985. Nhằm thay thế cơ chế quản lý tập trung, quan liêu bằng cơ chế hạch toán kinh doanh.'
    },
    {
      answer: 'Khoán sản phẩm',
      image: 'bat7.png',
      hint: 'Gợi ý: Là một bước đột phá trong nông nghiệp trước thời kỳ Đổi mới. Gắn với Chỉ thị 100 năm 1981.'
    },
    {
      answer: 'Mở cửa hội nhập',
      image: 'bat8.png',
      hint: 'Gợi ý: Chủ trương mở rộng quan hệ đối ngoại với các nước trên thế giới.'
    },
    {
      answer: 'Cơ chế thị trường',
      image: 'bat9.png',
      hint: 'Gợi ý: Thay thế dần cơ chế tập trung quan liêu, bao cấp trước đây. Cho phép sản xuất, kinh doanh vận hành theo quy luật thị trường.'
    }
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
    image.src = '../images/' + round.image;
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
