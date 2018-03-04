var categoryContent = [
    { category: 'Applications', title: 'Graylog' },
    { category: 'Applications', title: 'Foreman' },
    { category: 'Applications', title: 'Active Directory' },
    { category: 'Servers', title: 'NYC-GRAY01' },
    { category: 'Servers', title: 'NYC-FM01' },
    { category: 'Servers', title: 'NYC-DC01' },
  ];

$('.ui.search')
.search({
  type: 'category',
  source: categoryContent
})
;

$('.ui.dropdown')
.dropdown({
    fields: categoryContent,
});

$('.button.delete').click(function() {
  $('.ui.modal')
  .modal('show');
});
