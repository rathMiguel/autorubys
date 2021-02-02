jQuery(function(){
  jQuery('#visibility').remove()

  jQuery('input[name="post_password"]').each(function(){
    jQuery(this).closest('.inline-edit-group').remove()
  })
})