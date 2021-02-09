$(document).ready(() => {
  //Delete COmfirmation
  btnDelete = $('.btn-delete');
  isSetDelete = $('#comfirmDelete');

  btnDelete.click(function () {
    console.log(url);
    if (url != '/admin/manage-result') {
      currentRow = $(this).parents('tr');
      isSetDelete.click(() => {
        $.ajax({
          type: 'Delete',
          url: url + '/' + this.id,
          data: null,
          dataType: 'json',
          success: resp => {
            currentRow.fadeOut(1000);
            location.reload();
          },
          error: function (err) {
            console.log(err);
          },
        });
      });
    } else {
      console.log('wrong url');
      fetch('/students')
        .then(data => data.json())
        .then(resp => {
          const selectStudent = resp.find(student => student._id == this.id);
          console.log(selectStudent);
          table = $('#prompt tbody');
          template = selectStudent.result.map((result, i) => {
            return $(` 
                  <tr>
                        <td>
                          ${i + 1}
                        </td>
                        <td>
                          ${result.subject}
                        </td>
                        <td>
                            <input
                            type="number"
                            name="score"
                            value=${result.score}
                            class="form-control bg-transparent border-0 unclick"
                            disabled
                            />
                        </td>
                        <td>
                            <input
                            type="text"
                            name="grade"
                            value=${result.grade}
                            class="form-control bg-transparent border-0 unclick"
                            disabled
                            />
                        </td>
                        <td class="text-center actionBtn">
                        <i class="btn btn-info fa fa-edit edit" id="${
                          result._id
                        }"></i>
                            <i class="btn btn-danger fa fa-trash-o comfirmDelete" id="${
                              result._id
                            }"></i>
                        </td>
                </tr>
              `);
          });
          table.html(template);

          //===========================hiding preloader ========================
          if ($('#preloader').length) {
            $('#preloader')
              .delay(100)
              .fadeOut('slow', function () {
                $(this).remove();
              });
          }
          //================== end of hiding pre load ===========================

          studentId = this.id;
          $('.comfirmDelete').click(function () {
            subjectId = this.id;
            currentRow = $(this).parents('tr');
            console.log(studentId, subjectId);
            $.ajax({
              type: 'Delete',
              url: url,
              data: { studentId, subjectId },
              dataType: 'json',
              success: resp => {
                currentRow.fadeOut(1000);
                location.reload();
              },
              error: function (err) {
                console.log(err);
              },
            });
          });

          $('.edit').on('click', function () {
            const id = this.id;
            console.log(id);
            const currentRow = $(this).parents('tr');
            const inputs = currentRow.find('input');
            const actionBtn = currentRow.find('.actionBtn');
            console.log(actionBtn);

            inputs.removeAttr('disabled').addClass('change-cursor');
            inputs[0].focus();
            console.log(studentId);
            let data = { studentId };
            let change = false;
            inputs.on('change', function (e) {
              change = true;
              dataAttr = e.target.getAttribute('name');
              dataValue = e.target.value;

              // storing value and name dynaically
              data[dataAttr] =
                typeof dataValue === 'string'
                  ? dataValue.toUpperCase()
                  : dataValue;
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
    }
  });
});
