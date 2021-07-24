CKEDITOR.plugins.add('drupal_ajax_dialog', {
  icons: 'popup',
  init: function (editor) {
    editor.addCommand('insertDrupalAjaxDialog', {
      exec: function (editor) {
        editor.insertHtml('<a class="use-ajax" data-dialog-options="{&quot;width&quot;:400}" data-dialog-type="modal" href="">' + 'Link Text' + '</em>');
      }
    });
    editor.ui.addButton('Drupal Ajax Dialog', {
      label: 'Insert an Ajax Dialog',
      command: 'insertDrupalAjaxDialog',
      toolbar: 'insert'
    });
  }
});
