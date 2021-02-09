$(function () {
  const edit = $('.edit');
  console.log(edit);
  edit.on('click', function () {
    const id = this.id;
    console.log(id);
    const currentRow = $(this).parents('tr');
    const inputs = currentRow.find('input');
    const actionBtn = currentRow.find('.actionBtn');
    console.log(actionBtn);

    inputs.removeAttr('disabled').addClass('change-cursor');
    inputs[0].focus();
    let data = {};
    let change = false;
    inputs.on('change', function (e) {
      change = true;
      dataAttr = e.target.getAttribute('name');
      dataValue = e.target.value;

      // storing value and name dynaically
      data[dataAttr] =
        typeof dataValue === 'string' ? dataValue.toUpperCase() : dataValue;
      // console.log(data);
      actionBtn.html(
        $(
          `<i class="btn btn-success w-75 fa fa-check-circle-o comfirmEdit"></i>`
        )
      );

      console.log($('.comfirmEdit'));
      // comfirm Key press
      $('.comfirmEdit').click(function () {
        $.ajax({
          type: 'Put',
          url: url + '/' + id,
          data: data,
          dataType: 'json',
          success: data => {
            console.log(data);
            location.reload();
          },
        });
        console.log('data received', data);
        //   location.reload();
      });
    });
  });
});
