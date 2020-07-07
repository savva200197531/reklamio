$(document).ready(function () {

  // маски на инпуты

  $("input[name=phone]").mask("+7(999)999-99-99");

  // форма на 1м слайде (быстрая отправка телефона)

  $('.modal__form').submit(() => {
    const $form = $(this);
    if ($form.find('[name=phone]').val().length < 16) {
      console.log($form.find('[name=phone]').val().length);
      alert('Укажите номер телефона полностью!');
      return false;
    }

    $('form button[type=submit]').prop('disabled', true);

    let data = {};

    data.phone = $form.find('[name=phone]').val();

    console.log(data);

    $.post(
      "/",
      $.param(data),
      function (resp) {}
    );

    return false;
  });
})
