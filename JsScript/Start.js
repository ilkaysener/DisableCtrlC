parent.document.body.oncopy = function(e) {   
    const pageIds = ['22', '5052'];
    let searchParams = new URLSearchParams(parent.parent.document.location.search);
    if (pageIds.includes(searchParams.get('page')))
    {
        console.log('Ctrl+C is blocked.');
        e.preventDefault();
    }
}
