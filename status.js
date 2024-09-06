const statusList = [];

if (!localStorage.getItem('statusList')) {
    localStorage.setItem('statusList', JSON.stringify(statusList));
}